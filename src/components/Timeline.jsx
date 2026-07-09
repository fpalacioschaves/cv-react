export function Timeline({ items, styles, lang }) {
  return (
    <div style={styles.timeline}>
      {items.map((item, index) => {
        const period = typeof item.period === 'string' ? item.period : item.period[lang]

        return (
          <article
            key={`${item.org}-${period}`}
            style={{
              ...styles.timelineItem,
              ...(index === items.length - 1 ? styles.timelineLast : null),
            }}
          >
            <div style={styles.timelineMarkerCol}>
              <div style={styles.timelineDot} />
              {index !== items.length - 1 && <div style={styles.timelineLine} />}
            </div>
            <div>
              <div style={styles.period}>{period}</div>
              <div style={styles.role}>{item.role[lang]}</div>
              <div style={styles.org}>
                {item.org} · {item.location[lang]}
              </div>
              <ul style={styles.bullets}>
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
