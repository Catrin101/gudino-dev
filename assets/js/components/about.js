/* ========================================
   GUDIÑO DEV — About Component
   Render de Sección Nosotros + Stats
   ======================================== */

/**
 * Renderiza la sección About con el idioma seleccionado
 */
function renderAbout(lang = currentLang) {
  const aboutText = document.getElementById('about-text');
  const aboutStats = document.getElementById('about-stats');
  const aboutDifferentiators = document.getElementById('about-differentiators');

  // Datos estáticos de about (se podrían mover a data/)
  const aboutParagraphs = {
    es: [
      "En Gudiño Dev no entregamos código: entregamos sistemas que funcionan. Cada proyecto comienza con un análisis profundo del problema del cliente, y termina con software desplegado en producción, probado y listo para usar.",
      "Nos especializamos en negocios que necesitan digitalizar sus procesos: desde PyMEs familiares hasta instituciones educativas. Nuestra diferencia está en la completitud — tomamos el proyecto desde la idea hasta la entrega final, sin dejar cabos sueltos."
    ],
    en: [
      "At Gudiño Dev we don't deliver code: we deliver systems that work. Every project starts with a deep analysis of the client's problem, and ends with software deployed to production, tested, and ready to use.",
      "We specialize in businesses that need to digitize their processes: from family-owned SMEs to educational institutions. Our difference is in completeness — we take the project from idea to final delivery, leaving no loose ends."
    ]
  };

  const differentiators = {
    es: [
      { icon: "fas fa-check-circle", text: "Proyecto completo: análisis, diseño, desarrollo y despliegue" },
      { icon: "fas fa-check-circle", text: "Comunicación directa con el cliente en todo momento" },
      { icon: "fas fa-check-circle", text: "Sin proyectos abandonados a la mitad" },
      { icon: "fas fa-check-circle", text: "Buenas prácticas y código limpio en cada entrega" },
      { icon: "fas fa-check-circle", text: "Precios reales y propuestas técnicas honestas" }
    ],
    en: [
      { icon: "fas fa-check-circle", text: "Complete project: analysis, design, development, and deployment" },
      { icon: "fas fa-check-circle", text: "Direct client communication at every stage" },
      { icon: "fas fa-check-circle", text: "No half-finished projects" },
      { icon: "fas fa-check-circle", text: "Best practices and clean code in every delivery" },
      { icon: "fas fa-check-circle", text: "Real pricing and honest technical proposals" }
    ]
  };

  const stats = [
    { value: "4+", label: translations[lang].about.stats[0] },
    { value: "2+", label: translations[lang].about.stats[1] },
    { value: "10+", label: translations[lang].about.stats[2] }
  ];

  // Renderizar párrafos
  if (aboutText) {
    aboutText.innerHTML = aboutParagraphs[lang]
      .map(p => `<p>${p}</p>`)
      .join('');
  }

  // Renderizar stats
  if (aboutStats) {
    aboutStats.innerHTML = `
      <div class="stats-grid">
        ${stats.map(stat => `
          <div class="stat-item">
            <span class="stat-value">${stat.value}</span>
            <span class="stat-label">${stat.label}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Renderizar differentiators
  if (aboutDifferentiators) {
    aboutDifferentiators.innerHTML = `
      <div class="differentiators-grid">
        ${differentiators[lang].map((diff, index) => `
          <div class="differentiator-item animate-on-scroll" style="transition-delay: ${index * 0.1}s">
            <i class="${diff.icon} icon"></i>
            <span class="text">${diff.text}</span>
          </div>
        `).join('')}
      </div>
    `;

    // Re-inicializar animaciones
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      aboutDifferentiators.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    }, 0);
  }
}
