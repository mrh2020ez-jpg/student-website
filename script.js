// نمایش تاریخ و ساعت
function updateTime() {
    const now = new Date();
    
    // تاریخ شمسی
    const optionsShamsi = { year: 'numeric', month: 'long', day: 'numeric' };
    const shamsiDate = new Intl.DateTimeFormat('fa-IR', optionsShamsi).format(now);
    
    // تاریخ میلادی
    const miladiDate = now.toLocaleDateString('en-US');
    
    // ساعت
    const time = now.toLocaleTimeString('fa-IR');

    document.getElementById('date-time').innerHTML = 
        `امروز: ${shamsiDate} | ${miladiDate} | ساعت: ${time}`;
}

// شبیه‌سازی دریافت قیمت طلا (در پروژه واقعی از API استفاده می‌شود)
function fetchPrices() {
    // چون اکثر APIهای قیمت طلا نیاز به توکن دارند، برای پروژه دانشجویی این عدد را رندوم می‌گذاریم
    const mockGoldPrice = (Math.random() * (2650 - 2600) + 2600).toFixed(0);
    document.getElementById('gold-price').innerText = mockGoldPrice + " دلار";
}

setInterval(updateTime, 1000);
updateTime();
fetchPrices();
