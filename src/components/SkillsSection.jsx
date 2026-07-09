import { Section } from './Section'

const SKILL_CLUSTERS = {
  es: [
    {
      title: 'Desarrollo web y full stack',
      description: 'Construcción de aplicaciones, interfaces y servicios web con enfoque práctico y mantenible.',
      items: ['PHP', 'Laravel', 'Java', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express'],
    },
    {
      title: 'WordPress y CMS',
      description: 'Experiencia real en plugins, temas, administración, mantenimiento y evolución de sitios.',
      items: ['WordPress', 'Plugins', 'Themes', 'Joomla', 'CodeIgniter'],
    },
    {
      title: 'Datos, gestión y análisis',
      description: 'Trabajo con modelos de datos, consultas, persistencia, paneles y visualización de información.',
      items: ['SQL', 'MySQL', 'Prisma', 'Power BI', 'Bases de datos'],
    },
    {
      title: 'Docencia técnica y documentación',
      description: 'Diseño de materiales, prácticas, rúbricas, proyectos, guías y documentación reutilizable.',
      items: ['DAM/DAW', 'FP TIC', 'Rúbricas', 'TFC', 'Documentación'],
    },
  ],
  en: [
    {
      title: 'Web and full-stack development',
      description: 'Building applications, interfaces and web services with a practical and maintainable approach.',
      items: ['PHP', 'Laravel', 'Java', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express'],
    },
    {
      title: 'WordPress and CMS',
      description: 'Real experience with plugins, themes, administration, maintenance and site evolution.',
      items: ['WordPress', 'Plugins', 'Themes', 'Joomla', 'CodeIgniter'],
    },
    {
      title: 'Data, management and analytics',
      description: 'Work with data models, queries, persistence, dashboards and information visualisation.',
      items: ['SQL', 'MySQL', 'Prisma', 'Power BI', 'Databases'],
    },
    {
      title: 'Technical teaching and documentation',
      description: 'Design of materials, exercises, rubrics, projects, guides and reusable documentation.',
      items: ['DAM/DAW', 'IT training', 'Rubrics', 'Final projects', 'Documentation'],
    },
  ],
}

export function SkillsSection({ t, styles, lang, skills }) {
  const intro =
    lang === 'es'
      ? 'Mis habilidades combinan desarrollo web, docencia técnica, documentación y capacidad para convertir necesidades educativas o de negocio en soluciones prácticas.'
      : 'My skills combine web development, technical teaching, documentation and the ability to turn educational or business needs into practical solutions.'

  return (
    <Section id="skills" title={t.skillsTitle} styles={styles}>
      <p style={{ ...styles.paragraph, marginBottom: '1.15rem' }}>{intro}</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '0.9rem',
          marginBottom: '1.35rem',
        }}
      >
        {SKILL_CLUSTERS[lang].map((cluster) => (
          <article key={cluster.title} style={styles.quickFact}>
            <span style={styles.quickFactLabel}>{cluster.title}</span>
            <span style={styles.quickFactValue}>{cluster.description}</span>
            <div style={styles.pillRow}>
              {cluster.items.map((item) => (
                <span key={item} style={styles.pill}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div style={styles.skillColumns}>
        <div>
          <div style={styles.skillGroupTitle}>{t.softTitle}</div>
          <ul style={styles.skillList}>
            {skills.soft[lang].map((skill) => (
              <li key={skill} style={styles.skillItem}>
                {skill}
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
              <li key={lng} style={styles.skillItem}>
                {lng}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
