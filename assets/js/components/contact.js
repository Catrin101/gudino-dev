/* ========================================
   GUDIÑO DEV — Contact Component
   Render de Contacto + Form Handler
   ======================================== */

/**
 * Renderiza la sección de contacto con el idioma seleccionado
 */
function renderContact(lang = currentLang) {
  const contactInfo = document.getElementById('contact-info');
  const formSubmit = document.querySelector('.contact-form .btn-primary');
  const formTitle = document.querySelector('.section-title');
  const formSubtitle = document.querySelector('.section-subtitle');

  // Datos de contacto
  const companyInfo = {
    email: "gudinodev@gmail.com",
    phone: "(+52) 686 460 2677",
    location: lang === 'es' ? "Mexicali, Baja California, México" : "Mexicali, Baja California, Mexico",
    social: {
      github: "https://github.com/Catrin101",
      linkedin: "https://www.linkedin.com/in/jose-enrique-gudiño-gomez-46904b20b"
    }
  };

  // Renderizar información de contacto
  if (contactInfo) {
    contactInfo.innerHTML = `
      <h3 class="section-title" style="font-size: 1.5rem; margin-bottom: 1.5rem;">
        ${translations[lang].contact.info_title}
      </h3>
      
      <div class="contact-info-item">
        <div class="icon">
          <i class="fas fa-envelope"></i>
        </div>
        <div class="content">
          <h4>Email</h4>
          <p><a href="mailto:${companyInfo.email}">${companyInfo.email}</a></p>
        </div>
      </div>
      
      <div class="contact-info-item">
        <div class="icon">
          <i class="fas fa-phone"></i>
        </div>
        <div class="content">
          <h4>${lang === 'es' ? 'Teléfono' : 'Phone'}</h4>
          <p><a href="tel:${companyInfo.phone.replace(/[^\d+]/g, '')}">${companyInfo.phone}</a></p>
        </div>
      </div>
      
      <div class="contact-info-item">
        <div class="icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <div class="content">
          <h4>${lang === 'es' ? 'Ubicación' : 'Location'}</h4>
          <p>${companyInfo.location}</p>
        </div>
      </div>
      
      <div class="contact-info-item">
        <div class="icon">
          <i class="fab fa-linkedin"></i>
        </div>
        <div class="content">
          <h4>LinkedIn</h4>
          <p><a href="${companyInfo.social.linkedin}" target="_blank" rel="noopener">
            ${lang === 'es' ? 'Conecta con nosotros' : 'Connect with us'}
          </a></p>
        </div>
      </div>
    `;
  }

  // Actualizar textos del formulario
  if (formSubmit) {
    formSubmit.textContent = translations[lang].contact.form.submit;
  }

  // Actualizar placeholders
  updateFormPlaceholders(lang);
}

/**
 * Actualiza los placeholders del formulario
 */
function updateFormPlaceholders(lang) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const companyInput = document.getElementById('company');
  const messageInput = document.getElementById('message');

  if (nameInput) nameInput.placeholder = translations[lang].contact.form.name;
  if (emailInput) emailInput.placeholder = translations[lang].contact.form.email;
  if (companyInput) companyInput.placeholder = translations[lang].contact.form.company;
  if (messageInput) messageInput.placeholder = translations[lang].contact.form.message;
}

/**
 * Inicializa el handler del formulario de contacto
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Validación básica
    if (!data.name || !data.email || !data.message) {
      showFeedback(feedback, translations[currentLang].contact.form.error, 'error');
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showFeedback(feedback, 'Please enter a valid email address', 'error');
      return;
    }

    // Simular envío (en producción usar Formspree o backend real)
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';
    submitBtn.disabled = true;

    // Envío a Formspree
    try {
      const response = await fetch('https://formspree.io/f/xqegapdy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        showFeedback(feedback, translations[currentLang].contact.form.success, 'success');
        form.reset();
      } else {
        throw new Error('Formspree error');
      }
    } catch (error) {
      showFeedback(feedback, translations[currentLang].contact.form.error, 'error');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

/**
 * Muestra feedback del formulario
 */
function showFeedback(feedbackElement, message, type) {
  if (!feedbackElement) return;

  feedbackElement.textContent = message;
  feedbackElement.className = 'form-feedback ' + type;

  setTimeout(() => {
    feedbackElement.className = 'form-feedback';
  }, 5000);
}
