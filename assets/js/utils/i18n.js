/* ========================================
   GUDIÑO DEV — i18n Engine
   Motor de Internacionalización ES/EN
   ======================================== */

// Estado global del idioma
let currentLang = localStorage.getItem('gudino-lang') || 'es';

/**
 * Aplica el idioma seleccionado a todos los elementos con data-i18n
 * y re-renderiza los componentes dinámicos
 */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('gudino-lang', lang);

  // Actualizar botones del selector
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Actualizar atributo lang del HTML
  document.documentElement.lang = lang;

  // Re-renderizar componentes dinámicos con el nuevo idioma
  if (typeof renderServices === 'function') renderServices(lang);
  if (typeof renderProjects === 'function') renderProjects(lang);
  if (typeof renderAbout === 'function') renderAbout(lang);
  if (typeof renderStack === 'function') renderStack(lang);
  if (typeof renderContact === 'function') renderContact(lang);
  if (typeof renderHero === 'function') renderHero(lang);
  if (typeof renderFooter === 'function') renderFooter(lang);

  // Actualizar elementos estáticos con data-i18n
  updateStaticElements(lang);
}

/**
 * Actualiza elementos estáticos con atributos data-i18n
 */
function updateStaticElements(lang) {
  // Textos simples
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const value = getNestedValue(translations[lang], key);
    if (value) {
      element.textContent = value;
    }
  });

  // Placeholders de inputs
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    const value = getNestedValue(translations[lang], key);
    if (value) {
      element.setAttribute('placeholder', value);
    }
  });

  // Atributos title
  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.getAttribute('data-i18n-title');
    const value = getNestedValue(translations[lang], key);
    if (value) {
      element.setAttribute('title', value);
    }
  });
}

/**
 * Helper: obtiene valor anidado de objeto por ruta de string
 * Ejemplo: getNestedValue(translations.es, 'hero.headline')
 */
function getNestedValue(obj, key) {
  if (!obj || !key) return undefined;
  
  return key.split('.').reduce((currentObj, k) => {
    return currentObj?.[k];
  }, obj);
}

/**
 * Inicialización del sistema i18n
 */
function initI18n() {
  // Eventos del selector de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.dataset.lang);
    });
  });

  // Aplicar idioma guardado al cargar
  applyLanguage(currentLang);
}
