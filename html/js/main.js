/* XeraShop — data layer + page behaviour (XDM Accelerator retail pilot).
   Mirrors the xerabank pilot architecture: the SITE is the canonical event
   producer. Events are pushed with pushEvent(event, data) into BOTH
   window.dataLayer and window.adobeDataLayer; the XDM runtime (js/xdm/*,
   deployed by the pilot build) consumes them headlessly. No walkerOS
   attributes appear in the HTML. Payload shapes are documented in
   SITE-CONTRACT.md at the repo root — keep both in sync. */
(function () {
  'use strict';

  // ---------- analytics helpers ----------
  window.adobeDataLayer = window.adobeDataLayer || [];
  window.dataLayer = window.dataLayer || [];

  function pushEvent(event, data) {
    var payload = Object.assign({ event: event }, data || {});
    window.adobeDataLayer.push(payload);
    window.dataLayer.push(payload);
  }

  // ---------- product catalog ----------
  var PRODUCTS = window.XERASHOP_PRODUCTS || [];

  function findProduct(sku) {
    for (var i = 0; i < PRODUCTS.length; i++) {
      if (PRODUCTS[i].sku === sku) return PRODUCTS[i];
    }
    return null;
  }

  // All numeric values stay JSON numbers end-to-end — never strings.
  function productPayload(p) {
    return {
      product: {
        sku: p.sku,
        name: p.name,
        price: p.price,
        category: p.category,
        widthCm: p.width_cm,
        heightCm: p.height_cm,
        depthCm: p.depth_cm,
        internalScore: p.internal_score
      }
    };
  }

  function round2(n) { return Math.round(n * 100) / 100; }
  function formatPrice(n) { return '$' + n.toFixed(2); }

  // ---------- cart state (localStorage) ----------
  var CART_KEY = 'xerashop_cart';

  function readCart() {
    try {
      var cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
      if (!Array.isArray(cart)) return [];
      return cart.filter(function (line) {
        return line && typeof line.sku === 'string' && findProduct(line.sku) && line.qty > 0;
      });
    } catch (e) {
      return [];
    }
  }

  function writeCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
  }

  function cartSubtotal(cart) {
    return round2(cart.reduce(function (sum, line) {
      var p = findProduct(line.sku);
      return p ? sum + p.price * line.qty : sum;
    }, 0));
  }

  function updateCartBadge() {
    var count = readCart().reduce(function (n, line) { return n + line.qty; }, 0);
    document.querySelectorAll('.cart-badge').forEach(function (el) {
      el.textContent = String(count);
    });
  }

  // ---------- page context ----------
  var urlParams = new URLSearchParams(window.location.search);
  var siteSection = document.body.getAttribute('data-site-section') || 'general';

  // Pages whose title depends on rendered content (product / search) render
  // BEFORE the pageLoad push so pageInfo.name is final.
  var currentProduct = null;
  if (siteSection === 'product') currentProduct = prepareProductDetail();
  var searchTerm = null;
  if (siteSection === 'search') searchTerm = prepareSearchPage();

  // Page load — fired at script parse on EVERY page
  pushEvent('pageLoad', {
    pageInfo: {
      name: document.title,
      url: location.href,
      siteSection: siteSection
    }
  });

  if (currentProduct) {
    pushEvent('productView', productPayload(currentProduct));
  }

  if (siteSection === 'search' && searchTerm) {
    if (searchMatches(searchTerm).length > 0) {
      pushEvent('searcheswithResult', { searches: { withResult: searchTerm } });
    } else {
      pushEvent('searcheswithoutResult', { searches: { withoutResult: searchTerm } });
    }
  }

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    updateCartBadge();
    initFormGuard();
    initCampaignTracking();
    initProductGrids();
    initAddToCart();
    initCartPage();
    initCheckoutPage();
    initContactForm();
  }

  /* Forms with no action attribute (newsletter, subscribe, sidebar filters)
     must never navigate — the topbar search form HAS action="search.html". */
  function initFormGuard() {
    document.querySelectorAll('form').forEach(function (form) {
      if (!form.getAttribute('action')) {
        form.addEventListener('submit', function (e) { e.preventDefault(); });
      }
    });
  }

  /* ---------- campaign clicks ----------
     Two instrumented placements with deliberately different
     placement / component / regionPath values. */
  function initCampaignTracking() {
    var promoBanner = document.getElementById('promoBannerCta'); // index.html hero
    if (promoBanner) {
      promoBanner.addEventListener('click', function () {
        pushEvent('internalcampaignClick', {
          eventInfo: {
            eventName: 'Summer Sale 2026',
            eventCategory: 'promotion',
            eventAction: 'click',
            eventLabel: 'Shop the Sale',
            component: 'hero-banner',
            placement: 'Home Hero',
            regionPath: 'home > hero-carousel > slide-1'
          }
        });
      });
    }

    var sidebarTile = document.getElementById('sidebarOfferTile'); // shop.html sidebar
    if (sidebarTile) {
      sidebarTile.addEventListener('click', function () {
        pushEvent('internalcampaignClick', {
          eventInfo: {
            eventName: 'Winter Clearance 2026',
            eventCategory: 'merchandising',
            eventAction: 'click',
            eventLabel: 'Save 20% on Winter Jackets',
            component: 'sidebar-offer-tile',
            placement: 'Shop Sidebar',
            regionPath: 'shop > sidebar > offer-tile'
          }
        });
      });
    }
  }

  /* ---------- product card rendering (index featured / shop grid / search) ---------- */
  function renderProductCard(p, colClass) {
    return '' +
      '<div class="' + colClass + ' pb-1">' +
        '<div class="card product-item border-0 mb-4">' +
          '<div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">' +
            '<img class="img-fluid w-100" src="' + p.image + '" alt="' + p.name + '">' +
          '</div>' +
          '<div class="card-body border-left border-right text-center p-0 pt-4 pb-3">' +
            '<h6 class="text-truncate mb-3">' + p.name + '</h6>' +
            '<div class="d-flex justify-content-center">' +
              '<h6>' + formatPrice(p.price) + '</h6>' +
            '</div>' +
          '</div>' +
          '<div class="card-footer d-flex justify-content-between bg-light border">' +
            '<a href="detail.html?sku=' + p.sku + '" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>' +
            '<a href="detail.html?sku=' + p.sku + '" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function initProductGrids() {
    var featured = document.getElementById('featuredGrid'); // index.html
    if (featured) {
      featured.innerHTML = PRODUCTS.map(function (p) {
        return renderProductCard(p, 'col-lg-3 col-md-6 col-sm-12');
      }).join('');
    }
    var grid = document.getElementById('productGrid'); // shop.html
    if (grid) {
      grid.innerHTML = PRODUCTS.map(function (p) {
        return renderProductCard(p, 'col-lg-4 col-md-6 col-sm-12');
      }).join('');
    }
  }

  /* ---------- product detail (detail.html?sku=...) ---------- */
  function prepareProductDetail() {
    var nameEl = document.getElementById('productName');
    if (!nameEl) return null;

    var sku = urlParams.get('sku');
    var product = sku ? findProduct(sku) : null;

    if (!product) {
      document.title = 'Product Not Found — XeraShop';
      nameEl.textContent = 'Product not found';
      document.getElementById('productDescription').textContent =
        'The requested product does not exist in the XeraShop catalog. Browse the shop to find something you love.';
      document.getElementById('productPrice').textContent = '';
      var controls = document.getElementById('purchaseControls');
      if (controls) controls.classList.add('d-none');
      return null;
    }

    document.title = product.name + ' — XeraShop';
    nameEl.textContent = product.name;
    document.getElementById('productPrice').textContent = formatPrice(product.price);
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productImage').setAttribute('src', product.image);
    document.getElementById('productImage').setAttribute('alt', product.name);
    document.getElementById('productSpecs').innerHTML =
      '<li><strong>SKU:</strong> ' + product.sku + '</li>' +
      '<li><strong>Category:</strong> ' + product.category + '</li>' +
      '<li><strong>Packed size:</strong> ' + product.width_cm + ' × ' + product.height_cm +
      ' × ' + product.depth_cm + ' cm (W × H × D)</li>';
    return product;
  }

  function initAddToCart() {
    var btn = document.getElementById('addToCartBtn');
    if (!btn || !currentProduct) return;

    btn.addEventListener('click', function () {
      var qtyInput = document.getElementById('productQty');
      var qty = parseInt(qtyInput && qtyInput.value, 10);
      if (!(qty > 0)) qty = 1;

      var cart = readCart();
      var line = null;
      for (var i = 0; i < cart.length; i++) {
        if (cart[i].sku === currentProduct.sku) { line = cart[i]; break; }
      }
      if (line) line.qty += qty; else cart.push({ sku: currentProduct.sku, qty: qty });
      writeCart(cart);

      pushEvent('productAdd', productPayload(currentProduct));

      var feedback = document.getElementById('addToCartFeedback');
      if (feedback) {
        feedback.textContent = 'Added ' + qty + ' × ' + currentProduct.name + ' to your cart.';
        feedback.classList.remove('d-none');
        setTimeout(function () { feedback.classList.add('d-none'); }, 4000);
      }
    });
  }

  /* ---------- search (search.html?q=...) ---------- */
  function searchMatches(term) {
    var q = term.toLowerCase();
    return PRODUCTS.filter(function (p) {
      return p.name.toLowerCase().indexOf(q) !== -1 ||
        p.category.toLowerCase().indexOf(q) !== -1 ||
        p.sku.toLowerCase().indexOf(q) !== -1;
    });
  }

  function prepareSearchPage() {
    var heading = document.getElementById('searchHeading');
    var results = document.getElementById('searchResults');
    if (!heading || !results) return null;

    var term = (urlParams.get('q') || '').trim();
    if (!term) {
      heading.textContent = 'Browse the full catalog';
      results.innerHTML = PRODUCTS.map(function (p) {
        return renderProductCard(p, 'col-lg-3 col-md-6 col-sm-12');
      }).join('');
      return null; // no search event without a query
    }

    document.title = 'Search: ' + term + ' — XeraShop';
    var matches = searchMatches(term);
    if (matches.length > 0) {
      heading.textContent = 'Search results for “' + term + '” (' + matches.length + ')';
      results.innerHTML = matches.map(function (p) {
        return renderProductCard(p, 'col-lg-3 col-md-6 col-sm-12');
      }).join('');
    } else {
      heading.textContent = 'No results for “' + term + '”';
      results.innerHTML = '';
      var empty = document.getElementById('noResults');
      if (empty) empty.classList.remove('d-none');
    }
    return term;
  }

  /* ---------- cart page (page view only — no cart events) ---------- */
  function initCartPage() {
    var tbody = document.getElementById('cartTableBody');
    if (!tbody) return;
    renderCartTable();

    tbody.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-remove-sku]');
      if (!btn) return;
      var cart = readCart().filter(function (line) {
        return line.sku !== btn.getAttribute('data-remove-sku');
      });
      writeCart(cart);
      renderCartTable();
    });
  }

  function renderCartTable() {
    var tbody = document.getElementById('cartTableBody');
    var cart = readCart();

    if (cart.length === 0) {
      tbody.innerHTML =
        '<tr><td colspan="5" class="align-middle py-5">Your cart is empty. ' +
        '<a href="shop.html">Continue shopping</a>.</td></tr>';
    } else {
      tbody.innerHTML = cart.map(function (line) {
        var p = findProduct(line.sku);
        return '<tr>' +
          '<td class="align-middle text-left"><img src="' + p.image + '" alt="' + p.name + '" style="width: 50px;" class="mr-2"> ' + p.name + '</td>' +
          '<td class="align-middle">' + formatPrice(p.price) + '</td>' +
          '<td class="align-middle">' + line.qty + '</td>' +
          '<td class="align-middle">' + formatPrice(round2(p.price * line.qty)) + '</td>' +
          '<td class="align-middle"><button class="btn btn-sm btn-primary" type="button" data-remove-sku="' + p.sku + '" aria-label="Remove ' + p.name + '"><i class="fa fa-times"></i></button></td>' +
        '</tr>';
      }).join('');
    }

    var subtotal = cartSubtotal(cart);
    var subtotalEl = document.getElementById('cartSubtotal');
    var totalEl = document.getElementById('cartTotal');
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (totalEl) totalEl.textContent = formatPrice(subtotal); // shipping is free
  }

  /* ---------- checkout (orderComplete on Place Order) ---------- */
  function initCheckoutPage() {
    var placeOrderBtn = document.getElementById('placeOrderBtn');
    if (!placeOrderBtn) return;
    renderOrderSummary();

    placeOrderBtn.addEventListener('click', function () {
      var cart = readCart();
      var emailInput = document.getElementById('checkoutEmail');
      var email = (emailInput && emailInput.value || '').trim();
      var emailError = document.getElementById('checkoutEmailError');
      var cartError = document.getElementById('checkoutCartError');

      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (emailError) emailError.classList.toggle('d-none', emailOk);
      if (cartError) cartError.classList.toggle('d-none', cart.length > 0);
      if (!emailOk || cart.length === 0) return;

      var giftInput = document.getElementById('giftMessage');
      var order = {
        id: 'XSO-' + Date.now(),
        total: cartSubtotal(cart),            // JSON number
        currency: 'USD',
        email: email,
        productSku: cart[0].sku,              // first cart item's sku
        giftMessage: String(giftInput && giftInput.value || '').trim()
      };

      pushEvent('orderComplete', { order: order });

      // inline confirmation state
      document.getElementById('confirmationOrderId').textContent = order.id;
      document.getElementById('confirmationTotal').textContent = formatPrice(order.total) + ' ' + order.currency;
      document.getElementById('confirmationEmail').textContent = order.email;
      document.getElementById('checkoutContent').classList.add('d-none');
      document.getElementById('orderConfirmation').classList.remove('d-none');
      writeCart([]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function renderOrderSummary() {
    var itemsEl = document.getElementById('orderSummaryItems');
    if (!itemsEl) return;
    var cart = readCart();

    if (cart.length === 0) {
      itemsEl.innerHTML = '<p class="text-muted">Your cart is empty — <a href="shop.html">add a product</a> first.</p>';
    } else {
      itemsEl.innerHTML = cart.map(function (line) {
        var p = findProduct(line.sku);
        return '<div class="d-flex justify-content-between">' +
          '<p>' + p.name + ' × ' + line.qty + '</p>' +
          '<p>' + formatPrice(round2(p.price * line.qty)) + '</p>' +
        '</div>';
      }).join('');
    }

    var subtotal = cartSubtotal(cart);
    var subtotalEl = document.getElementById('orderSubtotal');
    var totalEl = document.getElementById('orderTotal');
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (totalEl) totalEl.textContent = formatPrice(subtotal); // shipping is free
  }

  /* ---------- contact form (page view only — NO form events by contract) ---------- */
  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var required = form.querySelectorAll('[required]');
      var valid = true;
      required.forEach(function (field) {
        if (!field.value.trim()) valid = false;
      });
      var success = document.getElementById('success');
      if (!success) return;
      success.innerHTML = valid
        ? '<div class="alert alert-success">Thanks for reaching out! This is a demo store, so nobody will actually reply — but your form worked perfectly.</div>'
        : '<div class="alert alert-danger">Please fill in all fields before sending.</div>';
      if (valid) form.reset();
    });
  }
})();
