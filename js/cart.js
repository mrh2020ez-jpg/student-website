let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("به سبد خرید اضافه شد");
}

function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) count.innerText = cart.length;
}

function loadCart() {
  const list = document.getElementById("cart-items");
  const totalEl = document.getElementById("total-price");
  if (!list) return;

  list.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - ${item.price.toLocaleString()} تومان`;
    list.appendChild(li);
    total += item.price;
  });

  totalEl.innerText = total.toLocaleString();
}

function clearCart() {
  localStorage.removeItem("cart");
  cart = [];
  loadCart();
  updateCartCount();
}

updateCartCount();
loadCart();
