// 1) PRODUCTS DATA (top of file)
const products = [
  {
    id: "B1",
    name: "The Ordinary Skin Care Set",
    category: "Beauty",
    price: 60000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Beauty\\B1.jpg"
  },
  {
    id: "B2",
    name: "Lumene Lip Gloss",
    category: "Beauty",
    price: 7000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Beauty\\B2.jpg"
  },
  {
    id: "B3",
    name: "Oh My Bod! Sunscreen",
    category: "Beauty",
    price: 15000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Beauty\\B3.jpg"
  },
  {
    id: "B4",
    name: "Tacogran Shampo",
    category: "Beauty",
    price: 17000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Beauty\\B4.jpg"
  },
  {
    id: "B5",
    name: "Aveeno Body Lotion",
    category: "Beauty",
    price: 13000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Beauty\\B5.jpg"
  },
  {
    id: "B6",
    name: "Prada Perfume",
    category: "Beauty",
    price: 70000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Beauty\\B6.jpg"
  },
  {
    id: "B7",
    name: "Elemis Facial Wash",
    category: "Beauty",
    price: 25000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Beauty\\B7.jpg"
  },
  {
    id: "B8",
    name: "Ela De Pure Gel Facial Cleanser",
    category: "Beauty",
    price: 27000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Beauty\\B8.jpg"
  },
  {
    id: "B9",
    name: "Centella Brightening Toner",
    category: "Beauty",
    price: 17000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Beauty\\B9.jpg"
  },
  {
    id: "B10",
    name: "Lash Paradise Mascara",
    category: "Beauty",
    price: 5000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Beauty\\B10.jpg"
  },
  {
    id: "E1",
    name: "ETA Electric Kettle",
    category: "Electronics",
    price: 35000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Electronics\\E1.jpg"
  },
  {
    id: "E2",
    name: "Iphone 16",
    category: "Electronics",
    price: 980000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Electronics\\E2.jpg"
  },
  {
    id: "E3",
    name: "Dual Speaker Set",
    category: "Electronics",
    price: 150000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Electronics\\E3.jpg"
  },
  {
    id: "E4",
    name: "Playsation 5",
    category: "Electronics",
    price: 490000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Electronics\\E4.jpg"
  },
  {
    id: "E5",
    name: "Custom Xbox Controller",
    category: "Electronics",
    price: 70000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Electronics\\E5.jpg"
  },
  {
    id: "E6",
    name: "Sony HeadSets",
    category: "Electronics",
    price: 80000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Electronics\\E6.jpg"
  },
  {
    id: "E7",
    name: "Aukey Earbuds",
    category: "Electronics",
    price: 25000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Electronics\\E7.jpg"
  },
  {
    id: "E8",
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 40000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Electronics\\E8.jpg"
  },
  {
    id: "E9",
    name: "Razer Gaming Mouse",
    category: "Electronics",
    price: 120000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Electronics\\E9.jpg"
  },
  {
    id: "E10",
    name: "Logitech Webcam",
    category: "Electronics",
    price: 25000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Electronics\\E10.jpg"
  },
  {
    id: "F1",
    name: "Plain White T-shirt",
    category: "Fashion",
    price: 7000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Fashion\\F1.jpg"
  },
  {
    id: "F2",
    name: "Blue Jeans",
    category: "Fashion",
    price: 18000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Fashion\\F2.jpg"
  },
  {
    id: "F3",
    name: "Nike Air Jordan 1",
    category: "Fashion",
    price: 100000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Fashion\\F3.jpg"
  },
  {
    id: "F4",
    name: "DIVRSN Track-suit",
    category: "Fashion",
    price: 80000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Fashion\\F4.jpg"
  },
  {
    id: "F5",
    name: "Rolex Watch",
    category: "Fashion",
    price: 4500000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Fashion\\F5.jpg"
  },
  {
    id: "F6",
    name: "Coach Bag",
    category: "Fashion",
    price: 600000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Fashion\\F6.jpg"
  },
  {
    id: "F7",
    name: "Vintage Belt",
    category: "Fashion",
    price: 15000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Fashion\\F7.jpg"
  },
  {
    id: "F8",
    name: "Baseball Cap",
    category: "Fashion",
    price: 9000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Fashion\\F8.jpg"
  },
  {
    id: "F9",
    name: "Addidas Football Boot",
    category: "Fashion",
    price: 90000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Fashion\\F9.jpg"
  },
  {
    id: "F10",
    name: "Black Long-Sleeve Shirt",
    category: "Fashion",
    price: 12000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Fashion\\F10.jpg"
  },
  {
    id: "G1",
    name: "Bag of Rice",
    category: "Groceries",
    price: 65000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Groceries\\G1.jpg"
  },
  {
    id: "G2",
    name: "Pack of Ramen",
    category: "Groceries",
    price: 8000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Groceries\\G2.jpg"
  },
  {
    id: "G3",
    name: "Olive Oil",
    category: "Groceries",
    price: 12000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Groceries\\G3.jpg"
  },
  {
    id: "G4",
    name: "Itambe MIlk",
    category: "Groceries",
    price: 6000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Groceries\\G4.jpg"
  },
  {
    id: "G5",
    name: "Apples",
    category: "Groceries",
    price: 300,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Groceries\\G5.jpg"
  },
  {
    id: "G6",
    name: "Bacardi 151",
    category: "Groceries",
    price: 63000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Groceries\\G6.jpg"
  },
  {
    id: "G7",
    name: "Brown Sugar",
    category: "Groceries",
    price: 4000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Groceries\\G7.jpg"
  },
  {
    id: "G8",
    name: "Bunch of Bananas",
    category: "Groceries",
    price: 700,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Groceries\\G8.jpg"
  },
  {
    id: "G9",
    name: "Digestive Biscuit",
    category: "Groceries",
    price: 3000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Groceries\\G9.jpg"
  },
  {
    id: "G10",
    name: "Crate of Eggs",
    category: "Groceries",
    price: 8000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Groceries\\G10.jpg"
  },
  {
    id: "H1",
    name: "Full Bed Set",
    category: "Home",
    price: 200000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Home\\H1.jpg"
  },
  {
    id: "H2",
    name: "Wooden Stool",
    category: "Home",
    price: 17000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Home\\H2.jpg"
  },
  {
    id: "H3",
    name: "Simple Vase",
    category: "Home",
    price: 9000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Home\\H3.jpg"
  },
  {
    id: "H4",
    name: "Couch",
    category: "Home",
    price: 50000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Home\\H4.jpg"
  },
  {
    id: "H5",
    name: "Coffee Table",
    category: "Home",
    price: 23000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Home\\H5.jpg"
  },
  {
    id: "H6",
    name: "Cupboard",
    category: "Home",
    price: 35000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Home\\H6.jpg"
  },
  {
    id: "H7",
    name: "Smart TV",
    category: "Home",
    price: 2300000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Home\\H7.jpg"
  },
  {
    id: "H8",
    name: "Standing Fan",
    category: "Home",
    price: 40000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Home\\H8.jpg"
  },
  {
    id: "H9",
    name: "Office Chair",
    category: "Home",
    price: 55000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Home\\H9.jpg"
  },
  {
    id: "H10",
    name: "Kitchen Utensil Set",
    category: "Home",
    price: 12000,
    image: "C:\\Users\\HP OMEN\\Desktop\\COS107 FINAL PROJECT\\images\\Home\\H10.jpg"
  }
];

function getRandomProducts(n) {
  const shuffled = [...products].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}


function openProductModal(productId) {
  const p = products.find(item => item.id === productId);
  if (!p) return;

  const modalTitle = document.getElementById("productModalLabel");
  const modalPrice = document.getElementById("productModalPrice");
  const modalCategory = document.getElementById("productModalCategory");
  const modalImage = document.getElementById("productModalImage");

  modalTitle.textContent = p.name;
  modalPrice.textContent = naira(p.price);
  modalCategory.textContent = p.category;
  modalImage.src = p.image;
  modalImage.alt = p.name;
}


// 2) CART STATE (under products)
const CART_KEY = "shoplite_cart";
let cart = {}; // { productId: quantity }

function loadCart() {
  try {
    cart = JSON.parse(localStorage.getItem(CART_KEY)) || {};
  } catch {
    cart = {};
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function cartItemCount() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function updateCartBadge() {
  const el = document.getElementById("cartCount");
  if (el) el.textContent = cartItemCount();
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  updateCartBadge();
}

function getCartItemsDetailed() {
  // Returns an array like [{ product, qty, lineTotal }, ...]
  return Object.entries(cart).map(([id, qty]) => {
    const product = products.find(p => p.id === id);
    return {
      product,
      qty,
      lineTotal: product ? product.price * qty : 0,
    };
  }).filter(item => item.product); // remove unknown ids just in case
}

function renderCart() {
  const container = document.getElementById("cartItems");
  if (!container) return;

  const items = getCartItemsDetailed();

  if (items.length === 0) {
    container.innerHTML = `
      <div class="alert alert-secondary">
        Your cart is empty. Start adding products from the shop.
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(({ product, qty, lineTotal }) => `
    <div class="card mb-3">
      <div class="card-body">
        <div class="d-flex gap-3">
          <div class="cart-thumb bg-body-tertiary rounded overflow-hidden" style="width: 80px; height: 80px;">
            <img
              src="${product.image}"
              alt="${product.name}"
              class="img-fluid"
              style="width: 100%; height: 100%; object-fit: cover;"
            >
          </div>


          <div class="flex-grow-1">
            <div class="d-flex justify-content-between gap-2">
              <div>
                <div class="fw-semibold">${product.name}</div>
                <div class="text-muted small">${naira(product.price)} each</div>
              </div>
              <button class="btn btn-sm btn-outline-danger"
                      type="button"
                      data-cart-action="remove"
                      data-id="${product.id}">
                Remove
              </button>
            </div>

            <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-2">
              <div class="input-group input-group-sm" style="width: 140px;">
                <button class="btn btn-outline-secondary"
                        type="button"
                        data-cart-action="dec"
                        data-id="${product.id}">-</button>
                <input type="text"
                       class="form-control text-center"
                       value="${qty}"
                       readonly>
                <button class="btn btn-outline-secondary"
                        type="button"
                        data-cart-action="inc"
                        data-id="${product.id}">+</button>
              </div>
              <div class="fw-semibold">Line total: ${naira(lineTotal)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function updateCartSummary() {
  const items = getCartItemsDetailed();
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const delivery = items.length ? 2500 : 0; // flat mock delivery

  const subEl = document.getElementById("cartSubtotal");
  const delEl = document.getElementById("cartDelivery");
  const totEl = document.getElementById("cartTotal");

  if (subEl) subEl.textContent = naira(subtotal);
  if (delEl) delEl.textContent = naira(delivery);
  if (totEl) totEl.textContent = naira(subtotal + delivery);
}

function renderCartPage() {
  renderCart();
  updateCartSummary();
}

function renderCheckoutSummary() {
  const items = getCartItemsDetailed();
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const delivery = items.length ? 2500 : 0;
  const discount = 0;

  const countEl = document.getElementById("checkoutItemsCount");
  const listEl = document.getElementById("checkoutItemsList");
  const subEl = document.getElementById("checkoutSubtotal");
  const delEl = document.getElementById("checkoutDelivery");
  const disEl = document.getElementById("checkoutDiscount");
  const totEl = document.getElementById("checkoutTotal");

  if (countEl) countEl.textContent = `Items (${items.length})`;

  if (listEl) {
    if (items.length === 0) {
      listEl.innerHTML = `<div class="text-muted">Your cart is empty.</div>`;
    } else {
      listEl.innerHTML = items.map(({ product, qty, lineTotal }) => `
        <div class="d-flex justify-content-between mb-1">
          <span>${product.name} × ${qty}</span>
          <span>${naira(lineTotal)}</span>
        </div>
      `).join("");
    }
  }

  if (subEl) subEl.textContent = naira(subtotal);
  if (delEl) delEl.textContent = naira(delivery);
  if (disEl) disEl.textContent = `-₦0`;
  if (totEl) totEl.textContent = naira(subtotal + delivery - discount);
}

function collectCheckoutInfo() {
  const name = document.getElementById("coName")?.value || "";
  const phone = document.getElementById("coPhone")?.value || "";
  const address = document.getElementById("coAddress")?.value || "";
  const city = document.getElementById("coCity")?.value || "";
  const state = document.getElementById("coState")?.value || "";

  const items = getCartItemsDetailed();
  const itemCount = items.length;
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const delivery = items.length ? 2500 : 0;
  const total = subtotal + delivery;

  const info = {
    name,
    phone,
    address: `${address}, ${city}, ${state}`,
    itemCount,
    total,
  };

  window.lastOrderInfo = info;
  try {
    localStorage.setItem("shoplite_last_order", JSON.stringify(info));
  } catch {}

  return info;
}

function renderThankYou(info) {
  if (!info) {
    try {
      info = JSON.parse(localStorage.getItem("shoplite_last_order") || "null");
    } catch {
      info = null;
    }
  }
  if (!info) return;

  const nameEl = document.getElementById("tyName");
  const phoneEl = document.getElementById("tyPhone");
  const addrEl = document.getElementById("tyAddress");
  const itemsEl = document.getElementById("tyItems");
  const totalEl = document.getElementById("tyTotal");

  if (nameEl) nameEl.textContent = info.name || "Customer";
  if (phoneEl) phoneEl.textContent = info.phone || "";
  if (addrEl) addrEl.textContent = info.address || "";
  if (itemsEl) itemsEl.textContent = info.itemCount ?? "";
  if (totalEl) totalEl.textContent = naira(info.total || 0);
}


function renderCheckoutSummary() {
  const items = getCartItemsDetailed();
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const delivery = items.length ? 2500 : 0; // same rule as cart
  const discount = 0;

  const countEl = document.getElementById("checkoutItemsCount");
  const listEl = document.getElementById("checkoutItemsList");
  const subEl = document.getElementById("checkoutSubtotal");
  const delEl = document.getElementById("checkoutDelivery");
  const disEl = document.getElementById("checkoutDiscount");
  const totEl = document.getElementById("checkoutTotal");

  if (countEl) countEl.textContent = `Items (${items.length})`;

  if (listEl) {
    if (items.length === 0) {
      listEl.innerHTML = `<div class="text-muted">Your cart is empty.</div>`;
    } else {
      listEl.innerHTML = items.map(({ product, qty, lineTotal }) => `
        <div class="d-flex justify-content-between mb-1">
          <span>${product.name} × ${qty}</span>
          <span>${naira(lineTotal)}</span>
        </div>
      `).join("");
    }
  }

  if (subEl) subEl.textContent = naira(subtotal);
  if (delEl) delEl.textContent = naira(delivery);
  if (disEl) disEl.textContent = `-${naira(discount).replace("₦","₦")}`;
  if (totEl) totEl.textContent = naira(subtotal + delivery - discount);
}


// 3) HELPERS TO RENDER PRODUCTS (under cart functions)
function naira(n) {
  return "₦" + Number(n).toLocaleString("en-NG");
}

function productCardHTML(p) {
  return `
    <div class="col">
      <div class="card h-100 shadow-sm">
        <img
          src="${p.image}"
          class="card-img-top"
          alt="${p.name}"
        >
        <div class="card-body">
          <h3 class="h6 card-title mb-1">${p.name}</h3>
          <p class="mb-2 text-muted small">${p.category}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="fw-semibold">${naira(p.price)}</span>
            <div class="d-flex gap-2">
              <button class="btn btn-sm btn-outline-secondary"
                      type="button"
                      data-action="view"
                      data-id="${p.id}"
                      data-bs-toggle="modal"
                      data-bs-target="#productModal">
                View
              </button>
              <button class="btn btn-sm btn-primary"
                      type="button"
                      data-action="add"
                      data-id="${p.id}">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderHomeFeatured() {
  const container = document.getElementById("homeFeatured");
  if (!container) return;

  const featuredProducts = getRandomProducts(4);
  container.innerHTML = featuredProducts.map(productCardHTML).join("");
}


function categoryMiniCardHTML(p) {
  return `
    <div class="col">
      <div class="card h-100 shadow-sm">
        <img
          src="${p.image}"
          class="card-img-top"
          alt="${p.name}"
          style="aspect-ratio: 1 / 1; object-fit: cover;"
        >
        <div class="card-body p-2">
          <div class="small fw-semibold mb-1">${p.name}</div>
          <div class="d-flex justify-content-between align-items-center">
            <span class="small fw-semibold">${naira(p.price)}</span>
            <button class="btn btn-sm btn-primary"
                    type="button"
                    data-action="add"
                    data-id="${p.id}">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}



function renderCategories() {
  const container = document.getElementById("categoryBlocks");
  if (!container) return;

  const categoryNames = ["Electronics", "Fashion", "Beauty", "Home", "Groceries"];

  container.innerHTML = categoryNames.map(cat => {
    const items = products.filter(p => p.category === cat).slice(0, 5); // first 5

    const cardsHTML = items.map(categoryMiniCardHTML).join("");

    return `
      <div class="category-block mb-4">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h3 class="h5 mb-0">${cat}</h3>
          <a href="#"
             class="small text-decoration-none"
             data-category-view="${cat}">
            View all
          </a>
        </div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
          ${cardsHTML}
        </div>
      </div>
    `;
  }).join("");
}


// 4) SHOP FILTERING + RENDERING (under helpers)
function getShopState() {
  return {
    q: (document.getElementById("shopSearch")?.value || "").trim().toLowerCase(),
    cat: document.getElementById("shopCategory")?.value || "All categories",
    sort: "None",
  };
}


function filterAndSort(list, state) {
  let out = [...list];

  if (state.cat !== "All categories") {
    out = out.filter(p => p.category === state.cat);
  }

  if (state.q) {
    out = out.filter(p =>
      p.name.toLowerCase().includes(state.q) ||
      (p.desc || "").toLowerCase().includes(state.q)
    );
  }

  return out; // no sorting
}

function renderShop() {
  const grid = document.getElementById("shopGrid");
  if (!grid) return;
  const state = getShopState();
  const filtered = filterAndSort(products, state);
  grid.innerHTML = filtered.map(productCardHTML).join("");
}


// 5) SEARCH RESULTS RENDERING (under renderShop)
function renderSearchResults(query) {
  const q = (query || "").trim().toLowerCase();
  const list = q
    ? products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.desc || "").toLowerCase().includes(q)
      )
    : products;

  const grid = document.getElementById("searchGrid");
  if (grid) {
    if (list.length === 0) {
      grid.innerHTML = `
        <div class="col">
          <div class="alert alert-warning">
            No products found for "<strong>${query?.trim() || "your search"}</strong>".
            Please try a different keyword or category.
          </div>
        </div>
      `;
    } else {
      grid.innerHTML = list.map(productCardHTML).join("");
    }
  }

  const preview = document.getElementById("searchQueryPreview");
  if (preview) preview.textContent = query?.trim() || "your search";
}



// 6) SECTION SWITCHING (SPA navigation) – keep ONE version
function showSection(sectionId) {
  document.querySelectorAll(".app-section").forEach(sec => sec.classList.add("d-none"));
  const target = document.getElementById(sectionId);
  if (target) target.classList.remove("d-none");

  if (sectionId === "search") {
    const q = document.getElementById("navSearch")?.value || "";
    renderSearchResults(q);
  }

  if (sectionId === "cart") {
    renderCartPage();
  }

  if (sectionId === "checkout") {
    renderCheckoutSummary();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}




// 7) GLOBAL CLICK HANDLERS
// a) For data-section (navigation)
document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-section]");
  if (!link) return;

  e.preventDefault();
  showSection(link.getAttribute("data-section"));
});

// b) For product buttons (Add / View)
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  const action = btn.dataset.action;
  const id = btn.dataset.id;

  if (action === "add") {
    addToCart(id);
  }

  if (action === "view") {
    openProductModal(id);
  }
});

// c) For cart buttons (+, −, Remove)
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-cart-action]");
  if (!btn) return;

  const action = btn.dataset.cartAction;
  const id = btn.dataset.id;
  if (!id) return;

  if (action === "inc") {
    cart[id] = (cart[id] || 0) + 1;
  } else if (action === "dec") {
    cart[id] = (cart[id] || 0) - 1;
    if (cart[id] <= 0) delete cart[id];
  } else if (action === "remove") {
    delete cart[id];
  }

  saveCart();
  updateCartBadge();
  renderCartPage();
});

// d) Clear cart button
document.addEventListener("click", (e) => {
  if (e.target.id === "clearCartBtn") {
    cart = {};
    saveCart();
    updateCartBadge();
    renderCartPage();
  }
});

// e) View-all by category (Categories page)
document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-category-view]");
  if (!link) return;

  e.preventDefault();
  const cat = link.dataset.categoryView;

  // Set the category select on the Search page
  const searchCategorySelects = document.querySelectorAll(
    "#search select.form-select.form-select-sm"
  );
  if (searchCategorySelects[0]) {
    searchCategorySelects[0].value = cat;
  }

  // Clear navbar search so we see full category
  const navInput = document.getElementById("navSearch");
  if (navInput) navInput.value = "";

  // Show Search section
  showSection("search");

  // Now filter by category only and render
  const list = products.filter(p => p.category === cat);
  const grid = document.getElementById("searchGrid");
  if (grid) grid.innerHTML = list.map(productCardHTML).join("");

  const preview = document.getElementById("searchQueryPreview");
  if (preview) preview.textContent = cat;
});

// f) Home category shortcuts → Search filtered by that category
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-home-category]");
  if (!btn) return;

  const cat = btn.dataset.homeCategory;

  // Set Search category select
  const searchCategorySelects = document.querySelectorAll(
    "#search select.form-select.form-select-sm"
  );
  if (searchCategorySelects[0]) {
    searchCategorySelects[0].value = cat;
  }

  // Clear navbar search
  const navInput = document.getElementById("navSearch");
  if (navInput) navInput.value = "";

  // Show Search page with only this category
  showSection("search");

  const list = products.filter(p => p.category === cat);
  const grid = document.getElementById("searchGrid");
  if (grid) grid.innerHTML = list.map(productCardHTML).join("");

  const preview = document.getElementById("searchQueryPreview");
  if (preview) preview.textContent = cat;
});


// 8) INPUT/CHANGE EVENTS FOR SHOP FILTERS
document.addEventListener("input", (e) => {
  if (e.target.id === "shopSearch") renderShop();
});

document.addEventListener("change", (e) => {
  // Shop page category select
  if (e.target.id === "shopCategory") {
    renderShop();
  }

  // Search page category dropdown (the one in the screenshot)
  if (
    e.target.tagName === "SELECT" &&
    e.target.closest("#search") &&
    !e.target.id // the search select has no id
  ) {
    const selectedCat = e.target.value;

    const navInput = document.getElementById("navSearch");
    if (navInput) navInput.value = "";

    showSection("search");

    const list =
      selectedCat === "All categories"
        ? products
        : products.filter(p => p.category === selectedCat);

    const grid = document.getElementById("searchGrid");
    if (grid) grid.innerHTML = list.map(productCardHTML).join("");

    const preview = document.getElementById("searchQueryPreview");
    if (preview) {
      preview.textContent =
        selectedCat === "All categories" ? "your search" : selectedCat;
    }
  }
});


// 9) INITIALISE ON PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  updateCartBadge();
  renderShop();
  renderCategories();
  renderHomeFeatured(); 
  showSection("home");

  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const info = collectCheckoutInfo();
      renderThankYou(info);
      showSection("thankyou");

      // Clear cart after successful order
      cart = {};
      saveCart();
      updateCartBadge();

      // Clear checkout form fields
      checkoutForm.reset();
    });
  }
});

