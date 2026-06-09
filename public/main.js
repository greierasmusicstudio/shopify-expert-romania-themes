// --- PREMIUM ANIMATIONS & INTERACTIONS V2 ---

document.addEventListener('DOMContentLoaded', () => {
  initLenisSmoothScroll();
  initPageTransitions();
  initCustomCursor();
  initScrollReveals();
  init3DTilt();
  initMagneticElements();
  initParallax();
});

// 1. Lenis Smooth Scrolling (Auto-injected)
function initLenisSmoothScroll() {
  if (window.innerWidth <= 768) return; // Optional: disable on mobile for native feel
  const script = document.createElement('script');
  script.src = "https://unpkg.com/lenis@1.1.2/dist/lenis.min.js";
  script.onload = () => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08, // smoothness
      smoothWheel: true
    });
  };
  document.head.appendChild(script);
}

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

// 3. Custom Premium Cursor & Magnetic Snap
function initCustomCursor() {
  if (window.innerWidth <= 768) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  const follower = document.createElement('div');
  follower.className = 'cursor-follower';
  
  document.body.appendChild(cursor);
  document.body.appendChild(follower);

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  function render() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  const hoverElements = document.querySelectorAll('a, button, .product-card, input[type="range"]');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      follower.classList.add('cursor-hover');
      cursor.classList.add('cursor-hover-point');
    });
    el.addEventListener('mouseleave', () => {
      follower.classList.remove('cursor-hover');
      cursor.classList.remove('cursor-hover-point');
    });
  });
}

// 4. Magnetic Elements (Buttons)
function initMagneticElements() {
  if (window.innerWidth <= 768) return;
  const magnets = document.querySelectorAll('.hub-btn, .theme-btn, .product-btn, .buy-btn, .cart-btn, .fashion-btn, .tech-btn');
  magnets.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const h = rect.width / 2;
      const v = rect.height / 2;
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - v;
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      el.style.transition = 'none';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = `translate(0px, 0px)`;
      el.style.transition = 'transform 0.3s ease-out';
    });
  });
}

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
