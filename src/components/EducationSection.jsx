import { Section } from './Section'

export function EducationSection({ t, styles, lang, education }) {
  return (
    <Section id="formacion" title={t.educationTitle} styles={styles}>
      <div style={styles.timeline} className="cv-education-list">
        {education.map((item) => (
          <article key={item.title.es} style={styles.educationItem} className="cv-education-item cv-reveal-card">
            <div style={styles.timelineMarkerCol} className="cv-education-marker-col">
              <div style={styles.timelineDot} className="cv-education-dot" />
            </div>
            <div className="cv-education-content">
              <div style={styles.role} className="cv-education-title">
                {item.title[lang]}
              </div>
              <div style={styles.org} className="cv-education-center">
                {item.center[lang]}
              </div>
              {item.extra && <div style={styles.org} className="cv-education-extra">{item.extra}</div>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
