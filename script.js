function updateDashboard() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('fa-IR');
    const dateString = new Intl.DateTimeFormat('fa-IR', { dateStyle: 'full' }).format(now);
    
    document.getElementById('live-clock').innerHTML = `<span>${dateString}</span> | <strong>${timeString}</strong>`;
}

// اسکرول نرم بین بخش‌ها
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            e.preventDefault();
            window.scrollTo({ top: targetElement.offsetTop - 50, behavior: 'smooth' });
        }
    });
});

setInterval(updateDashboard, 1000);
updateDashboard();
