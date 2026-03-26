/* ========================================
   GUDIÑO DEV — Projects Component
   Render de Cards de Proyectos
   ======================================== */

/**
 * Renderiza los proyectos con el idioma seleccionado
 */
function renderProjects(lang = currentLang) {
  const projectsGrid = document.getElementById('projects-grid');
  
  if (!projectsGrid) return;

  // Filtrar solo proyectos featured (máximo 4)
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 4);

  projectsGrid.innerHTML = featuredProjects.map((project, index) => {
    const content = project[lang];
    const techTags = project.technologies
      .map(tech => `<span class="tech-tag">${tech}</span>`)
      .join('');
    
    const githubLink = project.github 
      ? `<a href="${project.github}" target="_blank" rel="noopener" class="project-link">
           <i class="fab fa-github"></i> ${translations[lang].projects.github_link}
         </a>`
      : '';
    
    const demoLink = project.demo
      ? `<a href="${project.demo}" target="_blank" rel="noopener" class="project-link">
           <i class="fas fa-external-link-alt"></i> Live Demo
         </a>`
      : '';

    return `
      <div class="card project-card animate-on-scroll" style="transition-delay: ${index * 0.1}s">
        <i class="${project.icon} project-icon"></i>
        <h3 class="project-title">${content.title}</h3>
        <p class="project-client">${project.client} • ${project.sector[lang]}</p>
        <p class="project-description">${content.description}</p>
        <div class="project-tech">${techTags}</div>
        <div class="project-links">
          ${githubLink}
          ${demoLink}
        </div>
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

    projectsGrid.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }, 0);
}
