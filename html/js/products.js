/* XeraShop product catalog — the single source of truth for product data.
   detail.html, search.html, shop.html, cart.html and checkout.html all render
   from this list, so the data layer and the on-page copy can never disagree.
   ALL numeric fields are real JSON numbers (price, width_cm, height_cm,
   depth_cm, internal_score) — never strings. */
window.XERASHOP_PRODUCTS = [
  {
    sku: 'XS-SHIRT-001',
    name: 'Oxford Slim Shirt',
    price: 49.99,
    category: 'Shirts',
    width_cm: 28,
    height_cm: 38,
    depth_cm: 4,
    internal_score: 87.5,
    image: 'img/product-1.jpg',
    description: 'A crisp Oxford-weave shirt cut in a modern slim silhouette. Breathable cotton, reinforced collar, and a wardrobe staple for work or weekends.'
  },
  {
    sku: 'XS-SHIRT-002',
    name: 'Linen Weekend Shirt',
    price: 44.5,
    category: 'Shirts',
    width_cm: 28,
    height_cm: 38,
    depth_cm: 4,
    internal_score: 81.2,
    image: 'img/product-2.jpg',
    description: 'Lightweight linen with a relaxed drape — made for warm afternoons. Garment-washed for softness from the first wear.'
  },
  {
    sku: 'XS-DRESS-001',
    name: 'Floral Midi Dress',
    price: 79.99,
    category: 'Dresses',
    width_cm: 30,
    height_cm: 42,
    depth_cm: 5,
    internal_score: 92.1,
    image: 'img/product-3.jpg',
    description: 'A flowing midi in our signature floral print. Cinched waist, side pockets, and a hemline that moves with you.'
  },
  {
    sku: 'XS-DRESS-002',
    name: 'Satin Evening Dress',
    price: 129,
    category: 'Dresses',
    width_cm: 30,
    height_cm: 42,
    depth_cm: 5,
    internal_score: 88.7,
    image: 'img/product-4.jpg',
    description: 'Softly lustrous satin with a bias cut that skims the figure. The quiet centrepiece of any evening wardrobe.'
  },
  {
    sku: 'XS-JEAN-001',
    name: 'Slim Fit Indigo Jeans',
    price: 64.99,
    category: 'Jeans',
    width_cm: 30,
    height_cm: 40,
    depth_cm: 6,
    internal_score: 84.3,
    image: 'img/product-5.jpg',
    description: 'Deep indigo denim with just enough stretch. Slim through the leg without ever feeling tight.'
  },
  {
    sku: 'XS-JEAN-002',
    name: 'Relaxed Straight Jeans',
    price: 59.99,
    category: 'Jeans',
    width_cm: 30,
    height_cm: 40,
    depth_cm: 6,
    internal_score: 78.9,
    image: 'img/product-6.jpg',
    description: 'An easy straight cut in mid-wash denim. Broken in from day one, built to last for years.'
  },
  {
    sku: 'XS-JACK-001',
    name: 'Urban Bomber Jacket',
    price: 119.99,
    category: 'Jackets',
    width_cm: 35,
    height_cm: 45,
    depth_cm: 8,
    internal_score: 90.4,
    image: 'img/product-7.jpg',
    description: 'A matte-finish bomber with ribbed cuffs and a two-way zip. Wind-resistant shell, city-proof attitude.'
  },
  {
    sku: 'XS-JACK-002',
    name: 'Quilted Winter Jacket',
    price: 149.99,
    category: 'Jackets',
    width_cm: 38,
    height_cm: 48,
    depth_cm: 10,
    internal_score: 95,
    image: 'img/product-8.jpg',
    description: 'Diamond-quilted insulation rated for the coldest commutes. Now 20% off in the Winter Clearance.'
  }
];
