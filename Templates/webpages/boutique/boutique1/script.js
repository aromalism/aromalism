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

  // 2. Collection Filter Logic
  const pills = document.querySelectorAll('.pill');
  const products = document.querySelectorAll('.product-card');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.getAttribute('data-filter');

      products.forEach(product => {
        if (filterValue === 'all' || product.getAttribute('data-category') === filterValue) {
          product.style.display = 'block';
          product.style.animation = 'fadeIn 0.4s ease';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });

  // 3. Interactive Fit Recommender
  const calculateBtn = document.getElementById('calculateFitBtn');
  const fitResult = document.getElementById('fitResult');
  const recTitle = document.getElementById('recommendationTitle');
  const recText = document.getElementById('recommendationText');

  calculateBtn.addEventListener('click', () => {
    const occasion = document.getElementById('fitOccasion').value;
    const body = document.getElementById('fitBody').value;
    const height = document.getElementById('fitHeight').value;

    let title = "The Couture Tailored Capsule";
    let text = "We recommend EU 38 with precision alterations. Suggested fabrics include heavy-weight silk crepe and cashmere wool in Obsidian and Gold.";

    if (occasion === 'gala' && body === 'fluid') {
      title = "The Sculptural Soirée Gown Set";
      text = "Recommended Silhouette: Draped Floor-Length Gown with asymmetric neckline in Liquid Champagne Silk. Size pairing: EU 36 / US 4.";
    } else if (occasion === 'business') {
      title = "The Executive Power Suit Capsule";
      text = "Recommended Silhouette: Double-breasted padded blazer with high-waisted cigarette trousers in French Midnight Wool.";
    } else if (occasion === 'resort') {
      title = "The Mediterranean Riviera Lookbook";
      text = "Recommended Silhouette: Breathable linen-silk blend shirt-dresses and handcrafted crochet sets paired with 18K hammered gold accents.";
    }

    recTitle.textContent = title;
    recText.textContent = text;

    fitResult.classList.remove('hidden');
    fitResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // 4. Quick View Interaction
  const quickAddBtns = document.querySelectorAll('.quick-add');
  quickAddBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cardTitle = e.target.closest('.product-card').querySelector('.item-title').textContent;
      alert(`Added "${cardTitle}" to your private viewing bag.`);
    });
  });
});
