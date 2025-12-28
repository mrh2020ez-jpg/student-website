function updateInterface() {
    const now = new Date();

    // تنظیم تاریخ شمسی و میلادی
    const shamsi = new Intl.DateTimeFormat('fa-IR', { dateStyle: 'full' }).format(now);
    const miladi = now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    
    document.getElementById('live-date').innerText = shamsi;
    document.getElementById('live-clock').innerText = "میلادی: " + miladi + " | ساعت: " + now.toLocaleTimeString('fa-IR');
}

// اجرای تابع هر ثانیه
setInterval(updateInterface, 1000);
updateInterface();

// افکت اسکرول نرم برای منو
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
