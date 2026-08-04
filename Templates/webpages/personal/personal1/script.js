document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Blur
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.padding = '12px 0';
      navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.6)';
    } else {
      navbar.style.padding = '16px 0';
      navbar.style.boxShadow = 'none';
    }
  });

  // 2. Portfolio Category Filter
  const pills = document.querySelectorAll('.pill');
  const workCards = document.querySelectorAll('.work-card');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.getAttribute('data-filter');

      workCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Project Engagement Scope Calculator
  const estimateBtn = document.getElementById('estimateBtn');
  const calcResult = document.getElementById('calcResult');
  const resultTitle = document.getElementById('resultTitle');
  const resultText = document.getElementById('resultText');

  if (estimateBtn) {
    estimateBtn.addEventListener('click', () => {
      const scope = document.getElementById('scopeType').value;
      const timeline = document.getElementById('timelinePref').value;

      let title = "Full Brand Architecture & Digital Identity";
      let text = "Estimated engagement scope: 6 to 8 weeks. Covers brand positioning, design systems, and launch advisory.";

      if (scope === 'product' && timeline === 'express') {
        title = "Accelerated Digital Product Sprint";
        text = "Estimated timeline: 4 to 6 weeks. Focused high-intensity UX audit, component library creation, and core feature prototyping.";
      } else if (scope === 'advisory') {
        title = "Fractional Executive Design Advisory";
        text = "Retainer model. Dedicated weekly advisory syncs, team hiring guidance, and executive design direction.";
      }

      resultTitle.textContent = title;
      resultText.textContent = text;

      calcResult.classList.remove('hidden');
      calcResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
});
