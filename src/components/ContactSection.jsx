import { CONTACT_EMAIL } from '../config'
import { Section } from './Section'

const CONTACT_FOCUS = {
  es: {
    fitTitle: 'Tiene sentido escribirme para',
    formTitle: 'Cuéntame qué necesitas',
    directTitle: 'Contacto directo',
    items: [
      'Colaboración docente en DAM/DAW, FP TIC o certificados de profesionalidad.',
      'Formación técnica para alumnado, profesorado, empresas o equipos de trabajo.',
      'Desarrollo web con PHP, Laravel, Java, WordPress, React, Node.js o bases de datos.',
      'Proyectos educativos digitales, materiales técnicos, documentación o herramientas académicas.',
    ],
  },
  en: {
    fitTitle: 'You can contact me for',
    formTitle: 'Tell me what you need',
    directTitle: 'Direct contact',
    items: [
      'Teaching collaboration in DAM/DAW, IT vocational training or professional certificates.',
      'Technical training for students, teachers, companies or work teams.',
      'Web development with PHP, Laravel, Java, WordPress, React, Node.js or databases.',
      'Digital education projects, technical materials, documentation or academic tools.',
    ],
  },
}

export function ContactSection({
  t,
  styles,
  lang,
  contactData,
  contactStatus,
  onContactChange,
  onContactSubmit,
}) {
  const copy = CONTACT_FOCUS[lang]

  return (
    <Section id="contacto" title={t.contactTitle} styles={styles}>
      <div style={styles.contactLayout}>
        <div style={styles.contactText}>
          <p>{t.contactIntro1}</p>
          <p style={{ marginTop: '0.6rem' }}>{t.contactIntro2}</p>

          <article style={{ ...styles.quickFact, marginTop: '1rem' }}>
            <div style={styles.offersTitle}>{copy.fitTitle}</div>
            <ul style={styles.offersList}>
              {copy.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article style={{ ...styles.quickFact, marginTop: '0.8rem' }}>
            <span style={styles.quickFactLabel}>{copy.directTitle}</span>
            <span style={styles.quickFactValue}>
              {t.contactDirect}{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} style={styles.contactInlineLink}>
                {CONTACT_EMAIL}
              </a>
            </span>
          </article>
        </div>

        <form style={{ ...styles.contactForm, ...styles.quickFact }} onSubmit={onContactSubmit}>
          <div style={styles.offersTitle}>{copy.formTitle}</div>

          <div>
            <label style={styles.formLabel} htmlFor="contact-name">
              {t.contactNameLabel}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={contactData.name}
              onChange={onContactChange}
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
              onChange={onContactChange}
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
              onChange={onContactChange}
              placeholder={t.contactMessagePlaceholder}
              style={styles.formTextarea}
            />
          </div>

          <button type="submit" style={styles.formButton} disabled={contactStatus === 'sending'}>
            {contactStatus === 'sending' ? t.contactSending : `✉️ ${t.contactSubmit}`}
          </button>

          {contactStatus === 'missing' && <p style={styles.formFeedbackError}>{t.contactError}</p>}
          {contactStatus === 'config' && <p style={styles.formFeedbackError}>{t.contactConfigError}</p>}
          {contactStatus === 'error' && <p style={styles.formFeedbackError}>{t.contactSendError}</p>}
          {contactStatus === 'sent' && <p style={styles.formFeedbackOk}>{t.contactOk}</p>}
        </form>
      </div>
    </Section>
  )
}
