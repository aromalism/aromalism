document.addEventListener('DOMContentLoaded', () => {
  // 1. Close Announcement Banner
  const announcementBar = document.getElementById('announcement-bar');
  const closeBannerBtn = document.getElementById('close-banner');
  const navbar = document.getElementById('navbar');

  if (closeBannerBtn && announcementBar) {
    closeBannerBtn.addEventListener('click', () => {
      announcementBar.style.display = 'none';
      navbar.style.top = '0px';
    });
  }

  // 2. Sticky Glassmorphism Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. Menu Category Filter Pills
  const pills = document.querySelectorAll('.pill');
  const menuCards = document.querySelectorAll('.menu-card');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');

      menuCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Interactive Coffee Brew Matcher Logic
  const brewForm = document.getElementById('brew-form');
  const brewResult = document.getElementById('brew-result');
  const recTitle = document.getElementById('recommendationTitle');
  const recText = document.getElementById('recommendationText');

  if (brewForm) {
    brewForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const roast = document.getElementById('roastPref').value;
      const method = document.getElementById('methodPref').value;

      let title = "Velvet Obsidian Espresso";
      let text = "Notes of dark chocolate and salted caramel. Extracted at 9 BAR pressure with a 1:2 ratio.";

      if (roast === 'light' && method === 'pourover') {
        title = "Ethiopian Yirgacheffe G1";
        text = "Notes of Jasmine, Bergamot & White Peach. Hand-poured via Chemex at 93°C.";
      } else if (roast === 'medium' && method === 'coldbrew') {
        title = "Nitro Cold Brew Reserve";
        text = "Infused with pure nitrogen for a velvety stout-like head with natural hazelnut sweetness.";
      } else if (roast === 'dark' && method === 'espresso') {
        title = "Smoky Noir Ristretto";
        text = "Heavy body with notes of toasted walnut & 85% cocoa. Complements oat milk cortados.";
      }

      recTitle.textContent = title;
      recText.textContent = text;
      brewResult.classList.remove('hidden');
    });
  }
});
