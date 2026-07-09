export function Timeline({ items, styles, lang }) {
  return (
    <div style={{ ...styles.timeline, gap: '0.95rem' }} className="cv-timeline">
      {items.map((item, index) => {
        const period = typeof item.period === 'string' ? item.period : item.period[lang]
        const isCurrent = index === 0 && /Actualidad|Present/.test(period)
        const currentLabel = lang === 'es' ? 'Actualidad' : 'Current'

        return (
          <article
            key={`${item.org}-${period}`}
            style={{
              ...styles.timelineItem,
              alignItems: 'stretch',
              gap: '0.85rem 1rem',
              paddingBottom: index === items.length - 1 ? 0 : '0.15rem',
              borderBottom: 'none',
            }}
            className={
              isCurrent
                ? 'cv-timeline-item cv-timeline-item-current cv-reveal-card'
                : 'cv-timeline-item cv-reveal-card'
            }
          >
            <div
              style={{
                ...styles.timelineMarkerCol,
                paddingTop: '1rem',
                minWidth: '20px',
              }}
              className="cv-timeline-marker-col"
            >
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
                <div
                  style={{
                    ...styles.timelineLine,
                    minHeight: '100%',
                    marginTop: '0.4rem',
                  }}
                  className="cv-timeline-line"
                />
              )}
            </div>

            <div
              style={{
                ...styles.quickFact,
                width: '100%',
                padding: isCurrent ? '1.05rem 1.15rem' : '0.95rem 1.05rem',
                borderColor: isCurrent ? 'rgba(37, 99, 235, 0.35)' : styles.quickFact.border,
                background: isCurrent ? 'rgba(37, 99, 235, 0.08)' : styles.quickFact.background,
              }}
              className="cv-timeline-content"
            >
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
