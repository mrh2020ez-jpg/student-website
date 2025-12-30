let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function addToCart(name, price) {
    let item = cart.find(p => p.name === name);
    if (item) {
        item.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }
    saveCart();
}

function removeItem(name) {
    cart = cart.filter(p => p.name !== name);
    saveCart();
    renderCart();
}

function changeQty(name, amount) {
    let item = cart.find(p => p.name === name);
    if (!item) return;
    item.qty += amount;
    if (item.qty <= 0) removeItem(name);
    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let count = cart.reduce((sum, i) => sum + i.qty, 0);
    let el = document.getElementById("cart-count");
    if (el) el.innerText = count;
}

function renderCart() {
    let box = document.getElementById("cart-items");
    if (!box) return;

    box.innerHTML = "";
    cart.forEach(item => {
        box.innerHTML += `
            <div class="cart-item">
                <span>${item.name} (${item.qty})</span>
                <div>
                    <button onclick="changeQty('${item.name}',1)">+</button>
                    <button onclick="changeQty('${item.name}',-1)">-</button>
                    <button onclick="removeItem('${item.name}')">حذف</button>
                </div>
            </div>
        `;
    });
}

renderCart();
