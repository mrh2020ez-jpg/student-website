let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

function addToCart(name) {
  cart.push(name);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) count.innerText = cart.length;
}

// Search
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    document.querySelectorAll(".product").forEach(p => {
      p.style.display = p.dataset.name.toLowerCase().includes(value) ? "block" : "none";
    });
  });
}

// Cart Page
const cartItems = document.getElementById("cart-items");
if (cartItems) {
  if (cart.length === 0) {
    cartItems.innerHTML = "<p>سبد خرید خالی است</p>";
  } else {
    cart.forEach(item => {
      cartItems.innerHTML += `<div class="product">${item}</div>`;
    });
  }
}
