# TECHNICAL.md — Especificaciones Técnicas

## Stack Tecnológico

| Capa | Tecnología | Justificación |
|---|---|---|
| Markup | HTML5 semántico | Compatible con GitHub Pages, sin build step |
| Estilos | CSS3 + Variables CSS | Sin preprocesadores, máxima compatibilidad |
| Lógica | Vanilla JavaScript ES6+ | Sin frameworks — sitio estático, sin dependencias |
| Fuentes | Google Fonts (Rajdhani + IBM Plex Sans + IBM Plex Mono) | Carga desde CDN |
| Íconos | Font Awesome 6 Free | CDN, amplia cobertura |
| Formulario | Formspree o mailto | Sin backend necesario |
| Deploy | GitHub Pages | Rama `main`, carpeta raíz |

---

## Estructura de Archivos

```
gudino-dev/
│
├── index.html                          ← Página única (SPA con anclas)
│
├── assets/
│   │
│   ├── css/
│   │   ├── variables.css               ← Tokens de diseño (colores, fuentes, sombras)
│   │   ├── base.css                    ← Reset, body, tipografía base, utilidades
│   │   ├── layout.css                  ← Container, section, grid sistema
│   │   ├── components.css              ← Navbar, cards, botones, tags, forms
│   │   ├── sections.css                ← Hero, servicios, proyectos, about, contacto, footer
│   │   └── responsive.css              ← Media queries (480, 768, 1024px)
│   │
│   ├── js/
│   │   ├── data/
│   │   │   ├── translations.js         ← Objeto con todo el contenido en ES + EN
│   │   │   ├── services.js             ← Array de servicios (íconos, ids)
│   │   │   ├── projects.js             ← Array de proyectos (tecnologías, links, íconos)
│   │   │   └── stack.js                ← Stack tecnológico agrupado por categoría
│   │   │
│   │   ├── utils/
│   │   │   ├── i18n.js                 ← Motor de internacionalización (applyLanguage, t())
│   │   │   └── animations.js           ← IntersectionObserver, scroll effects
│   │   │
│   │   ├── components/
│   │   │   ├── navbar.js               ← Hamburger, scroll effect, nav activo
│   │   │   ├── hero.js                 ← Render del hero con datos
│   │   │   ├── services.js             ← Render de cards de servicios
│   │   │   ├── projects.js             ← Render de cards de proyectos
│   │   │   ├── about.js                ← Render de sección nosotros y stats
│   │   │   ├── stack.js                ← Render de grid de tecnologías
│   │   │   └── contact.js              ← Render de contacto + form handler
│   │   │
│   │   └── main.js                     ← Entry point: inicializa todo en DOMContentLoaded
│   │
│   └── img/
│       └── (vacío por ahora — no se usa foto personal en el sitio de empresa)
│
├── docs/                               ← Documentación del agente (no se sube al sitio)
│   ├── PROJECT_SPECS.md
│   ├── DESIGN_SYSTEM.md
│   ├── CONTENT.md
│   ├── I18N.md
│   └── TECHNICAL.md
│
├── AGENT.md                            ← Instrucciones principales del agente
└── README.md                           ← Descripción del repositorio para GitHub
```

---

## Orden de Carga de Scripts en `index.html`

```html
<!-- Al final del <body>, antes de </body> -->

<!-- 1. Datos -->
<script src="./assets/js/data/translations.js"></script>
<script src="./assets/js/data/services.js"></script>
<script src="./assets/js/data/projects.js"></script>
<script src="./assets/js/data/stack.js"></script>

<!-- 2. Utilidades -->
<script src="./assets/js/utils/i18n.js"></script>
<script src="./assets/js/utils/animations.js"></script>

<!-- 3. Componentes -->
<script src="./assets/js/components/navbar.js"></script>
<script src="./assets/js/components/hero.js"></script>
<script src="./assets/js/components/services.js"></script>
<script src="./assets/js/components/projects.js"></script>
<script src="./assets/js/components/about.js"></script>
<script src="./assets/js/components/stack.js"></script>
<script src="./assets/js/components/contact.js"></script>

<!-- 4. Entry point (último siempre) -->
<script src="./assets/js/main.js"></script>
```

---

## `main.js` — Entry Point

```js
document.addEventListener('DOMContentLoaded', function () {
  // 1. Inicializar componentes estáticos
  initNavbar();

  // 2. Inicializar i18n (esto a su vez llama a todos los renders)
  initI18n();

  // 3. Inicializar animaciones de scroll
  initAnimations();

  console.log('Gudiño Dev — Loaded ✓');
});
```

---

## Formulario de Contacto

### Opción A: Formspree (recomendada)
```html
<form id="contact-form" action="https://formspree.io/f/FORM_ID" method="POST">
  <!-- campos -->
</form>
```
José Enrique debe crear una cuenta en formspree.io con `gudinodev@gmail.com` y obtener el `FORM_ID`.

### Opción B: Mailto fallback
```js
// Si no hay Formspree configurado, usar mailto
const mailtoLink = `mailto:gudinodev@gmail.com?subject=...&body=...`;
window.location.href = mailtoLink;
```

El agente debe implementar Opción A con fallback a Opción B si el formulario falla.

---

## GitHub Pages — Configuración

### Nombre del Repositorio
```
gudino-dev
```

### Descripción del Repositorio
```
🔧 Gudiño Dev — Professional software development studio. Custom web systems, database design, and business management applications. | Mexicali, México.
```

### Topics (etiquetas) del Repositorio
```
software-development, web-development, php, javascript, sql, portfolio, mexicali, mexico, freelance, business-software
```

### Activar GitHub Pages
1. Settings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main` / `(root)`
4. URL resultante: `https://catrin101.github.io/gudino-dev`

### `README.md` del Repositorio
```markdown
# Gudiño Dev — Sitio Web Corporativo

Sitio web oficial de Gudiño Dev, empresa de desarrollo de software con sede en Mexicali, Baja California, México.

**URL:** https://catrin101.github.io/gudino-dev

## Stack
- HTML5 + CSS3 + Vanilla JavaScript
- Sin frameworks, sin dependencias de npm
- Bilingüe (ES/EN) con selector integrado
- Desplegado en GitHub Pages

## Contacto
📧 gudinodev@gmail.com  
📍 Mexicali, Baja California, México
```

---

## Reglas de Código

### HTML
- Usar etiquetas semánticas: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Cada sección tiene `id` en inglés en minúsculas: `id="services"`, `id="projects"`, `id="about"`, `id="contact"`
- Los nav links apuntan a: `#services`, `#projects`, `#about`, `#contact`
- `<html lang="es">` (actualizado por JS al cambiar idioma)
- Meta tags completos: charset, viewport, description, og tags básicos

### CSS
- Usar CSS custom properties (variables) para todo — colores, fuentes, sombras
- Nunca hardcodear un color hex directamente en components/sections — siempre usar variables
- Mobile-first: estilos base para mobile, luego `@media (min-width: ...)` para desktop
- Nombres de clases en inglés: `.service-card`, `.project-grid`, `.lang-switcher`

### JavaScript
- ES6+: `const`, `let`, arrow functions, template literals, destructuring
- Módulos simulados: cada archivo define funciones en scope global (no usar `import/export` para evitar CORS con file://)
- Funciones puras para render: reciben `lang` como parámetro, no dependen de estado global excepto `translations`
- No usar `innerHTML` con datos del usuario — solo con datos propios del sistema
- Manejar errores en el formulario con try/catch

---

## Performance

- Las fuentes de Google Fonts usan `display=swap` para evitar FOIT
- Las animaciones usan `transform` y `opacity` (GPU) — nunca `top`, `left`, `width`
- IntersectionObserver con `threshold: 0.1` para activar animaciones temprano
- No hay imágenes pesadas — íconos de Font Awesome y elementos CSS decorativos

---

## SEO Básico

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gudiño Dev | Desarrollo de Software Profesional — Mexicali, México</title>
  <meta name="description" content="Gudiño Dev — Empresa de desarrollo de software en Mexicali. Construimos sistemas web a medida, aplicaciones de gestión empresarial y bases de datos. Proyectos entregados, en producción.">
  <meta name="author" content="Gudiño Dev">
  <meta property="og:title" content="Gudiño Dev | Desarrollo de Software">
  <meta property="og:description" content="Sistemas web que funcionan de verdad. Desarrollo a medida desde análisis hasta despliegue.">
  <meta property="og:url" content="https://catrin101.github.io/gudino-dev">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://catrin101.github.io/gudino-dev">
</head>
```
