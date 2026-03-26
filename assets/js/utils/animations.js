/* ========================================
   GUDIÑO DEV — Animations
   IntersectionObserver + Scroll Effects
   ======================================== */

/**
 * Inicializa las animaciones al hacer scroll
 * usando IntersectionObserver
 */
function initAnimations() {
  // Elementos a animar
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  // Opciones del observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  // Callback cuando un elemento es visible
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  // Crear observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observar cada elemento
  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // Inicializar scroll effect en navbar
  initNavbarScroll();
}

/**
 * Efecto de scroll en la navbar
 */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Ejecutar al cargar por si ya hay scroll
}

/**
 * Smooth scroll para links internos
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Ignorar links vacíos o a #
      if (href === '#' || href === '') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const navbarHeight = document.getElementById('navbar')?.offsetHeight || 70;
        const targetPosition = target.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Cerrar menú mobile si está abierto
        const navbarMenu = document.getElementById('navbar-menu');
        const navbarToggle = document.getElementById('navbar-toggle');
        
        if (navbarMenu?.classList.contains('active')) {
          navbarMenu.classList.remove('active');
          navbarToggle?.classList.remove('active');
        }
      }
    });
  });
}
