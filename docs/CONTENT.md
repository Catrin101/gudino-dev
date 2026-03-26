# CONTENT.md — Contenido del Sitio

Todo el contenido real que aparecerá en la página. El agente usará este documento para poblar los archivos de datos JS.

---

## Datos de la Empresa

```js
const companyInfo = {
  name:     "Gudiño Dev",
  tagline:  {
    es: "Sistemas que funcionan de verdad",
    en: "Systems that actually work"
  },
  email:    "gudinodev@gmail.com",
  phone:    "(+52) 686 460 2677",
  location: {
    es: "Mexicali, Baja California, México",
    en: "Mexicali, Baja California, Mexico"
  },
  website:  "https://catrin101.github.io/gudino-dev",
  social: {
    github:   "https://github.com/Catrin101",
    linkedin: "https://www.linkedin.com/in/jose-enrique-gudiño-gomez-46904b20b"
  }
};
```

---

## Hero Section

```js
const hero = {
  es: {
    headline:    "Construimos sistemas web que resuelven problemas reales",
    subheadline: "Desarrollo de software a medida para negocios que necesitan resultados, no promesas.",
    cta_primary: "Ver Proyectos",
    cta_secondary: "Contáctanos"
  },
  en: {
    headline:    "We build web systems that solve real problems",
    subheadline: "Custom software development for businesses that need results, not promises.",
    cta_primary: "View Projects",
    cta_secondary: "Contact Us"
  }
};
```

---

## Navegación

```js
const navLinks = {
  es: ["Servicios", "Proyectos", "Nosotros", "Contacto"],
  en: ["Services", "Projects", "About",    "Contact"]
};
// hrefs: #servicios, #proyectos, #nosotros, #contacto
```

---

## Servicios

```js
const services = [
  {
    icon: "fas fa-globe",
    es: {
      title: "Sistemas Web a Medida",
      description: "Desarrollamos aplicaciones web completas desde el análisis de requerimientos hasta el despliegue en producción. Sin plantillas, sin código genérico."
    },
    en: {
      title: "Custom Web Systems",
      description: "We develop complete web applications from requirements analysis to production deployment. No templates, no generic code."
    }
  },
  {
    icon: "fas fa-database",
    es: {
      title: "Bases de Datos y Migración",
      description: "Diseño, optimización y migración de bases de datos SQL. Convertimos hojas de cálculo y procesos manuales en sistemas eficientes y escalables."
    },
    en: {
      title: "Databases & Data Migration",
      description: "SQL database design, optimization, and migration. We convert spreadsheets and manual processes into efficient, scalable systems."
    }
  },
  {
    icon: "fas fa-cogs",
    es: {
      title: "Aplicaciones de Gestión Empresarial",
      description: "Sistemas internos para control de inventarios, gestión de clientes, pedidos y contabilidad. Automatizamos los procesos que frenan tu negocio."
    },
    en: {
      title: "Business Management Apps",
      description: "Internal systems for inventory control, client management, orders, and accounting. We automate the processes slowing your business down."
    }
  },
  {
    icon: "fas fa-search",
    es: {
      title: "Consultoría y Análisis",
      description: "Analizamos tu problema antes de proponer una solución. Entregamos propuestas técnicas claras, honestas y ajustadas a tu presupuesto real."
    },
    en: {
      title: "Consulting & Analysis",
      description: "We analyze your problem before proposing a solution. We deliver clear, honest technical proposals tailored to your actual budget."
    }
  }
];
```

---

## Proyectos

```js
const projects = [
  {
    id: "gtek-logistics",
    client: "Gtek Logistics",
    sector: { es: "Logística y Transporte", en: "Logistics & Transport" },
    es: {
      title: "Sistema Web Empresarial",
      description: "Sistema web completo en PHP con base de datos personalizada para la gestión operativa diaria de la empresa. Desplegado en producción y en uso activo.",
      challenge: "La empresa gestionaba sus operaciones en hojas de cálculo desconectadas. Necesitaban un sistema centralizado con roles de usuario y reportes."
    },
    en: {
      title: "Enterprise Web System",
      description: "Complete PHP web system with a custom database for daily business operations management. Deployed to production and in active use.",
      challenge: "The company managed operations through disconnected spreadsheets. They needed a centralized system with user roles and reporting."
    },
    technologies: ["PHP", "SQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Catrin101/Sistema_GTek_Logistics",
    demo: null,
    featured: true,
    image: null   // El agente usará un ícono por defecto: "fas fa-truck"
  },
  {
    id: "casa-gudino",
    client: "Casa Gudiño",
    sector: { es: "Comercio / Negocio Familiar", en: "Commerce / Family Business" },
    es: {
      title: "Plataforma de Gestión de Negocio",
      description: "Sistema web para operación diaria: registro de clientes, gestión de pedidos y control de cuentas. Proyecto completo desde análisis hasta despliegue. Actualmente en producción.",
      challenge: "Negocio familiar con más de 100 años de historia que necesitaba digitalizar sus procesos manuales sin perder la confiabilidad de sus operaciones."
    },
    en: {
      title: "Business Management Platform",
      description: "Web system for daily operations: client registration, order management, and account control. Full project from analysis to deployment. Currently in production.",
      challenge: "A family business with over 100 years of history that needed to digitize its manual processes without compromising operational reliability."
    },
    technologies: ["PHP", "SQL", "JavaScript", "HTML", "CSS"],
    github: null,
    demo: null,
    featured: true,
    image: null   // Ícono: "fas fa-store"
  },
  {
    id: "uabc-academico",
    client: "UABC — Facultad de Ciencias Administrativas",
    sector: { es: "Educación / Institución", en: "Education / Institution" },
    es: {
      title: "Sistema de Gestión Académica",
      description: "Plataforma web para registro y control de información académica con integración a base de datos institucional. Facilitó la digitalización de procesos administrativos del departamento.",
      challenge: "El personal administrativo manejaba registros académicos en papel y Excel. Se necesitaba un sistema web con autenticación y control de acceso por rol."
    },
    en: {
      title: "Academic Management System",
      description: "Web platform for academic information registration and control, integrated with the institutional database. Facilitated the digitization of administrative department processes.",
      challenge: "Administrative staff managed academic records on paper and Excel. A web system with authentication and role-based access control was needed."
    },
    technologies: ["PHP", "SQL", "HTML", "CSS"],
    github: "https://github.com/Catrin101/Pagina-Emprendedores-UABC",
    demo: null,
    featured: true,
    image: null   // Ícono: "fas fa-graduation-cap"
  },
  {
    id: "uabc-posgrado",
    client: "UABC — Oficina de Posgrado",
    sector: { es: "Educación / Institución", en: "Education / Institution" },
    es: {
      title: "Migración de Datos y Sistema CRUD",
      description: "Migración de registros desde hojas de cálculo a base de datos SQL, con interfaz gráfica para operaciones CRUD. Optimizó el acceso y gestión de información del equipo administrativo.",
      challenge: "Años de registros en múltiples archivos de Excel sin estructura consistente. Se migró toda la información con validación y se entregó interfaz de consulta y edición."
    },
    en: {
      title: "Data Migration & CRUD System",
      description: "Migration of records from spreadsheets to SQL database, with a graphical interface for CRUD operations. Optimized information access and management for the administrative team.",
      challenge: "Years of records across multiple Excel files with no consistent structure. All data was migrated with validation and a query/edit interface was delivered."
    },
    technologies: ["SQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/RanEdy/iem-event-management-system",
    demo: null,
    featured: false,
    image: null   // Ícono: "fas fa-table"
  }
];
```

---

## Nosotros / About

```js
const about = {
  es: {
    title: "Por Qué Gudiño Dev",
    paragraphs: [
      "En Gudiño Dev no entregamos código: entregamos sistemas que funcionan. Cada proyecto comienza con un análisis profundo del problema del cliente, y termina con software desplegado en producción, probado y listo para usar.",
      "Nos especializamos en negocios que necesitan digitalizar sus procesos: desde PyMEs familiares hasta instituciones educativas. Nuestra diferencia está en la completitud — tomamos el proyecto desde la idea hasta la entrega final, sin dejar cabos sueltos."
    ],
    differentiators: [
      { icon: "fas fa-check-circle", text: "Proyecto completo: análisis, diseño, desarrollo y despliegue" },
      { icon: "fas fa-check-circle", text: "Comunicación directa con el cliente en todo momento" },
      { icon: "fas fa-check-circle", text: "Sin proyectos abandonados a la mitad" },
      { icon: "fas fa-check-circle", text: "Buenas prácticas y código limpio en cada entrega" },
      { icon: "fas fa-check-circle", text: "Precios reales y propuestas técnicas honestas" }
    ]
  },
  en: {
    title: "Why Gudiño Dev",
    paragraphs: [
      "At Gudiño Dev we don't deliver code: we deliver systems that work. Every project starts with a deep analysis of the client's problem, and ends with software deployed to production, tested, and ready to use.",
      "We specialize in businesses that need to digitize their processes: from family-owned SMEs to educational institutions. Our difference is in completeness — we take the project from idea to final delivery, leaving no loose ends."
    ],
    differentiators: [
      { icon: "fas fa-check-circle", text: "Complete project: analysis, design, development, and deployment" },
      { icon: "fas fa-check-circle", text: "Direct client communication at every stage" },
      { icon: "fas fa-check-circle", text: "No half-finished projects" },
      { icon: "fas fa-check-circle", text: "Best practices and clean code in every delivery" },
      { icon: "fas fa-check-circle", text: "Real pricing and honest technical proposals" }
    ]
  },
  stats: [
    { value: "4+", label: { es: "Proyectos Entregados", en: "Projects Delivered" } },
    { value: "2+", label: { es: "Años de Experiencia", en: "Years of Experience" } },
    { value: "10+", label: { es: "Tecnologías", en: "Technologies" } }
  ]
};
```

---

## Stack Tecnológico

```js
const stack = {
  backend: {
    label: { es: "Backend", en: "Backend" },
    items: ["PHP", "Python", "Java", "C#", "Node.js"]
  },
  frontend: {
    label: { es: "Frontend", en: "Frontend" },
    items: ["JavaScript", "HTML5", "CSS3"]
  },
  databases: {
    label: { es: "Bases de Datos", en: "Databases" },
    items: ["MySQL", "SQL Server", "SQLite", "Diseño de BD"]
  },
  tools: {
    label: { es: "Herramientas", en: "Tools" },
    items: ["Git", "GitHub", "VS Code", "Linux", "Apache"]
  }
};
```

---

## Contacto

```js
const contact = {
  es: {
    title: "¿Tienes un Proyecto?",
    subtitle: "Cuéntanos tu idea. Analizamos tu caso sin compromiso y te damos una propuesta técnica honesta.",
    form: {
      name:    "Tu nombre",
      email:   "Tu email",
      company: "Tu empresa (opcional)",
      message: "Cuéntanos tu proyecto...",
      submit:  "Enviar Mensaje",
      success: "¡Mensaje enviado! Te contactaremos pronto.",
      error:   "Hubo un error. Por favor escríbenos directo a gudinodev@gmail.com"
    },
    info_title: "Hablemos"
  },
  en: {
    title: "Got a Project?",
    subtitle: "Tell us your idea. We analyze your case with no commitment and give you an honest technical proposal.",
    form: {
      name:    "Your name",
      email:   "Your email",
      company: "Your company (optional)",
      message: "Tell us about your project...",
      submit:  "Send Message",
      success: "Message sent! We'll contact you soon.",
      error:   "There was an error. Please write directly to gudinodev@gmail.com"
    },
    info_title: "Let's Talk"
  }
};
```

---

## Footer

```js
const footer = {
  es: {
    tagline: "Sistemas que funcionan de verdad.",
    copyright: "© 2025 Gudiño Dev. Todos los derechos reservados."
  },
  en: {
    tagline: "Systems that actually work.",
    copyright: "© 2025 Gudiño Dev. All rights reserved."
  }
};
```
