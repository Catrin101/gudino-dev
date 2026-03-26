/* ========================================
   GUDIÑO DEV — Hero Component
   Render del Hero Section
   ======================================== */

/**
 * Renderiza el hero con el idioma seleccionado
 */
function renderHero(lang = currentLang) {
  const headline = document.querySelector('.hero-headline');
  const subheadline = document.querySelector('.hero-subheadline');
  const ctaPrimary = document.querySelector('.hero-cta .btn-primary');
  const ctaSecondary = document.querySelector('.hero-cta .btn-secondary');

  if (headline) {
    headline.textContent = translations[lang].hero.headline;
  }

  if (subheadline) {
    subheadline.textContent = translations[lang].hero.subheadline;
  }

  if (ctaPrimary) {
    ctaPrimary.textContent = translations[lang].hero.cta_primary;
  }

  if (ctaSecondary) {
    ctaSecondary.textContent = translations[lang].hero.cta_secondary;
  }
}
