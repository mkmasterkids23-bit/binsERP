// Theme toggle
const themeToggle = () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
};

// Initialize theme
const initTheme = () => {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
};

// Mobile nav
const toggleMobileNav = () => {
  document.getElementById('mobileNav').classList.toggle('open');
};

// Mobile submenu toggle
const toggleMobileSub = (btn) => {
  const submenu = btn.nextElementSibling;
  const isOpen = submenu.classList.contains('open');

  // Close all other submenus
  document.querySelectorAll('.mobile-submenu.open').forEach(s => {
    if (s !== submenu) {
      s.classList.remove('open');
      s.previousElementSibling.classList.remove('active');
    }
  });

  submenu.classList.toggle('open');
  btn.classList.toggle('active');
};

// Scroll Reveal Observer
const initScrollReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    observer.observe(el);
  });
};

// Keep old animate-on-scroll for backwards compat
const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
};

// Pricing tabs
const initPricingTabs = () => {
  document.querySelectorAll('.pricing-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.pricing-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
};

// Smooth scroll for anchor links
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        toggleMobileNav();
      }
    });
  });
};

// Header scroll effect
const initHeaderScroll = () => {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
};

// Counter animation
const animateCounters = () => {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        const suffix = entry.target.getAttribute('data-suffix') || '';
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          entry.target.textContent = Math.floor(current) + suffix;
        }, 30);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
};

// Docs sidebar toggle
const initDocsSidebar = () => {
  document.querySelectorAll('.sidebar-item.has-sub > .sidebar-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = link.parentElement;
      parent.classList.toggle('expanded');
    });
  });
};

// Hero Particles Animation (hero section only)
const initHeroParticles = () => {
  const container = document.getElementById('hero-particles');
  if (!container) return;
  
  const colors = ['#C8E614', '#06b6d4', '#a78bfa', '#f9a8d4'];
  
  for (let i = 0; i < 25; i++) {
    const particle = document.createElement('div');
    particle.className = 'hero-particle';
    
    const size = 4 + Math.random() * 5;
    const x = Math.random() * 100;
    const y = Math.random() * 80;
    const duration = 6 + Math.random() * 8;
    const delay = Math.random() * 5;
    const moveX = -20 + Math.random() * 40;
    const moveY = -40 + Math.random() * 80;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
      left: ${x}%;
      top: ${y}%;
      --size: ${size}px;
      --duration: ${duration}s;
      --delay: ${delay}s;
      --moveX: ${moveX}px;
      --moveY: ${moveY}px;
      --color: ${color};
    `;
    
    container.appendChild(particle);
  }
};

// Global Floating Particles (every page)
const initGlobalParticles = () => {
  const container = document.getElementById('global-particles');
  if (!container) return;

  const colors = ['#C8E614', '#06b6d4', '#a78bfa', '#f9a8d4', '#22c55e'];

  for (let i = 0; i < 15; i++) {
    const p = document.createElement('div');
    p.className = 'global-particle';

    const size = 3 + Math.random() * 4;
    const x = Math.random() * 100;
    const dur = 15 + Math.random() * 20;
    const del = Math.random() * 10;
    const drift = -30 + Math.random() * 60;
    const op = 0.15 + Math.random() * 0.2;
    const color = colors[Math.floor(Math.random() * colors.length)];

    p.style.cssText = `
      left: ${x}%;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      --dur: ${dur}s;
      --del: ${del}s;
      --drift: ${drift}px;
      --op: ${op};
    `;

    container.appendChild(p);
  }
};

// Scroll Progress Indicator
const initScrollProgress = () => {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    bar.style.width = progress + '%';
  });
};

// Ripple Effect on Buttons
const initRipple = () => {
  document.querySelectorAll('.btn, .btn-primary, .btn-outline').forEach(btn => {
    btn.classList.add('ripple');
  });
};

// Section Transition Observer
const initSectionTransitions = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.section-left, .section-right, .section-scale, .section-zoom').forEach(el => {
    observer.observe(el);
  });
};

// Magnetic Button Effect
const initMagneticButtons = () => {
  document.querySelectorAll('.btn-primary, .hero-btn-primary').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
};

// Tilt Effect on Cards
const initTiltCards = () => {
  document.querySelectorAll('.card-float').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (y - 0.5) * -10;
      const rotateY = (x - 0.5) * 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
  });
};

// Smooth Counter Animation with Easing
const animateCountersSmooth = () => {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        const suffix = entry.target.getAttribute('data-suffix') || '';
        const duration = 2000;
        const start = performance.now();

        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

        const animate = (currentTime) => {
          const elapsed = currentTime - start;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutQuart(progress);
          const current = Math.floor(easedProgress * target);

          entry.target.textContent = current + suffix;

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            entry.target.textContent = target + suffix;
          }
        };

        requestAnimationFrame(animate);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
};

// Stagger children reveal
const initStaggerReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll('.reveal');
        children.forEach((child, i) => {
          setTimeout(() => {
            child.classList.add('visible');
          }, i * 80);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.stagger-children').forEach(el => observer.observe(el));
};

// Init
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollReveal();
  initScrollAnimations();
  initPricingTabs();
  initSmoothScroll();
  initHeaderScroll();
  animateCountersSmooth();
  initDocsSidebar();
  initHeroParticles();
  initGlobalParticles();
  initScrollProgress();
  initRipple();
  initSectionTransitions();
  initMagneticButtons();
  initTiltCards();
  initStaggerReveal();
});
