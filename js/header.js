/* header.js — Header Component */
(function () {
  const headerHTML = `
<header id="site-header">
  <div class="container header-inner">
    <a href="/" class="logo" aria-label="CustomWheel Home">
      <div class="logo-icon">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="17" fill="url(#lg1)" stroke="white" stroke-width="1.5"/>
          <path d="M18 4 L22 14 L18 18 L14 14 Z" fill="#FFBE0B"/>
          <path d="M18 32 L14 22 L18 18 L22 22 Z" fill="#06D6A0"/>
          <path d="M4 18 L14 14 L18 18 L14 22 Z" fill="#FF8FA3"/>
          <path d="M32 18 L22 22 L18 18 L22 14 Z" fill="#118AB2"/>
          <circle cx="18" cy="18" r="4" fill="white"/>
          <defs>
            <linearGradient id="lg1" x1="0" y1="0" x2="36" y2="36">
              <stop stop-color="#FF4D6D"/>
              <stop offset="1" stop-color="#7B2FBE"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span class="logo-text">Custom<span>Wheel</span></span>
    </a>

    <nav class="main-nav" aria-label="Main navigation">
      <a href="/#features">Features</a>
      <a href="/#wheel-types">Wheel Types</a>
      <a href="/#how-it-works">How It Works</a>
      <a href="/#use-cases">Use Cases</a>
      <a href="/#faq">FAQ</a>
      <div class="header-cta">
      <a href="/#hero" class="btn btn-primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Spin Now — Free
      </a>
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
    </nav>

    
  </div>
</header>`;

  const styleHTML = `
<style>
  #site-header {
    position: fixed; top: 0; left: 0; right: 0; z-index: 900;
    padding: 0; transition: all 0.3s ease;
    background: rgba(255,249,240,0.0);
  }
  #site-header.scrolled {
    background: rgba(255,249,240,0.96);
    backdrop-filter: blur(16px);
    box-shadow: 0 2px 24px rgba(123,47,190,0.1);
    padding: 0;
  }
  .header-inner {
    display: flex; align-items: center;
    justify-content: space-between; gap: 24px;
    height: 72px;
  }
  .logo {
    display: flex; align-items: center; gap: 10px;
    text-decoration: none; flex-shrink: 0;
  }
  .logo-icon { animation: spin-slow 8s linear infinite; display: flex; }
  .logo-text {
    font-family: 'Lilita One', cursive;
    font-size: 1.4rem; color: var(--text);
    line-height: 1;
  }
  .logo-text span { color: var(--primary); }
  .main-nav {
    display: flex; gap: 6px; align-items: center;
  }
  .main-nav a {
    text-decoration: none; font-weight: 700; font-size: 0.9rem;
    color: var(--text-muted); padding: 8px 14px; border-radius: 50px;
    transition: all 0.2s;
  }
  .main-nav a:hover { background: rgba(255,77,109,0.1); color: var(--primary); }
  .main-nav a.active { color: var(--primary); }
  .header-cta { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
  .nav-toggle {
    display: none; flex-direction: column; gap: 5px;
    background: none; border: none; cursor: pointer; padding: 6px;
  }
  .nav-toggle span {
    display: block; width: 24px; height: 2.5px;
    background: var(--text); border-radius: 3px;
    transition: all 0.25s;
  }
  .nav-toggle.open span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
  .nav-toggle.open span:nth-child(2) { opacity: 0; }
  .nav-toggle.open span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }
  @media (max-width: 900px) {
    .main-nav {
      position: fixed; top: 72px; left: 0; right: 0;
      background: var(--surface); flex-direction: column;
      padding: 20px 24px 28px; gap: 4px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      transform: translateY(-20px); opacity: 0;
      pointer-events: none; transition: all 0.3s;
      border-top: 2px solid var(--border);
    }
    .main-nav.open { transform: translateY(0); opacity: 1; pointer-events: all; }
    .main-nav a { padding: 12px 20px; border-radius: 12px; font-size: 1rem; }
    .nav-toggle { display: flex; }
    .header-cta .btn { font-size: 0.8rem; padding: 10px 18px; }
  }
</style>`;

  document.head.insertAdjacentHTML('beforeend', styleHTML);
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // Scroll effect
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  });

  // Nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    nav.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Active nav highlight
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.main-nav a[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));
})();
