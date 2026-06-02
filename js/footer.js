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
        <div class="footer-social">
          <a href="#" aria-label="Twitter" class="social-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.734l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="Facebook" class="social-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" aria-label="Pinterest" class="social-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" class="social-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-links-group">
        <h4>Wheel Types</h4>
        <ul>
          <li><a href="#wheel-types">Random Wheel</a></li>
          <li><a href="#wheel-types">Classroom Spinner</a></li>
          <li><a href="#wheel-types">Giveaway Wheel</a></li>
          <li><a href="#wheel-types">Prize Wheel</a></li>
          <li><a href="#wheel-types">Decision Wheel</a></li>
          <li><a href="#wheel-types">Lucky Spin</a></li>
        </ul>
      </div>

      <div class="footer-links-group">
        <h4>Use Cases</h4>
        <ul>
          <li><a href="#use-cases">Classroom Games</a></li>
          <li><a href="#use-cases">Random Student Picker</a></li>
          <li><a href="#use-cases">Social Giveaways</a></li>
          <li><a href="#use-cases">Raffle Draws</a></li>
          <li><a href="#use-cases">Team Building</a></li>
          <li><a href="#use-cases">Party Games</a></li>
        </ul>
      </div>

      <div class="footer-links-group">
        <h4>Resources</h4>
        <ul>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Contact Us</a></li>
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
