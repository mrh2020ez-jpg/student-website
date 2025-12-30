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

function showCart() {
    const container = document.getElementById("cart-items");
    if (!container) return;

    container.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        container.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>${item.price.toLocaleString()} تومان</span>
            </div>
        `;
    });

    container.innerHTML += `<h3>جمع کل: ${total.toLocaleString()} تومان</h3>`;
}

updateCartCount();
showCart();
