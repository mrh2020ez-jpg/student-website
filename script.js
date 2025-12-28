:root {
    --primary: #e63946;
    --navy: #1d3557;
    --gray: #f1faee;
    --text: #333;
}

* { box-sizing: border-box; }
body { font-family: 'Tahoma', sans-serif; background: #f0f2f5; margin: 0; color: var(--text); line-height: 1.6; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.flex-between { display: flex; justify-content: space-between; align-items: center; }

/* Header */
.top-nav { background: #111; color: #fff; padding: 10px 0; font-size: 0.85rem; border-bottom: 4px solid var(--primary); }
.logo { font-size: 2rem; font-weight: bold; letter-spacing: 2px; }
.logo span { color: var(--primary); }

.main-menu { background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.1); sticky; top: 0; z-index: 1000; }
.main-menu ul { list-style: none; display: flex; margin: 0; padding: 0; justify-content: center; }
.main-menu a { display: block; padding: 18px 25px; text-decoration: none; color: var(--navy); font-weight: bold; }
.main-menu a:hover { color: var(--primary); background: #f9f9f9; }

/* Ticker */
.ticker-wrapper { background: #fff; margin: 15px 0; padding: 12px 0; border-radius: 8px; border: 1px solid #ddd; }
.ticker-title { float: right; color: var(--primary); font-weight: bold; margin-left: 20px; }
.ticker-items span { margin-left: 30px; font-size: 0.9rem; }
.red { color: #d63031; }

/* News */
.section-title { border-right: 6px solid var(--primary); padding-right: 15px; margin: 40px 0 25px; font-size: 1.5rem; color: var(--navy); }
.news-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 30px; }
.card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); transition: 0.3s; }
.card:hover { transform: translateY(-5px); }
.card img { width: 100%; height: 260px; object-fit: cover; }
.card-body { padding: 20px; }
.card-body h3 { margin-top: 0; font-size: 1.2rem; color: #222; }
.card-body p { color: #666; font-size: 0.95rem; }
.date { font-size: 0.8rem; color: #aaa; }

/* Mini News */
.four-col { grid-template-columns: repeat(4, 1fr); }
.mini-card { background: #fff; padding: 10px; border-radius: 10px; text-align: center; }
.mini-card img { width: 100%; height: 120px; border-radius: 8px; object-fit: cover; }

/* Footer */
footer { background: var(--navy); color: #fff; padding: 40px 0; margin-top: 60px; }
.footer-flex { display: flex; justify-content: space-between; align-items: center; }
.developer h4 { color: var(--primary); font-size: 1.4rem; margin: 5px 0; }
