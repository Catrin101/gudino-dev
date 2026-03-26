/* ========================================
   GUDIÑO DEV — Projects Data
   Array de Proyectos / Casos de Éxito
   ======================================== */

const projectsData = [
  {
    id: "gtek-logistics",
    client: "Gtek Logistics",
    sector: {
      es: "Logística y Transporte",
      en: "Logistics & Transport"
    },
    icon: "fas fa-truck",
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
    featured: true
  },
  {
    id: "casa-gudino",
    client: "Casa Gudiño",
    sector: {
      es: "Comercio / Negocio Familiar",
      en: "Commerce / Family Business"
    },
    icon: "fas fa-store",
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
    featured: true
  },
  {
    id: "uabc-academico",
    client: "UABC — Facultad de Ciencias Administrativas",
    sector: {
      es: "Educación / Institución",
      en: "Education / Institution"
    },
    icon: "fas fa-graduation-cap",
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
    featured: true
  },
  {
    id: "uabc-posgrado",
    client: "UABC — Oficina de Posgrado",
    sector: {
      es: "Educación / Institución",
      en: "Education / Institution"
    },
    icon: "fas fa-table",
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
    featured: false
  }
];
