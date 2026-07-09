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
import { featuredProjects } from './data/projects'
import { TEXT } from './data/text'
import { createStyles } from './styles/createStyles'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { ProfileSection } from './components/ProfileSection'
import { OffersSection } from './components/OffersSection'
import { ExperienceSection } from './components/ExperienceSection'
import { ProjectsSection } from './components/ProjectsSection'
import { EducationSection } from './components/EducationSection'
import { SkillsSection } from './components/SkillsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

const pdfUrl = `${import.meta.env.BASE_URL}${PDF_FILE_NAME}`
const FEATURED_REPO_NAMES = new Set(['cv-react', 'safa-twin'])

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return window.localStorage.getItem('theme') || 'dark'
  })

  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'es'
    return window.localStorage.getItem('lang') || 'es'
  })

  const [latestProjects, setLatestProjects] = useState([])
  const [showToTop, setShowToTop] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('perfil')
  const [navOpen, setNavOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < 768
  })

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [contactStatus, setContactStatus] = useState(null)

  const styles = createStyles(theme)
  const t = TEXT[lang]
  const offersText = offers[lang]
  const navLinks = NAV_LINKS[lang]

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('lang', lang)
  }, [lang])

  useEffect(() => {
    const controller = new AbortController()

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=8`,
          { signal: controller.signal },
        )

        if (!res.ok) return
        const data = await res.json()

        const mapped = data
          .filter((repo) => !FEATURED_REPO_NAMES.has(repo.name))
          .slice(0, 4)
          .map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
          }))

        setLatestProjects(mapped)
      } catch {
        // Si la API de GitHub falla, se mantiene la sección de destacados.
      }
    }

    fetchRepos()
    return () => controller.abort()
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 80)
      setShowToTop(y > 420)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [navLinks])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'))

  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (!el) return

    const navOffset = 96
    const rect = el.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const targetY = rect.top + scrollTop - navOffset

    window.scrollTo({ top: targetY, behavior: 'smooth' })
    setActiveSection(sectionId)
    if (isMobile) setNavOpen(false)
  }

  const handleContactChange = (event) => {
    const { name, value } = event.target
    setContactData((prev) => ({ ...prev, [name]: value }))

    if (contactStatus && contactStatus !== 'sending') {
      setContactStatus(null)
    }
  }

  const handleContactSubmit = async (event) => {
    event.preventDefault()

    const name = contactData.name.trim()
    const email = contactData.email.trim()
    const message = contactData.message.trim()

    if (!name || !email || !message) {
      setContactStatus('missing')
      return
    }

    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      setContactStatus('config')
      return
    }

    setContactStatus('sending')

    try {
      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          reply_to: email,
          message,
        },
        VITE_EMAILJS_PUBLIC_KEY,
      )

      setContactData({ name: '', email: '', message: '' })
      setContactStatus('sent')
    } catch (err) {
      console.error(err)
      setContactStatus('error')
    }
  }

  return (
    <div style={styles.app}>
      <div style={styles.layout}>
        <Header
          t={t}
          styles={styles}
          pdfUrl={pdfUrl}
          theme={theme}
          lang={lang}
          onToggleTheme={toggleTheme}
          onToggleLang={toggleLang}
        />

        <Navbar
          styles={styles}
          links={navLinks}
          activeSection={activeSection}
          isMobile={isMobile}
          navOpen={navOpen}
          onToggleNav={() => setNavOpen((open) => !open)}
          onNavClick={handleNavClick}
          lang={lang}
          scrolled={scrolled}
        />

        <main>
          <ProfileSection t={t} styles={styles} />
          <OffersSection offersText={offersText} styles={styles} />
          <ExperienceSection
            id="docencia"
            title={t.teachingTitle}
            items={teachingExperience}
            styles={styles}
            lang={lang}
          />
          <ExperienceSection
            id="programacion"
            title={t.devTitle}
            items={devExperience}
            styles={styles}
            lang={lang}
          />
          <ProjectsSection
            t={t}
            styles={styles}
            lang={lang}
            featuredProjects={featuredProjects}
            latestProjects={latestProjects}
          />
          <EducationSection t={t} styles={styles} lang={lang} education={education} />
          <SkillsSection t={t} styles={styles} lang={lang} skills={skills} />
          <ContactSection
            t={t}
            styles={styles}
            contactData={contactData}
            contactStatus={contactStatus}
            onContactChange={handleContactChange}
            onContactSubmit={handleContactSubmit}
          />
        </main>

        <Footer t={t} styles={styles} />

        {showToTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
