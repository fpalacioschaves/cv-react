export function Timeline({ items, styles, lang }) {
  return (
    <div style={styles.timeline} className="cv-timeline">
      {items.map((item, index) => {
        const period = typeof item.period === 'string' ? item.period : item.period[lang]
        const isCurrent = index === 0 && /Actualidad|Present/.test(period)
        const currentLabel = lang === 'es' ? 'Actualidad' : 'Current'

        return (
          <article
            key={`${item.org}-${period}`}
            style={{
              ...styles.timelineItem,
              ...(index === items.length - 1 ? styles.timelineLast : null),
              ...(isCurrent
                ? {
                    borderRadius: '1rem',
                    padding: '0.95rem 1rem 1rem',
                    marginLeft: '-0.75rem',
                    marginRight: '-0.35rem',
                    background: 'rgba(37, 99, 235, 0.08)',
                    borderBottom: index === items.length - 1 ? 'none' : styles.timelineItem.borderBottom,
                  }
                : null),
            }}
            className={isCurrent ? 'cv-timeline-item cv-timeline-item-current' : 'cv-timeline-item'}
          >
            <div style={styles.timelineMarkerCol} className="cv-timeline-marker-col">
              <div
                style={{
                  ...styles.timelineDot,
                  ...(isCurrent
                    ? {
                        width: '14px',
                        height: '14px',
                        boxShadow: '0 0 0 5px rgba(37, 99, 235, 0.22)',
                      }
                    : null),
                }}
                className="cv-timeline-dot"
              />
              {index !== items.length - 1 && (
                <div style={styles.timelineLine} className="cv-timeline-line" />
              )}
            </div>
            <div className="cv-timeline-content">
              <div style={styles.period} className="cv-timeline-period">
                {period}
                {isCurrent && (
                  <span
                    style={{
                      marginLeft: '0.55rem',
                      padding: '0.12rem 0.48rem',
                      borderRadius: '999px',
                      border: '1px solid rgba(37, 99, 235, 0.38)',
                      background: 'rgba(37, 99, 235, 0.12)',
                      color: '#60a5fa',
                      fontSize: '0.66rem',
                      letterSpacing: '0.08em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {currentLabel}
                  </span>
                )}
              </div>
              <div style={{ ...styles.role, fontSize: isCurrent ? '1.05rem' : styles.role.fontSize }}>
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
