import { Section } from './Section'
import { Timeline } from './Timeline'

export function ExperienceSection({ id, title, items, styles, lang }) {
  return (
    <Section id={id} title={title} styles={styles}>
      <Timeline items={items} styles={styles} lang={lang} />
    </Section>
  )
}
