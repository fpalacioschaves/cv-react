// src/App.jsx
const styles = {
  app: {
    minHeight: '100vh',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    background: 'radial-gradient(circle at top left, #1f2937 0, #020617 40%, #000 100%)',
    color: '#e5e7eb',
  },
  layout: {
   /* maxWidth: '980px',*/
    margin: '0 auto',
    padding: '2.5rem 1.5rem 3.5rem',
  },
  chip: {
    display: 'inline-block',
    padding: '0.25rem 0.7rem',
    borderRadius: '999px',
    border: '1px solid rgba(148, 163, 184, 0.6)',
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#e5e7eb',
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
    color: '#9ca3af',
    marginTop: '0.25rem',
  },
  contactCard: {
    background: 'rgba(15, 23, 42, 0.85)',
    borderRadius: '1rem',
    padding: '0.85rem 1rem',
    border: '1px solid rgba(148, 163, 184, 0.4)',
    fontSize: '0.9rem',
    minWidth: '230px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
    marginBottom: '0.25rem',
    color: '#cbd5f5',
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginBottom: '2.4rem',
    fontSize: '0.85rem',
  },
  navLink: {
    padding: '0.35rem 0.75rem',
    borderRadius: '999px',
    border: '1px solid transparent',
    background: 'rgba(15, 23, 42, 0.7)',
    color: '#e5e7eb',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  navLinkSecondary: {
    background: 'transparent',
    borderColor: 'rgba(55, 65, 81, 0.9)',
  },
  section: {
    marginBottom: '2.6rem',
  },
  sectionTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#9ca3af',
    marginBottom: '1.2rem',
  },
  sectionBody: {
    background: 'rgba(15, 23, 42, 0.8)',
    borderRadius: '1.1rem',
    border: '1px solid rgba(31, 41, 55, 0.9)',
    padding: '1.4rem 1.5rem',
  },
  paragraph: {
    fontSize: '0.96rem',
    lineHeight: 1.7,
    color: '#e5e7eb',
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
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 3fr)',
    gap: '0.75rem 1.5rem',
    paddingBottom: '1.1rem',
    borderBottom: '1px dashed rgba(55, 65, 81, 0.9)',
  },
  timelineLast: {
    borderBottom: 'none',
    paddingBottom: 0,
  },
  period: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#9ca3af',
  },
  role: {
    fontSize: '0.95rem',
    fontWeight: 600,
  },
  org: {
    fontSize: '0.9rem',
    color: '#9ca3af',
    marginTop: '0.1rem',
  },
  bullets: {
    fontSize: '0.9rem',
    marginTop: '0.4rem',
    paddingLeft: '1rem',
    color: '#d1d5db',
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
    background: 'rgba(30, 64, 175, 0.7)',
    border: '1px solid rgba(129, 140, 248, 0.7)',
    color: '#e5e7eb',
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
    color: '#9ca3af',
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
    color: '#6b7280',
    textAlign: 'center',
  },
  badge: {
    fontSize: '0.7rem',
    padding: '0.2rem 0.6rem',
    borderRadius: '999px',
    background: 'rgba(6, 95, 70, 0.7)',
    border: '1px solid rgba(16, 185, 129, 0.7)',
    color: '#a7f3d0',
  },
};

const NAV_LINKS = [
  { id: 'perfil', label: 'Perfil' },
  { id: 'docencia', label: 'Experiencia docente' },
  { id: 'programacion', label: 'Experiencia como programador' },
  { id: 'formacion', label: 'Formación' },
  { id: 'skills', label: 'Habilidades' },
];

const teachingExperience = [
  {
    period: 'Oct 2024 – Actualidad',
    role: 'Profesor DAM/DAW',
    org: 'SAFA‑ICET',
    location: 'Málaga · Modalidad online',
    bullets: [
      'Impartición de Bases de Datos, Lenguajes de Marcas, Desarrollo en Entorno Servidor, Sistemas de Gestión Empresarial, Diseño de Interfaces Web y Desarrollo Web en Entorno Cliente.',
      'Grupos de 1.º y 2.º de DAM/DAW, con enfoque práctico y orientado a proyectos.',
    ],
  },
  {
    period: 'Jul 2025 – Actualidad',
    role: 'Monitor curso Big Data & BI',
    org: 'CENEC',
    location: 'Málaga',
    bullets: [
      'Docencia del curso IFCT153PO Introducción al Big Data y Business Intelligence.',
    ],
  },
  {
    period: 'Oct 2023 – Jun 2025',
    role: 'Profesor FP DAM/DAW',
    org: 'CENEC',
    location: 'Málaga · Modalidad presencial',
    bullets: [
      'Impartición de Bases de Datos, Lenguajes de Marcas, Desarrollo Entorno Servidor y Sistemas de Gestión Empresarial.',
      'Tutor de Trabajos Fin de Grado, acompañando al alumnado en la definición y desarrollo de proyectos completos.',
    ],
  },
  {
    period: '2021 – 2023',
    role: 'Monitor cursos TIC',
    org: 'Euroformac',
    location: 'Málaga',
    bullets: [
      'Docencia en cursos de administración y auditoría de servicios de mensajería (UF1274) y SQL (UF1472).',
      'Monitor en certificados de profesionalidad IFCD0210 Desarrollo de Aplicaciones con Tecnología Web.',
      'Monitor del curso IFCD063PO Iniciación a AngularJS.',
    ],
  },
  {
    period: '2020 – 2022',
    role: 'Monitor especialidades de programación',
    org: 'Euroformac',
    location: 'Málaga',
    bullets: [
      'Monitor del curso IFCT036PO Desarrollo de videojuegos HTML5.',
      'Monitor del módulo MF0225 Gestión de Bases de Datos.',
      'Monitor del módulo MF0227 Programación Orientada a Objetos.',
    ],
  },
  {
    period: '1992 – 2004',
    role: 'Profesor / Gerente',
    org: 'Academia Palacios',
    location: 'Málaga',
    bullets: [
      'Dirección y gestión de academia privada de refuerzo de Matemáticas, Física y Química desde Primaria hasta Universidad.',
      'Preparación de exámenes cuatrimestrales, recuperaciones y pruebas de Selectividad.',
      'Clases privadas a domicilio de Matemáticas a todos los niveles.',
    ],
  },
];

const devExperience = [
  {
    period: 'Jun 2013 – Ene 2020',
    role: 'Programador PHP / WordPress',
    org: 'Opinov8',
    location: 'Málaga',
    bullets: [
      'Desarrollo de plugins, módulos, plantillas y widgets para sitios WordPress.',
      'Instalación, administración y mantenimiento de sites basados en WordPress.',
      'Desarrollo en CodeIgniter y creación de paneles interactivos de visualización en Power BI para Business Intelligence.',
    ],
  },
  {
    period: 'Jun 2007 – Jun 2012',
    role: 'Programador PHP',
    org: 'Arente',
    location: 'Málaga',
    bullets: [
      'Adaptación y rediseño de sites bajo Joomla CMS, incluyendo instalación y mantenimiento.',
      'Programación en XSL para plataforma de comercio electrónico.',
      'Desarrollo de un gestor de contenidos propio en CodeIgniter.',
      'Maquetación de plantillas HTML a partir de diseños en PSD/PNG.',
    ],
  },
  {
    period: 'Ene 2005 – Dic 2007',
    role: 'Desarrollador freelance',
    org: 'Quatto Consulting',
    location: 'Málaga',
    bullets: [
      'Responsable de diseño y desarrollo de plantillas web y elementos multimedia.',
      'Creación y mantenimiento de plataformas de e‑learning.',
      'Desarrollo de CDs interactivos y materiales formativos digitales.',
    ],
  },
  {
    period: 'Nov 2000 – May 2004',
    role: 'Programador web',
    org: 'Tetraware Infográfica',
    location: 'Málaga',
    bullets: [
      'Desarrollo de herramientas en PHP para la generación de sites corporativos y portales de Internet.',
      'Creación de librerías en PHP y mantenimiento de bases de datos MySQL.',
      'Desarrollo y testeo de plantillas HTML y animaciones 3D de elementos arquitectónicos.',
    ],
  },
];

const education = [
  {
    title: 'Licenciado en Matemáticas · Especialidad en Estadística',
    center: 'Universidad de Málaga',
    extra: '',
  },
  {
    title: 'Curso de Adaptación Pedagógica (CAP)',
    center: 'Universidad de Málaga',
    extra: '1995',
  },
  {
    title: 'LEARN ANGULAR FROM SCRATCH',
    center: 'Udemy',
  },
  {
    title: 'HTML TEMPLATE CONVERSION TO ANGULAR4',
    center: 'Udemy',
  },
  {
    title: 'COMERCIO ELECTRÓNICO',
    center: 'Ánfora Formación',
  },
  {
    title: 'Nuevas tecnologías aplicadas a la gestión laboral y fiscal',
    center: 'Ánfora Formación',
  },
  {
    title: 'Diseño web para la creación de contenidos de formación e‑learning',
    center: 'Grupo Antakira',
  },
  {
    title: 'ICAgile Certified Professional',
    center: 'ICAgile',
  },
];

const skills = {
  soft: [
    'Alta capacidad de adaptación y aprendizaje continuo',
    'Trabajo en equipo y coordinación con otros perfiles técnicos y docentes',
    'Responsabilidad y capacidad de trabajo bajo plazos',
    'Empatía y orientación al alumnado/cliente',
    'Buena comunicación oral y escrita',
  ],
  languages: ['Inglés (nivel profesional de lectura y uso técnico)'],
  tech: [
    'PHP',
    'WordPress (plugins, themes, administración de sites)',
    'MySQL',
    'JavaScript / TypeScript',
    'Node.js',
    'React.js',
    'jQuery / Ajax',
    'HTML5 / CSS3',
    'Power BI',
  ],
};

function Section({ id, title, children }) {
  return (
    <section id={id} style={styles.section}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.sectionBody}>{children}</div>
    </section>
  );
}

function Timeline({ items }) {
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
          <div>
            <div style={styles.period}>{item.period}</div>
          </div>
          <div>
            <div style={styles.role}>{item.role}</div>
            <div style={styles.org}>
              {item.org} · {item.location}
            </div>
            <ul style={styles.bullets}>
              {item.bullets.map((bullet) => (
                <li key={bullet.slice(0, 25)} style={styles.bulletItem}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div style={styles.app}>
      <div style={styles.layout}>
        <header style={styles.header}>
          <div>
            <div style={styles.chip}>Currículum Vitae</div>
            <h1 style={styles.name}>Francisco Palacios&nbsp;Chaves</h1>
            <p style={styles.subtitle}>
              Profesor de Desarrollo de Aplicaciones Web y Multiplataforma ·
              Programador PHP &amp; WordPress
            </p>
          </div>

          <aside style={styles.contactCard}>
            <div style={styles.contactItem}>
              <span>📍</span>
              <span>29011 · Málaga (España)</span>
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
              <span style={styles.badge}>Disponible para colaboración docente y desarrollo web</span>
            </div>
          </aside>
        </header>

        <nav style={styles.nav}>
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              style={{
                ...styles.navLink,
                ...(index > 0 ? styles.navLinkSecondary : null),
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <main>
          <Section id="perfil" title="Perfil profesional">
            <p style={styles.paragraph}>
              Licenciado en Matemáticas con especialidad en Estadística, con amplia
              experiencia como{' '}
              <span style={styles.strong}>programador PHP</span> y administrador de
              sitios desarrollados en{' '}
              <span style={styles.strong}>WordPress</span> (creación de plugins y
              themes), y una sólida trayectoria como{' '}
              <span style={styles.strong}>profesor y formador en el ámbito TIC</span>.
            </p>
            <p style={{ ...styles.paragraph, marginTop: '0.8rem' }}>
              Combino una fuerte base técnica con vocación docente, experiencia
              en certificados de profesionalidad y ciclos de Formación Profesional,
              y un enfoque muy práctico orientado a que el alumnado construya
              proyectos reales desde el primer día.
            </p>
          </Section>

          <Section id="docencia" title="Experiencia docente">
            <Timeline items={teachingExperience} />
          </Section>

          <Section id="programacion" title="Experiencia como programador">
            <Timeline items={devExperience} />
          </Section>

          <Section id="formacion" title="Formación académica y complementaria">
            <div style={styles.timeline}>
              {education.map((item) => (
                <div
                  key={item.title}
                  style={{
                    ...styles.timelineItem,
                    gridTemplateColumns: 'minmax(0, 1fr)',
                    borderBottom: '1px dashed rgba(55, 65, 81, 0.6)',
                  }}
                >
                  <div>
                    <div style={styles.role}>{item.title}</div>
                    <div style={styles.org}>{item.center}</div>
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

          <Section id="skills" title="Habilidades">
            <div style={styles.skillColumns}>
              <div>
                <div style={styles.skillGroupTitle}>Competencias personales</div>
                <ul style={styles.skillList}>
                  {skills.soft.map((skill) => (
                    <li key={skill} style={{ marginBottom: '0.25rem' }}>
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={styles.skillGroupTitle}>Tecnologías</div>
                <div style={styles.pillRow}>
                  {skills.tech.map((skill) => (
                    <span key={skill} style={styles.pill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div style={styles.skillGroupTitle}>Idiomas</div>
                <ul style={styles.skillList}>
                  {skills.languages.map((lang) => (
                    <li key={lang} style={{ marginBottom: '0.25rem' }}>
                      • {lang}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>
        </main>

        <footer style={styles.footer}>
          <div>Última actualización: 2025</div>
          <div>Versión SPA desarrollada con React.</div>
        </footer>
      </div>
    </div>
  );
}
