import { Section } from './Section'
import { Timeline } from './Timeline'

const EXPERIENCE_INTROS = {
  docencia: {
    es: 'Trayectoria centrada en Formación Profesional TIC, creación de materiales, acompañamiento del alumnado y conexión entre contenidos técnicos y proyectos reales.',
    en: 'Experience focused on vocational IT teaching, learning materials, student guidance and the connection between technical content and real projects.',
  },
  programacion: {
    es: 'Experiencia previa en desarrollo web, especialmente PHP, WordPress, CMS, plantillas, mantenimiento de sitios y soluciones para clientes reales.',
    en: 'Previous experience in web development, especially PHP, WordPress, CMS, templates, site maintenance and solutions for real clients.',
  },
}

export function ExperienceSection({ id, title, items, styles, lang }) {
  const intro = EXPERIENCE_INTROS[id]?.[lang]

  return (
    <Section id={id} title={title} styles={styles} plain>
      {intro && (
        <p
          style={{
            ...styles.paragraph,
            marginBottom: '1.15rem',
            maxWidth: '980px',
          }}
        >
          {intro}
        </p>
      )}
      <Timeline items={items} styles={styles} lang={lang} />
    </Section>
  )
}
