/* ========================================
   GUDIÑO DEV — Navbar Component
   Hamburger Menu + Scroll Effect
   ======================================== */

/**
 * Inicializa la navbar
 */
function initNavbar() {
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');

  // Toggle del menú mobile
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      navbarToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un link
    navbarMenu.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        navbarToggle.classList.remove('active');
      });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
      if (!navbarMenu.contains(e.target) && !navbarToggle.contains(e.target)) {
        navbarMenu.classList.remove('active');
        navbarToggle.classList.remove('active');
      }
    });
  }
}
