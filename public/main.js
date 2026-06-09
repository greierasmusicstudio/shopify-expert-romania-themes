// --- PREMIUM ANIMATIONS & INTERACTIONS ---

document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initCustomCursor();
  initScrollReveals();
  init3DTilt();
  initProductCardInteractions();
});

// 1. Page Transitions (Preloader)
function initPageTransitions() {
  // Create preloader element if it doesn't exist
  if (!document.querySelector('.preloader')) {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    const loaderInner = document.createElement('div');
    loaderInner.className = 'loader-inner';
    preloader.appendChild(loaderInner);
    document.body.appendChild(preloader);
  }

  const preloader = document.querySelector('.preloader');
  
  // Fade out preloader on load
  setTimeout(() => {
    preloader.classList.add('loaded');
  }, 100);

  // Intercept internal links for exit animation
  document.querySelectorAll('a[href^="/"], a[href^="."]').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.target === '_blank' || link.hasAttribute('download') || e.ctrlKey || e.metaKey) return;
      e.preventDefault();
      const targetUrl = link.href;
      preloader.classList.remove('loaded');
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 400); // Matches CSS transition duration
    });
  });
}

// 2. Custom Premium Cursor
function initCustomCursor() {
  if (window.innerWidth <= 768) return; // Disable custom cursor on mobile

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

  // Smooth follow for the larger circle
  function render() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  // Hover states for links and buttons
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

// 3. Advanced Scroll Reveals
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.product-card, .feature-item, .cta-section, .hero-content, .hero-image-wrapper, .beauty-content, .beauty-image-wrapper, .theme-card, .section-title, .animate-on-scroll');
  
  revealElements.forEach((el, index) => {
    if(!el.classList.contains('reveal')) {
      el.classList.add('reveal', 'reveal-up');
    }
    // Stagger grids
    if(el.closest('.product-grid') || el.closest('.features-grid') || el.closest('.themes-grid')) {
      const staggerIndex = (index % 4) + 1;
      el.classList.add(`reveal-stagger-${staggerIndex}`);
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

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// 4. 3D Tilt Effect on Product Cards
function init3DTilt() {
  if (window.innerWidth <= 768) return; // Disable on mobile

  const cards = document.querySelectorAll('.product-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -5; // max 5 deg rotation
      const rotateY = ((x - centerX) / centerX) * 5;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });
}

// 5. Product Card Image Interactions
function initProductCardInteractions() {
  // Simple fade-in for existing classes
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll-old').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}
