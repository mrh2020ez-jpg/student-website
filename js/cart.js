let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(name + " به سبد خرید اضافه شد 🛒");
}

function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) count.innerText = cart.length;
}

function loadCart() {
  const list = document.getElementById("cart-items");
  const total = document.getElementById("total-price");
  list.innerHTML = "";
  let sum = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item.name + " - " + item.price.toLocaleString() + " تومان";
    list.appendChild(li);
    sum += item.price;
  });

  total.innerText = sum.toLocaleString();
}

function clearCart() {
  localStorage.removeItem("cart");
  cart = [];
  loadCart();
  updateCartCount();
}

updateCartCount();
