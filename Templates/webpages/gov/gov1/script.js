document.addEventListener('DOMContentLoaded', () => {
  // 1. Accessibility: High Contrast Toggle
  const contrastBtn = document.getElementById('contrastToggle');
  contrastBtn.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });

  // 2. Accessibility: Font Size Adjuster
  const fontIncreaseBtn = document.getElementById('fontIncrease');
  const fontResetBtn = document.getElementById('fontReset');
  let currentFontSize = 16;

  fontIncreaseBtn.addEventListener('click', () => {
    if (currentFontSize < 20) {
      currentFontSize += 1;
      document.documentElement.style.setProperty('--base-font-size', `${currentFontSize}px`);
    }
  });

  fontResetBtn.addEventListener('click', () => {
    currentFontSize = 16;
    document.documentElement.style.setProperty('--base-font-size', '16px');
  });

  // 3. Live Service Filter / Search
  const searchInput = document.getElementById('civicSearch');
  const serviceCards = document.querySelectorAll('.service-card');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      serviceCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // 4. Reference Tracker Lookup
  const trackBtn = document.getElementById('trackBtn');
  const trackerStatus = document.getElementById('trackerStatus');

  if (trackBtn) {
    trackBtn.addEventListener('click', () => {
      const refInput = document.getElementById('referenceId').value.trim();
      
      if (refInput === '') {
        alert('Please enter a valid Reference ID or Permit Number.');
        return;
      }

      // Simulate live database query lookup
      trackerStatus.classList.remove('hidden');
      trackerStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
});

// Helper function for search tags
function fillSearch(term) {
  const input = document.getElementById('civicSearch');
  if (input) {
    input.value = term;
    input.dispatchEvent(new Event('input'));
    input.focus();
  }
}
