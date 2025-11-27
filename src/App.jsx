import { useEffect, useState } from 'react'

// 👇 PDF en /public/CV_2025.pdf → path relativo, funciona en GitHub Pages
const pdfUrl = 'CV_2025.pdf'

const GITHUB_USERNAME = 'fpalacioschaves'

// ---------- Datos de contenido bilingüe ----------

const NAV_LINKS = {
  es: [
    { id: 'perfil', label: 'Perfil' },
    { id: 'ofrezco', label: 'Lo que ofrezco' },
    { id: 'docencia', label: 'Experiencia docente' },
    { id: 'programacion', label: 'Experiencia como programador' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'formacion', label: 'Formación' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'contacto', label: 'Contacto' },
  ],
  en: [
    { id: 'perfil', label: 'Profile' },
    { id: 'ofrezco', label: 'What I offer' },
    { id: 'docencia', label: 'Teaching experience' },
    { id: 'programacion', label: 'Developer experience' },
    { id: 'proyectos', label: 'Projects' },
    { id: 'formacion', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contacto', label: 'Contact' },
  ],
}

const teachingExperience = [
  {
    period: 'Oct 2024 – Present',
    role: {
      es: 'Profesor DAM/DAW',
      en: 'Vocational teacher (DAM/DAW)',
    },
    org: 'SAFA-ICET',
    location: {
      es: 'Málaga · Modalidad online',
      en: 'Málaga · Online',
    },
    bullets: {
      es: [
        'Impartición de Bases de Datos, Lenguajes de Marcas, Desarrollo en Entorno Servidor, Sistemas de Gestión Empresarial, Diseño de Interfaces Web y Desarrollo Web en Entorno Cliente.',
        'Grupos de 1.º y 2.º de DAM/DAW, con enfoque práctico y orientado a proyectos.',
      ],
      en: [
        'Teaching Databases, Markup Languages, Server-Side Development, Enterprise Management Systems, Web Interface Design and Client-Side Development.',
        '1st and 2nd year DAM/DAW groups, with a strong project-based and hands-on approach.',
      ],
    },
  },
  {
    period: 'Jul 2025 – Present',
    role: {
      es: 'Monitor curso Big Data & BI',
      en: 'Instructor – Big Data & BI',
    },
    org: 'CENEC',
    location: {
      es: 'Málaga',
      en: 'Málaga',
    },
    bullets: {
      es: ['Docencia del curso IFCT153PO Introducción al Big Data y Business Intelligence.'],
      en: ['Teaching the IFCT153PO “Introduction to Big Data and Business Intelligence” course.'],
    },
  },
  {
    period: 'Oct 2023 – Jun 2025',
    role: {
      es: 'Profesor FP DAM/DAW',
      en: 'Vocational teacher (DAM/DAW)',
    },
    org: 'CENEC',
    location: {
      es: 'Málaga · Modalidad presencial',
      en: 'Málaga · On-site',
    },
    bullets: {
      es: [
        'Impartición de Bases de Datos, Lenguajes de Marcas, Desarrollo Entorno Servidor y Sistemas de Gestión Empresarial.',
        'Tutor de Trabajos Fin de Grado, acompañando al alumnado en la definición y desarrollo de proyectos completos.',
      ],
      en: [
        'Teaching Databases, Markup Languages, Server-Side Development and Enterprise Management Systems.',
        'Supervision of final projects, guiding students through the definition and development of complete applications.',
      ],
    },
  },
  {
    period: '2021 – 2023',
    role: {
      es: 'Monitor cursos TIC',
      en: 'IT courses instructor',
    },
    org: 'Euroformac',
    location: {
      es: 'Málaga',
      en: 'Málaga',
    },
    bullets: {
      es: [
        'Docencia en cursos de administración y auditoría de servicios de mensajería (UF1274) y SQL (UF1472).',
        'Monitor en certificados de profesionalidad IFCD0210 Desarrollo de Aplicaciones con Tecnología Web.',
        'Monitor del curso IFCD063PO Iniciación a AngularJS.',
      ],
      en: [
        'Teaching courses on messaging services administration and auditing (UF1274) and SQL (UF1472).',
        'Trainer in the IFCD0210 Web Application Development professional certificate.',
        'Instructor for the IFCD063PO “Introduction to AngularJS” course.',
      ],
    },
  },
  {
    period: '2020 – 2022',
    role: {
      es: 'Monitor especialidades de programación',
      en: 'Programming specialties instructor',
    },
    org: 'Euroformac',
    location: {
      es: 'Málaga',
      en: 'Málaga',
    },
    bullets: {
      es: [
        'Monitor del curso IFCT036PO Desarrollo de videojuegos HTML5.',
        'Monitor del módulo MF0225 Gestión de Bases de Datos.',
        'Monitor del módulo MF0227 Programación Orientada a Objetos.',
      ],
      en: [
        'Instructor for the IFCT036PO HTML5 videogame development course.',
        'Instructor for the MF0225 Database Management module.',
        'Instructor for the MF0227 Object-Oriented Programming module.',
      ],
    },
  },
  {
    period: '1992 – 2004',
    role: {
      es: 'Profesor / Gerente',
      en: 'Teacher / Director',
    },
    org: 'Academia Palacios',
    location: {
      es: 'Málaga',
      en: 'Málaga',
    },
    bullets: {
      es: [
        'Dirección y gestión de academia privada de refuerzo de Matemáticas, Física y Química desde Primaria hasta Universidad.',
        'Preparación de exámenes cuatrimestrales, recuperaciones y pruebas de Selectividad.',
        'Clases privadas a domicilio de Matemáticas a todos los niveles.',
      ],
      en: [
        'Management of a private tutoring academy for Maths, Physics and Chemistry from Primary to University level.',
        'Preparation of term exams, retakes and university entrance exams.',
        'Private one-to-one Maths tutoring at all levels.',
      ],
    },
  },
]

const devExperience = [
  {
    period: 'Jun 2013 – Jan 2020',
    role: {
      es: 'Programador PHP / WordPress',
      en: 'PHP / WordPress developer',
    },
    org: 'Opinov8',
    location: {
      es: 'Málaga',
      en: 'Málaga',
    },
    bullets: {
      es: [
        'Desarrollo de plugins, módulos, plantillas y widgets para sitios WordPress.',
        'Instalación, administración y mantenimiento de sites basados en WordPress.',
        'Desarrollo en CodeIgniter y creación de paneles interactivos de visualización en Power BI para Business Intelligence.',
      ],
      en: [
        'Development of plugins, modules, templates and widgets for WordPress sites.',
        'Installation, administration and maintenance of WordPress-based sites.',
        'Development with CodeIgniter and creation of interactive dashboards in Power BI for Business Intelligence.',
      ],
    },
  },
  {
    period: 'Jun 2007 – Jun 2012',
    role: {
      es: 'Programador PHP',
      en: 'PHP developer',
    },
    org: 'Arente',
    location: {
      es: 'Málaga',
      en: 'Málaga',
    },
    bullets: {
      es: [
        'Adaptación y rediseño de sites bajo Joomla CMS, incluyendo instalación y mantenimiento.',
        'Programación en XSL para plataforma de comercio electrónico.',
        'Desarrollo de un gestor de contenidos propio en CodeIgniter.',
        'Maquetación de plantillas HTML a partir de diseños en PSD/PNG.',
      ],
      en: [
        'Adaptation and redesign of sites under Joomla CMS, including installation and maintenance.',
        'XSL programming for an e-commerce platform.',
        'Development of a custom CMS using CodeIgniter.',
        'HTML template coding from PSD/PNG designs.',
      ],
    },
  },
  {
    period: 'Jan 2005 – Dec 2007',
    role: {
      es: 'Desarrollador freelance',
      en: 'Freelance developer',
    },
    org: 'Quatto Consulting',
    location: {
      es: 'Málaga',
      en: 'Málaga',
    },
    bullets: {
      es: [
        'Responsable de diseño y desarrollo de plantillas web y elementos multimedia.',
        'Creación y mantenimiento de plataformas de e-learning.',
        'Desarrollo de CDs interactivos y materiales formativos digitales.',
      ],
      en: [
        'Responsible for the design and development of web templates and multimedia elements.',
        'Creation and maintenance of e-learning platforms.',
        'Development of interactive CDs and digital training materials.',
      ],
    },
  },
  {
    period: 'Nov 2000 – May 2004',
    role: {
      es: 'Programador web',
      en: 'Web developer',
    },
    org: 'Tetraware Infográfica',
    location: {
      es: 'Málaga',
      en: 'Málaga',
    },
    bullets: {
      es: [
        'Desarrollo de herramientas en PHP para la generación de sites corporativos y portales de Internet.',
        'Creación de librerías en PHP y mantenimiento de bases de datos MySQL.',
        'Desarrollo y testeo de plantillas HTML y animaciones 3D de elementos arquitectónicos.',
      ],
      en: [
        'Development of PHP tools for corporate sites and Internet portals.',
        'Creation of PHP libraries and MySQL database maintenance.',
        'Development and testing of HTML templates and 3D animations for architectural elements.',
      ],
    },
  },
]

const education = [
  {
    title: {
      es: 'Licenciado en Matemáticas · Especialidad en Estadística',
      en: 'Degree in Mathematics · Specialisation in Statistics',
    },
    center: {
      es: 'Universidad de Málaga',
      en: 'University of Málaga',
    },
    extra: '',
  },
  {
    title: {
      es: 'Curso de Adaptación Pedagógica (CAP)',
      en: 'Teaching Aptitude Course (CAP)',
    },
    center: {
      es: 'Universidad de Málaga',
      en: 'University of Málaga',
    },
    extra: '1995',
  },
  {
    title: {
      es: 'LEARN ANGULAR FROM SCRATCH',
      en: 'LEARN ANGULAR FROM SCRATCH',
    },
    center: { es: 'Udemy', en: 'Udemy' },
  },
  {
    title: {
      es: 'HTML TEMPLATE CONVERSION TO ANGULAR4',
      en: 'HTML TEMPLATE CONVERSION TO ANGULAR4',
    },
    center: { es: 'Udemy', en: 'Udemy' },
  },
  {
    title: {
      es: 'COMERCIO ELECTRÓNICO',
      en: 'E-commerce',
    },
    center: { es: 'Ánfora Formación', en: 'Ánfora Formación' },
  },
  {
    title: {
      es: 'Nuevas tecnologías aplicadas a la gestión laboral y fiscal',
      en: 'New technologies applied to labour and tax management',
    },
    center: { es: 'Ánfora Formación', en: 'Ánfora Formación' },
  },
  {
    title: {
      es: 'Diseño web para la creación de contenidos de formación e-learning',
      en: 'Web design for creating e-learning content',
    },
    center: { es: 'Grupo Antakira', en: 'Grupo Antakira' },
  },
  {
    title: {
      es: 'ICAgile Certified Professional',
      en: 'ICAgile Certified Professional',
    },
    center: { es: 'ICAgile', en: 'ICAgile' },
  },
]

const skills = {
  soft: {
    es: [
      'Alta capacidad de adaptación y aprendizaje continuo',
      'Trabajo en equipo y coordinación con otros perfiles técnicos y docentes',
      'Responsabilidad y capacidad de trabajo bajo plazos',
      'Empatía y orientación al alumnado/cliente',
      'Buena comunicación oral y escrita',
    ],
    en: [
      'High adaptability and continuous learning mindset',
      'Teamwork and coordination with other technical and teaching profiles',
      'Responsibility and ability to work under deadlines',
      'Empathy and focus on students/clients',
      'Strong oral and written communication skills',
    ],
  },
  languages: {
    es: ['Inglés (nivel profesional de lectura y uso técnico)'],
    en: ['English (professional level for reading and technical use)'],
  },
  tech: {
    es: [
      'PHP',
      'WordPress (plugins, themes, administración de sites)',
      'MySQL',
      'JavaScript / TypeScript',
      'Node.js',
      'React.js',
      'jQuery / Ajax',
      'HTML5 / CSS3',
      'Power BI',
      'Python',
    ],
    en: [
      'PHP',
      'WordPress (plugins, themes, site administration)',
      'MySQL',
      'JavaScript / TypeScript',
      'Node.js',
      'React.js',
      'jQuery / Ajax',
      'HTML5 / CSS3',
      'Power BI',
      'Python',
    ],
  },
}

const offers = {
  es: {
    title: 'Lo que ofrezco',
    teacherTitle: 'Como docente',
    devTitle: 'Como desarrollador',
    teacherPoints: [
      'Transformar contenidos complejos (bases de datos, programación, BI) en itinerarios claros y progresivos.',
      'Metodología muy práctica, basada en proyectos y en la resolución de problemas reales.',
      'Experiencia en FP, certificados de profesionalidad y formación para empresas.',
      'Acompañamiento cercano del alumnado: feedback constante, refuerzo y detección de necesidades.',
    ],
    devPoints: [
      'Experiencia sólida en PHP, WordPress y desarrollo de backends ligeros con frameworks como CodeIgniter.',
      'Capacidad para analizar problemas de negocio y traducirlos en soluciones web funcionales.',
      'Conocimiento de visualización de datos y paneles con Power BI.',
      'Enfoque pragmático: soluciones mantenibles, claras y bien documentadas.',
    ],
  },
  en: {
    title: 'What I offer',
    teacherTitle: 'As a teacher',
    devTitle: 'As a developer',
    teacherPoints: [
      'Turning complex content (databases, programming, BI) into clear and progressive learning paths.',
      'Highly practical methodology based on projects and real-world problem solving.',
      'Experience in vocational training, professional certificates and corporate training.',
      'Close support to students: continuous feedback, extra help and needs detection.',
    ],
    devPoints: [
      'Solid experience in PHP, WordPress and lightweight back-end development with frameworks such as CodeIgniter.',
      'Ability to analyse business problems and turn them into functional web solutions.',
      'Knowledge of data visualisation and dashboards using Power BI.',
      'Pragmatic approach: maintainable, clear and well-documented solutions.',
    ],
  },
}

const TEXT = {
  es: {
    chip: 'Currículum Vitae',
    headline:
      'Profesor de Desarrollo de Aplicaciones Web y Multiplataforma · Programador PHP & WordPress',
    badge: 'Disponible para colaboración docente y desarrollo web',
    profileTitle: 'Perfil profesional',
    profileP1:
      'Licenciado en Matemáticas con especialidad en Estadística, con amplia experiencia como programador PHP y administrador de sitios desarrollados en WordPress (creación de plugins y themes), y una sólida trayectoria como profesor y formador en el ámbito TIC.',
    profileP2:
      'Combino una fuerte base técnica con vocación docente, experiencia en certificados de profesionalidad y ciclos de Formación Profesional, y un enfoque muy práctico orientado a que el alumnado construya proyectos reales desde el primer día.',
    teachingTitle: 'Experiencia docente',
    devTitle: 'Experiencia como programador',
    educationTitle: 'Formación académica y complementaria',
    skillsTitle: 'Habilidades',
    softTitle: 'Competencias personales',
    techTitle: 'Tecnologías',
    langsTitle: 'Idiomas',
    lastUpdate: 'Última actualización: 2025',
    spaVersion: 'Versión SPA desarrollada con React.',
    location: '29011 · Málaga (España)',
    downloadPdf: 'Descargar CV en PDF',
    themeLabel: 'Tema',
    themeDark: 'Oscuro',
    themeLight: 'Claro',
    langLabel: 'Idioma',
    langEs: 'ES',
    langEn: 'EN',
    projectsTitle: 'Proyectos en GitHub',
    projectsFallback:
      'Puedes ver una selección de mis repositorios públicos en GitHub, o consultar el resto en mi perfil:',
    viewOnGithub: 'Ver en GitHub',
    contactTitle: 'Contacto y disponibilidad',
    contactIntro1:
      'Estoy abierto a colaboración docente en ciclos formativos, certificados de profesionalidad, formación para empresas y proyectos de desarrollo web.',
    contactIntro2:
      'Si quieres que hablemos de un proyecto concreto, puedes usar este formulario o escribirme directamente a fpalacioschaves@gmail.com.',
    contactNameLabel: 'Nombre',
    contactEmailLabel: 'Correo electrónico',
    contactMessageLabel: 'Mensaje',
    contactNamePlaceholder: '¿Cómo te llamas?',
    contactEmailPlaceholder: 'tuemail@ejemplo.com',
    contactMessagePlaceholder: 'Cuéntame brevemente en qué estás pensando…',
    contactSubmit: 'Enviar mensaje',
    contactError: 'Por favor, rellena nombre, correo y mensaje antes de enviar.',
    contactOk:
      'He abierto tu gestor de correo con el mensaje preparado. Si no lo ves, también puedes escribir a fpalacioschaves@gmail.com.',
  },
  en: {
    chip: 'Curriculum Vitae',
    headline: 'Web & Mobile Applications Teacher · PHP & WordPress Developer',
    badge: 'Available for teaching collaboration and web development',
    profileTitle: 'Professional profile',
    profileP1:
      'Mathematics graduate specialised in Statistics, with extensive experience as a PHP developer and WordPress site administrator (plugin and theme creation), and a solid track record as an IT trainer and teacher.',
    profileP2:
      'I combine a strong technical background with a clear teaching vocation, experience in vocational training and professional certificates, and a very practical, project-oriented approach so that students build real applications from day one.',
    teachingTitle: 'Teaching experience',
    devTitle: 'Developer experience',
    educationTitle: 'Education and training',
    skillsTitle: 'Skills',
    softTitle: 'Soft skills',
    techTitle: 'Technologies',
    langsTitle: 'Languages',
    lastUpdate: 'Last update: 2025',
    spaVersion: 'SPA version built with React.',
    location: '29011 · Málaga (Spain)',
    downloadPdf: 'Download CV as PDF',
    themeLabel: 'Theme',
    themeDark: 'Dark',
    themeLight: 'Light',
    langLabel: 'Language',
    langEs: 'ES',
    langEn: 'EN',
    projectsTitle: 'GitHub projects',
    projectsFallback:
      'Here you can see a selection of my public repositories on GitHub, or visit my full profile:',
    viewOnGithub: 'View on GitHub',
    contactTitle: 'Contact & availability',
    contactIntro1:
      'I am open to teaching collaborations in vocational training, professional certificates, corporate training and web development projects.',
    contactIntro2:
      'If you would like to discuss a specific project, you can use this form or email me directly at fpalacioschaves@gmail.com.',
    contactNameLabel: 'Name',
    contactEmailLabel: 'Email',
    contactMessageLabel: 'Message',
    contactNamePlaceholder: 'What is your name?',
    contactEmailPlaceholder: 'youremail@example.com',
    contactMessagePlaceholder: 'Briefly tell me what you have in mind…',
    contactSubmit: 'Send message',
    contactError: 'Please fill in name, email and message before sending.',
    contactOk:
      'I have opened your email client with the message ready. If you do not see it, you can also write to fpalacioschaves@gmail.com.',
  },
}

// ---------- Estilos dinámicos (claro / oscuro + transiciones) ----------

function createStyles(theme) {
  const isDark = theme === 'dark'

  return {
    navBar: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      marginBottom: '2rem',
      padding: '0.6rem 10px',
      backdropFilter: 'blur(16px)',
      background: isDark ? 'rgba(15,23,42,0.92)' : 'rgba(249,250,251,0.94)',
      borderBottom: `1px solid ${
        isDark ? 'rgba(31,41,55,0.9)' : 'rgba(209,213,219,1)'
      }`,
      transition: 'background 0.25s ease, box-shadow 0.25s ease',
    },
    navBarScrolled: {
      boxShadow: isDark
        ? '0 12px 30px rgba(15,23,42,0.9)'
        : '0 12px 30px rgba(148,163,184,0.65)',
    },

    toTopButton: {
      position: 'fixed',
      right: '1.5rem',
      bottom: '1.5rem',
      zIndex: 50,
      borderRadius: '999px',
      border: `1px solid ${
        isDark ? 'rgba(148,163,184,0.9)' : 'rgba(156,163,175,1)'
      }`,
      padding: '0.45rem 0.7rem',
      fontSize: '0.9rem',
      background: isDark ? 'rgba(15,23,42,0.95)' : 'rgba(255,255,255,0.96)',
      color: isDark ? '#e5e7eb' : '#111827',
      boxShadow: isDark
        ? '0 10px 30px rgba(15,23,42,0.8)'
        : '0 10px 30px rgba(148,163,184,0.7)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35rem',
      opacity: 0.9,
      transition:
        'transform 0.12s ease, box-shadow 0.2s ease, opacity 0.2s ease, background 0.2s ease',
    },

    app: {
      minHeight: '100vh',
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      background: isDark
        ? 'radial-gradient(circle at top left, #1f2937 0, #020617 40%, #000 100%)'
        : 'radial-gradient(circle at top left, #e5e7eb 0, #f9fafb 40%, #e5e7eb 100%)',
      color: isDark ? '#e5e7eb' : '#111827',
      transition: 'background 0.35s ease, color 0.35s ease',
    },
    layout: {
      margin: '0 auto',
      padding: '2.5rem 1.5rem 3.5rem',
    },
    topBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.75rem',
      flexWrap: 'wrap',
    },
    topBarGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      flexWrap: 'wrap',
      fontSize: '0.8rem',
    },
    toggleLabel: {
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      opacity: 0.8,
    },
    toggleButton: {
      borderRadius: '999px',
      border: `1px solid ${
        isDark ? 'rgba(55,65,81,0.9)' : 'rgba(209,213,219,1)'
      }`,
      padding: '0.25rem 0.7rem',
      fontSize: '0.8rem',
      background: isDark ? 'rgba(15,23,42,0.9)' : 'rgba(255,255,255,0.9)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.3rem',
      transition:
        'background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.12s ease',
    },
    toggleButtonActive: {
      background: isDark ? 'rgba(37,99,235,0.25)' : 'rgba(59,130,246,0.1)',
      borderColor: isDark ? 'rgba(96,165,250,0.9)' : 'rgba(59,130,246,0.9)',
    },
    chip: {
      display: 'inline-block',
      padding: '0.25rem 0.7rem',
      borderRadius: '999px',
      border: `1px solid ${
        isDark ? 'rgba(148, 163, 184, 0.6)' : 'rgba(148, 163, 184, 0.8)'
      }`,
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: isDark ? '#e5e7eb' : '#111827',
      backgroundColor: isDark ? 'rgba(15,23,42,0.9)' : 'rgba(255,255,255,0.85)',
      transition:
        'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
    },
    header: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '2.5rem',
    },
    name: {
      fontSize: '2.4rem',
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    subtitle: {
      fontSize: '1rem',
      color: isDark ? '#9ca3af' : '#4b5563',
      marginTop: '0.25rem',
    },
    contactCard: {
      background: isDark ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255,255,255,0.95)',
      borderRadius: '1rem',
      padding: '0.85rem 1rem',
      border: `1px solid ${
        isDark ? 'rgba(148, 163, 184, 0.4)' : 'rgba(209,213,219,1)'
      }`,
      fontSize: '0.9rem',
      minWidth: '230px',
      boxShadow: isDark
        ? '0 18px 40px rgba(15,23,42,0.6)'
        : '0 18px 40px rgba(148,163,184,0.35)',
      transition:
        'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.12s ease',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.35rem',
      marginBottom: '0.25rem',
      color: isDark ? '#cbd5f5' : '#1f2933',
    },
    nav: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
      marginBottom: 0,
      fontSize: '0.85rem',
    },
    navLink: {
      padding: '0.35rem 0.75rem',
      borderRadius: '999px',
      border: '1px solid transparent',
      background: isDark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255,255,255,0.9)',
      color: isDark ? '#e5e7eb' : '#111827',
      textDecoration: 'none',
      cursor: 'pointer',
      transition:
        'background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.12s ease',
    },
    navLinkSecondary: {
      background: isDark ? 'transparent' : 'rgba(249,250,251,1)',
      borderColor: isDark ? 'rgba(55, 65, 81, 0.9)' : 'rgba(209,213,219,1)',
    },
    navLinkActive: {
      borderColor: isDark ? 'rgba(96,165,250,1)' : 'rgba(59,130,246,1)',
      background: isDark ? 'rgba(37,99,235,0.3)' : 'rgba(59,130,246,0.12)',
      color: isDark ? '#e5e7eb' : '#1d4ed8',
      transform: 'translateY(-1px)',
      fontWeight: 600,
    },
    section: {
      marginBottom: '2.6rem',
      scrollMarginTop: '96px',
    },
    sectionTitle: {
      fontSize: '1.2rem',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: isDark ? '#9ca3af' : '#6b7280',
      marginBottom: '1.2rem',
    },
    sectionBody: {
      background: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255,255,255,0.95)',
      borderRadius: '1.1rem',
      border: `1px solid ${
        isDark ? 'rgba(31, 41, 55, 0.9)' : 'rgba(209,213,219,1)'
      }`,
      padding: '1.4rem 1.5rem',
      boxShadow: isDark
        ? '0 18px 40px rgba(15,23,42,0.7)'
        : '0 18px 40px rgba(148,163,184,0.45)',
      transition:
        'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.12s ease',
    },
    paragraph: {
      fontSize: '0.96rem',
      lineHeight: 1.7,
      color: isDark ? '#e5e7eb' : '#111827',
    },
    strong: {
      fontWeight: 600,
    },
    timeline: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.1rem',
    },
    timelineItem: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'auto minmax(0, 1fr)',
      gap: '0.75rem 1.5rem',
      paddingBottom: '1.35rem',
      borderBottom: `1px dashed ${
        isDark ? 'rgba(55, 65, 81, 0.9)' : 'rgba(209,213,219,1)'
      }`,
      transition: 'transform 0.12s ease, background 0.2s ease',
    },
    timelineLast: {
      borderBottom: 'none',
      paddingBottom: 0,
    },
    timelineMarkerCol: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '0.2rem',
    },
    timelineDot: {
      width: '11px',
      height: '11px',
      borderRadius: '999px',
      background: isDark ? '#60a5fa' : '#2563eb',
      border: `2px solid ${isDark ? '#1d4ed8' : '#bfdbfe'}`,
      boxShadow: isDark
        ? '0 0 0 3px rgba(37,99,235,0.35)'
        : '0 0 0 3px rgba(191,219,254,0.9)',
    },
    timelineLine: {
      flex: 1,
      width: '2px',
      marginTop: '0.35rem',
      background: isDark ? 'rgba(75,85,99,0.9)' : 'rgba(209,213,219,1)',
    },
    period: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: isDark ? '#9ca3af' : '#6b7280',
      marginBottom: '0.2rem',
    },
    role: {
      fontSize: '0.95rem',
      fontWeight: 600,
    },
    org: {
      fontSize: '0.9rem',
      color: isDark ? '#9ca3af' : '#4b5563',
      marginTop: '0.1rem',
    },
    bullets: {
      fontSize: '0.9rem',
      marginTop: '0.4rem',
      paddingLeft: '1rem',
      color: isDark ? '#d1d5db' : '#111827',
    },
    bulletItem: {
      marginBottom: '0.15rem',
    },
    pillRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.4rem',
      marginTop: '0.4rem',
    },
    pill: {
      fontSize: '0.8rem',
      padding: '0.15rem 0.6rem',
      borderRadius: '999px',
      background: isDark ? 'rgba(30, 64, 175, 0.7)' : 'rgba(59,130,246,0.1)',
      border: `1px solid ${
        isDark ? 'rgba(129, 140, 248, 0.7)' : 'rgba(59,130,246,0.85)'
      }`,
      color: isDark ? '#e5e7eb' : '#1d4ed8',
      transition:
        'background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.12s ease',
    },
    skillColumns: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
      gap: '1rem',
      fontSize: '0.9rem',
    },
    skillGroupTitle: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: isDark ? '#9ca3af' : '#6b7280',
      marginBottom: '0.4rem',
    },
    skillList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    footer: {
      marginTop: '1.5rem',
      fontSize: '0.78rem',
      color: isDark ? '#6b7280' : '#9ca3af',
      textAlign: 'center',
    },
    badge: {
      fontSize: '0.7rem',
      padding: '0.2rem 0.6rem',
      borderRadius: '999px',
      background: isDark ? 'rgba(6, 95, 70, 0.7)' : 'rgba(16,185,129,0.1)',
      border: `1px solid ${
        isDark ? 'rgba(16, 185, 129, 0.7)' : 'rgba(16,185,129,0.9)'
      }`,
      color: isDark ? '#a7f3d0' : '#047857',
    },
    offersColumns: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      gap: '1.25rem',
      fontSize: '0.9rem',
    },
    offersTitle: {
      fontSize: '0.9rem',
      fontWeight: 600,
      marginBottom: '0.4rem',
    },
    offersList: {
      listStyle: 'disc',
      paddingLeft: '1.1rem',
      margin: 0,
    },
    pdfButton: {
      borderRadius: '999px',
      border: `1px solid ${
        isDark ? 'rgba(96,165,250,1)' : 'rgba(59,130,246,1)'
      }`,
      padding: '0.35rem 0.85rem',
      fontSize: '0.8rem',
      background: isDark ? 'rgba(37,99,235,0.25)' : 'rgba(59,130,246,0.1)',
      color: isDark ? '#bfdbfe' : '#1d4ed8',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35rem',
      textDecoration: 'none',
      transition:
        'background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.12s ease',
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '1.25rem',
      alignItems: 'stretch',
    },
    projectCard: {
      background: isDark ? 'rgba(15,23,42,0.96)' : 'rgba(255,255,255,0.98)',
      borderRadius: '1rem',
      border: `1px solid ${
        isDark ? 'rgba(31,41,55,0.9)' : 'rgba(229,231,235,1)'
      }`,
      padding: '1rem 1.1rem 0.9rem',
      boxShadow: isDark
        ? '0 12px 28px rgba(15,23,42,0.75)'
        : '0 12px 28px rgba(148,163,184,0.45)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.45rem',
      boxSizing: 'border-box',
      transition:
        'transform 0.12s ease, box-shadow 0.2s ease, border-color 0.2s ease',
    },
    projectTitleRow: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0.4rem',
      marginBottom: '0.2rem',
    },
    projectTitle: {
      fontSize: '0.95rem',
      fontWeight: 600,
      wordBreak: 'break-word',
    },
    projectLangTag: {
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: '0.12rem 0.55rem',
      borderRadius: '999px',
      background: isDark ? 'rgba(30,64,175,0.85)' : 'rgba(219,234,254,0.95)',
      border: `1px solid ${
        isDark ? 'rgba(129,140,248,0.95)' : 'rgba(59,130,246,0.9)'
      }`,
      color: isDark ? '#e5e7eb' : '#1d4ed8',
      whiteSpace: 'nowrap',
    },
    projectDescription: {
      fontSize: '0.85rem',
      lineHeight: 1.5,
      color: isDark ? '#d1d5db' : '#4b5563',
      marginTop: '0.1rem',
    },
    projectLink: {
      marginTop: '0.35rem',
      fontSize: '0.8rem',
      textDecoration: 'none',
      alignSelf: 'flex-start',
      borderRadius: '999px',
      padding: '0.2rem 0.6rem',
      border: `1px solid ${
        isDark ? 'rgba(59,130,246,0.9)' : 'rgba(59,130,246,0.85)'
      }`,
      background: isDark ? 'rgba(30,64,175,0.35)' : 'rgba(219,234,254,0.95)',
      color: isDark ? '#93c5fd' : '#2563eb',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.25rem',
      transition:
        'background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.12s ease',
    },
    contactLayout: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '1.3rem',
      alignItems: 'flex-start',
    },
    contactText: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
      color: isDark ? '#e5e7eb' : '#111827',
    },
    contactForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7rem',
    },
    formLabel: {
      fontSize: '0.78rem',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: isDark ? '#9ca3af' : '#6b7280',
      marginBottom: '0.25rem',
      display: 'block',
    },
    formInput: {
      width: '100%',
      borderRadius: '0.6rem',
      border: `1px solid ${
        isDark ? 'rgba(55,65,81,1)' : 'rgba(209,213,219,1)'
      }`,
      padding: '0.5rem 0.65rem',
      fontSize: '0.9rem',
      background: isDark ? 'rgba(15,23,42,0.95)' : '#ffffff',
      color: isDark ? '#e5e7eb' : '#111827',
      outline: 'none',
      boxSizing: 'border-box',
    },
    formTextarea: {
      width: '100%',
      borderRadius: '0.6rem',
      border: `1px solid ${
        isDark ? 'rgba(55,65,81,1)' : 'rgba(209,213,219,1)'
      }`,
      padding: '0.55rem 0.65rem',
      fontSize: '0.9rem',
      minHeight: '110px',
      resize: 'vertical',
      background: isDark ? 'rgba(15,23,42,0.95)' : '#ffffff',
      color: isDark ? '#e5e7eb' : '#111827',
      outline: 'none',
      boxSizing: 'border-box',
    },
    formButton: {
      alignSelf: 'flex-start',
      borderRadius: '999px',
      border: `1px solid ${
        isDark ? 'rgba(96,165,250,1)' : 'rgba(59,130,246,1)'
      }`,
      padding: '0.35rem 0.9rem',
      fontSize: '0.85rem',
      background: isDark ? 'rgba(37,99,235,0.3)' : 'rgba(59,130,246,0.12)',
      color: isDark ? '#bfdbfe' : '#1d4ed8',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.3rem',
      transition:
        'background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.12s ease',
    },
    formFeedbackOk: {
      fontSize: '0.8rem',
      marginTop: '0.3rem',
      color: isDark ? '#6ee7b7' : '#047857',
    },
    formFeedbackError: {
      fontSize: '0.8rem',
      marginTop: '0.3rem',
      color: isDark ? '#fecaca' : '#b91c1c',
    },
  }
}

// ---------- Componentes puros, fuera de App ----------

function Section({ id, title, styles, children }) {
  return (
    <section id={id} style={styles.section}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.sectionBody}>{children}</div>
    </section>
  )
}

function Timeline({ items, styles, lang }) {
  return (
    <div style={styles.timeline}>
      {items.map((item, index) => (
        <article
          key={item.org + item.period}
          style={{
            ...styles.timelineItem,
            ...(index === items.length - 1 ? styles.timelineLast : null),
          }}
        >
          <div style={styles.timelineMarkerCol}>
            <div style={styles.timelineDot} />
            {index !== items.length - 1 && <div style={styles.timelineLine} />}
          </div>
          <div>
            <div style={styles.period}>{item.period}</div>
            <div style={styles.role}>{item.role[lang]}</div>
            <div style={styles.org}>
              {item.org} · {item.location[lang]}
            </div>
            <ul style={styles.bullets}>
              {item.bullets[lang].map((bullet) => (
                <li key={bullet.slice(0, 40)} style={styles.bulletItem}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  )
}

// ---------- Componente principal ----------

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return window.localStorage.getItem('theme') || 'dark'
  })
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'es'
    return window.localStorage.getItem('lang') || 'es'
  })

  const [projects, setProjects] = useState([])
  const [showToTop, setShowToTop] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [contactStatus, setContactStatus] = useState(null) // null | 'error' | 'sent'

  const [activeSection, setActiveSection] = useState('perfil')

  const styles = createStyles(theme)
  const t = TEXT[lang]
  const offersText = offers[lang]

  // Persistimos tema e idioma
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('lang', lang)
  }, [lang])

  useEffect(() => {
    const controller = new AbortController()

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
          { signal: controller.signal },
        )

        if (!res.ok) return
        const data = await res.json()

        const mapped = data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          language: repo.language,
          updatedAt: repo.updated_at,
        }))

        setProjects(mapped)
      } catch (err) {
        // opcional: console.error(err)
      }
    }

    fetchRepos()
    return () => controller.abort()
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const toggleLang = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (!el) return

    const navOffset = 96
    const rect = el.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const targetY = rect.top + scrollTop - navOffset

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    })

    setActiveSection(sectionId)
  }

  const handleContactChange = (e) => {
    const { name, value } = e.target
    setContactData((prev) => ({ ...prev, [name]: value }))
    if (contactStatus) setContactStatus(null)
  }

  const handleContactSubmit = () => {
    const name = contactData.name.trim()
    const email = contactData.email.trim()
    const message = contactData.message.trim()

    if (!name || !email || !message) {
      setContactStatus('error')
      return
    }

    const subject = lang === 'es' ? 'Contacto desde CV online' : 'Contact from online CV'

    const bodyLines =
      lang === 'es'
        ? [`Nombre: ${name}`, `Email: ${email}`, '', 'Mensaje:', message]
        : [`Name: ${name}`, `Email: ${email}`, '', 'Message:', message]

    const body = encodeURIComponent(bodyLines.join('\n'))

    const mailtoUrl = `mailto:fpalacioschaves@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${body}`

    try {
      window.open(mailtoUrl)
    } catch (err) {
      // si el navegador lo bloquea, simplemente no pasa nada
    }

    setContactStatus('sent')
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 80)
      setShowToTop(y > 400)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={styles.app}>
      <div style={styles.layout}>
        {/* Barra superior: tema, idioma, PDF */}
        <div style={styles.topBar}>
          <div style={styles.topBarGroup}>
            <span style={styles.toggleLabel}>{t.themeLabel}</span>
            <button
              type="button"
              onClick={toggleTheme}
              style={{
                ...styles.toggleButton,
                ...(theme === 'dark' ? styles.toggleButtonActive : null),
              }}
            >
              {theme === 'dark' ? '🌙 ' + t.themeDark : '☀️ ' + t.themeLight}
            </button>
          </div>

          <div style={styles.topBarGroup}>
            <span style={styles.toggleLabel}>{t.langLabel}</span>
            <button
              type="button"
              onClick={toggleLang}
              style={{
                ...styles.toggleButton,
                ...(lang === 'es' ? styles.toggleButtonActive : null),
              }}
            >
              {lang === 'es' ? t.langEs : t.langEn}
            </button>

            <a href={pdfUrl} download style={styles.pdfButton} title={t.downloadPdf}>
              ⬇️ {t.downloadPdf}
            </a>
          </div>
        </div>

        <header style={styles.header}>
          <div>
            <div style={styles.chip}>{t.chip}</div>
            <h1 style={styles.name}>Francisco Palacios&nbsp;Chaves</h1>
            <p style={styles.subtitle}>{t.headline}</p>
          </div>

          <aside style={styles.contactCard}>
            <div style={styles.contactItem}>
              <span>📍</span>
              <span>{t.location}</span>
            </div>
            <div style={styles.contactItem}>
              <span>📞</span>
              <a
                href="tel:+34655925498"
                style={{ color: '#bfdbfe', textDecoration: 'none' }}
              >
                655&nbsp;92&nbsp;54&nbsp;98
              </a>
            </div>
            <div style={styles.contactItem}>
              <span>✉️</span>
              <a
                href="mailto:fpalacioschaves@gmail.com"
                style={{ color: '#bfdbfe', textDecoration: 'none' }}
              >
                fpalacioschaves@gmail.com
              </a>
            </div>
            <div style={{ ...styles.contactItem, marginTop: '0.35rem' }}>
              <span style={styles.badge}>{t.badge}</span>
            </div>
          </aside>
        </header>

        <div
          style={{
            ...styles.navBar,
            ...(scrolled ? styles.navBarScrolled : null),
          }}
        >
          <nav style={styles.nav}>
            {NAV_LINKS[lang].map((link, index) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                style={{
                  ...styles.navLink,
                  ...(index > 0 ? styles.navLinkSecondary : null),
                  ...(activeSection === link.id ? styles.navLinkActive : null),
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <main>
          <Section id="perfil" title={t.profileTitle} styles={styles}>
            <p style={styles.paragraph}>
              {t.profileP1.split('programador PHP').length > 1 ? (
                <>
                  {t.profileP1.split('programador PHP')[0]}
                  <span style={styles.strong}>programador PHP</span>
                  {t.profileP1.split('programador PHP')[1]}
                </>
              ) : (
                t.profileP1
              )}
            </p>
            <p style={{ ...styles.paragraph, marginTop: '0.8rem' }}>{t.profileP2}</p>
          </Section>

          <Section id="ofrezco" title={offersText.title} styles={styles}>
            <div style={styles.offersColumns}>
              <div>
                <div style={styles.offersTitle}>{offersText.teacherTitle}</div>
                <ul style={styles.offersList}>
                  {offersText.teacherPoints.map((p) => (
                    <li key={p.slice(0, 40)}>{p}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={styles.offersTitle}>{offersText.devTitle}</div>
                <ul style={styles.offersList}>
                  {offersText.devPoints.map((p) => (
                    <li key={p.slice(0, 40)}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="docencia" title={t.teachingTitle} styles={styles}>
            <Timeline items={teachingExperience} styles={styles} lang={lang} />
          </Section>

          <Section id="programacion" title={t.devTitle} styles={styles}>
            <Timeline items={devExperience} styles={styles} lang={lang} />
          </Section>

          <Section id="proyectos" title={t.projectsTitle} styles={styles}>
            <div style={styles.projectsGrid}>
              {projects.length === 0 ? (
                <p style={styles.paragraph}>
                  {t.projectsFallback}{' '}
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.projectLink}
                  >
                    🐙 {t.viewOnGithub}
                  </a>
                </p>
              ) : (
                projects.map((project) => (
                  <article key={project.id} style={styles.projectCard}>
                    <div style={styles.projectTitleRow}>
                      <div style={styles.projectTitle}>{project.name}</div>
                      {project.language && (
                        <span style={styles.projectLangTag}>{project.language}</span>
                      )}
                    </div>

                    {project.description && (
                      <p style={styles.projectDescription}>{project.description}</p>
                    )}

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.projectLink}
                    >
                      🐙 {t.viewOnGithub}
                    </a>
                  </article>
                ))
              )}
            </div>
          </Section>

          <Section id="formacion" title={t.educationTitle} styles={styles}>
            <div style={styles.timeline}>
              {education.map((item) => (
                <div
                  key={item.title.es}
                  style={{
                    ...styles.timelineItem,
                    gridTemplateColumns: 'auto minmax(0, 1fr)',
                    borderBottom: `1px dashed ${
                      theme === 'dark'
                        ? 'rgba(55, 65, 81, 0.9)'
                        : 'rgba(209,213,219,1)'
                    }`,
                  }}
                >
                  <div style={styles.timelineMarkerCol}>
                    <div style={styles.timelineDot} />
                  </div>
                  <div>
                    <div style={styles.role}>{item.title[lang]}</div>
                    <div style={styles.org}>{item.center[lang]}</div>
                    {item.extra && (
                      <div style={{ ...styles.org, marginTop: '0.15rem' }}>
                        {item.extra}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="skills" title={t.skillsTitle} styles={styles}>
            <div style={styles.skillColumns}>
              <div>
                <div style={styles.skillGroupTitle}>{t.softTitle}</div>
                <ul style={styles.skillList}>
                  {skills.soft[lang].map((skill) => (
                    <li key={skill} style={{ marginBottom: '0.25rem' }}>
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={styles.skillGroupTitle}>{t.techTitle}</div>
                <div style={styles.pillRow}>
                  {skills.tech[lang].map((skill) => (
                    <span key={skill} style={styles.pill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div style={styles.skillGroupTitle}>{t.langsTitle}</div>
                <ul style={styles.skillList}>
                  {skills.languages[lang].map((lng) => (
                    <li key={lng} style={{ marginBottom: '0.25rem' }}>
                      • {lng}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="contacto" title={t.contactTitle} styles={styles}>
            <div style={styles.contactLayout}>
              <div style={styles.contactText}>
                <p>{t.contactIntro1}</p>
                <p style={{ marginTop: '0.6rem' }}>{t.contactIntro2}</p>
              </div>

              <div style={styles.contactForm}>
                <div>
                  <label style={styles.formLabel} htmlFor="contact-name">
                    {t.contactNameLabel}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={contactData.name}
                    onChange={handleContactChange}
                    placeholder={t.contactNamePlaceholder}
                    style={styles.formInput}
                  />
                </div>

                <div>
                  <label style={styles.formLabel} htmlFor="contact-email">
                    {t.contactEmailLabel}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={contactData.email}
                    onChange={handleContactChange}
                    placeholder={t.contactEmailPlaceholder}
                    style={styles.formInput}
                  />
                </div>

                <div>
                  <label style={styles.formLabel} htmlFor="contact-message">
                    {t.contactMessageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={contactData.message}
                    onChange={handleContactChange}
                    placeholder={t.contactMessagePlaceholder}
                    style={styles.formTextarea}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleContactSubmit}
                  style={styles.formButton}
                >
                  ✉️ {t.contactSubmit}
                </button>

                {contactStatus === 'error' && (
                  <p style={styles.formFeedbackError}>{t.contactError}</p>
                )}
                {contactStatus === 'sent' && (
                  <p style={styles.formFeedbackOk}>{t.contactOk}</p>
                )}
              </div>
            </div>
          </Section>
        </main>

        <footer style={styles.footer}>
          <div>{t.lastUpdate}</div>
          <div>{t.spaVersion}</div>
        </footer>

        {showToTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={styles.toTopButton}
            aria-label={lang === 'es' ? 'Volver arriba' : 'Back to top'}
          >
            ↑ {lang === 'es' ? 'Arriba' : 'Top'}
          </button>
        )}
      </div>
    </div>
  )
}
