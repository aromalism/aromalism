document.addEventListener('DOMContentLoaded', () => {
  // 1. Live HUD Clock
  const clockEl = document.getElementById('hudClock');
  function updateClock() {
    const now = new Date();
    if (clockEl) {
      clockEl.textContent = now.toUTCString().split(' ')[4] + ' UTC';
    }
  }
  setInterval(updateClock, 1000);
  updateClock();

  // 2. Class / Faction Category Filter
  const pills = document.querySelectorAll('.pill');
  const classCards = document.querySelectorAll('.class-card');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');

      classCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Cyberware Build Generator Logic
  const generateBtn = document.getElementById('generateBuildBtn');
  const augResult = document.getElementById('augResult');
  const buildTitle = document.getElementById('buildTitle');
  const buildText = document.getElementById('buildText');

  if (generateBtn) {
    generateBtn.addEventListener('click', () => {
      const style = document.getElementById('playstyle').value;
      const slot = document.getElementById('cyberSlot').value;

      let title = "The Cyber-Phantom Protocol";
      let text = "Equipped with Sandevistan Reflex Accelerator & Optical Camo. Enables matrix bullet-time for 8 seconds and stealth takedowns.";

      if (style === 'assault') {
        title = "The Obsidian Juggernaut";
        text = "Sub-dermal Titanium Armor + Thermal Blade augmentation. Kinetic damage resistance increased by 65%.";
      } else if (style === 'hacker') {
        title = "The Neural Overclock Matrix";
        text = "Kiroshi Optics + Overclocked Cyberdeck. Allows broad-spectrum RAM recharge and mass-turret takeover.";
      }

      buildTitle.textContent = title;
      buildText.textContent = text;

      augResult.classList.remove('hidden');
      augResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // 4. Pre-Order & Trailer Interactions
  const preOrderBtn = document.getElementById('preOrderBtn');
  if (preOrderBtn) {
    preOrderBtn.addEventListener('click', () => {
      alert("CYBERCORE: OBSIDIAN 2099 Pre-Order Initialized. Exclusive 'Obsidian Katana Skin' added to account.");
    });
  }
});
