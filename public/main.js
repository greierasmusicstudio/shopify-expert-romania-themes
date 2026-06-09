// --- PREMIUM ANIMATIONS & INTERACTIONS V2 ---

document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initScrollReveals();
  init3DTilt();
  initParallax();
});

// Lenis Smooth Scrolling removed per user request
// 2. Page Transitions (Preloader)
function initPageTransitions() {
  if (!document.querySelector('.preloader')) {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    const loaderInner = document.createElement('div');
    loaderInner.className = 'loader-inner';
    preloader.appendChild(loaderInner);
    document.body.appendChild(preloader);
  }

  const preloader = document.querySelector('.preloader');
  
  setTimeout(() => {
    preloader.classList.add('loaded');
  }, 100);

  document.querySelectorAll('a[href^="/"], a[href^="."]').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.target === '_blank' || link.hasAttribute('download') || e.ctrlKey || e.metaKey) return;
      e.preventDefault();
      const targetUrl = link.href;
      preloader.classList.remove('loaded');
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 400);
    });
  });
}

// Custom cursor and magnetic elements removed per user request
// 5. Advanced Scroll Reveals & Text Reveals
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.product-card, .feature-item, .cta-section, .hero-content, .hero-image-wrapper, .beauty-content, .beauty-image-wrapper, .theme-card, .animate-on-scroll');
  
  revealElements.forEach((el, index) => {
    if(!el.classList.contains('reveal') && !el.classList.contains('text-reveal')) {
      el.classList.add('reveal', 'reveal-up');
    }
    if(el.closest('.product-grid') || el.closest('.features-grid') || el.closest('.themes-grid')) {
      const staggerIndex = (index % 4) + 1;
      el.classList.add(`reveal-stagger-${staggerIndex}`);
    }
  });

  const titles = document.querySelectorAll('h1, h2, .section-title');
  titles.forEach(title => {
    if(!title.classList.contains('text-reveal')) {
      title.classList.add('text-reveal');
    }
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .text-reveal').forEach(el => observer.observe(el));
}

// 6. 3D Tilt Effect on Product Cards
function init3DTilt() {
  if (window.innerWidth <= 768) return;
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });
}

// 7. Parallax Image Zoom on Scroll
function initParallax() {
  if (window.innerWidth <= 768) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.hero-bg, .hero-image img, .beauty-image-wrapper img').forEach(img => {
      const rate = scrolled * 0.15;
      img.style.transform = `translate3d(0, ${rate}px, 0) scale(1.1)`;
    });
  });
}
