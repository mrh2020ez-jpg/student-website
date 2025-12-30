const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("محصول به سبد خرید اضافه شد (دموی دانشگاهی)");
    });
});
