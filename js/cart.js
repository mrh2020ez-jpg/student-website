let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    const item = cart.find(p => p.name === name);
    if (item) {
        item.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }
    saveCart();
}

function increase(name) {
    cart.find(p => p.name === name).qty++;
    saveCart();
}

function decrease(name) {
    const item = cart.find(p => p.name === name);
    item.qty--;
    if (item.qty === 0) {
        cart = cart.filter(p => p.name !== name);
    }
    saveCart();
}

function removeItem(name) {
    cart = cart.filter(p => p.name !== name);
    saveCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showCart();
}

function updateCartCount() {
    const el = document.getElementById("cart-count");
    if (el) {
        el.innerText = cart.reduce((s, i) => s + i.qty, 0);
    }
}

function showCart() {
    const box = document.getElementById("cart-items");
    if (!box) return;

    box.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        box.innerHTML += `
        <div class="cart-item">
            <span>${item.name}</span>
            <div>
                <button onclick="decrease('${item.name}')">-</button>
                ${item.qty}
                <button onclick="increase('${item.name}')">+</button>
                <button onclick="removeItem('${item.name}')">❌</button>
            </div>
        </div>`;
    });

    box.innerHTML += `<h3>جمع کل: ${total.toLocaleString()} تومان</h3>`;
}

updateCartCount();
showCart();
