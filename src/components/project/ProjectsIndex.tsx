import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects, projectPath } from '../../data/projects'
import { MarkdownRenderer } from '../MarkdownRenderer'
import { slugifyHeading } from '../../utils/extractHeadings'
import projectsContent from '../../content/projects.md?raw'
import '../../styles/project.css'

export function ProjectsIndex() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="markdown-body">
      <h1>Projects</h1>
      <p>
        Research and product work, most recent first. Each of the projects below has a full write-up
        — method, results, and system details.
      </p>

      <h2 id={slugifyHeading('Selected Work')}>Selected Work</h2>
      <div className="project-cards">
        {projects.map((project) => (
          <Link key={project.slug} to={projectPath(project)} className="project-card">
            <div className="project-card__period">{project.period}</div>
            <div className="project-card__title">{project.title}</div>
            <div className="project-card__subtitle">{project.subtitle}</div>
            <p className="project-card__summary">{project.summary}</p>
            <div className="project-card__tags">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="project__tag">
                  {tag}
                </span>
              ))}
            </div>
            <span className="project-card__cta">Read the write-up →</span>
          </Link>
        ))}
      </div>

      <MarkdownRenderer content={projectsContent} />
    </div>
  )
}
