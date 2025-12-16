// ===== AUTHENTICATION FUNCTIONS =====
function redirectToLogin() {
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("rememberEmail");
  alert("Logged out successfully!");
  window.location.href = "index.html";
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

function isUserLoggedIn() {
  return getCurrentUser() !== null;
}

function updateAuthUI() {
  const currentUser = getCurrentUser();
  const loginBtn = document.querySelector("header button:first-of-type");

  if (loginBtn) {
    if (currentUser) {
      loginBtn.textContent = `👤 ${currentUser.name}`;
      loginBtn.style.cursor = "pointer";
      loginBtn.onclick = () => {
        const action = confirm(
          `${currentUser.name}\n\nClick OK to Logout or Cancel to stay`
        );
        if (action) logout();
      };
    } else {
      loginBtn.textContent = "👤 Login";
      loginBtn.onclick = redirectToLogin;
    }
  }
}

// ===== PRODUCT DATABASE =====
const products = {
  clothing: [
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      category: "clothing",
      price: 499,
      originalPrice: 999,
      discount: 50,
      image: "👕",
      rating: 4.5,
      reviews: 234,
    },
    {
      id: 2,
      name: "Denim Jeans",
      category: "clothing",
      price: 1499,
      originalPrice: 2999,
      discount: 50,
      image: "👖",
      rating: 4.3,
      reviews: 156,
    },
    {
      id: 3,
      name: "Casual Shirt",
      category: "clothing",
      price: 799,
      originalPrice: 1599,
      discount: 50,
      image: "🧔",
      rating: 4.2,
      reviews: 89,
    },
    {
      id: 4,
      name: "Winter Jacket",
      category: "clothing",
      price: 2499,
      originalPrice: 4999,
      discount: 50,
      image: "🧥",
      rating: 4.7,
      reviews: 412,
    },
    {
      id: 5,
      name: "Athletic Shorts",
      category: "clothing",
      price: 599,
      originalPrice: 1199,
      discount: 50,
      image: "🩳",
      rating: 4.1,
      reviews: 78,
    },
    {
      id: 6,
      name: "Polo T-Shirt",
      category: "clothing",
      price: 799,
      originalPrice: 1599,
      discount: 50,
      image: "👕",
      rating: 4.4,
      reviews: 203,
    },
    {
      id: 7,
      name: "Formal Pants",
      category: "clothing",
      price: 1299,
      originalPrice: 2599,
      discount: 50,
      image: "👖",
      rating: 4.6,
      reviews: 321,
    },
    {
      id: 8,
      name: "Hoodie Sweatshirt",
      category: "clothing",
      price: 1099,
      originalPrice: 2199,
      discount: 50,
      image: "🧥",
      rating: 4.5,
      reviews: 267,
    },
  ],
  edibles: [
    {
      id: 101,
      name: "Organic Almond Butter",
      category: "edibles",
      price: 349,
      originalPrice: 699,
      discount: 50,
      image: "🥜",
      rating: 4.6,
      reviews: 456,
    },
    {
      id: 102,
      name: "Dark Chocolate (70%)",
      category: "edibles",
      price: 199,
      originalPrice: 399,
      discount: 50,
      image: "🍫",
      rating: 4.4,
      reviews: 234,
    },
    {
      id: 103,
      name: "Mixed Nuts (500g)",
      category: "edibles",
      price: 449,
      originalPrice: 899,
      discount: 50,
      image: "🥜",
      rating: 4.7,
      reviews: 567,
    },
    {
      id: 104,
      name: "Honey Jar (500ml)",
      category: "edibles",
      price: 299,
      originalPrice: 599,
      discount: 50,
      image: "🍯",
      rating: 4.5,
      reviews: 345,
    },
    {
      id: 105,
      name: "Green Tea (25 bags)",
      category: "edibles",
      price: 149,
      originalPrice: 299,
      discount: 50,
      image: "🍵",
      rating: 4.3,
      reviews: 289,
    },
    {
      id: 106,
      name: "Whole Wheat Flour (2kg)",
      category: "edibles",
      price: 179,
      originalPrice: 359,
      discount: 50,
      image: "🌾",
      rating: 4.2,
      reviews: 198,
    },
    {
      id: 107,
      name: "Basmati Rice (1kg)",
      category: "edibles",
      price: 249,
      originalPrice: 499,
      discount: 50,
      image: "🍚",
      rating: 4.6,
      reviews: 512,
    },
    {
      id: 108,
      name: "Olive Oil (500ml)",
      category: "edibles",
      price: 399,
      originalPrice: 799,
      discount: 50,
      image: "🫒",
      rating: 4.4,
      reviews: 376,
    },
  ],
};

// Get product by ID
function getProductById(id) {
  for (let category in products) {
    const product = products[category].find((p) => p.id === id);
    if (product) return product;
  }
  return null;
}

// Render product grid
function renderProductGrid(container, productsArray) {
  const grid =
    document.getElementById(container) ||
    document.querySelector(".product-grid");
  if (!grid) return;

  grid.innerHTML = productsArray
    .map(
      (product) => `
        <div class="product-card" onclick="goToProduct(${product.id})">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div style="margin-bottom: 8px;">
                    <span class="product-price">₹${product.price}</span>
                    <span class="product-original-price">₹${product.originalPrice}</span>
                    <span class="product-discount">${product.discount}% off</span>
                </div>
                <div class="product-rating">⭐ ${product.rating} (${product.reviews} reviews)</div>
                <button class="add-to-cart-btn" onclick="addToCart(event, ${product.id})">Add to Cart</button>
            </div>
        </div>
    `
    )
    .join("");
}

// Add to cart
function addToCart(event, productId) {
  event.stopPropagation();
  const product = getProductById(productId);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
  updateCartBadge();
}

// Update cart badge
function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const badge = document.querySelector(".cart-badge");
  if (badge) {
    badge.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.style.display = cart.length > 0 ? "inline-block" : "none";
  }
}

// Navigate to product detail
function goToProduct(productId) {
  window.location.href = `product-detail.html?id=${productId}`;
}

// Get URL parameters
function getUrlParameter(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  updateAuthUI();

  // Home page
  if (document.getElementById("clothing-grid")) {
    renderProductGrid("clothing-grid", products.clothing);
  }
  if (document.getElementById("edibles-grid")) {
    renderProductGrid("edibles-grid", products.edibles);
  }

  // Clothing page
  if (document.body.dataset.page === "clothing") {
    renderProductGrid("product-grid", products.clothing);
  }

  // Edibles page
  if (document.body.dataset.page === "edibles") {
    renderProductGrid("product-grid", products.edibles);
  }

  // Product detail page
  if (document.body.dataset.page === "detail") {
    const productId = parseInt(getUrlParameter("id"));
    const product = getProductById(productId);
    if (product) {
      loadProductDetail(product);
    }
  }
});

// Load product detail
function loadProductDetail(product) {
  const detailImage = document.querySelector(".product-detail-image");
  if (detailImage) detailImage.textContent = product.image;

  const detailInfo = document.querySelector(".product-detail-info");
  if (detailInfo) {
    detailInfo.innerHTML = `
            <h1>${product.name}</h1>
            <div class="product-rating">⭐ ${product.rating} (${
      product.reviews
    } reviews) | ${product.reviews} people bought</div>
            <div class="price-section">
                <span class="product-price">₹${product.price}</span>
                <span class="product-original-price">₹${
                  product.originalPrice
                }</span>
                <span class="product-discount">${product.discount}% off</span>
            </div>
            <div class="specs">
                <h3>Product Details</h3>
                <div class="spec-item">
                    <span class="spec-label">Category:</span>
                    <span class="spec-value">${
                      product.category.charAt(0).toUpperCase() +
                      product.category.slice(1)
                    }</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Availability:</span>
                    <span class="spec-value">In Stock</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Shipping:</span>
                    <span class="spec-value">Free within 2-3 business days</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Return Policy:</span>
                    <span class="spec-value">30 days money-back guarantee</span>
                </div>
            </div>
            <div class="quantity-selector">
                <label>Quantity:</label>
                <button onclick="decreaseQuantity()">-</button>
                <input type="number" id="quantity" value="1" min="1" max="10">
                <button onclick="increaseQuantity()">+</button>
            </div>
            <div class="action-buttons">
                <button class="btn-add-cart" onclick="addToCartDetail(${
                  product.id
                })">🛒 Add to Cart</button>
                <button class="btn-buy-now" onclick="buyNow(${
                  product.id
                })">Buy Now</button>
            </div>
        `;
  }
}

// Quantity controls
function increaseQuantity() {
  const qty = document.getElementById("quantity");
  if (qty.value < 10) qty.value = parseInt(qty.value) + 1;
}

function decreaseQuantity() {
  const qty = document.getElementById("quantity");
  if (qty.value > 1) qty.value = parseInt(qty.value) - 1;
}

// Add to cart from detail page
function addToCartDetail(productId) {
  const qty = parseInt(document.getElementById("quantity").value) || 1;
  const product = getProductById(productId);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push({ ...product, quantity: qty });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${qty} × ${product.name} added to cart!`);
  updateCartBadge();
}

// Buy now
function buyNow(productId) {
  const qty = parseInt(document.getElementById("quantity").value) || 1;
  addToCartDetail(productId);
  window.location.href = "cart.html";
}

// Filter products
function filterProducts() {
  const page = document.body.dataset.page;
  const categoryProducts =
    page === "clothing" ? products.clothing : products.edibles;

  const priceRange = document.querySelector(".price-range")?.value || 10000;
  const filtered = categoryProducts.filter((p) => p.price <= priceRange);

  renderProductGrid("product-grid", filtered);
}
