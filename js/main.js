/* main.js — Animations, FAQ, Misc */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- SCROLL REVEAL ---- */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${(entry.target.dataset.delay || 0)}ms`;
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => revealObserver.observe(el));

  /* ---- COUNTER ANIMATION ---- */
  const counters = document.querySelectorAll('.count-up');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      let start = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        start = Math.min(start + step, target);
        el.textContent = Math.floor(start).toLocaleString() + suffix;
        if (start >= target) clearInterval(timer);
      }, 20);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterObserver.observe(el));

  /* ---- FAQ ACCORDION ---- */
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ---- PARALLAX FLOATERS ---- */
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelectorAll('.parallax').forEach(el => {
      const speed = parseFloat(el.dataset.speed || 0.3);
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });

  /* ---- CONFETTI ON RESULT ---- */
  window.launchConfetti = function () {
    const colors = ['#FF4D6D', '#FFBE0B', '#06D6A0', '#7B2FBE', '#118AB2', '#FB5607'];
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    container.innerHTML = '';

    for (let i = 0; i < 80; i++) {
      const dot = document.createElement('div');
      const size = 6 + Math.random() * 8;
      dot.style.cssText = `
        position: fixed;
        width: ${size}px; height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        left: ${Math.random() * 100}vw;
        top: -20px;
        z-index: 2000;
        pointer-events: none;
        animation: confetti-fall ${1.5 + Math.random() * 2}s ease ${Math.random() * 0.5}s forwards;
        transform: rotate(${Math.random() * 360}deg);
      `;
      container.appendChild(dot);
    }
    setTimeout(() => { container.innerHTML = ''; }, 4000);
  };

  /* ---- SMOOTH SECTION REVEAL CLASSES ---- */
  const style = document.createElement('style');
  style.textContent = `
    .reveal {
      opacity: 0; transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .reveal.revealed { opacity: 1; transform: translateY(0); }
    @keyframes confetti-fall {
      to {
        top: 110vh;
        transform: rotate(${Math.random() * 720}deg) translateX(${(Math.random()-0.5)*100}px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  /* ---- LAZY LOAD IMAGES ---- */
  const images = document.querySelectorAll('img[data-src]');
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.src = e.target.dataset.src;
        imgObserver.unobserve(e.target);
      }
    });
  });
  images.forEach(img => imgObserver.observe(img));

  /* ---- WHEEL RESIZE ---- */
  window.addEventListener('resize', () => {
    const canvas = document.getElementById('mainWheel');
    if (!canvas) return;
    const wrapW = canvas.parentElement.offsetWidth;
    const newSize = Math.min(wrapW, 420);
    canvas.width = newSize;
    canvas.height = newSize;
    if (window.WheelEngine) WheelEngine.init();
  });
});
