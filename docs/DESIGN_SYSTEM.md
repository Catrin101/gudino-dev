# DESIGN_SYSTEM.md — Sistema de Diseño Gudiño Dev

## Filosofía Visual

**Estilo:** Industrial profesional. Dark, preciso, técnico.  
**Sensación:** Una empresa de software seria, confiable, con carácter propio.  
**Referentes visuales:** Agencias de software europeas, firmas de consultoría tech, no portafolios de freelancers.  
**Lo que EVITAR:** Degradados genéricos azul-morado, diseños de "dev portfolio" con colores cyan neón, estética de hacker, Comic Sans, animaciones excesivas.

---

## Paleta de Colores

```css
:root {
  /* === COLORES DE MARCA === */
  --color-orange:       #E8732A;   /* Naranja principal — CTAs, acentos, hover */
  --color-orange-dark:  #C95F20;   /* Naranja oscuro — hover states, gradiente */
  --color-orange-dim:   rgba(232, 115, 42, 0.15); /* Naranja sutil — fondos de tags */
  --color-orange-border: rgba(232, 115, 42, 0.40); /* Naranja borde — tags, cards */

  /* === FONDOS === */
  --bg-primary:    #1A1A1A;   /* Fondo principal del sitio */
  --bg-secondary:  #232323;   /* Fondo de secciones alternas */
  --bg-card:       #2D2D2D;   /* Fondo de tarjetas, modales */
  --bg-elevated:   #333333;   /* Elementos elevados, hover de cards */

  /* === TEXTOS === */
  --text-primary:   #F5F0EB;  /* Texto principal — blanco cálido */
  --text-secondary: #C5BDB5;  /* Texto secundario — párrafos */
  --text-muted:     #8A8A8A;  /* Texto terciario — fechas, etiquetas */

  /* === BORDES === */
  --border-color:   #3D3D3D;  /* Borde estándar */
  --border-active:  #E8732A;  /* Borde activo/hover */

  /* === SOMBRAS === */
  --shadow:        0 10px 25px rgba(0, 0, 0, 0.50);
  --shadow-heavy:  0 20px 50px rgba(0, 0, 0, 0.70);
  --shadow-orange: 0 15px 30px rgba(232, 115, 42, 0.30);

  /* === GRADIENTES === */
  --gradient-brand: linear-gradient(135deg, #E8732A, #C95F20);
  --gradient-dark:  linear-gradient(180deg, #1A1A1A, #232323);

  /* === TRANSICIÓN GLOBAL === */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Regla de uso:**
- El naranja (#E8732A) solo aparece en: CTAs, iconos activos, líneas decorativas, hover, borders de énfasis, texto de acento.
- Nunca usar naranja como fondo de sección completa.
- Nunca mezclar con colores fuera de esta paleta.

---

## Tipografía

### Fuentes (Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

| Rol | Fuente | Peso | Uso |
|---|---|---|---|
| **Display / Títulos** | Rajdhani | 700 | Logo, section titles, hero headline |
| **Subtítulos** | Rajdhani | 600 | Card titles, nav links, labels |
| **Cuerpo** | IBM Plex Sans | 400 | Párrafos, descripciones |
| **UI / Labels** | IBM Plex Sans | 500 | Botones, tags, metadata |
| **Datos / Monospace** | IBM Plex Mono | 400 | Tech tags, código inline |

```css
:root {
  --font-display: 'Rajdhani', sans-serif;
  --font-body:    'IBM Plex Sans', sans-serif;
  --font-mono:    'IBM Plex Mono', monospace;
}
```

### Escala Tipográfica

```css
/* Títulos */
.hero-headline    { font-size: clamp(2.5rem, 5vw, 4rem);  font-family: var(--font-display); font-weight: 700; letter-spacing: 1px; }
.section-title    { font-size: clamp(1.8rem, 3vw, 2.8rem); font-family: var(--font-display); font-weight: 700; letter-spacing: 2px; }
.card-title       { font-size: 1.3rem; font-family: var(--font-display); font-weight: 600; letter-spacing: 0.5px; }

/* Cuerpo */
.body-large       { font-size: 1.1rem; font-family: var(--font-body); line-height: 1.8; }
.body-regular     { font-size: 1rem;   font-family: var(--font-body); line-height: 1.7; }
.body-small       { font-size: 0.9rem; font-family: var(--font-body); line-height: 1.6; }
.caption          { font-size: 0.8rem; font-family: var(--font-body); color: var(--text-muted); }
```

---

## Componentes

### Botones

```css
/* Botón primario — CTA principal */
.btn-primary {
  background: var(--gradient-brand);
  color: #fff;
  padding: 0.85rem 1.75rem;
  border-radius: 3px;           /* Angular, no redondeado — estética industrial */
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border: none;
  cursor: pointer;
  transition: var(--transition);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-orange);
}

/* Botón secundario — acción alternativa */
.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  padding: 0.85rem 1.75rem;
  border-radius: 3px;
  border: 1.5px solid var(--color-orange);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: var(--transition);
}
.btn-secondary:hover {
  background: var(--color-orange);
  transform: translateY(-2px);
}
```

### Cards de Servicio / Proyecto

```css
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 2rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

/* Línea superior naranja que aparece en hover */
.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--gradient-brand);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  border-color: var(--border-active);
  box-shadow: var(--shadow-heavy);
}

.card:hover::before {
  transform: scaleX(1);
}
```

### Tech Tags

```css
.tech-tag {
  background: var(--color-orange-dim);
  color: var(--color-orange);
  border: 1px solid var(--color-orange-border);
  padding: 0.3rem 0.7rem;
  border-radius: 3px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  display: inline-block;
}
```

### Selector de Idioma

```css
.lang-switcher {
  display: flex;
  gap: 0;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  overflow: hidden;
}

.lang-btn {
  padding: 0.4rem 0.8rem;
  background: transparent;
  color: var(--text-muted);
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  transition: var(--transition);
}

.lang-btn.active {
  background: var(--color-orange);
  color: #fff;
}

.lang-btn:not(.active):hover {
  background: var(--bg-elevated);
  color: var(--text-primary);
}
```

### Section Title con línea decorativa

```css
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--text-primary);
  position: relative;
  display: inline-block;
  padding-bottom: 1rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--gradient-brand);
  border-radius: 2px;
}
```

---

## Decoración y Elementos Visuales

### Hero — Elemento Geométrico Decorativo
En lugar de foto personal, el hero tiene un elemento visual abstracto-industrial:
- Un grid de puntos con degradado naranja a transparente (CSS o SVG)
- O un elemento geométrico: cuadrados anidados con borde naranja, escala/rotación sutil
- O texto "< />" gigante en el fondo con opacity baja (0.03–0.05), estilo marca de agua

```css
/* Marca de agua decorativa en el hero */
.hero-watermark {
  position: absolute;
  right: -2rem;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--font-display);
  font-size: clamp(8rem, 15vw, 15rem);
  font-weight: 700;
  color: var(--color-orange);
  opacity: 0.04;
  pointer-events: none;
  user-select: none;
  letter-spacing: -5px;
  line-height: 1;
}
```

### Separadores de Sección
- Las secciones alternas usan `--bg-secondary` vs `--bg-primary`
- Una línea horizontal sutil (`border-top: 1px solid var(--border-color)`) entre secciones
- NO usar separadores visuales llamativos o wavey

### Iconografía
- Usar **Font Awesome 6** para íconos de UI (`fas`, `fab`)
- Íconos de servicios y diferenciadores: estilo outline/regular, color naranja

---

## Layout y Espaciado

```css
/* Contenedor principal */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Secciones */
.section {
  padding: 6rem 0;
}

/* Grid de servicios — 4 columnas en desktop */
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

/* Grid de proyectos — 2 columnas en desktop */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

/* Grid de stack — 6+ columnas fluidas */
.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}
```

### Breakpoints

```css
/* Mobile */
@media (max-width: 480px) {
  .services-grid  { grid-template-columns: 1fr; }
  .projects-grid  { grid-template-columns: 1fr; }
  .hero-headline  { font-size: 2rem; }
}

/* Tablet */
@media (max-width: 768px) {
  .services-grid  { grid-template-columns: repeat(2, 1fr); }
  .projects-grid  { grid-template-columns: 1fr; }
  .nav-menu       { display: none; }   /* Sustituido por hamburger */
  .section        { padding: 4rem 0; }
}

/* Desktop pequeño */
@media (max-width: 1024px) {
  .services-grid  { grid-template-columns: repeat(2, 1fr); }
}
```

---

## Animaciones

```css
/* Entrada de elementos al hacer scroll */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delay para grupos de cards */
.card:nth-child(1) { transition-delay: 0s; }
.card:nth-child(2) { transition-delay: 0.1s; }
.card:nth-child(3) { transition-delay: 0.2s; }
.card:nth-child(4) { transition-delay: 0.3s; }
```

---

## Navbar

```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(26, 26, 26, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
  transition: var(--transition);
}

/* Al hacer scroll — navbar más visible */
.navbar.scrolled {
  background: rgba(26, 26, 26, 0.99);
  box-shadow: var(--shadow);
}
```
