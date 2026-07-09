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
          stackLabel: 'Stack principal',
          roleLabel: 'Perfil híbrido',
          roleValue: 'Docente FP + desarrollador web',
          roleText:
            'Experiencia en aula, programación, bases de datos, WordPress y proyectos técnicos reales.',
          focusLabel: 'Foco de trabajo',
          focusValue: 'Formación TIC con mentalidad de producto',
          focusText:
            'Materiales claros, proyectos aplicados, documentación útil y soluciones mantenibles.',
          contactLabel: 'Contacto rápido',
        }
      : {
          stackLabel: 'Core stack',
          roleLabel: 'Hybrid profile',
          roleValue: 'Vocational teacher + web developer',
          roleText:
            'Experience in the classroom, programming, databases, WordPress and real technical projects.',
          focusLabel: 'Work focus',
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
        <section style={styles.heroContent}>
          <div style={styles.heroTopLine}>
            <span style={styles.chip}>{t.chip}</span>
            <span style={styles.heroAvailability}>{t.badge}</span>
          </div>

          <h1 style={styles.name}>Francisco Palacios&nbsp;Chaves</h1>
          <p style={styles.subtitle}>{t.headline}</p>
          <p style={styles.heroSummary}>{t.heroSummary}</p>

          <div style={styles.heroStackBlock}>
            <span style={styles.heroStackLabel}>{copy.stackLabel}</span>
            <div style={styles.heroStackPills}>
              {MAIN_STACK.map((item) => (
                <span key={item} style={styles.heroStackPill}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div style={styles.heroActions}>
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

        <aside style={styles.heroBentoSide}>
          <div style={styles.heroMiniCard}>
            <span style={styles.heroCardLabel}>{copy.roleLabel}</span>
            <strong style={styles.heroCardValue}>{copy.roleValue}</strong>
            <span style={styles.heroCardText}>{copy.roleText}</span>
          </div>

          <div style={styles.heroMiniCard}>
            <span style={styles.heroCardLabel}>{copy.focusLabel}</span>
            <strong style={styles.heroCardValue}>{copy.focusValue}</strong>
            <span style={styles.heroCardText}>{copy.focusText}</span>
          </div>

          <div style={{ ...styles.heroMiniCard, ...styles.heroContactCard }}>
            <span style={styles.heroCardLabel}>{copy.contactLabel}</span>
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
