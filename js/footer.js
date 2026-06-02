/* footer.js — Footer Component */
(function () {
  const footerHTML = `
<footer id="site-footer">
  <div class="footer-top">
    <div class="container footer-top-inner">
      <div class="footer-brand">
        <a href="/" class="logo footer-logo">
          <div class="logo-icon">
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="17" fill="url(#lg-f)"/>
              <path d="M18 4 L22 14 L18 18 L14 14 Z" fill="#FFBE0B"/>
              <path d="M18 32 L14 22 L18 18 L22 22 Z" fill="#06D6A0"/>
              <path d="M4 18 L14 14 L18 18 L14 22 Z" fill="#FF8FA3"/>
              <path d="M32 18 L22 22 L18 18 L22 14 Z" fill="#118AB2"/>
              <circle cx="18" cy="18" r="4" fill="white"/>
              <defs>
                <linearGradient id="lg-f" x1="0" y1="0" x2="36" y2="36">
                  <stop stop-color="#FF4D6D"/><stop offset="1" stop-color="#7B2FBE"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span class="logo-text">Custom<span>Wheel</span></span>
        </a>
        <p class="footer-tagline">The best free online spin the wheel tool. Random, fair, and fun for everyone — classrooms, giveaways, decisions, and more.</p>
        
      </div>

      <div class="footer-links-group">
        <h4>Wheel Types</h4>
        <ul>
          <li><a href="/#wheel-types">Random Wheel</a></li>
          <li><a href="/#wheel-types">Classroom Spinner</a></li>
          <li><a href="/#wheel-types">Giveaway Wheel</a></li>
          <li><a href="/#wheel-types">Prize Wheel</a></li>
          <li><a href="/#wheel-types">Decision Wheel</a></li>
          <li><a href="/#wheel-types">Lucky Spin</a></li>
        </ul>
      </div>

      <div class="footer-links-group">
        <h4>Use Cases</h4>
        <ul>
          <li><a href="/#use-cases">Classroom Games</a></li>
          <li><a href="/#use-cases">Random Student Picker</a></li>
          <li><a href="/#use-cases">Social Giveaways</a></li>
          <li><a href="/#use-cases">Raffle Draws</a></li>
          <li><a href="/#use-cases">Team Building</a></li>
          <li><a href="/#use-cases">Party Games</a></li>
        </ul>
      </div>

      <div class="footer-links-group">
        <h4>Resources</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>          
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Use</a></li>
          <li><a href="/cookies">Cookies Policy</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container footer-bottom-inner">
      <p>© 2025 <strong>CustomWheel</strong> — Free Online Spin the Wheel Tool. All rights reserved.</p>
      <p class="footer-keywords">
        <a href="#hero">spin the wheel</a> • <a href="#wheel-types">random wheel</a> • <a href="#use-cases">classroom spinner</a> • <a href="#wheel-types">prize wheel</a> • <a href="#wheel-types">lucky spin</a>
      </p>
    </div>
  </div>
</footer>`;

  const styleHTML = `
<style>
  #site-footer {
    background: linear-gradient(160deg, #1A1A2E 0%, #16213E 60%, #0F3460 100%);
    color: rgba(255,255,255,0.85);
    font-family: var(--font-body);
  }
  .footer-top { padding: 72px 0 48px; }
  .footer-top-inner {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 48px;
  }
  .footer-brand .footer-logo { margin-bottom: 18px; }
  .footer-brand .logo-text { color: #fff; }
  .footer-tagline {
    font-size: 0.88rem; color: rgba(255,255,255,0.6);
    line-height: 1.7; margin-bottom: 24px; max-width: 280px;
  }
  .footer-social { display: flex; gap: 10px; }
  .social-btn {
    width: 38px; height: 38px; border-radius: 10px;
    background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7);
    display: flex; align-items: center; justify-content: center;
    text-decoration: none; transition: all 0.2s;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .social-btn:hover { background: var(--primary); color: #fff; border-color: transparent; }
  .footer-links-group h4 {
    font-family: 'Lilita One', cursive;
    font-size: 1rem; color: #fff; margin-bottom: 18px;
  }
  .footer-links-group ul { list-style: none; }
  .footer-links-group li { margin-bottom: 10px; }
  .footer-links-group a {
    text-decoration: none; font-size: 0.88rem;
    color: rgba(255,255,255,0.6); transition: color 0.2s;
  }
  .footer-links-group a:hover { color: var(--accent1); }
  .footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.08);
    padding: 22px 0;
  }
  .footer-bottom-inner {
    display: flex; justify-content: space-between;
    align-items: center; gap: 20px; flex-wrap: wrap;
  }
  .footer-bottom p { font-size: 0.82rem; color: rgba(255,255,255,0.45); }
  .footer-keywords { display: flex; flex-wrap: wrap; gap: 6px; }
  .footer-keywords a {
    color: rgba(255,255,255,0.35); text-decoration: none;
    font-size: 0.78rem; transition: color 0.2s;
  }
  .footer-keywords a:hover { color: var(--accent1); }
  @media (max-width: 900px) {
    .footer-top-inner { grid-template-columns: 1fr 1fr; }
    .footer-brand { grid-column: span 2; }
    .footer-bottom-inner { flex-direction: column; text-align: center; }
  }
  @media (max-width: 480px) {
    .footer-top-inner { grid-template-columns: 1fr; }
    .footer-brand { grid-column: span 1; }
    .footer-tagline { max-width: 100%; }
  }
</style>`;

  document.head.insertAdjacentHTML('beforeend', styleHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
