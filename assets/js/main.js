/* ========================================
   GUDIÑO DEV — Main Entry Point
   Inicializa todos los componentes
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Inicializar componentes estáticos
  initNavbar();

  // 2. Inicializar i18n (esto a su vez llama a todos los renders)
  initI18n();

  // 3. Inicializar animaciones de scroll
  initAnimations();

  // 4. Inicializar smooth scroll
  initSmoothScroll();

  // 5. Inicializar formulario de contacto
  initContactForm();

  console.log('Gudiño Dev — Loaded ✓');
  console.log('Language: ' + (localStorage.getItem('gudino-lang') || 'es'));
});
