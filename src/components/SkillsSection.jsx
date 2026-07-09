import { Section } from './Section'

export function SkillsSection({ t, styles, lang, skills }) {
  return (
    <Section id="skills" title={t.skillsTitle} styles={styles}>
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
