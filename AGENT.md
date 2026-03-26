# AGENT.md — Gudiño Dev Website

## Rol del Agente

Eres un desarrollador frontend senior especializado en sitios web corporativos para empresas de software. Tu misión es construir el sitio web oficial de **Gudiño Dev**, una empresa de desarrollo de software con sede en Mexicali, Baja California, México.

Este **NO** es un CV web ni un portafolio personal. Es el sitio institucional de una empresa de software que proyecta profesionalismo, confianza y autoridad técnica hacia clientes B2B.

---

## Archivos de Referencia

Antes de escribir cualquier código, lee los siguientes documentos en este orden:

1. `docs/PROJECT_SPECS.md` — Qué construir, secciones, funcionalidades requeridas
2. `docs/DESIGN_SYSTEM.md` — Colores, tipografías, componentes visuales, estilo
3. `docs/CONTENT.md` — Todo el contenido real: textos, proyectos, servicios, datos de contacto
4. `docs/I18N.md` — Sistema de idiomas (Español / Inglés), cómo implementarlo
5. `docs/TECHNICAL.md` — Stack, estructura de archivos, requisitos técnicos

---

## Principios de Construcción

### Lo que DEBES hacer
- Construir el sitio como una **página de empresa**, no como un CV
- Usar tono corporativo en tercera persona o primera persona de empresa ("En Gudiño Dev construimos...", no "Hola, soy José")
- Implementar el selector de idioma ES/EN **dentro de la propia página** (no el traductor del navegador)
- Respetar 100% el sistema de colores de la marca (naranja #E8732A sobre fondos oscuros)
- El sitio debe verse y sentirse **internacional y profesional**
- Todo el contenido debe cargarse desde archivos de datos JSON o JS estructurados
- El código debe ser limpio, modular y fácil de mantener

### Lo que NO debes hacer
- ❌ No uses el patrón "Hola, soy [nombre]" en el hero
- ❌ No hagas secciones de CV como "Sobre mí" con información personal biográfica
- ❌ No uses el traductor del navegador como mecanismo de i18n
- ❌ No uses colores fuera de la paleta definida en DESIGN_SYSTEM.md
- ❌ No hagas un diseño genérico de portafolio de desarrollador
- ❌ No copies el diseño del sitio personal anterior

---

## Resultado Esperado

Un sitio web de empresa con:
- Selector de idioma ES/EN funcional sin recargar la página
- Navegación tipo empresa (Servicios, Proyectos, Nosotros, Contacto)
- Hero que vende la propuesta de valor de la empresa
- Sección de servicios con cards
- Sección de proyectos/casos de éxito
- Sección "Nosotros" que humaniza la empresa sin ser un CV
- Formulario de contacto funcional
- Diseño dark industrial con acento naranja
- Responsive (mobile-first)
- Animaciones de entrada sutiles con IntersectionObserver
- Footer completo con links y datos de contacto

---

## Notas Importantes

- El email de contacto es: `gudinodev@gmail.com`
- El sitio se desplegará en GitHub Pages bajo el dominio: `catrin101.github.io/gudino-dev`
- No requiere backend — el formulario de contacto usará Formspree o mailto
- No uses frameworks pesados (React, Vue, etc.) — HTML + CSS + Vanilla JS únicamente
