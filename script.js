function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = new Intl.DateTimeFormat('fa-IR', options).format(now);
    
    document.getElementById('full-date').innerText = "امروز: " + dateStr;
}

// اسکرول نرم برای لینک‌های منو
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

updateDate();
