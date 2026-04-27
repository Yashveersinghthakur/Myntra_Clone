/* ═══════════════════════════════════════════
   MYNTRA CLONE — script.js
   ═══════════════════════════════════════════ */

/* ────────────────────────────────────────────
   PRODUCT DATA
──────────────────────────────────────────── */
const PRODUCTS = [
  // MEN
  { id:1, brand:"H&M", name:"Slim Fit Stretch Chinos", category:"Jeans", gender:"Men", price:899, mrp:1999, off:55, rating:4.3, reviews:1842, image:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80", images:["https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80","https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80","https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80"], sizes:["28","30","32","34","36"], tag:"Bestseller", isNew:false, color:"Navy Blue", material:"Cotton Blend", fit:"Slim Fit" },
  { id:2, brand:"Nike", name:"Dri-FIT Training T-Shirt", category:"T-Shirts", gender:"Men", price:1299, mrp:2499, off:48, rating:4.5, reviews:3241, image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80", images:["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80","https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80","https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80"], sizes:["S","M","L","XL","XXL"], tag:"Top Pick", isNew:false, color:"Black", material:"Polyester", fit:"Regular Fit" },
  { id:3, brand:"Adidas", name:"Originals Track Jacket", category:"Jackets", gender:"Men", price:2799, mrp:4999, off:44, rating:4.4, reviews:987, image:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80", images:["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80","https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80","https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80"], sizes:["S","M","L","XL"], tag:"", isNew:true, color:"White/Black", material:"Polyester", fit:"Regular Fit" },
  { id:4, brand:"Levi's", name:"511 Slim Fit Jeans", category:"Jeans", gender:"Men", price:1999, mrp:3999, off:50, rating:4.6, reviews:5621, image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80", images:["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80","https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80","https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80"], sizes:["28","30","32","34","36","38"], tag:"Bestseller", isNew:false, color:"Dark Indigo", material:"Denim", fit:"Slim Fit" },
  { id:5, brand:"Puma", name:"Running Shoes Velocity Nitro", category:"Shoes", gender:"Men", price:5999, mrp:9999, off:40, rating:4.3, reviews:2134, image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", images:["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80","https://images.unsplash.com/photo-1608231387042-66d1773d3028?w=600&q=80","https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80"], sizes:["6","7","8","9","10","11"], tag:"", isNew:true, color:"Black/Red", material:"Mesh + Rubber", fit:"" },
  { id:6, brand:"Allen Solly", name:"Regular Fit Formal Shirt", category:"Shirts", gender:"Men", price:1099, mrp:2199, off:50, rating:4.1, reviews:876, image:"https://images.unsplash.com/photo-1598961942613-ba897716405b?w=400&q=80", images:["https://images.unsplash.com/photo-1598961942613-ba897716405b?w=600&q=80","https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80","https://images.unsplash.com/photo-1546938576-6e12d10fd618?w=600&q=80"], sizes:["S","M","L","XL","XXL"], tag:"", isNew:false, color:"Light Blue", material:"Cotton", fit:"Regular Fit" },
  { id:7, brand:"UCB", name:"Casual Graphic Print Tee", category:"T-Shirts", gender:"Men", price:699, mrp:1499, off:53, rating:4.0, reviews:543, image:"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80", images:["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80","https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80"], sizes:["S","M","L","XL"], tag:"Sale", isNew:false, color:"White", material:"Cotton", fit:"Relaxed Fit" },
  { id:8, brand:"Fossil", name:"Grant Chronograph Watch", category:"Watches", gender:"Men", price:8999, mrp:14999, off:40, rating:4.7, reviews:3421, image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", images:["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80","https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=600&q=80","https://images.unsplash.com/photo-1619134778706-7015533a6150?w=600&q=80"], sizes:["One Size"], tag:"Premium", isNew:false, color:"Silver/Brown", material:"Stainless Steel", fit:"" },
  // WOMEN
  { id:9, brand:"Zara", name:"Floral Wrap Midi Dress", category:"Dresses", gender:"Women", price:1999, mrp:3999, off:50, rating:4.5, reviews:2134, image:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80", images:["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80","https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&q=80","https://images.unsplash.com/photo-1496217590455-aa63a8550c76?w=600&q=80"], sizes:["XS","S","M","L","XL"], tag:"Bestseller", isNew:false, color:"Floral Print", material:"Chiffon", fit:"Wrap Fit" },
  { id:10, brand:"H&M", name:"High-Rise Skinny Jeans", category:"Jeans", gender:"Women", price:1299, mrp:2499, off:48, rating:4.4, reviews:3561, image:"https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400&q=80", images:["https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80","https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80","https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80"], sizes:["24","26","28","30","32"], tag:"", isNew:true, color:"Blue", material:"Denim", fit:"Skinny Fit" },
  { id:11, brand:"Biba", name:"Anarkali Printed Kurta", category:"Kurta", gender:"Women", price:1499, mrp:2999, off:50, rating:4.6, reviews:4521, image:"https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=400&q=80", images:["https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=600&q=80","https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80","https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&q=80"], sizes:["XS","S","M","L","XL","XXL"], tag:"Ethnic", isNew:false, color:"Pink/Orange", material:"Rayon", fit:"Regular Fit" },
  { id:12, brand:"Vero Moda", name:"Flowy Chiffon Top", category:"Tops", gender:"Women", price:799, mrp:1599, off:50, rating:4.2, reviews:1234, image:"https://images.unsplash.com/photo-1496217590455-aa63a8550c76?w=400&q=80", images:["https://images.unsplash.com/photo-1496217590455-aa63a8550c76?w=600&q=80","https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80","https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&q=80"], sizes:["XS","S","M","L"], tag:"", isNew:true, color:"White", material:"Chiffon", fit:"Relaxed Fit" },
  { id:13, brand:"Only", name:"Co-ord Set Blazer & Pants", category:"Sets", gender:"Women", price:2999, mrp:5999, off:50, rating:4.5, reviews:876, image:"https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=400&q=80", images:["https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&q=80","https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80","https://images.unsplash.com/photo-1496217590455-aa63a8550c76?w=600&q=80"], sizes:["XS","S","M","L","XL"], tag:"Trending", isNew:true, color:"Beige", material:"Polyester Blend", fit:"Regular Fit" },
  { id:14, brand:"Mango", name:"Leather Tote Bag", category:"Bags", gender:"Women", price:3499, mrp:6999, off:50, rating:4.7, reviews:2341, image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80", images:["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80","https://images.unsplash.com/photo-1594938298603-c8148c4b4057?w=600&q=80","https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=600&q=80"], sizes:["One Size"], tag:"Premium", isNew:false, color:"Tan", material:"Genuine Leather", fit:"" },
  { id:15, brand:"Nike", name:"Women Air Max Running Shoes", category:"Shoes", gender:"Women", price:6499, mrp:10999, off:41, rating:4.4, reviews:1876, image:"https://images.unsplash.com/photo-1608231387042-66d1773d3028?w=400&q=80", images:["https://images.unsplash.com/photo-1608231387042-66d1773d3028?w=600&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80","https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80"], sizes:["5","6","7","8","9"], tag:"", isNew:true, color:"White/Pink", material:"Mesh + Rubber", fit:"" },
  { id:16, brand:"Titan", name:"Raga Gold Dial Watch", category:"Watches", gender:"Women", price:4999, mrp:8999, off:44, rating:4.8, reviews:4231, image:"https://images.unsplash.com/photo-1619134778706-7015533a6150?w=400&q=80", images:["https://images.unsplash.com/photo-1619134778706-7015533a6150?w=600&q=80","https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80","https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=600&q=80"], sizes:["One Size"], tag:"Premium", isNew:false, color:"Gold", material:"Stainless Steel", fit:"" },
  // KIDS
  { id:17, brand:"H&M", name:"Kids Cotton Graphic T-Shirt", category:"T-Shirts", gender:"Kids", price:399, mrp:799, off:50, rating:4.3, reviews:654, image:"https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&q=80", images:["https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&q=80","https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80","https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80"], sizes:["2-3Y","3-4Y","4-5Y","5-6Y","6-7Y","7-8Y"], tag:"", isNew:false, color:"Multi", material:"Cotton", fit:"Regular Fit" },
  { id:18, brand:"Mothercare", name:"Kids Floral Dress", category:"Dresses", gender:"Kids", price:699, mrp:1399, off:50, rating:4.5, reviews:432, image:"https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400&q=80", images:["https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80","https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&q=80","https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80"], sizes:["2-3Y","3-4Y","4-5Y","5-6Y","6-7Y"], tag:"", isNew:true, color:"Pink", material:"Cotton", fit:"Regular Fit" },
  { id:19, brand:"Puma", name:"Kids Sports Shoes", category:"Shoes", gender:"Kids", price:1499, mrp:2999, off:50, rating:4.4, reviews:876, image:"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&q=80", images:["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80","https://images.unsplash.com/photo-1608231387042-66d1773d3028?w=600&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"], sizes:["1","2","3","4","5"], tag:"Bestseller", isNew:false, color:"Blue/White", material:"Mesh + Rubber", fit:"" },
  // More products
  { id:20, brand:"Jack & Jones", name:"Slim Fit Casual Shirt", category:"Shirts", gender:"Men", price:999, mrp:1999, off:50, rating:4.2, reviews:765, image:"https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80", images:["https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80","https://images.unsplash.com/photo-1598961942613-ba897716405b?w=600&q=80","https://images.unsplash.com/photo-1546938576-6e12d10fd618?w=600&q=80"], sizes:["S","M","L","XL","XXL"], tag:"", isNew:true, color:"Plaid", material:"Cotton", fit:"Slim Fit" },
  { id:21, brand:"W", name:"Ethnic Printed Kurta Set", category:"Kurta", gender:"Women", price:1799, mrp:3499, off:49, rating:4.5, reviews:2143, image:"https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=400&q=80", images:["https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=600&q=80","https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80","https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&q=80"], sizes:["XS","S","M","L","XL"], tag:"Ethnic", isNew:false, color:"Blue/Gold", material:"Rayon", fit:"Regular Fit" },
  { id:22, brand:"Adidas", name:"UltraBoost Running Shoes", category:"Shoes", gender:"Men", price:8999, mrp:14999, off:40, rating:4.6, reviews:4321, image:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80", images:["https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80","https://images.unsplash.com/photo-1608231387042-66d1773d3028?w=600&q=80"], sizes:["7","8","9","10","11"], tag:"Premium", isNew:true, color:"Black", material:"Primeknit + Rubber", fit:"" },
  { id:23, brand:"Casio", name:"G-Shock Digital Watch", category:"Watches", gender:"Men", price:3499, mrp:5999, off:42, rating:4.5, reviews:3211, image:"https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&q=80", images:["https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=600&q=80","https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80","https://images.unsplash.com/photo-1619134778706-7015533a6150?w=600&q=80"], sizes:["One Size"], tag:"", isNew:false, color:"Black", material:"Resin", fit:"" },
  { id:24, brand:"Wildcraft", name:"Laptop Backpack 30L", category:"Bags", gender:"Unisex", price:2299, mrp:3999, off:43, rating:4.4, reviews:1987, image:"https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=400&q=80", images:["https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=600&q=80","https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80","https://images.unsplash.com/photo-1594938298603-c8148c4b4057?w=600&q=80"], sizes:["One Size"], tag:"", isNew:false, color:"Grey", material:"Nylon", fit:"" },
];

/* ────────────────────────────────────────────
   STATE
──────────────────────────────────────────── */
let cart = JSON.parse(localStorage.getItem('myn_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('myn_wishlist') || '[]');
let currentPage = 'home';
let currentProduct = null;
let selectedSize = null;
let filteredProducts = [...PRODUCTS];
let displayCount = 12;
let activeFilters = { gender: [], category: [], brand: [], maxPrice: 10000, minDiscount: 0, minRating: 0 };
let couponDiscount = 0;
let currentSlide = 0;

/* ────────────────────────────────────────────
   PAGE NAVIGATION
──────────────────────────────────────────── */
function showPage(pageName) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + pageName).classList.add('active');
  currentPage = pageName;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (pageName === 'home') renderHomePage();
  if (pageName === 'listing') renderListing();
  if (pageName === 'cart') renderCart();
  if (pageName === 'wishlist') renderWishlist();
}

/* ────────────────────────────────────────────
   HOME PAGE
──────────────────────────────────────────── */
function renderHomePage() {
  renderProductRow('trendingProducts', PRODUCTS.filter(p => p.rating >= 4.4).slice(0, 8));
  renderProductRow('newArrivalsProducts', PRODUCTS.filter(p => p.isNew).slice(0, 8));
}

function renderProductRow(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = products.map(p => productCardHTML(p, false)).join('');
}

/* ────────────────────────────────────────────
   PRODUCT CARD HTML
──────────────────────────────────────────── */
function productCardHTML(p, inGrid = true) {
  const inWishlist = wishlist.some(w => w.id === p.id);
  return `
    <div class="product-card" onclick="openProduct(${p.id})">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x500/f0f0f0/999?text=No+Image'" />
        <div class="product-card-wishlist ${inWishlist ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlistById(${p.id}, this)">
          <i class="${inWishlist ? 'fas' : 'far'} fa-heart"></i>
        </div>
        ${p.tag ? `<div class="product-tag">${p.tag}</div>` : ''}
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-prices">
          <span class="product-price">₹${p.price.toLocaleString()}</span>
          <span class="product-mrp">₹${p.mrp.toLocaleString()}</span>
          <span class="product-off">(${p.off}% OFF)</span>
        </div>
        <div class="product-rating"><span>${p.rating}★</span>${p.reviews.toLocaleString()} ratings</div>
      </div>
    </div>`;
}

/* ────────────────────────────────────────────
   PRODUCT LISTING
──────────────────────────────────────────── */
function renderListing() {
  buildFilterOptions();
  applyFilters();
}

function buildFilterOptions() {
  const categories = [...new Set(PRODUCTS.map(p => p.category))];
  const brands = [...new Set(PRODUCTS.map(p => p.brand))];

  const catContainer = document.getElementById('categoryFilters');
  if (catContainer) {
    catContainer.innerHTML = categories.map(c =>
      `<label><input type="checkbox" name="cat" value="${c}" onchange="applyFilters()" ${activeFilters.category.includes(c) ? 'checked' : ''}/> ${c}</label>`
    ).join('');
  }

  const brandContainer = document.getElementById('brandFilters');
  if (brandContainer) {
    brandContainer.innerHTML = brands.map(b =>
      `<label><input type="checkbox" name="brand" value="${b}" onchange="applyFilters()" ${activeFilters.brand.includes(b) ? 'checked' : ''}/> ${b}</label>`
    ).join('');
  }
}

function applyFilters() {
  // Collect filter values
  const genderChecked = [...document.querySelectorAll('input[name="gender"]:checked')].map(i => i.value);
  const catChecked = [...document.querySelectorAll('input[name="cat"]:checked')].map(i => i.value);
  const brandChecked = [...document.querySelectorAll('input[name="brand"]:checked')].map(i => i.value);
  const discountChecked = [...document.querySelectorAll('input[name="discount"]:checked')].map(i => parseInt(i.value));
  const ratingChecked = [...document.querySelectorAll('input[name="rating"]:checked')].map(i => parseFloat(i.value));
  const maxPrice = parseInt(document.getElementById('priceRange')?.value || 10000);
  const sort = document.getElementById('sortSelect')?.value || 'recommended';
  const searchVal = document.getElementById('searchInput')?.value.toLowerCase() || '';

  let results = PRODUCTS.filter(p => {
    if (genderChecked.length && !genderChecked.includes(p.gender) && !genderChecked.some(g => p.gender === g)) {
      if (!genderChecked.includes(p.gender)) return false;
    }
    if (catChecked.length && !catChecked.includes(p.category)) return false;
    if (brandChecked.length && !brandChecked.includes(p.brand)) return false;
    if (p.price > maxPrice) return false;
    if (discountChecked.length && !discountChecked.some(d => p.off >= d)) return false;
    if (ratingChecked.length && !ratingChecked.some(r => p.rating >= r)) return false;
    if (activeFilters.gender.length && !activeFilters.gender.includes(p.gender)) return false;
    if (activeFilters.category.length && !activeFilters.category.includes(p.category)) return false;
    if (activeFilters.brand.length && !activeFilters.brand.includes(p.brand)) return false;
    if (searchVal && !p.name.toLowerCase().includes(searchVal) && !p.brand.toLowerCase().includes(searchVal) && !p.category.toLowerCase().includes(searchVal)) return false;
    return true;
  });

  // Sort
  if (sort === 'priceLow') results.sort((a,b) => a.price - b.price);
  else if (sort === 'priceHigh') results.sort((a,b) => b.price - a.price);
  else if (sort === 'discount') results.sort((a,b) => b.off - a.off);
  else if (sort === 'rating') results.sort((a,b) => b.rating - a.rating);
  else if (sort === 'popular') results.sort((a,b) => b.reviews - a.reviews);
  else if (sort === 'new') results.sort((a,b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

  filteredProducts = results;
  displayCount = 12;
  renderGrid();

  const title = document.getElementById('listingTitle');
  if (title) {
    const g = genderChecked.length ? genderChecked.join(' & ') + ' ' : (activeFilters.gender.length ? activeFilters.gender[0] + ' ' : '');
    const c = catChecked.length ? catChecked.join(' & ') : (activeFilters.category.length ? activeFilters.category[0] : 'Fashion');
    title.textContent = g + c;
  }
  document.getElementById('listingCount').textContent = `${results.length} items`;
}

function renderGrid() {
  const grid = document.getElementById('listingGrid');
  if (!grid) return;
  const toShow = filteredProducts.slice(0, displayCount);
  grid.innerHTML = toShow.length
    ? toShow.map(p => productCardHTML(p, true)).join('')
    : '<div style="grid-column:1/-1;text-align:center;padding:60px;color:#999"><i class="fas fa-search" style="font-size:48px;margin-bottom:16px;display:block"></i><p>No products found. Try adjusting your filters.</p></div>';
}

function loadMore() {
  displayCount += 8;
  renderGrid();
}

function clearFilters() {
  activeFilters = { gender: [], category: [], brand: [], maxPrice: 10000, minDiscount: 0, minRating: 0 };
  document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(cb => cb.checked = false);
  const pr = document.getElementById('priceRange');
  if (pr) { pr.value = 10000; document.getElementById('priceDisplay').textContent = '₹10,000'; }
  applyFilters();
}

function filterByGender(gender) {
  activeFilters.gender = [gender];
  activeFilters.category = [];
  activeFilters.brand = [];
}

function filterByCategory(cat) {
  activeFilters.category = [cat];
  activeFilters.gender = [];
}

function filterByBrand(brand) {
  activeFilters.brand = [brand];
  activeFilters.gender = [];
  activeFilters.category = [];
}

function updatePriceFilter(val) {
  document.getElementById('priceDisplay').textContent = '₹' + parseInt(val).toLocaleString();
  applyFilters();
}

function toggleMobileFilter() {
  document.getElementById('filterSidebar').classList.toggle('mobile-open');
}

/* ────────────────────────────────────────────
   PRODUCT DETAIL
──────────────────────────────────────────── */
function openProduct(id) {
  currentProduct = PRODUCTS.find(p => p.id === id);
  if (!currentProduct) return;
  selectedSize = null;

  // Breadcrumb
  document.getElementById('detailBreadcrumb').innerHTML =
    `<span onclick="showPage('home')" style="cursor:pointer;color:var(--pink)">Home</span>
     <span>›</span><span onclick="showPage('listing')" style="cursor:pointer;color:var(--pink)">${currentProduct.category}</span>
     <span>›</span><span>${currentProduct.brand}</span>
     <span>›</span><span>${currentProduct.name}</span>`;

  // Images
  const mainImg = document.getElementById('mainProductImg');
  mainImg.src = currentProduct.images[0];

  const thumbs = document.getElementById('galleryThumbs');
  thumbs.innerHTML = currentProduct.images.map((img, i) =>
    `<img src="${img}" class="thumb-img ${i===0?'active':''}" onclick="changeMainImg('${img}', this)" alt="img${i}" onerror="this.src='https://via.placeholder.com/400x500/f0f0f0/999?text=No+Image'" />`
  ).join('');

  // Info
  document.getElementById('detailBrand').textContent = currentProduct.brand;
  document.getElementById('detailName').textContent = currentProduct.name;
  document.getElementById('detailRating').textContent = `${currentProduct.rating}★`;
  document.getElementById('detailReviews').textContent = `${currentProduct.reviews.toLocaleString()} Ratings & Reviews`;
  document.getElementById('detailPrice').textContent = `₹${currentProduct.price.toLocaleString()}`;
  document.getElementById('detailMrp').textContent = `MRP ₹${currentProduct.mrp.toLocaleString()}`;
  document.getElementById('detailOff').textContent = `(${currentProduct.off}% off)`;

  // Sizes
  const sizesEl = document.getElementById('detailSizes');
  sizesEl.innerHTML = currentProduct.sizes.map(s =>
    `<button class="size-btn" onclick="selectSize(this, '${s}')">${s}</button>`
  ).join('');

  // Meta
  document.getElementById('detailMeta').innerHTML = `
    <p><span>Color:</span> ${currentProduct.color}</p>
    <p><span>Material:</span> ${currentProduct.material}</p>
    ${currentProduct.fit ? `<p><span>Fit:</span> ${currentProduct.fit}</p>` : ''}
  `;

  // Description
  document.getElementById('detailDescription').innerHTML = `
    <h3>Product Description</h3>
    <p>Experience the perfect blend of style and comfort with the ${currentProduct.brand} ${currentProduct.name}. 
    Crafted from premium ${currentProduct.material}, this ${currentProduct.category.toLowerCase()} is designed for 
    the modern ${currentProduct.gender === 'Men' ? 'man' : currentProduct.gender === 'Women' ? 'woman' : 'individual'} 
    who values both fashion and functionality. The ${currentProduct.color} colorway makes it versatile for multiple 
    occasions — from casual outings to more formal settings. ${currentProduct.fit ? `The ${currentProduct.fit} ensures maximum comfort throughout the day.` : ''}
    Available in multiple sizes for the perfect fit.</p>
  `;

  // Wishlist state
  const inWishlist = wishlist.some(w => w.id === currentProduct.id);
  const wBtn = document.getElementById('detailWishlistBtn');
  const wcBtn = document.getElementById('btnWishlist');
  if (inWishlist) {
    wBtn.classList.add('active'); wBtn.innerHTML = '<i class="fas fa-heart"></i>';
    wcBtn.classList.add('active'); wcBtn.innerHTML = '<i class="fas fa-heart"></i> WISHLISTED';
  } else {
    wBtn.classList.remove('active'); wBtn.innerHTML = '<i class="far fa-heart"></i>';
    wcBtn.classList.remove('active'); wcBtn.innerHTML = '<i class="far fa-heart"></i> WISHLIST';
  }

  // Similar products
  const similar = PRODUCTS.filter(p => p.id !== currentProduct.id && (p.category === currentProduct.category || p.gender === currentProduct.gender)).slice(0, 6);
  renderProductRow('similarProducts', similar);

  showPage('detail');
}

function changeMainImg(src, el) {
  document.getElementById('mainProductImg').src = src;
  document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function selectSize(el, size) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  selectedSize = size;
}

function addToCartFromDetail() {
  if (!selectedSize && currentProduct.sizes.length > 1) {
    showToast('Please select a size first!', 'pink');
    document.getElementById('detailSizes').style.border = '2px solid var(--pink)';
    setTimeout(() => { document.getElementById('detailSizes').style.border = ''; }, 2000);
    return;
  }
  addToCart(currentProduct, selectedSize || currentProduct.sizes[0]);
}

function toggleDetailWishlist() {
  toggleWishlistById(currentProduct.id, null);
  const inWishlist = wishlist.some(w => w.id === currentProduct.id);
  const wBtn = document.getElementById('detailWishlistBtn');
  const wcBtn = document.getElementById('btnWishlist');
  if (inWishlist) {
    wBtn.classList.add('active'); wBtn.innerHTML = '<i class="fas fa-heart"></i>';
    wcBtn.classList.add('active'); wcBtn.innerHTML = '<i class="fas fa-heart"></i> WISHLISTED';
  } else {
    wBtn.classList.remove('active'); wBtn.innerHTML = '<i class="far fa-heart"></i>';
    wcBtn.classList.remove('active'); wcBtn.innerHTML = '<i class="far fa-heart"></i> WISHLIST';
  }
}

function checkDelivery() {
  const pin = document.getElementById('pincodeInput').value;
  if (pin.length !== 6 || isNaN(pin)) {
    document.getElementById('deliveryMsg').textContent = 'Please enter a valid 6-digit pincode.';
    document.getElementById('deliveryMsg').style.color = 'var(--pink)';
    return;
  }
  document.getElementById('deliveryMsg').textContent = `✓ Delivery available by ${getDeliveryDate()}. Free delivery on orders above ₹499.`;
  document.getElementById('deliveryMsg').style.color = 'var(--green)';
}

function getDeliveryDate() {
  const d = new Date();
  d.setDate(d.getDate() + 3 + Math.floor(Math.random() * 3));
  return d.toDateString();
}

/* ────────────────────────────────────────────
   CART
──────────────────────────────────────────── */
function addToCart(product, size) {
  const existing = cart.find(c => c.id === product.id && c.size === size);
  if (existing) {
    existing.qty += 1;
    showToast(`Quantity updated in bag!`, 'green');
  } else {
    cart.push({ ...product, size: size, qty: 1 });
    showToast(`Added to bag!`, 'green');
  }
  saveCart();
  updateBadges();
}

function saveCart() {
  localStorage.setItem('myn_cart', JSON.stringify(cart));
}

function renderCart() {
  updateBadges();
  const container = document.getElementById('cartItems');
  const emptyCart = document.getElementById('emptyCart');

  if (cart.length === 0) {
    container.innerHTML = '';
    emptyCart.style.display = 'flex';
    document.getElementById('cartItemCount').textContent = '0';
    updatePriceDetails();
    return;
  }
  emptyCart.style.display = 'none';
  document.getElementById('cartItemCount').textContent = cart.reduce((s,c) => s + c.qty, 0);

  container.innerHTML = cart.map((item, idx) => `
    <div class="cart-item" id="ci-${idx}">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" onclick="openProduct(${item.id})" onerror="this.src='https://via.placeholder.com/200x280/f0f0f0/999?text=No+Image'" />
      <div class="cart-item-info">
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">Size: <span>${item.size}</span></div>
        <div class="qty-wrap">
          <div class="qty-btn" onclick="changeQty(${idx}, -1)">−</div>
          <div class="qty-val">${item.qty}</div>
          <div class="qty-btn" onclick="changeQty(${idx}, 1)">+</div>
        </div>
        <div class="cart-item-prices">
          <span class="cart-price">₹${(item.price * item.qty).toLocaleString()}</span>
          <span class="cart-mrp">₹${(item.mrp * item.qty).toLocaleString()}</span>
          <span class="cart-off">${item.off}% off</span>
        </div>
        <div class="cart-item-actions">
          <button class="cart-action-btn" onclick="removeFromCart(${idx})">REMOVE</button>
          <button class="cart-action-btn" onclick="moveToWishlist(${idx})">MOVE TO WISHLIST</button>
        </div>
      </div>
      <span class="cart-remove" onclick="removeFromCart(${idx})">×</span>
    </div>
  `).join('');

  updatePriceDetails();
}

function changeQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) { cart.splice(idx, 1); }
  saveCart();
  renderCart();
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  saveCart();
  renderCart();
  showToast('Item removed from bag');
}

function moveToWishlist(idx) {
  const item = cart[idx];
  if (!wishlist.some(w => w.id === item.id)) {
    wishlist.push(item);
    saveWishlist();
  }
  cart.splice(idx, 1);
  saveCart();
  renderCart();
  showToast('Moved to wishlist', 'pink');
  updateBadges();
}

function updatePriceDetails() {
  const totalMrp = cart.reduce((s,c) => s + c.mrp * c.qty, 0);
  const totalPrice = cart.reduce((s,c) => s + c.price * c.qty, 0);
  const discountAmt = totalMrp - totalPrice;
  const shipping = totalPrice >= 499 ? 0 : 49;
  const fee = cart.length > 0 ? 20 : 0;
  const total = totalPrice - couponDiscount + shipping + fee;
  const savings = discountAmt + couponDiscount;

  document.getElementById('pdItemCount').textContent = cart.reduce((s,c) => s + c.qty, 0);
  document.getElementById('pdMrp').textContent = `₹${totalMrp.toLocaleString()}`;
  document.getElementById('pdDiscount').textContent = `-₹${discountAmt.toLocaleString()}`;
  document.getElementById('pdCoupon').textContent = couponDiscount > 0 ? `-₹${couponDiscount.toLocaleString()}` : '-₹0';
  document.getElementById('pdFee').textContent = fee > 0 ? `₹${fee}` : '₹0';
  document.getElementById('pdShipping').innerHTML = shipping === 0
    ? `₹0 <small class="green">FREE</small>` : `₹${shipping}`;
  document.getElementById('pdTotal').textContent = `₹${Math.max(0,total).toLocaleString()}`;

  const savingsMsg = document.getElementById('savingsMsg');
  if (savings > 0 && cart.length > 0) {
    savingsMsg.textContent = `🎉 You will save ₹${savings.toLocaleString()} on this order`;
    savingsMsg.style.display = 'block';
  } else {
    savingsMsg.style.display = 'none';
  }
}

/* ────────────────────────────────────────────
   COUPON
──────────────────────────────────────────── */
const COUPONS = { 'FIRST500': 500, 'SAVE100': 100, 'FLAT200': 200 };

function applyCoupon() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  const msgEl = document.getElementById('couponMsg');
  if (COUPONS[code]) {
    couponDiscount = COUPONS[code];
    msgEl.textContent = `✓ Coupon "${code}" applied! You saved ₹${couponDiscount}`;
    msgEl.className = 'coupon-msg success';
    updatePriceDetails();
    showToast(`Coupon applied! ₹${couponDiscount} off`, 'green');
  } else {
    couponDiscount = 0;
    msgEl.textContent = code ? 'Invalid coupon code. Try: FIRST500, SAVE100, FLAT200' : 'Please enter a coupon code';
    msgEl.className = 'coupon-msg error';
    updatePriceDetails();
  }
}

/* ────────────────────────────────────────────
   WISHLIST
──────────────────────────────────────────── */
function saveWishlist() {
  localStorage.setItem('myn_wishlist', JSON.stringify(wishlist));
}

function toggleWishlistById(id, btnEl) {
  const idx = wishlist.findIndex(w => w.id === id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
    if (btnEl) {
      btnEl.classList.remove('active');
      btnEl.innerHTML = '<i class="far fa-heart"></i>';
    }
  } else {
    const product = PRODUCTS.find(p => p.id === id);
    if (product) {
      wishlist.push(product);
      showToast('Added to wishlist!', 'pink');
      if (btnEl) {
        btnEl.classList.add('active');
        btnEl.innerHTML = '<i class="fas fa-heart"></i>';
      }
    }
  }
  saveWishlist();
  updateBadges();
  if (currentPage === 'wishlist') renderWishlist();
}

function renderWishlist() {
  updateBadges();
  const grid = document.getElementById('wishlistGrid');
  const empty = document.getElementById('emptyWishlist');
  document.getElementById('wishlistCount').textContent = wishlist.length;

  if (wishlist.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'flex';
    return;
  }
  empty.style.display = 'none';
  grid.innerHTML = wishlist.map(p => {
    const inCart = cart.some(c => c.id === p.id);
    return `
      <div class="product-card">
        <div class="product-img-wrap" onclick="openProduct(${p.id})">
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x500/f0f0f0/999?text=No+Image'" />
          <div class="product-card-wishlist active" onclick="event.stopPropagation(); toggleWishlistById(${p.id}, this)">
            <i class="fas fa-heart"></i>
          </div>
          ${p.tag ? `<div class="product-tag">${p.tag}</div>` : ''}
        </div>
        <div class="product-info" onclick="openProduct(${p.id})" style="cursor:pointer">
          <div class="product-brand">${p.brand}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-prices">
            <span class="product-price">₹${p.price.toLocaleString()}</span>
            <span class="product-mrp">₹${p.mrp.toLocaleString()}</span>
            <span class="product-off">(${p.off}% OFF)</span>
          </div>
        </div>
        <button class="wishlist-move-btn" onclick="moveWishlistToCart(${p.id})">
          ${inCart ? '✓ ADDED TO BAG' : 'MOVE TO BAG'}
        </button>
      </div>`;
  }).join('');
}

function moveWishlistToCart(id) {
  const product = wishlist.find(w => w.id === id);
  if (product) {
    addToCart(product, product.sizes[0]);
    const idx = wishlist.findIndex(w => w.id === id);
    wishlist.splice(idx, 1);
    saveWishlist();
    renderWishlist();
    updateBadges();
  }
}

/* ────────────────────────────────────────────
   BADGES
──────────────────────────────────────────── */
function updateBadges() {
  const cartCount = cart.reduce((s,c) => s + c.qty, 0);
  const cartBadge = document.getElementById('cartBadge');
  const wishBadge = document.getElementById('wishlistBadge');

  cartBadge.textContent = cartCount;
  cartBadge.className = 'badge' + (cartCount > 0 ? ' show' : '');

  wishBadge.textContent = wishlist.length;
  wishBadge.className = 'badge' + (wishlist.length > 0 ? ' show' : '');
}

/* ────────────────────────────────────────────
   ORDER PLACEMENT
──────────────────────────────────────────── */
function placeOrder() {
  if (cart.length === 0) { showToast('Your bag is empty!', 'pink'); return; }
  const orderId = 'MYN' + Date.now().toString().slice(-8);
  document.getElementById('orderId').textContent = orderId;
  document.getElementById('orderModal').style.display = 'flex';
}

function closeOrderModal() {
  cart = [];
  couponDiscount = 0;
  saveCart();
  updateBadges();
  document.getElementById('orderModal').style.display = 'none';
  showPage('home');
}

/* ────────────────────────────────────────────
   SEARCH
──────────────────────────────────────────── */
document.getElementById('searchInput').addEventListener('input', function() {
  const val = this.value.toLowerCase().trim();
  const sugg = document.getElementById('searchSuggestions');
  if (!val) { sugg.classList.remove('active'); return; }

  const matches = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(val) ||
    p.brand.toLowerCase().includes(val) ||
    p.category.toLowerCase().includes(val)
  ).slice(0, 6);

  if (!matches.length) { sugg.classList.remove('active'); return; }

  sugg.innerHTML = matches.map(p => `
    <div class="suggestion-item" onclick="openProduct(${p.id})">
      <i class="fas fa-search"></i>
      <span><strong>${p.brand}</strong> ${p.name} — ₹${p.price.toLocaleString()}</span>
    </div>
  `).join('');
  sugg.classList.add('active');
});

document.getElementById('searchInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('searchSuggestions').classList.remove('active');
    activeFilters.gender = []; activeFilters.category = []; activeFilters.brand = [];
    showPage('listing');
    applyFilters();
  }
});

document.addEventListener('click', function(e) {
  if (!e.target.closest('.nav-search')) {
    document.getElementById('searchSuggestions').classList.remove('active');
  }
});

/* ────────────────────────────────────────────
   HERO SLIDER
──────────────────────────────────────────── */
function goToSlide(n) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function changeSlide(dir) {
  goToSlide(currentSlide + dir);
}

setInterval(() => changeSlide(1), 4500);

/* ────────────────────────────────────────────
   COUNTDOWN TIMER
──────────────────────────────────────────── */
let countdown = { h: 8, m: 45, s: 30 };
setInterval(() => {
  countdown.s--;
  if (countdown.s < 0) { countdown.s = 59; countdown.m--; }
  if (countdown.m < 0) { countdown.m = 59; countdown.h--; }
  if (countdown.h < 0) { countdown.h = 23; countdown.m = 59; countdown.s = 59; }
  const ph = el => String(el).padStart(2,'0');
  document.getElementById('hours').textContent = ph(countdown.h);
  document.getElementById('mins').textContent = ph(countdown.m);
  document.getElementById('secs').textContent = ph(countdown.s);
}, 1000);

/* ────────────────────────────────────────────
   AUTH
──────────────────────────────────────────── */
function switchAuthTab(tab) {
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('signupForm').style.display = tab === 'signup' ? 'block' : 'none';
  document.getElementById('tabLogin').className = 'auth-tab' + (tab === 'login' ? ' active' : '');
  document.getElementById('tabSignup').className = 'auth-tab' + (tab === 'signup' ? ' active' : '');
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;
  const msgEl = document.getElementById('loginMsg');

  if (!email || !pass) {
    msgEl.textContent = 'Please fill all fields.';
    msgEl.className = 'auth-msg error';
    return;
  }
  msgEl.textContent = `✓ Welcome back! Logged in successfully.`;
  msgEl.className = 'auth-msg success';
  setTimeout(() => showPage('home'), 1500);
}

function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('signupName').value;
  const msgEl = document.getElementById('signupMsg');
  if (!name) {
    msgEl.textContent = 'Please fill all fields.';
    msgEl.className = 'auth-msg error';
    return;
  }
  msgEl.textContent = `✓ Account created! Welcome ${name}!`;
  msgEl.className = 'auth-msg success';
  setTimeout(() => showPage('home'), 1500);
}

function togglePass(inputId, iconEl) {
  const inp = document.getElementById(inputId);
  if (inp.type === 'password') {
    inp.type = 'text';
    iconEl.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    inp.type = 'password';
    iconEl.classList.replace('fa-eye-slash', 'fa-eye');
  }
}

/* ────────────────────────────────────────────
   TOAST
──────────────────────────────────────────── */
let toastTimer;
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast' + (type ? ' ' + type : '') + ' show';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.classList.remove('show'); }, 2800);
}

/* ────────────────────────────────────────────
   INIT
──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  updateBadges();
  renderHomePage();
});
