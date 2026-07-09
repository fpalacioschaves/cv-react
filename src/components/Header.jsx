import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_LINK,
  GITHUB_PROFILE_URL,
  LINKEDIN_URL,
} from '../config'

export function Header({
  t,
  styles,
  pdfUrl,
  theme,
  lang,
  onToggleTheme,
  onToggleLang,
}) {
  return (
    <>
      <div style={styles.topBar}>
        <div style={styles.topBarGroup}>
          <span style={styles.toggleLabel}>{t.themeLabel}</span>
          <button
            type="button"
            onClick={onToggleTheme}
            style={{
              ...styles.toggleButton,
              ...(theme === 'dark' ? styles.toggleButtonActive : null),
            }}
          >
            {theme === 'dark' ? '🌙 ' + t.themeDark : '☀️ ' + t.themeLight}
          </button>
        </div>

        <div style={styles.topBarGroup}>
          <span style={styles.toggleLabel}>{t.langLabel}</span>
          <button
            type="button"
            onClick={onToggleLang}
            style={{
              ...styles.toggleButton,
              ...(lang === 'es' ? styles.toggleButtonActive : null),
            }}
          >
            {lang === 'es' ? t.langEs : t.langEn}
          </button>

          <a href={pdfUrl} download style={styles.pdfButton} title={t.downloadPdf}>
            ⬇️ {t.downloadPdf}
          </a>
        </div>
      </div>

      <header style={styles.header}>
        <div style={styles.heroContent}>
          <div style={styles.chip}>{t.chip}</div>
          <h1 style={styles.name}>Francisco Palacios&nbsp;Chaves</h1>
          <p style={styles.subtitle}>{t.headline}</p>
          <p style={styles.heroSummary}>{t.heroSummary}</p>

          <div style={styles.heroActions}>
            <a href={pdfUrl} download style={styles.primaryButton}>
              {t.downloadPdf}
            </a>
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              style={styles.secondaryButton}
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              style={styles.secondaryButton}
            >
              LinkedIn
            </a>
          </div>
        </div>

        <aside style={styles.contactCard}>
          <div style={styles.contactItem}>
            <span>📍</span>
            <span>{t.location}</span>
          </div>
          <div style={styles.contactItem}>
            <span>📞</span>
            <a href={CONTACT_PHONE_LINK} style={styles.contactLink}>
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
          <div style={styles.contactItem}>
            <span>✉️</span>
            <a href={`mailto:${CONTACT_EMAIL}`} style={styles.contactLink}>
              {CONTACT_EMAIL}
            </a>
          </div>
          <div style={{ ...styles.contactItem, marginTop: '0.35rem' }}>
            <span style={styles.badge}>{t.badge}</span>
          </div>
        </aside>
      </header>
    </>
  )
}
