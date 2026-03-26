/* ========================================
   GUDIÑO DEV — Services Component
   Render de Cards de Servicios
   ======================================== */

/**
 * Renderiza los servicios con el idioma seleccionado
 */
function renderServices(lang = currentLang) {
  const servicesGrid = document.getElementById('services-grid');
  
  if (!servicesGrid) return;

  servicesGrid.innerHTML = servicesData.map((service, index) => {
    const content = service[lang];
    return `
      <div class="card service-card animate-on-scroll" style="transition-delay: ${index * 0.1}s">
        <i class="${service.icon} service-icon"></i>
        <h3 class="service-title">${content.title}</h3>
        <p class="service-description">${content.description}</p>
      </div>
    `;
  }).join('');

  // Re-inicializar animaciones para los nuevos elementos
  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    servicesGrid.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }, 0);
}
