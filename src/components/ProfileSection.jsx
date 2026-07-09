import { Section } from './Section'

export function ProfileSection({ t, styles }) {
  return (
    <Section id="perfil" title={t.profileTitle} styles={styles}>
      <div style={styles.profileGrid}>
        <div>
          <p style={styles.profileLead}>{t.profileP1}</p>
          <p style={styles.paragraph}>{t.profileP2}</p>
          <p style={{ ...styles.paragraph, marginTop: '0.8rem' }}>{t.profileP3}</p>
        </div>

        <aside style={styles.quickFacts}>
          {t.profileHighlights.map((item) => (
            <div key={item.label} style={styles.quickFact}>
              <span style={styles.quickFactLabel}>{item.label}</span>
              <span style={styles.quickFactValue}>{item.value}</span>
            </div>
          ))}
        </aside>
      </div>
    </Section>
  )
}
