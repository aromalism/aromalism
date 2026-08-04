document.addEventListener('DOMContentLoaded', () => {
  // 1. Close Top Announcement Banner
  const announcementBar = document.getElementById('announcement-bar');
  const closeBannerBtn = document.getElementById('close-banner');
  const navbar = document.getElementById('navbar');

  if (closeBannerBtn && announcementBar) {
    closeBannerBtn.addEventListener('click', () => {
      announcementBar.style.display = 'none';
      navbar.style.top = '0px'; // Adjust navbar offset when banner closes
    });
  }

  // 2. Sticky Glassmorphism Navbar Scroll Handler
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. Mobile Navigation Drawer Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 4. Interactive Body Mass Index (BMI) Calculator
  const bmiForm = document.getElementById('bmi-form');
  const resultNumber = document.getElementById('result-number');
  const resultText = document.getElementById('result-text');

  if (bmiForm) {
    bmiForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const heightInput = parseFloat(document.getElementById('height').value);
      const weightInput = parseFloat(document.getElementById('weight').value);

      if (heightInput > 0 && weightInput > 0) {
        // Formula: weight (kg) / [height (m)]^2
        const heightInMeters = heightInput / 100;
        const bmi = (weightInput / (heightInMeters * heightInMeters)).toFixed(1);

        resultNumber.textContent = bmi;

        // Determine Body Category
        let category = '';
        let color = '';

        if (bmi < 18.5) {
          category = 'Underweight — Ideal phase for lean mass gain!';
          color = '#38bdf8'; // Electric Blue
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          category = 'Normal Weight — Optimal health baseline!';
          color = '#ccff00'; // Neon Lime
        } else if (bmi >= 25 && bmi <= 29.9) {
          category = 'Overweight — Great baseline for recomp & strength!';
          color = '#fbbf24'; // Amber
        } else {
          category = 'Obese — Ready to start your transformation!';
          color = '#f87171'; // Coral Red
        }

        resultText.textContent = category;
        resultNumber.style.color = color;
      }
    });
  }
});
