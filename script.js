function updateLiveInfo() {
    const now = new Date();
    
    // تاریخ شمسی با فرمت رسمی
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const shamsiDate = new Intl.DateTimeFormat('fa-IR', options).format(now);
    
    // ساعت
    const time = now.toLocaleTimeString('fa-IR');
    
    // تاریخ میلادی برای گوشه سایت
    const miladi = now.toLocaleDateString('en-US');

    document.getElementById('live-date').innerText = shamsiDate;
    document.getElementById('live-clock').innerText = `ساعت: ${time} | میلادی: ${miladi}`;
}

setInterval(updateLiveInfo, 1000);
updateLiveInfo();
