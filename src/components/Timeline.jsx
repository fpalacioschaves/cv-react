export function Timeline({ items, styles, lang }) {
  return (
    <div style={styles.timeline} className="cv-timeline">
      {items.map((item, index) => {
        const period = typeof item.period === 'string' ? item.period : item.period[lang]
        const isCurrent = index === 0 && /Actualidad|Present/.test(period)

        return (
          <article
            key={`${item.org}-${period}`}
            style={{
              ...styles.timelineItem,
              ...(index === items.length - 1 ? styles.timelineLast : null),
            }}
            className={isCurrent ? 'cv-timeline-item cv-timeline-item-current' : 'cv-timeline-item'}
          >
            <div style={styles.timelineMarkerCol} className="cv-timeline-marker-col">
              <div style={styles.timelineDot} className="cv-timeline-dot" />
              {index !== items.length - 1 && (
                <div style={styles.timelineLine} className="cv-timeline-line" />
              )}
            </div>
            <div className="cv-timeline-content">
              <div style={styles.period} className="cv-timeline-period">
                {period}
              </div>
              <div style={styles.role} className="cv-timeline-role">
                {item.role[lang]}
              </div>
              <div style={styles.org} className="cv-timeline-org">
                {item.org} · {item.location[lang]}
              </div>
              <ul style={styles.bullets} className="cv-timeline-bullets">
                {item.bullets[lang].map((bullet) => (
                  <li key={bullet} style={styles.bulletItem}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        )
      })}
    </div>
  )
}
