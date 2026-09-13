import { useState } from 'react'
import type { ProjectFigure } from '../../data/projects/types'

/**
 * Project figure with a graceful placeholder: until the image file is dropped
 * into /public, the slot renders a dashed box naming the expected path.
 */
export function Figure({ figure }: { figure: ProjectFigure }) {
  const [failed, setFailed] = useState(false)
  const src = figure.src.startsWith('/') ? figure.src : `/${figure.src}`

  return (
    <figure className={`project-figure${figure.width === 'half' ? ' project-figure--half' : ''}`}>
      {failed ? (
        <div className="project-figure__placeholder">
          <span className="project-figure__placeholder-icon">▣</span>
          <span className="project-figure__placeholder-title">
            {figure.hint ?? 'Figure coming soon'}
          </span>
          <code className="project-figure__placeholder-path">public{src}</code>
        </div>
      ) : (
        <img src={src} alt={figure.alt} loading="lazy" onError={() => setFailed(true)} />
      )}
      {figure.caption && <figcaption>{figure.caption}</figcaption>}
    </figure>
  )
}
