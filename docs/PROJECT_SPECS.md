# PROJECT_SPECS.md — Especificaciones del Proyecto

## Información General

| Campo | Valor |
|---|---|
| **Nombre del proyecto** | Gudiño Dev — Sitio Web Corporativo |
| **Tipo** | Sitio web de empresa de software (no CV, no portafolio personal) |
| **URL de producción** | `https://catrin101.github.io/gudino-dev` |
| **Repositorio** | `gudino-dev` en GitHub (usuario: Catrin101) |
| **Idiomas** | Español (default) + Inglés (selector en página) |
| **Stack** | HTML5 + CSS3 + Vanilla JavaScript (sin frameworks) |
| **Despliegue** | GitHub Pages (rama `main`, carpeta raíz) |

---

## Objetivo del Sitio

Convertir visitantes (clientes potenciales, empresas, startups) en contactos de venta. El sitio debe transmitir:

- **Confianza**: Empresa con experiencia real y proyectos entregados
- **Autoridad técnica**: Capacidad de resolver problemas complejos
- **Profesionalismo**: Presentación internacional, bilingüe, pulida
- **Claridad**: El visitante entiende en 5 segundos qué hace la empresa

---

## Estructura de Páginas y Secciones

El sitio es una **Single Page Application** (SPA) con navegación por anclas. Todo en `index.html`.

### 1. NAVBAR (fija, siempre visible)
- Logo "GUDIÑO DEV" en tipografía Rajdhani
- Links de navegación: Servicios | Proyectos | Nosotros | Contacto
- **Selector de idioma ES | EN** — botón toggle en el extremo derecho
- Hamburger menu en mobile
- Background con blur al hacer scroll

### 2. HERO (pantalla completa)
- **NO** empieza con "Hola, soy..."
- Headline principal: propuesta de valor de la empresa
- Subheadline: descripción en una línea
- Dos CTAs: "Ver Nuestros Proyectos" + "Contáctanos"
- Elemento visual decorativo (geométrico, industrial, abstracto — NO foto de perfil personal)
- Indicador de scroll animado

### 3. SERVICIOS
- Título de sección: "Lo Que Construimos" / "What We Build"
- 4 tarjetas de servicio con ícono, nombre y descripción corta:
  1. Sistemas Web a Medida
  2. Bases de Datos y Migración de Datos
  3. Aplicaciones de Gestión Empresarial
  4. Consultoría y Análisis de Requerimientos
- Cada card tiene hover effect con borde naranja

### 4. PROYECTOS / CASOS DE ÉXITO
- Título: "Proyectos Entregados" / "Delivered Projects"
- Grid de tarjetas de proyecto (máximo 4, los mejores)
- Cada tarjeta: nombre, cliente/sector, descripción, tecnologías usadas
- Pill/badge de tecnologías con color de marca
- Sin links a demos que no funcionen — si no hay demo, no mostrar el botón

### 5. NOSOTROS / ABOUT
- Título: "Por Qué Gudiño Dev" / "Why Gudiño Dev"
- Párrafo que explica la filosofía de la empresa (tono corporativo)
- 3 métricas destacadas: años de experiencia, proyectos entregados, tecnologías
- Lista de diferenciadores clave (íconos + texto corto)
- **NO** incluir foto personal en esta sección — usar ícono o elemento gráfico de marca

### 6. TECNOLOGÍAS / STACK
- Título: "Nuestro Stack" / "Our Stack"
- Grilla de badges/logos de tecnologías
- Agrupadas por categoría: Backend, Frontend, Bases de Datos, Herramientas

### 7. CONTACTO
- Título: "¿Tienes un Proyecto?" / "Got a Project?"
- Párrafo motivador corto
- Formulario: Nombre, Email, Empresa (opcional), Mensaje, Botón enviar
- Formulario conectado a Formspree (acción: `https://formspree.io/f/gudinodev`) o mailto a `gudinodev@gmail.com`
- Información de contacto lateral: email, teléfono, ubicación, LinkedIn, GitHub

### 8. FOOTER
- Logo + tagline corto
- Links de navegación rápida
- Redes sociales: GitHub, LinkedIn
- Copyright: `© 2025 Gudiño Dev. Todos los derechos reservados.`

---

## Funcionalidades Requeridas

### Sistema de Idiomas (i18n)
- Selector visible en navbar: botones `ES` / `EN`
- Al cambiar idioma, el texto de TODA la página cambia sin recargar
- Idioma guardado en `localStorage` para persistir entre visitas
- Ver `docs/I18N.md` para implementación detallada

### Animaciones
- Fade-in de secciones al hacer scroll (IntersectionObserver)
- Hover effects en cards (translateY + border-color)
- Transición suave en cambio de idioma (crossfade o ninguna — no debe verse brusco)
- Typing effect opcional en el hero subtitle

### Formulario de Contacto
- Validación básica en el cliente (campos vacíos, formato de email)
- Feedback visual al enviar (estado de carga, mensaje de éxito/error)
- Acción: mailto o Formspree

### Responsive
- Mobile-first
- Breakpoints: 480px, 768px, 1024px, 1200px
- Navbar colapsa en hamburger bajo 768px
- Grid de servicios y proyectos se apila en mobile

---

## Lo Que NO Incluye Este Sitio

- ❌ Blog
- ❌ Panel de administración
- ❌ Sección de CV / hoja de vida personal
- ❌ Descarga de PDF de curriculum
- ❌ Sección "Sobre mí" biográfica
- ❌ Contador de visitas
- ❌ Chat en vivo
- ❌ Cookies banner (no las necesita)
