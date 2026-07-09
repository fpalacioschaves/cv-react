import { Section } from './Section'

function getLocalizedValue(value, lang) {
  if (!value) return ''
  return typeof value === 'string' ? value : value[lang]
}

function ProjectCard({ project, styles, lang, label, featured = false }) {
  const title = getLocalizedValue(project.name, lang)
  const description = getLocalizedValue(project.description, lang)
  const linkLabel = project.linkLabel?.[lang] || label
  const linkIcon = project.linkIcon || '🔗'

  return (
    <article
      style={styles.projectCard}
      className={featured ? 'cv-project-card cv-project-card-featured' : 'cv-project-card'}
    >
      <div style={styles.projectTitleRow} className="cv-project-title-row">
        <div>
          {featured && <span className="cv-project-eyebrow">Proyecto principal</span>}
          <div style={styles.projectTitle} className="cv-project-title">
            {title}
          </div>
        </div>
        {project.language && <span style={styles.projectLangTag}>{project.language}</span>}
      </div>

      {description && (
        <p style={styles.projectDescription} className="cv-project-description">
          {description}
        </p>
      )}

      {project.tags && (
        <div style={styles.projectTags} className="cv-project-tags">
          {project.tags.map((tag) => (
            <span key={tag} style={styles.projectMiniTag} className="cv-project-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      {project.url && (
        <a href={project.url} target="_blank" rel="noreferrer" style={styles.projectLink}>
          {linkIcon} {linkLabel}
        </a>
      )}
    </article>
  )
}

export function ProjectsSection({ t, styles, lang, featuredProjects, latestProjects }) {
  const [mainProject, ...secondaryProjects] = featuredProjects
  const mainLabel = lang === 'es' ? 'Caso de estudio destacado' : 'Featured case study'

  return (
    <Section id="proyectos" title={t.projectsTitle} styles={styles}>
      <p style={{ ...styles.paragraph, marginBottom: '1rem' }}>{t.projectsIntro}</p>

      {mainProject && (
        <div className="cv-project-feature-block" aria-label={mainLabel}>
          <ProjectCard
            project={mainProject}
            styles={styles}
            lang={lang}
            label={t.viewProject}
            featured
          />
        </div>
      )}

      {secondaryProjects.length > 0 && (
        <div style={styles.projectsGrid} className="cv-project-secondary-grid">
          {secondaryProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              styles={styles}
              lang={lang}
              label={t.viewProject}
            />
          ))}
        </div>
      )}

      <div style={styles.latestProjectsBlock} className="cv-latest-repos">
        <h3 style={styles.projectsSubTitle}>{t.latestReposTitle}</h3>
        {latestProjects.length === 0 ? (
          <p style={styles.paragraph}>{t.projectsFallback}</p>
        ) : (
          <div style={styles.projectsGridCompact}>
            {latestProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                styles={styles}
                lang={lang}
                label={t.viewOnGithub}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}
