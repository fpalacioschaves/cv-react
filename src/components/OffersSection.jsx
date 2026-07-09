import { Section } from './Section'

function splitPoints(points) {
  const middle = Math.ceil(points.length / 2)
  return [points.slice(0, middle), points.slice(middle)]
}

export function OffersSection({ offersText, styles }) {
  const [teacherMain, teacherExtra] = splitPoints(offersText.teacherPoints)
  const [devMain, devExtra] = splitPoints(offersText.devPoints)
  const availableItems = offersText.availableItems || []

  const cards = [
    {
      title: offersText.teacherTitle,
      points: teacherMain,
    },
    {
      title: offersText.devTitle,
      points: devMain,
    },
    {
      title: offersText.materialsTitle || 'Materiales y documentación',
      points: teacherExtra,
    },
    {
      title: offersText.projectsTitle || 'Proyectos y soluciones digitales',
      points: devExtra,
    },
  ].filter((card) => card.points.length > 0)

  return (
    <Section id="ofrezco" title={offersText.title} styles={styles}>
      <p style={{ ...styles.paragraph, marginBottom: '1.15rem' }}>
        {offersText.intro ||
          'Aporto un perfil híbrido que combina docencia técnica, desarrollo web, documentación clara y orientación a proyectos reales.'}
      </p>

      {availableItems.length > 0 && (
        <aside
          className="cv-availability-block"
          aria-label={offersText.availableTitle || 'Disponible para'}
          style={{
            ...styles.quickFact,
            marginBottom: '1.15rem',
          }}
        >
          <div style={styles.offersTitle}>{offersText.availableTitle || 'Disponible para'}</div>
          <div className="cv-availability-list">
            {availableItems.map((item) => (
              <span key={item} className="cv-availability-pill">
                {item}
              </span>
            ))}
          </div>
        </aside>
      )}

      <div
        style={{
          ...styles.offersColumns,
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
        }}
      >
        {cards.map((card) => (
          <article key={card.title} style={styles.quickFact}>
            <div style={styles.offersTitle}>{card.title}</div>
            <ul style={styles.offersList}>
              {card.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
