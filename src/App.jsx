// src/App.jsx
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

import {
  PDF_FILE_NAME,
  GITHUB_USERNAME,
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY,
} from './config'
import { NAV_LINKS } from './data/navLinks'
import { teachingExperience, devExperience } from './data/experience'
import { education } from './data/education'
import { skills } from './data/skills'
import { offers } from './data/offers'
import { TEXT } from './data/text'
import { createStyles } from './styles/createStyles'
import { Section } from './components/Section'
import { Timeline } from './components/Timeline'

const pdfUrl = `${import.meta.env.BASE_URL}${PDF_FILE_NAME}`

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return window.localStorage.getItem('theme') || 'dark'
  })
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'es'
    return window.localStorage.getItem('lang') || 'es'
  })

  const [projects, setProjects] = useState([])
  const [showToTop, setShowToTop] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('perfil')

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < 768
  })
  const [navOpen, setNavOpen] = useState(false)

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  })
  // null | 'missing' | 'sending' | 'sent' | 'error'
  const [contactStatus, setContactStatus] = useState(null)

  const styles = createStyles(theme)
  const t = TEXT[lang]
  const offersText = offers[lang]

  // Persistir tema / idioma
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('lang', lang)
  }, [lang])

  // Cargar repos de GitHub
  useEffect(() => {
    const controller = new AbortController()

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
          { signal: controller.signal },
        )

        if (!res.ok) return
        const data = await res.json()

        const mapped = data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          language: repo.language,
          updatedAt: repo.updated_at,
        }))

        setProjects(mapped)
      } catch {
        // opcional: console.error(err)
      }
    }

    fetchRepos()
    return () => controller.abort()
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const toggleLang = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (!el) return

    const navOffset = 96
    const rect = el.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const targetY = rect.top + scrollTop - navOffset

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    })

    setActiveSection(sectionId)
    if (isMobile) setNavOpen(false)
  }

  const handleContactChange = (e) => {
    const { name, value } = e.target
    setContactData((prev) => ({ ...prev, [name]: value }))
    if (contactStatus && contactStatus !== 'sending') {
      setContactStatus(null)
    }
  }

  const handleContactSubmit = async () => {
    const name = contactData.name.trim()
    const email = contactData.email.trim()
    const message = contactData.message.trim()

    // Validación de campos
    if (!name || !email || !message) {
      setContactStatus('missing')
      return
    }

    setContactStatus('sending')

    const templateParams = {
      from_name: name,
      reply_to: email,
      message,
    }

    try {
      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        VITE_EMAILJS_PUBLIC_KEY,
      )

      // Opcional: limpiar formulario tras enviar
      setContactData({ name: '', email: '', message: '' })
      setContactStatus('sent')
    } catch (err) {
      console.error(err)
      setContactStatus('error')
    }
  }

  // Scroll: sombra navbar + botón "Arriba"
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 80)
      setShowToTop(y > 400)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Resize: detectar móvil para el menú hamburguesa
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) setNavOpen(false)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Botones del menú (reutilizados en desktop y móvil)
  const navButtons = NAV_LINKS[lang].map((link, index) => (
    <button
      key={link.id}
      type="button"
      onClick={() => handleNavClick(link.id)}
      style={{
        ...styles.navLink,
        ...(index > 0 ? styles.navLinkSecondary : null),
        ...(activeSection === link.id ? styles.navLinkActive : null),
      }}
    >
      {link.label}
    </button>
  ))

  return (
    <div style={styles.app}>
      <div style={styles.layout}>
        {/* Barra superior: tema, idioma, PDF */}
        <div style={styles.topBar}>
          <div style={styles.topBarGroup}>
            <span style={styles.toggleLabel}>{t.themeLabel}</span>
            <button
              type="button"
              onClick={toggleTheme}
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
              onClick={toggleLang}
              style={{
                ...styles.toggleButton,
                ...(lang === 'es' ? styles.toggleButtonActive : null),
              }}
            >
              {lang === 'es' ? t.langEs : t.langEn}
            </button>

            <a
              href={pdfUrl}
              download
              style={styles.pdfButton}
              title={t.downloadPdf}
            >
              ⬇️ {t.downloadPdf}
            </a>
          </div>
        </div>

        <header style={styles.header}>
          <div>
            <div style={styles.chip}>{t.chip}</div>
            <h1 style={styles.name}>Francisco Palacios&nbsp;Chaves</h1>
            <p style={styles.subtitle}>{t.headline}</p>
          </div>

          <aside style={styles.contactCard}>
            <div style={styles.contactItem}>
              <span>📍</span>
              <span>{t.location}</span>
            </div>
            <div style={styles.contactItem}>
              <span>📞</span>
              <a
                href="tel:+34655925498"
                style={{ color: '#bfdbfe', textDecoration: 'none' }}
              >
                655&nbsp;92&nbsp;54&nbsp;98
              </a>
            </div>
            <div style={styles.contactItem}>
              <span>✉️</span>
              <a
                href="mailto:fpalacioschaves@gmail.com"
                style={{ color: '#bfdbfe', textDecoration: 'none' }}
              >
                fpalacioschaves@gmail.com
              </a>
            </div>
            <div style={{ ...styles.contactItem, marginTop: '0.35rem' }}>
              <span style={styles.badge}>{t.badge}</span>
            </div>
          </aside>
        </header>

        {/* Navbar + menú hamburguesa en móvil */}
        <div
          style={{
            ...styles.navBar,
            ...(scrolled ? styles.navBarScrolled : null),
          }}
        >
          <div style={styles.navBarInner}>
            <div style={styles.navBrand}>CV · F. Palacios</div>

            {isMobile ? (
              <button
                type="button"
                onClick={() => setNavOpen((open) => !open)}
                style={styles.navToggleButton}
                aria-label={navOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {navOpen ? '✕' : '☰'}
              </button>
            ) : (
              <nav style={styles.nav}>{navButtons}</nav>
            )}
          </div>

          {isMobile && navOpen && (
            <nav style={styles.navMobile}>{navButtons}</nav>
          )}
        </div>

        <main>
          <Section id="perfil" title={t.profileTitle} styles={styles}>
            <p style={styles.paragraph}>
              {t.profileP1.split('programador PHP').length > 1 ? (
                <>
                  {t.profileP1.split('programador PHP')[0]}
                  <span style={styles.strong}>programador PHP</span>
                  {t.profileP1.split('programador PHP')[1]}
                </>
              ) : (
                t.profileP1
              )}
            </p>
            <p style={{ ...styles.paragraph, marginTop: '0.8rem' }}>
              {t.profileP2}
            </p>
          </Section>

          <Section id="ofrezco" title={offersText.title} styles={styles}>
            <div style={styles.offersColumns}>
              <div>
                <div style={styles.offersTitle}>{offersText.teacherTitle}</div>
                <ul style={styles.offersList}>
                  {offersText.teacherPoints.map((p) => (
                    <li key={p.slice(0, 40)}>{p}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={styles.offersTitle}>{offersText.devTitle}</div>
                <ul style={styles.offersList}>
                  {offersText.devPoints.map((p) => (
                    <li key={p.slice(0, 40)}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="docencia" title={t.teachingTitle} styles={styles}>
            <Timeline items={teachingExperience} styles={styles} lang={lang} />
          </Section>

          <Section id="programacion" title={t.devTitle} styles={styles}>
            <Timeline items={devExperience} styles={styles} lang={lang} />
          </Section>

          <Section id="proyectos" title={t.projectsTitle} styles={styles}>
            <div style={styles.projectsGrid}>
              {projects.length === 0 ? (
                <p style={styles.paragraph}>
                  {t.projectsFallback}{' '}
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.projectLink}
                  >
                    🐙 {t.viewOnGithub}
                  </a>
                </p>
              ) : (
                projects.map((project) => (
                  <article key={project.id} style={styles.projectCard}>
                    <div style={styles.projectTitleRow}>
                      <div style={styles.projectTitle}>{project.name}</div>
                      {project.language && (
                        <span style={styles.projectLangTag}>
                          {project.language}
                        </span>
                      )}
                    </div>

                    {project.description && (
                      <p style={styles.projectDescription}>
                        {project.description}
                      </p>
                    )}

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.projectLink}
                    >
                      🐙 {t.viewOnGithub}
                    </a>
                  </article>
                ))
              )}
            </div>
          </Section>

          <Section id="formacion" title={t.educationTitle} styles={styles}>
            <div style={styles.timeline}>
              {education.map((item) => (
                <div
                  key={item.title.es}
                  style={{
                    ...styles.timelineItem,
                    gridTemplateColumns: 'auto minmax(0, 1fr)',
                    borderBottom: `1px dashed ${
                      theme === 'dark'
                        ? 'rgba(55, 65, 81, 0.9)'
                        : 'rgba(209,213,219,1)'
                    }`,
                  }}
                >
                  <div style={styles.timelineMarkerCol}>
                    <div style={styles.timelineDot} />
                  </div>
                  <div>
                    <div style={styles.role}>{item.title[lang]}</div>
                    <div style={styles.org}>{item.center[lang]}</div>
                    {item.extra && (
                      <div style={{ ...styles.org, marginTop: '0.15rem' }}>
                        {item.extra}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="skills" title={t.skillsTitle} styles={styles}>
            <div style={styles.skillColumns}>
              <div>
                <div style={styles.skillGroupTitle}>{t.softTitle}</div>
                <ul style={styles.skillList}>
                  {skills.soft[lang].map((skill) => (
                    <li key={skill} style={{ marginBottom: '0.25rem' }}>
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={styles.skillGroupTitle}>{t.techTitle}</div>
                <div style={styles.pillRow}>
                  {skills.tech[lang].map((skill) => (
                    <span key={skill} style={styles.pill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div style={styles.skillGroupTitle}>{t.langsTitle}</div>
                <ul style={styles.skillList}>
                  {skills.languages[lang].map((lng) => (
                    <li key={lng} style={{ marginBottom: '0.25rem' }}>
                      • {lng}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="contacto" title={t.contactTitle} styles={styles}>
            <div style={styles.contactLayout}>
              <div style={styles.contactText}>
                <p>{t.contactIntro1}</p>
                <p style={{ marginTop: '0.6rem' }}>{t.contactIntro2}</p>
              </div>

              <div style={styles.contactForm}>
                <div>
                  <label style={styles.formLabel} htmlFor="contact-name">
                    {t.contactNameLabel}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={contactData.name}
                    onChange={handleContactChange}
                    placeholder={t.contactNamePlaceholder}
                    style={styles.formInput}
                  />
                </div>

                <div>
                  <label style={styles.formLabel} htmlFor="contact-email">
                    {t.contactEmailLabel}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={contactData.email}
                    onChange={handleContactChange}
                    placeholder={t.contactEmailPlaceholder}
                    style={styles.formInput}
                  />
                </div>

                <div>
                  <label style={styles.formLabel} htmlFor="contact-message">
                    {t.contactMessageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={contactData.message}
                    onChange={handleContactChange}
                    placeholder={t.contactMessagePlaceholder}
                    style={styles.formTextarea}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleContactSubmit}
                  style={styles.formButton}
                  disabled={contactStatus === 'sending'}
                >
                  {contactStatus === 'sending'
                    ? lang === 'es'
                      ? '⏳ Enviando...'
                      : '⏳ Sending...'
                    : `✉️ ${t.contactSubmit}`}
                </button>

                {contactStatus === 'missing' && (
                  <p style={styles.formFeedbackError}>{t.contactError}</p>
                )}

                {contactStatus === 'error' && (
                  <p style={styles.formFeedbackError}>
                    {lang === 'es'
                      ? 'Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
                      : 'There was an error sending your message. Please try again later.'}
                  </p>
                )}

                {contactStatus === 'sent' && (
                  <p style={styles.formFeedbackOk}>{t.contactOk}</p>
                )}
              </div>
            </div>
          </Section>
        </main>

        <footer style={styles.footer}>
          <div>{t.lastUpdate}</div>
          <div>{t.spaVersion}</div>
        </footer>

        {showToTop && (
          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
            style={styles.toTopButton}
            aria-label={lang === 'es' ? 'Volver arriba' : 'Back to top'}
          >
            ↑ {lang === 'es' ? 'Arriba' : 'Top'}
          </button>
        )}
      </div>
    </div>
  )
}
