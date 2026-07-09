import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_LINK,
  GITHUB_PROFILE_URL,
  LINKEDIN_URL,
} from '../config'

const MAIN_STACK = ['PHP', 'WordPress', 'React', 'Node.js', 'SQL']

export function Header({
  t,
  styles,
  theme,
  lang,
  onToggleTheme,
  onToggleLang,
}) {
  const copy =
    lang === 'es'
      ? {
          heroKicker: 'Docencia técnica · Desarrollo web · Proyectos educativos',
          heroPromise:
            'Ayudo a convertir tecnología compleja en aprendizaje claro, proyectos útiles y soluciones web mantenibles.',
          roleLabel: 'Perfil híbrido',
          roleValue: 'Docente FP + desarrollador web',
          roleText:
            'Experiencia en aula, programación, bases de datos, WordPress y proyectos técnicos reales.',
          focusLabel: 'Qué puedo aportar',
          focusValue: 'Formación TIC con mentalidad de producto',
          focusText:
            'Materiales claros, proyectos aplicados, documentación útil y soluciones mantenibles.',
          contactLabel: 'Contacto rápido',
        }
      : {
          heroKicker: 'Technical teaching · Web development · Educational projects',
          heroPromise:
            'I help turn complex technology into clear learning, useful projects and maintainable web solutions.',
          roleLabel: 'Hybrid profile',
          roleValue: 'Vocational teacher + web developer',
          roleText:
            'Experience in the classroom, programming, databases, WordPress and real technical projects.',
          focusLabel: 'What I bring',
          focusValue: 'IT training with a product mindset',
          focusText:
            'Clear materials, applied projects, useful documentation and maintainable solutions.',
          contactLabel: 'Quick contact',
        }

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

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

          <button type="button" onClick={handlePrint} style={styles.pdfButton} title={t.printCv}>
            🖨️ {t.printCv}
          </button>
        </div>
      </div>

      <header style={styles.header}>
        <section style={styles.heroContent} className="cv-hero-main">
          <p className="cv-hero-kicker">{copy.heroKicker}</p>

          <h1 style={styles.name} className="cv-hero-name">
            Francisco Palacios&nbsp;Chaves
          </h1>
          <p style={styles.subtitle} className="cv-hero-headline">
            {t.headline}
          </p>
          <p className="cv-hero-promise">{copy.heroPromise}</p>
          <p style={styles.heroSummary} className="cv-hero-summary">
            {t.heroSummary}
          </p>

          <div className="cv-hero-stack-pills" aria-label="Tecnologías principales">
            {MAIN_STACK.map((item) => (
              <span key={item} className="cv-hero-stack-pill">
                {item}
              </span>
            ))}
          </div>

          <div style={styles.heroActions} className="cv-hero-actions">
            <button type="button" onClick={handlePrint} style={styles.primaryButton}>
              🖨️ {t.printCv}
            </button>
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
        </section>

        <aside className="cv-hero-side">
          <div className="cv-hero-mini-card">
            <span className="cv-hero-card-label">{copy.roleLabel}</span>
            <strong className="cv-hero-card-value">{copy.roleValue}</strong>
            <span className="cv-hero-card-text">{copy.roleText}</span>
          </div>

          <div className="cv-hero-mini-card">
            <span className="cv-hero-card-label">{copy.focusLabel}</span>
            <strong className="cv-hero-card-value">{copy.focusValue}</strong>
            <span className="cv-hero-card-text">{copy.focusText}</span>
          </div>

          <div className="cv-hero-mini-card cv-hero-contact-card">
            <span className="cv-hero-card-label">{copy.contactLabel}</span>
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
          </div>
        </aside>
      </header>
    </>
  )
}
