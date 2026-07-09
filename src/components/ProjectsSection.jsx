import { Section } from './Section'

function ProjectCard({ project, styles, lang, label }) {
  const title = typeof project.name === 'string' ? project.name : project.name[lang]
  const description =
    typeof project.description === 'string'
      ? project.description
      : project.description?.[lang]

  return (
    <article style={styles.projectCard}>
      <div style={styles.projectTitleRow}>
        <div style={styles.projectTitle}>{title}</div>
        {project.language && <span style={styles.projectLangTag}>{project.language}</span>}
      </div>

      {description && <p style={styles.projectDescription}>{description}</p>}

      {project.tags && (
        <div style={styles.projectTags}>
          {project.tags.map((tag) => (
            <span key={tag} style={styles.projectMiniTag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {project.url && (
        <a href={project.url} target="_blank" rel="noreferrer" style={styles.projectLink}>
          🐙 {label}
        </a>
      )}
    </article>
  )
}

export function ProjectsSection({ t, styles, lang, featuredProjects, latestProjects }) {
  return (
    <Section id="proyectos" title={t.projectsTitle} styles={styles}>
      <p style={{ ...styles.paragraph, marginBottom: '1rem' }}>{t.projectsIntro}</p>

      <div style={styles.projectsGrid}>
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            styles={styles}
            lang={lang}
            label={t.viewOnGithub}
          />
        ))}
      </div>

      <div style={styles.latestProjectsBlock}>
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
