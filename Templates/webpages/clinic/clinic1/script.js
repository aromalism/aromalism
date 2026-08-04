document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar Glass Effect on Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.padding = '10px 0';
      navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
      navbar.style.padding = '16px 0';
      navbar.style.boxShadow = 'none';
    }
  });

  // 2. Services Filter Logic
  const pills = document.querySelectorAll('.pill');
  const services = document.querySelectorAll('.service-card');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.getAttribute('data-filter');

      services.forEach(service => {
        if (filterValue === 'all' || service.getAttribute('data-category') === filterValue) {
          service.style.display = 'block';
          service.style.animation = 'fadeIn 0.4s ease';
        } else {
          service.style.display = 'none';
        }
      });
    });
  });

  // 3. Clinical Diagnostic Matcher Logic
  const calculateBtn = document.getElementById('calculatePlanBtn');
  const assessmentResult = document.getElementById('assessmentResult');
  const recTitle = document.getElementById('recommendationTitle');
  const recText = document.getElementById('recommendationText');

  if (calculateBtn) {
    calculateBtn.addEventListener('click', () => {
      const goal = document.getElementById('primaryGoal').value;
      const downtime = document.getElementById('downtimePref').value;

      let title = "The Cellular Regenerative Protocol";
      let text = "We recommend an integrated package: Exosome Fractional Resurfacing combined with 500mg NAD+ Infusion for accelerated skin matrix recovery.";

      if (goal === 'sculpt' && downtime === 'zero') {
        title = "The Non-Invasive Structural Lift";
        text = "Recommended combination: Ultherapy® Ultrasound Lower-Face Lifting paired with targeted structural bio-stimulators.";
      } else if (goal === 'energy') {
        title = "Systemic Longevity & Mitochondrial Reboot";
        text = "Recommended protocol: Weekly NAD+ IV drip series (4 sessions) paired with cellular co-factor micronutrients.";
      }

      recTitle.textContent = title;
      recText.textContent = text;

      assessmentResult.classList.remove('hidden');
      assessmentResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // 4. Quick Consultation Booking Modal Trigger
  const quickBtns = document.querySelectorAll('.quick-add');
  quickBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceTitle = e.target.closest('.service-card').querySelector('.item-title').textContent;
      alert(`Requested consultation appointment for: "${serviceTitle}". A concierge specialist will reach out within 2 hours.`);
    });
  });
});
