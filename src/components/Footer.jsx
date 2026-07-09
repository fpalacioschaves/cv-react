export function Footer({ t, styles }) {
  return (
    <footer style={styles.footer}>
      <div>{t.lastUpdate}</div>
      <div>{t.spaVersion}</div>
    </footer>
  )
}
