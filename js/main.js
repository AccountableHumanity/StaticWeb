(function () {
  'use strict';

  var hamburger = document.getElementById('hamburger');
  var navMenu   = document.getElementById('nav-menu');
  var navLinks  = navMenu.querySelectorAll('.nav-link');

  function openMenu() {
    navMenu.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close navigation');
  }

  function closeMenu() {
    navMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation');
  }

  // Toggle on hamburger click
  hamburger.addEventListener('click', function () {
    if (navMenu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when a nav link is clicked (smooth scroll will handle the rest)
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close when clicking anywhere outside the nav
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
}());
