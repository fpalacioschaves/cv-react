// src/components/Section.jsx
export function Section({ id, title, styles, children, plain = false }) {
  return (
    <section id={id} style={styles.section} className="cv-reveal">
      <h2 style={styles.sectionTitle}>{title}</h2>
      {plain ? children : <div style={styles.sectionBody} className="cv-section-panel">{children}</div>}
    </section>
  )
}
