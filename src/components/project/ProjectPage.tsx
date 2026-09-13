import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../../data/projects'
import { slugifyHeading } from '../../utils/extractHeadings'
import { Blocks } from './Blocks'
import { Figure } from './Figure'
import '../../styles/project.css'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="project-missing">
        <p>No project page for “{slug}”.</p>
        <Link to="/projects">← All projects</Link>
      </div>
    )
  }

  return (
    <article className="project">
      <header className="project__header">
        <div className="project__period">{project.period}</div>
        <h1 className="project__title">{project.title}</h1>
        <p className="project__subtitle">{project.subtitle}</p>

        {project.authors && (
          <p className="project__authors">
            {project.authors.map((author, i) => (
              <span key={author.name} className={author.isSelf ? 'is-self' : undefined}>
                {author.name}
                {i < project.authors!.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        )}
        {project.affiliation && <p className="project__affiliation">{project.affiliation}</p>}
        {project.venue && <p className="project__venue">{project.venue}</p>}

        {project.links.length > 0 && (
          <div className="project__links">
            {project.links.map((link) =>
              link.pending || !link.href ? (
                <span key={link.label} className="project__link project__link--pending">
                  {link.label} <em>soon</em>
                </span>
              ) : (
                <a
                  key={link.label}
                  className="project__link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        )}

        <div className="project__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project__tag">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {project.teaser && <Figure figure={project.teaser} />}

      {project.sections.map((section) => (
        <section key={section.title} className="project-section">
          <h2 id={slugifyHeading(section.title)}>{section.title}</h2>
          <Blocks blocks={section.blocks} />
        </section>
      ))}

      {project.bibtex && (
        <section className="project-section">
          <h2 id="bibtex">BibTeX</h2>
          <pre className="project-code project-code--bibtex">
            <code>{project.bibtex}</code>
          </pre>
        </section>
      )}

      <footer className="project__footer">
        <Link to="/projects">← All projects</Link>
      </footer>
    </article>
  )
}
