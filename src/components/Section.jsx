// src/components/Section.jsx
export function Section({ id, title, styles, children, plain = false }) {
  return (
    <section id={id} style={styles.section}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      {plain ? children : <div style={styles.sectionBody}>{children}</div>}
    </section>
  )
}
