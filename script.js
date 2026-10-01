const products = [
  {id:'summit-jacket',name:'Apollo Summit Jacket',price:1499,colour:'Black',category:'Jackets',audience:['Men'],image:'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85',description:'A weather-ready outer layer with a clean profile, considered storage and room to keep moving.',newest:8},
  {id:'essential-hoodie',name:'Apollo Essential Hoodie',price:899,colour:'Light Blue',category:'Tops',audience:['Men'],image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85',description:'Soft, heavyweight comfort with a relaxed shape made for the daily rotation.',newest:7},
  {id:'trail-cargo',name:'Apollo Trail Cargo Pants',price:999,colour:'Olive',category:'Bottoms',audience:['Men'],image:'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=85',description:'Hard-wearing utility pants with a straightforward fit and useful pockets where you need them.',newest:6},
  {id:'core-tee',name:'Apollo Core T-Shirt',price:499,colour:'White',category:'Tops',audience:['Women'],image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85',description:'An everyday cotton tee with a weighty hand feel and an easy, regular fit.',newest:5},
  {id:'explorer-jacket',name:'Apollo Explorer Jacket',price:1299,colour:'Sand',category:'Jackets',audience:['Women'],image:'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=900&q=85',description:'A versatile mid-layer in a quiet sand tone, built to take the edge off changing weather.',newest:4},
  {id:'everyday-shorts',name:'Apollo Everyday Shorts',price:599,colour:'Coral',category:'Bottoms',audience:['Women'],image:'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=900&q=85',description:'Lightweight pull-on shorts with an easy fit for warm-weather days and open plans.',newest:3},
  {id:'utility-vest',name:'Apollo Utility Vest',price:799,colour:'Black',category:'Accessories',type:'Vests',audience:[],image:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85',description:'A functional extra layer with utility pockets and a clean, adaptable silhouette.',newest:2},
  {id:'classic-cap',name:'Apollo Classic Cap',price:299,originalPrice:399,colour:'Light Blue',category:'Accessories',type:'Caps',audience:[],image:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=85',description:'A six-panel everyday cap with an adjustable back strap, now in Summer Specials.',newest:1,summerSpecial:true,oneSize:true},
  {id:'switchback-shell',name:'Apollo Switchback Shell',price:1699,colour:'Olive',category:'Jackets',audience:['Men'],image:'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85',description:'A lightweight technical shell with a protective hood and an easy layer-ready fit.',newest:12},
  {id:'alpine-insulated',name:'Apollo Alpine Insulated Jacket',price:1899,colour:'Black',category:'Jackets',audience:['Men'],image:'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=85',description:'A warm, low-bulk layer built for cold starts and changing conditions.',newest:11},
  {id:'solstice-jacket',name:'Apollo Solstice Track Jacket',price:1399,colour:'Light Blue',category:'Jackets',audience:['Women'],image:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85',description:'A clean-lined light jacket with a soft finish for cool evenings and daily wear.',newest:10},
  {id:'sunline-tee',name:'Apollo Sunline Tee',price:399,originalPrice:499,colour:'White',category:'Tops',audience:['Women'],image:'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85',description:'A breathable cotton staple for warm days, now part of our Summer Specials.',newest:9,summerSpecial:true},
  {id:'trail-run-shorts',name:'Apollo Trail Run Shorts',price:449,originalPrice:599,colour:'Coral',category:'Bottoms',audience:['Men'],image:'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85',description:'Quick-drying trail shorts with a light feel, made for heat and long miles.',newest:6,summerSpecial:true},
  {id:'canyon-cap',name:'Apollo Canyon Cap',price:299,originalPrice:399,colour:'Sand',category:'Accessories',type:'Caps',audience:[],image:'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85',description:'A light, adjustable trail cap with an easy fit for long sunny days.',newest:5,summerSpecial:true,oneSize:true},
  {id:'drift-watch',name:'Apollo Drift Watch',price:899,originalPrice:1099,colour:'Black',category:'Accessories',type:'Watches',audience:[],image:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=85',description:'A clean, everyday field watch with a clear dial and a durable strap.',newest:4,summerSpecial:true,oneSize:true},
  {id:'tide-watch',name:'Apollo Tide Watch',price:1099,originalPrice:1299,colour:'Silver',category:'Accessories',type:'Watches',audience:[],image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85',description:'A versatile stainless-tone watch designed to move from trail days to daily wear.',newest:3,summerSpecial:true,oneSize:true},
  {id:'ridge-cargo',name:'Apollo Ridge Cargo Pants',price:1099,colour:'Olive',category:'Bottoms',type:'Cargo Pants',audience:['Men'],image:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=85',description:'Relaxed utility cargos with articulated knees and secure trail-ready pockets.',newest:14},
  {id:'city-denim',name:'Apollo City Denim Pants',price:999,colour:'Indigo',category:'Bottoms',type:'Jeans',audience:['Men'],image:'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85',description:'A durable straight-leg denim fit made for everyday movement.',newest:13},
  {id:'signal-graphic-tee',name:'Apollo Signal Graphic Tee',price:599,colour:'Black',category:'Tops',type:'Graphic Tees',audience:['Men'],image:'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=900&q=85',description:'A heavyweight graphic tee with an original Apollo field-mark print.',newest:12},
  {id:'meridian-dress',name:'Apollo Meridian Dress',price:1099,colour:'Black',category:'Dresses',type:'Dresses',audience:['Women'],image:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85',description:'A relaxed, easy-moving dress with clean lines and useful everyday comfort.',newest:17},
  {id:'solar-sundress',name:'Apollo Solar Sundress',price:999,colour:'Coral',category:'Sundresses',type:'Sundresses',audience:['Women'],image:'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85',description:'A light, breathable sundress with a simple shape for hot-weather days.',newest:16},
  {id:'form-vest',name:'Apollo Form Utility Vest',price:899,colour:'Sand',category:'Vests',type:'Vests',audience:['Women'],image:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85',description:'A lightweight utility vest with clean pocketing and a flexible fit.',newest:15},
  {id:'ridge-skirt',name:'Apollo Ridge Trail Skirt',price:799,colour:'Olive',category:'Skirts',type:'Skirts',audience:['Women'],image:'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=85',description:'A movement-ready trail skirt with a comfortable waistband and easy drape.',newest:14},
  {id:'switchback-skirt',name:'Apollo Switchback Skirt',price:749,colour:'Black',category:'Skirts',type:'Skirts',audience:['Women'],image:'https://images.unsplash.com/photo-1551163943-3f6a855db40f?auto=format&fit=crop&w=900&q=85',description:'A versatile everyday skirt with a streamlined shape and practical length.',newest:13},
  {id:'sunline-necklace',name:'Apollo Sunline Necklace',price:499,colour:'Gold',category:'Accessories',type:'Necklaces',audience:[],image:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85',description:'A minimal, durable chain necklace designed as an everyday finishing detail.',newest:12,oneSize:true},
  {id:'summit-sunglasses',name:'Apollo Summit Sunglasses',price:699,colour:'Black',category:'Accessories',type:'Sunglasses',audience:[],image:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85',description:'Lightweight sunglasses with full-coverage lenses for bright days outside.',newest:11,oneSize:true}
];

const productGrid = document.querySelector('#product-grid');
const emptyState = document.querySelector('#empty-state');
const resultCount = document.querySelector('#result-count');
const collectionTitle = document.querySelector('#featured-title');
const sortSelect = document.querySelector('#sort-select');
const searchInput = document.querySelector('#site-search');
const searchPanel = document.querySelector('#search-panel');
const cartDrawer = document.querySelector('#cart-drawer');
const cartItemsElement = document.querySelector('#cart-items');
const cartEmpty = document.querySelector('#cart-empty');
const cartSubtotal = document.querySelector('#cart-subtotal');
const toast = document.querySelector('#toast');
const headerActions = document.querySelector('.header-actions');
headerActions?.querySelector('.search-trigger')?.insertAdjacentHTML('afterend','<button class="icon-button wishlist-trigger" type="button" aria-label="Open wishlist" aria-expanded="false" aria-controls="wishlist-drawer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.7c0 5-8.8 10.1-8.8 10.1S3.2 13.7 3.2 8.7a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8Z"/></svg><span class="wishlist-count" aria-live="polite">0</span></button>');
document.body.insertAdjacentHTML('beforeend','<div class="wishlist-backdrop" id="wishlist-backdrop" hidden></div><aside class="cart-drawer wishlist-drawer" id="wishlist-drawer" aria-labelledby="wishlist-title" aria-hidden="true" inert><div class="drawer-header"><div><p class="eyebrow">YOUR FAVOURITES</p><h2 id="wishlist-title">WISHLIST <span class="wishlist-total">(0)</span></h2></div><button class="icon-button close-wishlist" type="button" aria-label="Close wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div><div class="wishlist-items" id="wishlist-items"></div><div class="wishlist-empty" id="wishlist-empty"><p>Your wishlist is empty.</p><span>Save pieces you would like to revisit.</span></div></aside>');
const wishlistDrawer = document.querySelector('#wishlist-drawer');
const wishlistItemsElement = document.querySelector('#wishlist-items');
const wishlistEmpty = document.querySelector('#wishlist-empty');
const wishlistCount = document.querySelector('.wishlist-count');
let activeFilter = 'All';
let searchTerm = new URLSearchParams(location.search).get('q') || '';
const pageView = document.body.dataset.view || 'shop';
// Footer catalog links pass a sort mode in the query string.
const requestedSort = new URLSearchParams(location.search).get('sort');
if (sortSelect && ['featured','low','high','newest'].includes(requestedSort)) sortSelect.value = requestedSort;
let cart = loadCart();
let wishlist = loadWishlist();
let selectedProductId = null;
let toastTimer;
if (searchInput) searchInput.value = searchTerm;

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem('apollo-cart') || '[]');
    return Array.isArray(saved) ? saved.filter(line => products.some(product => product.id === line.id) && Number.isInteger(line.quantity) && line.quantity > 0) : [];
  } catch {
    return [];
  }
}

function loadWishlist() {
  try {
    const saved = JSON.parse(localStorage.getItem('apollo-wishlist') || '[]');
    return new Set(Array.isArray(saved) ? saved.filter(id => products.some(product => product.id === id)) : []);
  } catch {
    return new Set();
  }
}

function money(amount) {
  return `R${amount.toLocaleString('en-ZA')}`;
}

function productCard(product, arrival = false) {
  const card = document.createElement(arrival ? 'article' : 'article');
  card.className = arrival ? 'mini-product' : 'product-card';
  card.dataset.productId = product.id;
  if (arrival) {
    card.innerHTML = `<div class="mini-product-image"><span class="product-badge">NEW</span><img src="${product.image}" alt="${product.name}" loading="lazy"></div><p>${product.name}</p><span>${money(product.price)}</span>`;
  } else {
    const summerBadge = product.summerSpecial ? '<span class="product-badge">SUMMER SPECIAL</span>' : '';
    const priceMarkup = product.originalPrice ? `<span class="product-price"><strong>${money(product.price)}</strong><del>${money(product.originalPrice)}</del></span>` : `<span class="product-price">${money(product.price)}</span>`;
    const isWishlisted = wishlist.has(product.id);
    card.innerHTML = `<div class="product-image-wrap">${summerBadge}<span class="photo-brand" aria-hidden="true">APOLLO <i>FIELD EQUIPMENT</i></span><img src="${product.image}" alt="${product.name}" loading="lazy"><button class="heart-button${isWishlisted ? ' is-loved' : ''}" type="button" aria-label="${isWishlisted ? 'Remove' : 'Add'} ${product.name} ${isWishlisted ? 'from' : 'to'} wishlist" aria-pressed="${isWishlisted}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.7c0 5-8.8 10.1-8.8 10.1S3.2 13.7 3.2 8.7a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8Z"/></svg></button><button class="product-quick" type="button">QUICK VIEW</button></div><div class="product-info"><div class="product-title-row"><h3 class="product-name">${product.name}</h3>${priceMarkup}</div><p class="product-colour">${product.colour}</p><button class="add-button" type="button" data-add="${product.id}">ADD TO CART <span aria-hidden="true">+</span></button></div>`;
  }
  return card;
}

function getVisibleProducts() {
  const terms = searchTerm.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const visible = products.filter(product => {
    const inPage = pageView === 'men' ? product.audience.includes('Men') && product.category !== 'Accessories'
      : pageView === 'women' ? product.audience.includes('Women') && product.category !== 'Accessories'
      : pageView === 'accessories' ? product.category === 'Accessories'
      : pageView === 'summer-specials' ? product.summerSpecial === true
      : true;
    const matchesFilter = activeFilter === 'All' || (activeFilter === 'Summer Specials' ? product.summerSpecial === true : product.category === activeFilter || product.type === activeFilter);
    const searchableText = `${product.name} ${product.category} ${product.type || ''} ${product.colour} ${product.audience.join(' ')} ${product.description} ${product.summerSpecial ? 'summer specials sale' : ''}`.toLowerCase();
    const matchesSearch = terms.every(term => searchableText.includes(term));
    return inPage && matchesFilter && matchesSearch;
  });
  if (sortSelect.value === 'low') visible.sort((a,b) => a.price - b.price);
  if (sortSelect.value === 'high') visible.sort((a,b) => b.price - a.price);
  if (sortSelect.value === 'newest') visible.sort((a,b) => b.newest - a.newest);
  return visible;
}

function renderProducts() {
  if (!productGrid) return;
  const visible = getVisibleProducts();
  productGrid.replaceChildren(...visible.map(product => productCard(product)));
  resultCount.textContent = String(visible.length).padStart(2,'0');
  const pageTitles = {shop:'SHOP THE COLLECTION',men:"MEN'S CLOTHING",women:"WOMEN'S CLOTHING",accessories:'ACCESSORIES', 'summer-specials':'SUMMER SPECIALS'};
  const titles = {All:pageTitles[pageView] || 'SHOP THE COLLECTION',Accessories:'ACCESSORIES',Jackets:'JACKETS',Tops:'TOPS',Bottoms:'BOTTOMS','Summer Specials':'SUMMER SPECIALS'};
  collectionTitle.textContent = titles[activeFilter] || activeFilter.toUpperCase();
  emptyState.hidden = visible.length !== 0;
  productGrid.hidden = visible.length === 0;
}

function persistCart() {
  try {
    localStorage.setItem('apollo-cart', JSON.stringify(cart));
  } catch {
    showToast('Bag changes will not persist in this browser session');
  }
  renderCart();
}

function renderCart() {
  const totalQuantity = cart.reduce((sum,line) => sum + line.quantity,0);
  document.querySelector('.cart-count').textContent = totalQuantity;
  document.querySelector('.drawer-count').textContent = `(${totalQuantity})`;
  cartEmpty.hidden = cart.length > 0;
  cartItemsElement.hidden = cart.length === 0;
  cartItemsElement.replaceChildren(...cart.map(line => {
    const product = products.find(item => item.id === line.id);
    const row = document.createElement('article');
    row.className = 'cart-line';
    row.innerHTML = `<img class="cart-line-image" src="${product.image}" alt="${product.name}"><div class="cart-line-detail"><strong>${product.name}</strong><span>${product.colour}</span><span class="cart-line-price">${money(product.price)}</span><div class="cart-qty" aria-label="Quantity for ${product.name}"><button type="button" data-quantity="-1" data-id="${product.id}" aria-label="Decrease quantity">−</button><span>${line.quantity}</span><button type="button" data-quantity="1" data-id="${product.id}" aria-label="Increase quantity">+</button></div></div><button class="remove-line" type="button" data-remove="${product.id}" aria-label="Remove ${product.name}">×</button>`;
    return row;
  }));
  cartSubtotal.textContent = money(cart.reduce((sum,line) => sum + products.find(product => product.id === line.id).price * line.quantity,0));
}

function renderWishlist() {
  const savedProducts = products.filter(product => wishlist.has(product.id));
  wishlistCount.textContent = String(savedProducts.length);
  document.querySelector('.wishlist-total').textContent = `(${savedProducts.length})`;
  wishlistEmpty.hidden = savedProducts.length > 0;
  wishlistItemsElement.hidden = savedProducts.length === 0;
  wishlistItemsElement.replaceChildren(...savedProducts.map(product => {
    const row = document.createElement('article');
    row.className = 'wishlist-line';
    row.innerHTML = `<img src="${product.image}" alt="${product.name}"><div class="wishlist-line-detail"><strong>${product.name}</strong><span>${product.colour}</span><span class="wishlist-line-price">${money(product.price)}</span><button type="button" class="wishlist-add" data-wishlist-add="${product.id}">ADD TO BAG</button></div><button type="button" class="remove-line" data-wishlist-remove="${product.id}" aria-label="Remove ${product.name} from wishlist">×</button>`;
    return row;
  }));
}

function persistWishlist() {
  try {
    localStorage.setItem('apollo-wishlist', JSON.stringify([...wishlist]));
  } catch {
    showToast('Wishlist changes will not persist in this browser session');
  }
  renderWishlist();
  renderProducts();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'),2300);
}

function addToCart(id, quantity = 1) {
  const line = cart.find(item => item.id === id);
  if (line) line.quantity += quantity;
  else cart.push({id,quantity});
  persistCart();
  openCart();
  showToast('Added to your bag');
}

function openCart() {
  closeWishlist();
  closeSearch();
  cartDrawer.classList.add('is-open');
  cartDrawer.setAttribute('aria-hidden','false');
  cartDrawer.inert = false;
  document.querySelector('#drawer-backdrop').hidden = false;
  document.body.classList.add('locked');
  document.querySelector('.close-cart').focus();
}

function closeCart() {
  cartDrawer.classList.remove('is-open');
  cartDrawer.setAttribute('aria-hidden','true');
  cartDrawer.inert = true;
  document.querySelector('#drawer-backdrop').hidden = true;
  if (!wishlistDrawer.classList.contains('is-open') && !document.querySelector('#quick-view').classList.contains('is-open')) document.body.classList.remove('locked');
}

function openWishlist() {
  closeCart();
  closeSearch();
  renderWishlist();
  wishlistDrawer.classList.add('is-open');
  wishlistDrawer.setAttribute('aria-hidden','false');
  wishlistDrawer.inert = false;
  document.querySelector('#wishlist-backdrop').hidden = false;
  document.querySelector('.wishlist-trigger').setAttribute('aria-expanded','true');
  document.body.classList.add('locked');
  document.querySelector('.close-wishlist').focus();
}

function closeWishlist() {
  if (!wishlistDrawer.classList.contains('is-open')) return;
  wishlistDrawer.classList.remove('is-open');
  wishlistDrawer.setAttribute('aria-hidden','true');
  wishlistDrawer.inert = true;
  document.querySelector('#wishlist-backdrop').hidden = true;
  document.querySelector('.wishlist-trigger').setAttribute('aria-expanded','false');
  if (!cartDrawer.classList.contains('is-open') && !document.querySelector('#quick-view').classList.contains('is-open')) document.body.classList.remove('locked');
}

function openQuickView(product) {
  selectedProductId = product.id;
  document.querySelector('#quick-image').src = product.image;
  document.querySelector('#quick-image').alt = product.name;
  document.querySelector('#quick-category').textContent = `${product.category.toUpperCase()} / APOLLO DAILY SYSTEM`;
  document.querySelector('#quick-title').textContent = product.name;
  document.querySelector('#quick-price').innerHTML = product.originalPrice ? `${money(product.price)} <del>${money(product.originalPrice)}</del>` : money(product.price);
  document.querySelector('#quick-description').textContent = product.description;
  document.querySelector('#quick-colour').textContent = product.colour;
  document.querySelector('.size-heading span').textContent = product.oneSize ? 'ONE SIZE' : 'SELECT SIZE';
  document.querySelector('.size-heading a').hidden = product.oneSize;
  document.querySelector('.size-options').hidden = product.oneSize;
  document.querySelector('#quick-quantity').value = '1';
  document.querySelector('.quick-feedback').textContent = '';
  document.querySelectorAll('.size-options button').forEach(button => button.classList.toggle('selected',button.textContent === 'M'));
  const modal = document.querySelector('#quick-view');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden','false');
  modal.inert = false;
  document.querySelector('#modal-backdrop').hidden = false;
  document.body.classList.add('locked');
  document.querySelector('.quick-close').focus();
}

function closeQuickView() {
  const modal = document.querySelector('#quick-view');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden','true');
  modal.inert = true;
  document.querySelector('#modal-backdrop').hidden = true;
  document.body.classList.remove('locked');
}

function closeSearch() {
  searchPanel.hidden = true;
  const trigger = document.querySelector('.search-trigger');
  trigger.setAttribute('aria-expanded','false');
  trigger.focus();
}

function configureFilters() {
  const filterList = document.querySelector('.filter-list');
  if (!filterList) return;
  const optionsByView = {
    shop:['All','Jackets','Tops','Bottoms','Dresses','Sundresses','Skirts','Vests','Accessories','Summer Specials'],
    men:['All','Jackets','Tops','Graphic Tees','Bottoms','Cargo Pants','Jeans'],
    women:['All','Jackets','Tops','Bottoms','Dresses','Sundresses','Vests','Skirts'],
    accessories:['All','Vests','Caps','Watches','Necklaces','Sunglasses','Summer Specials'],
    'summer-specials':['All','Tops','Bottoms','Accessories']
  };
  const labels = {All:pageView === 'men' ? "All Men's" : pageView === 'women' ? "All Women's" : pageView === 'accessories' ? 'All accessories' : pageView === 'summer-specials' ? 'All specials' : 'All'};
  filterList.replaceChildren(...(optionsByView[pageView] || optionsByView.shop).map(filter => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `filter-button${filter === 'Summer Specials' ? ' summer-filter' : ''}${filter === 'All' ? ' is-active' : ''}`;
    button.dataset.filter = filter;
    button.setAttribute('aria-pressed',String(filter === 'All'));
    button.textContent = labels[filter] || filter;
    return button;
  }));
}

configureFilters();
productGrid?.addEventListener('click',event => {
  const addButton = event.target.closest('[data-add]');
  const heartButton = event.target.closest('.heart-button');
  const card = event.target.closest('.product-card');
  if (addButton) { event.stopPropagation(); addToCart(addButton.dataset.add); return; }
  if (heartButton) {
    event.stopPropagation();
    const active = !wishlist.has(card.dataset.productId);
    if (active) wishlist.add(card.dataset.productId);
    else wishlist.delete(card.dataset.productId);
    persistWishlist();
    showToast(active ? 'Saved to your wishlist' : 'Removed from your wishlist');
    return;
  }
  if (card) openQuickView(products.find(product => product.id === card.dataset.productId));
});

document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click',() => {
  activeFilter = button.dataset.filter;
  document.querySelectorAll('.filter-button').forEach(filterButton => {
    const active = filterButton === button;
    filterButton.classList.toggle('is-active',active);
    filterButton.setAttribute('aria-pressed',String(active));
  });
  renderProducts();
}));
sortSelect?.addEventListener('change',renderProducts);
searchInput?.addEventListener('input',() => { searchTerm = searchInput.value; renderProducts(); });
document.querySelector('#search-form').addEventListener('submit',event => {
  event.preventDefault();
  searchTerm = searchInput.value;
  if (!productGrid) {
    window.location.href = `shop.html?q=${encodeURIComponent(searchTerm)}`;
    return;
  }
  renderProducts();
  closeSearch();
  document.querySelector('#collection').scrollIntoView({behavior:'smooth',block:'start'});
});
document.querySelector('#clear-search').addEventListener('click',() => {
  searchInput.value = '';
  searchTerm = '';
  renderProducts();
  searchInput.focus();
});

document.querySelector('.search-trigger').addEventListener('click',event => {
  const open = searchPanel.hidden;
  searchPanel.hidden = !open;
  event.currentTarget.setAttribute('aria-expanded',String(open));
  if (open) searchInput.focus();
});
document.querySelector('[data-close-search]').addEventListener('click',closeSearch);
document.querySelector('.bag-trigger').addEventListener('click',openCart);
document.querySelector('.wishlist-trigger').addEventListener('click',openWishlist);
document.querySelector('.close-wishlist').addEventListener('click',closeWishlist);
document.querySelector('#wishlist-backdrop').addEventListener('click',closeWishlist);
document.querySelector('.close-cart').addEventListener('click',closeCart);
document.querySelector('#drawer-backdrop').addEventListener('click',closeCart);
document.querySelector('.quick-close').addEventListener('click',closeQuickView);
document.querySelector('#modal-backdrop').addEventListener('click',closeQuickView);
document.querySelector('.quick-add').addEventListener('click',() => {
  const product = products.find(item => item.id === selectedProductId);
  const selectedSize = document.querySelector('.size-options button.selected');
  if (!product.oneSize && !selectedSize) { document.querySelector('.quick-feedback').textContent = 'Please select a size.'; return; }
  addToCart(selectedProductId,Number(document.querySelector('#quick-quantity').value));
  closeQuickView();
});
document.querySelector('.size-options').addEventListener('click',event => {
  const button = event.target.closest('button');
  if (!button) return;
  document.querySelectorAll('.size-options button').forEach(option => option.classList.toggle('selected',option === button));
  document.querySelector('.quick-feedback').textContent = '';
});

cartItemsElement.addEventListener('click',event => {
  const quantityButton = event.target.closest('[data-quantity]');
  const removeButton = event.target.closest('[data-remove]');
  if (quantityButton) {
    const line = cart.find(item => item.id === quantityButton.dataset.id);
    line.quantity += Number(quantityButton.dataset.quantity);
    if (line.quantity < 1) cart = cart.filter(item => item !== line);
    persistCart();
  }
  if (removeButton) { cart = cart.filter(item => item.id !== removeButton.dataset.remove); persistCart(); }
});
wishlistItemsElement.addEventListener('click',event => {
  const removeButton = event.target.closest('[data-wishlist-remove]');
  const addButton = event.target.closest('[data-wishlist-add]');
  if (removeButton) {
    wishlist.delete(removeButton.dataset.wishlistRemove);
    persistWishlist();
  }
  if (addButton) addToCart(addButton.dataset.wishlistAdd);
});
document.querySelector('[data-close-cart]').addEventListener('click',closeCart);
document.querySelector('.checkout-button').addEventListener('click',() => showToast('Checkout functionality coming soon.'));

document.querySelector('.menu-toggle').addEventListener('click',event => {
  const nav = document.querySelector('.primary-nav');
  const open = nav.classList.toggle('is-open');
  event.currentTarget.setAttribute('aria-expanded',String(open));
  event.currentTarget.setAttribute('aria-label',open ? 'Close navigation' : 'Open navigation');
});
document.querySelector('.primary-nav').addEventListener('click',event => {
  if (event.target.closest('a')) {
    document.querySelector('.primary-nav').classList.remove('is-open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
  }
});

document.addEventListener('keydown',event => {
  if (event.key === 'Escape') {
    if (document.querySelector('#quick-view').classList.contains('is-open')) closeQuickView();
    else if (cartDrawer.classList.contains('is-open')) closeCart();
    else if (wishlistDrawer.classList.contains('is-open')) closeWishlist();
    else if (!searchPanel.hidden) closeSearch();
    else {
      document.querySelector('.primary-nav').classList.remove('is-open');
      document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
    }
  }
});

renderProducts();
renderCart();
renderWishlist();
