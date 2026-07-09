import { CONTACT_EMAIL, GITHUB_PROFILE_URL, LINKEDIN_URL } from '../config'

export function Footer({ t, styles }) {
  return (
    <footer style={styles.footer} className="cv-footer-card cv-reveal">
      <div className="cv-footer-main">
        <div>
          <strong className="cv-footer-name">{t.footerName || 'Francisco Palacios Chaves'}</strong>
          <span className="cv-footer-role">{t.footerRole || 'Docente FP TIC · Desarrollador web'}</span>
          <span className="cv-footer-tagline">{t.footerTagline}</span>
        </div>

        <div className="cv-footer-links" aria-label="Enlaces profesionales">
          <a href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer">
            {t.footerGithub || 'GitHub'}
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            {t.footerLinkedin || 'LinkedIn'}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{t.footerEmail || 'Email'}</a>
        </div>
      </div>

      <div className="cv-footer-meta">
        <span>{t.lastUpdate}</span>
        <span>{t.spaVersion}</span>
      </div>
    </footer>
  )
}
