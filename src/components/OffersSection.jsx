import { Section } from './Section'

export function OffersSection({ offersText, styles }) {
  return (
    <Section id="ofrezco" title={offersText.title} styles={styles}>
      <div style={styles.offersColumns}>
        <div>
          <div style={styles.offersTitle}>{offersText.teacherTitle}</div>
          <ul style={styles.offersList}>
            {offersText.teacherPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div>
          <div style={styles.offersTitle}>{offersText.devTitle}</div>
          <ul style={styles.offersList}>
            {offersText.devPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
