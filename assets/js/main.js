/* ============================================
   Cloud Tinkerers — Roadmaps
   Main JavaScript — Vanilla JS only
   ============================================ */

(function () {
  'use strict';

  /* --- 1. Navbar frosted glass on scroll --- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- 2. Fade-up entrance animations --- */
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    fadeEls.forEach((el) => fadeObserver.observe(el));
  }

  /* --- 3. Sticky sidebar progress tracker (DevOps parent page) --- */
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
  if (sidebarLinks.length) {
    const sections = [];
    sidebarLinks.forEach((link) => {
      const id = link.getAttribute('href');
      if (id && id.startsWith('#')) {
        const section = document.querySelector(id);
        if (section) sections.push({ link, section });
      }
    });

    if (sections.length && 'IntersectionObserver' in window) {
      const sidebarObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const match = sections.find((s) => s.section === entry.target);
            if (match) {
              if (entry.isIntersecting) {
                sidebarLinks.forEach((l) => l.classList.remove('active'));
                match.link.classList.add('active');
              }
            }
          });
        },
        { threshold: 0.2, rootMargin: '-80px 0px -60% 0px' }
      );
      sections.forEach((s) => sidebarObserver.observe(s.section));
    }
  }

  /* --- 4. Timeline item active state on scroll --- */
  const timelineItems = document.querySelectorAll('.timeline-item[data-stage]');
  if (timelineItems.length && 'IntersectionObserver' in window) {
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.5 }
    );
    timelineItems.forEach((item) => timelineObserver.observe(item));
  }

  /* --- 5. Roadmap page: sidebar IntersectionObserver --- */
  const rpSidebarItems = document.querySelectorAll('.rp-sidebar-item');
  const rpStepCards = document.querySelectorAll('.rp-step-card');
  let rpSidebarObserver = null;

  function initRpSidebar() {
    if (!rpSidebarItems.length || !rpStepCards.length) return;
    if (window.innerWidth < 768) return;

    rpSidebarObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            rpSidebarItems.forEach((item) => {
              if (item.getAttribute('href') === '#' + id) {
                item.classList.add('active');
              } else {
                item.classList.remove('active');
              }
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '-10% 0px -50% 0px' }
    );
    rpStepCards.forEach((card) => rpSidebarObserver.observe(card));
  }

  function destroyRpSidebar() {
    if (rpSidebarObserver) {
      rpSidebarObserver.disconnect();
      rpSidebarObserver = null;
    }
  }

  if (rpSidebarItems.length) {
    initRpSidebar();
    let lastWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      const w = window.innerWidth;
      if (lastWidth >= 768 && w < 768) destroyRpSidebar();
      if (lastWidth < 768 && w >= 768) initRpSidebar();
      lastWidth = w;
    });
  }

  /* --- 6. Smooth scroll for sidebar anchor links --- */
  rpSidebarItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      const href = item.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  /* --- 7. Fade-up entrance for .rp-step-card on scroll --- */
  if (rpStepCards.length && 'IntersectionObserver' in window) {
    const stepFadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            stepFadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    rpStepCards.forEach((card) => stepFadeObserver.observe(card));
  }

})();
