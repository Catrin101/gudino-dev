# Gudiño Dev — Sitio Web Corporativo

Sitio web oficial de **Gudiño Dev**, empresa de desarrollo de software con sede en Mexicali, Baja California, México.

**URL:** https://catrin101.github.io/gudino-dev

---

## 🔧 Stack

- **HTML5** + **CSS3** + **Vanilla JavaScript**
- Sin frameworks, sin dependencias de npm
- Bilingüe (ES/EN) con selector integrado
- Desplegado en GitHub Pages

---

## 🚀 Características

- ✅ Diseño industrial profesional (dark theme con acento naranja)
- ✅ Sistema de internacionalización ES/EN sin recarga
- ✅ Responsive (mobile-first)
- ✅ Animaciones sutiles con IntersectionObserver
- ✅ Formulario de contacto funcional
- ✅ SEO básico implementado
- ✅ Accesible (WCAG compliant)

---

## 📁 Estructura del Proyecto

```
gudino-dev/
├── index.html                    # Página única (SPA con anclas)
├── assets/
│   ├── css/
│   │   ├── variables.css         # Tokens de diseño
│   │   ├── base.css              # Reset + tipografía
│   │   ├── layout.css            # Container + grids
│   │   ├── components.css        # Navbar, cards, buttons, forms
│   │   ├── sections.css          # Hero, services, projects, about, stack, contact
│   │   └── responsive.css        # Media queries
│   ├── js/
│   │   ├── data/
│   │   │   ├── translations.js   # Contenido ES/EN
│   │   │   ├── services.js       # Servicios
│   │   │   ├── projects.js       # Proyectos
│   │   │   └── stack.js          # Stack tecnológico
│   │   ├── utils/
│   │   │   ├── i18n.js           # Motor de internacionalización
│   │   │   └── animations.js     # IntersectionObserver
│   │   ├── components/
│   │   │   ├── navbar.js
│   │   │   ├── hero.js
│   │   │   ├── services.js
│   │   │   ├── projects.js
│   │   │   ├── about.js
│   │   │   ├── stack.js
│   │   │   └── contact.js
│   │   └── main.js               # Entry point
│   └── img/
└── docs/                         # Documentación interna
```

---

## 🛠️ Desarrollo Local

1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. Para hot-reload opcional, usa un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000
```

---

## 📦 Despliegue

El sitio se despliega automáticamente en **GitHub Pages** al hacer push a la rama `main`:

1. Settings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main` / `(root)`

---

## 📧 Contacto

- **Email:** gudinodev@gmail.com
- **Ubicación:** Mexicali, Baja California, México
- **LinkedIn:** https://www.linkedin.com/in/jose-enrique-gudiño-gomez-46904b20b
- **GitHub:** https://github.com/Catrin101

---

## 📄 Licencia

© 2025 Gudiño Dev. Todos los derechos reservados.
