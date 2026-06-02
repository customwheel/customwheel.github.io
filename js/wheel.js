/* wheel.js — Core Spin Wheel Engine */

const WheelEngine = (() => {
  // ---- WHEEL PRESETS ----
  const PRESETS = {
    custom: {
      label: 'Custom',
      entries: ['Winner!', 'Try Again', 'Prize 🎁', 'Spin Again', 'Lucky!', 'Bonus 🌟', 'Jackpot 💰', 'Free!'],
    },
    classroom: {
      label: 'Classroom',
      entries: ['Alice', 'Bob', 'Carol', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Isabella', 'Jack'],
    },
    yesno: {
      label: 'Yes / No',
      entries: ['YES ✅', 'NO ❌', 'YES ✅', 'NO ❌', 'MAYBE 🤔', 'YES ✅', 'NO ❌', 'DEFINITELY! 🎯'],
    },
    numbers: {
      label: 'Numbers',
      entries: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    },
    giveaway: {
      label: 'Giveaway',
      entries: ['1st Prize 🥇', '2nd Prize 🥈', '3rd Prize 🥉', 'Consolation', '1st Prize 🥇', 'Try Next Time', 'Bonus Gift 🎁', 'Runner Up'],
    },
    truth: {
      label: 'Truth/Dare',
      entries: ['Truth 😇', 'Dare 😈', 'Truth 😇', 'Dare 😈', 'Double Dare 🔥', 'Wild Card 🃏', 'Truth 😇', 'Skip Turn ⏭'],
    },
    decisions: {
      label: 'Decisions',
      entries: ['Go for it! 🚀', 'Wait a bit ⏳', 'Ask a friend 👥', 'Yes, do it! ✅', 'Not now 🛑', 'Flip a coin 🪙', 'Trust your gut 💭', 'Absolutely! 🎉'],
    },
  };

  const PALETTES = [
    ['#FF4D6D','#FF8FA3','#FFBE0B','#06D6A0','#7B2FBE','#118AB2','#FB5607','#FFD60A'],
    ['#E63946','#F4A261','#2A9D8F','#E9C46A','#264653','#F77F00','#D62828','#023047'],
    ['#6A0572','#B5179E','#F72585','#7209B7','#3A0CA3','#4361EE','#4CC9F0','#06D6A0'],
  ];

  let state = {
    entries: [...PRESETS.custom.entries],
    colors: [...PALETTES[0]],
    isSpinning: false,
    currentAngle: 0,
    preset: 'custom',
    paletteIndex: 0,
    history: [],
  };

  const canvas = document.getElementById('mainWheel');
  const ctx = canvas ? canvas.getContext('2d') : null;
  const size = canvas ? canvas.width : 420;
  const cx = size / 2, cy = size / 2, r = size / 2 - 16;

  function getColor(i) {
    return state.colors[i % state.colors.length];
  }

  function drawWheel(angle = 0) {
    if (!ctx) return;
    ctx.clearRect(0, 0, size, size);
    const n = state.entries.length;
    const arc = (2 * Math.PI) / n;

    // Outer shadow ring
    ctx.save();
    ctx.shadowColor = 'rgba(123,47,190,0.3)';
    ctx.shadowBlur = 30;
    ctx.beginPath();
    ctx.arc(cx, cy, r + 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fill();
    ctx.restore();

    for (let i = 0; i < n; i++) {
      const start = angle + i * arc;
      const end = start + arc;
      const color = getColor(i);

      // Slice
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, start, end);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();

      // Slice border
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Label
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(start + arc / 2);
      ctx.textAlign = 'right';
      const fontSize = n <= 8 ? 15 : n <= 12 ? 12 : 10;
      ctx.font = `bold ${fontSize}px 'Nunito', sans-serif`;
      ctx.fillStyle = '#fff';
      ctx.shadowColor = 'rgba(0,0,0,0.4)';
      ctx.shadowBlur = 4;

      const label = state.entries[i];
      const maxLen = 12;
      const displayLabel = label.length > maxLen ? label.slice(0, maxLen) + '…' : label;
      ctx.fillText(displayLabel, r - 18, fontSize / 3);
      ctx.restore();
    }

    // Center hub
    ctx.save();
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 36);
    grad.addColorStop(0, '#fff');
    grad.addColorStop(0.6, '#f0eeff');
    grad.addColorStop(1, '#d4b8ff');
    ctx.beginPath();
    ctx.arc(cx, cy, 36, 0, 2 * Math.PI);
    ctx.fillStyle = grad;
    ctx.shadowColor = 'rgba(123,47,190,0.25)';
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.restore();

    // Hub icon
    ctx.save();
    ctx.font = 'bold 20px Nunito';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#7B2FBE';
    ctx.fillText('▶', cx + 2, cy);
    ctx.restore();

    // Outer ring decoration
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r + 6, 0, 2 * Math.PI);
    const ringGrad = ctx.createLinearGradient(0, 0, size, size);
    ringGrad.addColorStop(0, '#FF4D6D');
    ringGrad.addColorStop(0.5, '#FFBE0B');
    ringGrad.addColorStop(1, '#7B2FBE');
    ctx.strokeStyle = ringGrad;
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.restore();

    // Tick marks
    for (let i = 0; i < n; i++) {
      const a = angle + i * arc;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(a);
      ctx.beginPath();
      ctx.moveTo(r + 4, 0);
      ctx.lineTo(r + 12, 0);
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.restore();
    }
  }

  function spin() {
    if (state.isSpinning || state.entries.length < 2) return;
    state.isSpinning = true;

    const spinBtn = document.getElementById('spinBtn');
    if (spinBtn) { spinBtn.disabled = true; spinBtn.textContent = 'Spinning…'; }

    const minSpins = 5, maxSpins = 10;
    const spins = minSpins + Math.random() * (maxSpins - minSpins);
    const extra = Math.random() * 2 * Math.PI;
    const totalAngle = spins * 2 * Math.PI + extra;
    const duration = 3500 + Math.random() * 1500;
    const startAngle = state.currentAngle;
    const startTime = performance.now();

    function easeOut(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      const angle = startAngle + totalAngle * eased;

      state.currentAngle = angle;
      drawWheel(angle);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        state.isSpinning = false;
        state.currentAngle = angle % (2 * Math.PI);

        if (spinBtn) { spinBtn.disabled = false; spinBtn.textContent = '🎯 Spin!'; }

        // Determine winner
        const n = state.entries.length;
        const arc = (2 * Math.PI) / n;
        // Pointer is at top (angle = -PI/2 relative to circle)
        const normalized = (((-state.currentAngle - Math.PI / 2) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        const idx = Math.floor(normalized / arc) % n;
        const winner = state.entries[idx];

        state.history.unshift({ winner, time: new Date().toLocaleTimeString() });
        if (state.history.length > 10) state.history.pop();

        showResult(winner, idx);
        updateHistory();
      }
    }

    requestAnimationFrame(animate);
  }

  function showResult(winner, idx) {
    const overlay = document.getElementById('resultOverlay');
    if (!overlay) return;
    const emojis = ['🎉', '🏆', '⭐', '🎁', '🎯', '🌟', '💫', '🥳'];
    overlay.querySelector('.result-emoji').textContent = emojis[idx % emojis.length];
    overlay.querySelector('.result-winner').textContent = winner;
    overlay.classList.add('show');
  }

  function closeResult() {
    const overlay = document.getElementById('resultOverlay');
    if (overlay) overlay.classList.remove('show');
  }

  function loadPreset(key) {
    const preset = PRESETS[key];
    if (!preset) return;
    state.entries = [...preset.entries];
    state.preset = key;
    updateEntryList();
    drawWheel(state.currentAngle);
  }

  function addEntry(val) {
    if (!val.trim()) return;
    state.entries.push(val.trim());
    updateEntryList();
    drawWheel(state.currentAngle);
  }

  function removeEntry(idx) {
    state.entries.splice(idx, 1);
    if (state.entries.length === 0) state.entries = ['Add entries above!'];
    updateEntryList();
    drawWheel(state.currentAngle);
  }

  function updateEntryList() {
    const list = document.getElementById('entryList');
    if (!list) return;
    list.innerHTML = state.entries.map((e, i) => `
      <li>
        <span>${e}</span>
        <button onclick="WheelEngine.removeEntry(${i})" title="Remove">✕</button>
      </li>
    `).join('');
  }

  function updateHistory() {
    const hist = document.getElementById('spinHistory');
    if (!hist) return;
    hist.innerHTML = state.history.map(h => `
      <div class="hist-item"><span class="hist-winner">${h.winner}</span><span class="hist-time">${h.time}</span></div>
    `).join('');
  }

  function cyclePalette() {
    state.paletteIndex = (state.paletteIndex + 1) % PALETTES.length;
    state.colors = [...PALETTES[state.paletteIndex]];
    drawWheel(state.currentAngle);
  }

  function init() {
    if (!canvas) return;

    // Responsive canvas sizing
    const wrapW = canvas.parentElement.offsetWidth;
    const newSize = Math.min(wrapW, 420);
    canvas.width = newSize;
    canvas.height = newSize;

    drawWheel(0);
    updateEntryList();

    // Spin button
    const spinBtn = document.getElementById('spinBtn');
    if (spinBtn) spinBtn.addEventListener('click', spin);

    // Canvas click
    canvas.addEventListener('click', spin);

    // Tab buttons
    document.querySelectorAll('.wtab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.wtab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadPreset(btn.dataset.preset);
      });
    });

    // Add entry
    const addInput = document.getElementById('addEntryInput');
    const addBtn = document.getElementById('addEntryBtn');
    if (addBtn && addInput) {
      addBtn.addEventListener('click', () => {
        addEntry(addInput.value);
        addInput.value = '';
        addInput.focus();
      });
      addInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') { addEntry(addInput.value); addInput.value = ''; }
      });
    }

    // Close result
    const overlay = document.getElementById('resultOverlay');
    if (overlay) {
      overlay.addEventListener('click', e => { if (e.target === overlay) closeResult(); });
      const closeBtn = document.getElementById('resultCloseBtn');
      if (closeBtn) closeBtn.addEventListener('click', closeResult);
      const spinAgainBtn = document.getElementById('resultSpinAgainBtn');
      if (spinAgainBtn) spinAgainBtn.addEventListener('click', () => { closeResult(); setTimeout(spin, 300); });
    }

    // Palette button
    const paletteBtn = document.getElementById('paletteBtn');
    if (paletteBtn) paletteBtn.addEventListener('click', cyclePalette);
  }

  return { init, spin, addEntry, removeEntry, loadPreset, cyclePalette, closeResult };
})();

document.addEventListener('DOMContentLoaded', () => {
  WheelEngine.init();
});
