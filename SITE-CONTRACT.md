# XeraShop SITE-CONTRACT — data-layer events emitted by this site

This is the handoff contract for the retail pilot's `translate.mjs` author. The site is the
canonical event producer (xerabank pattern): `html/js/main.js` defines
`pushEvent(event, data)` which pushes `Object.assign({ event: event }, data)` into **both**
`window.dataLayer` and `window.adobeDataLayer`. There is NO walkerOS tagging in the HTML
(no `data-elb` attributes). The XDM runtime script tags are present on every page in strict
order before `main.js` and 404 until the pilot deploy copies them in:

```html
<script src="js/xdm/xdm-flow.js"></script>
<script src="js/xdm/walker-3.4.2.js"></script>
<script src="js/xdm/xdm-runtime.js"></script>
```

**All numeric values are JSON numbers end-to-end, never strings**: `price`, `widthCm`,
`heightCm`, `depthCm`, `internalScore`, `total`. Product data comes from the single
catalog `html/js/products.js` (`window.XERASHOP_PRODUCTS`, 8 products). Cart state lives in
`localStorage` key `xerashop_cart` as `[{sku, qty}]`; prices are always re-resolved from
the catalog, never stored.

## Event inventory (6 site events)

### 1. `pageLoad` — every page, fired at script parse

```json
{
  "event": "pageLoad",
  "pageInfo": {
    "name": "<document.title>",
    "url": "<location.href>",
    "siteSection": "<see table below>"
  }
}
```

| page | siteSection | title pattern |
|---|---|---|
| index.html | `home` | XeraShop — Modern Everyday Fashion |
| shop.html | `shop` | Shop the Collection — XeraShop |
| detail.html?sku=… | `product` | `<Product Name> — XeraShop` (set BEFORE pageLoad fires) |
| search.html?q=… | `search` | `Search: <q> — XeraShop` (set BEFORE pageLoad fires) |
| cart.html | `cart` | Shopping Cart — XeraShop |
| checkout.html | `checkout` | Checkout — XeraShop |
| contact.html | `support` | Contact Us — XeraShop |

cart.html and contact.html emit **pageLoad only** (no cart/step/form events, by contract).

### 2. `productView` — detail.html render (valid `?sku=` only)

```json
{
  "event": "productView",
  "product": {
    "sku": "XS-JACK-002",
    "name": "Quilted Winter Jacket",
    "price": 149.99,
    "category": "Jackets",
    "widthCm": 38,
    "heightCm": 48,
    "depthCm": 10,
    "internalScore": 95
  }
}
```

Fired once per detail-page load, immediately after `pageLoad`. An unknown/missing sku
renders a not-found state and emits NO productView.

### 3. `productAdd` — detail.html "Add To Cart" button

**Identical payload shape to `productView`** (same 8 product fields, same source object).
Quantity is applied to the localStorage cart but is NOT part of the event payload.

### 4. `searcheswithResult` / `searcheswithoutResult` — search.html?q=…

```json
{ "event": "searcheswithResult",    "searches": { "withResult": "<q>" } }
{ "event": "searcheswithoutResult", "searches": { "withoutResult": "<q>" } }
```

Exactly one of the two fires per search-page load with a non-empty `q` (matching is a
case-insensitive substring test over name/category/sku). `search.html` without `q` shows
the full catalog and emits NO search event. Fired after `pageLoad`.

### 5. `internalcampaignClick` — two placements, deliberately different values

```json
{
  "event": "internalcampaignClick",
  "eventInfo": {
    "eventName": "…", "eventCategory": "…", "eventAction": "click",
    "eventLabel": "…", "component": "…", "placement": "…", "regionPath": "…"
  }
}
```

| field | index.html hero banner (`#promoBannerCta`) | shop.html sidebar tile (`#sidebarOfferTile`) |
|---|---|---|
| eventName | `Summer Sale 2026` | `Winter Clearance 2026` |
| eventCategory | `promotion` | `merchandising` |
| eventAction | `click` | `click` |
| eventLabel | `Shop the Sale` | `Save 20% on Quilted Jackets` |
| component | `hero-banner` | `sidebar-offer-tile` |
| placement | `Home Hero` | `Shop Sidebar` |
| regionPath | `home > hero-carousel > slide-1` | `shop > sidebar > offer-tile` |

Both elements are links (hero → shop.html; tile → detail.html?sku=XS-JACK-002); the push
happens synchronously on click before navigation.

### 6. `orderComplete` — checkout.html "Place Order" (the ONLY commerce funnel event)

```json
{
  "event": "orderComplete",
  "order": {
    "id": "XSO-1754120000000",
    "total": 259.97,
    "currency": "USD",
    "email": "shopper@example.com",
    "productSku": "XS-JACK-002",
    "giftMessage": "Happy birthday!"
  }
}
```

- `id`: `"XSO-" + Date.now()` — treat as NON-identity per the crosswalk.
- `total`: JSON **number** = sum of `price × qty` over the cart, rounded to 2 dp
  (shipping is free, so total == subtotal).
- `currency`: always `"USD"`.
- `email`: validated non-empty (regex `^[^\s@]+@[^\s@]+\.[^\s@]+$`); RAW value on-site —
  hashing to Email_LC_SHA256 happens in the mapping cast chain, never on-site.
- `productSku`: sku of the FIRST cart line — always one of the 8 catalog skus.
- `giftMessage`: trimmed string from the gift-message textarea; `""` when left blank.

Fires once, then the page swaps to an inline confirmation state and the cart is cleared.
Emitted only when email is valid AND the cart is non-empty.

## Product catalog (8 skus — identity PRODUCT_SKU lookups)

| sku | name | price | category | W×H×D cm | internal_score |
|---|---|---|---|---|---|
| XS-SHIRT-001 | Oxford Slim Shirt | 49.99 | Shirts | 28×38×4 | 87.5 |
| XS-SHIRT-002 | Linen Weekend Shirt | 44.5 | Shirts | 28×38×4 | 81.2 |
| XS-DRESS-001 | Floral Midi Dress | 79.99 | Dresses | 30×42×5 | 92.1 |
| XS-DRESS-002 | Satin Evening Dress | 129 | Dresses | 30×42×5 | 88.7 |
| XS-JEAN-001 | Slim Fit Indigo Jeans | 64.99 | Jeans | 30×40×6 | 84.3 |
| XS-JEAN-002 | Relaxed Straight Jeans | 59.99 | Jeans | 30×40×6 | 78.9 |
| XS-JACK-001 | Urban Bomber Jacket | 119.99 | Jackets | 35×45×8 | 90.4 |
| XS-JACK-002 | Quilted Winter Jacket | 149.99 | Jackets | 38×48×10 | 95 |

## Suggested walkerOS mapping (from the retail.web crosswalk)

| site event | walkerOS event |
|---|---|
| pageLoad | `page view` |
| productView | `product view` |
| productAdd | `product add` |
| orderComplete | `order complete` |
| searcheswithResult / searcheswithoutResult | `search view` |
| internalcampaignClick | `campaign click` |

Page context (`page_url` ← pageInfo.url, `page_name` ← pageInfo.name, `site_section` ←
pageInfo.siteSection) should be merged into EVERY translated event, xerabank-style.

## Serving

`node serve.mjs` → http://localhost:8901/ (static, serves `./html`). Port 8901 is
reserved for this site; 8899 belongs to the xerabank session.
