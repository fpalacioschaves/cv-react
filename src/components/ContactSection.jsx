import { CONTACT_EMAIL } from '../config'
import { Section } from './Section'

export function ContactSection({
  t,
  styles,
  contactData,
  contactStatus,
  onContactChange,
  onContactSubmit,
}) {
  return (
    <Section id="contacto" title={t.contactTitle} styles={styles}>
      <div style={styles.contactLayout}>
        <div style={styles.contactText}>
          <p>{t.contactIntro1}</p>
          <p style={{ marginTop: '0.6rem' }}>{t.contactIntro2}</p>
          <p style={{ marginTop: '0.6rem' }}>
            {t.contactDirect}{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={styles.contactInlineLink}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <form style={styles.contactForm} onSubmit={onContactSubmit}>
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
