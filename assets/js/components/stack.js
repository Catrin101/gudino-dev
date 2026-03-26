/* ========================================
   GUDIÑO DEV — Stack Component
   Render de Grid de Tecnologías
   ======================================== */

/**
 * Renderiza el stack tecnológico con el idioma seleccionado
 */
function renderStack(lang = currentLang) {
  const stackContent = document.getElementById('stack-content');
  
  if (!stackContent) return;

  stackContent.innerHTML = Object.keys(stackData).map(key => {
    const category = stackData[key];
    const label = category.label[lang];
    const items = category.items;

    return `
      <div class="stack-category">
        <h4>${label}</h4>
        <div class="stack-items">
          ${items.map(item => `<span class="tech-tag">${item}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}
