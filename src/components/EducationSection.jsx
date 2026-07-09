import { Section } from './Section'

export function EducationSection({ t, styles, lang, education }) {
  return (
    <Section id="formacion" title={t.educationTitle} styles={styles}>
      <div style={styles.timeline}>
        {education.map((item) => (
          <article key={item.title.es} style={styles.educationItem}>
            <div style={styles.timelineMarkerCol}>
              <div style={styles.timelineDot} />
            </div>
            <div>
              <div style={styles.role}>{item.title[lang]}</div>
              <div style={styles.org}>{item.center[lang]}</div>
              {item.extra && <div style={styles.org}>{item.extra}</div>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
