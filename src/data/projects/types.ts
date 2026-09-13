/**
 * Data model for academic-style project pages (one page per research project).
 * Content is authored as data so every project page shares the same layout.
 */

export interface ProjectLink {
  label: string
  href?: string
  /** Render as a non-clickable pill — for artefacts that are not public yet. */
  pending?: boolean
}

export interface ProjectFigure {
  /** Path under /public, e.g. "figures/os-evolve/pipeline.png". Image added later. */
  src: string
  alt: string
  caption?: string
  /** Rendered inside the placeholder box until the image file exists. */
  hint?: string
  /** Side-by-side figures in a row. */
  width?: 'full' | 'half'
}

export interface ProjectStat {
  value: string
  label: string
}

export interface ProjectTable {
  caption?: string
  headers: string[]
  rows: string[][]
  /** Emphasise the final row (usually "Ours"). */
  highlightLast?: boolean
}

export type ProjectBlock =
  | { type: 'text'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'figure'; figure: ProjectFigure }
  | { type: 'figureRow'; figures: ProjectFigure[] }
  | { type: 'table'; table: ProjectTable }
  | { type: 'stats'; stats: ProjectStat[] }
  | { type: 'equation'; tex: string; note?: string }
  | { type: 'code'; language?: string; code: string }
  | { type: 'subsection'; title: string; blocks: ProjectBlock[] }

export interface ProjectSection {
  title: string
  blocks: ProjectBlock[]
}

export interface Project {
  slug: string
  /** Short label for navigation and cards. */
  label: string
  title: string
  subtitle: string
  /** Author names in order; the site owner is marked with isSelf. */
  authors?: { name: string; isSelf?: boolean }[]
  affiliation?: string
  venue?: string
  period: string
  /** One-paragraph summary used on the projects index cards. */
  summary: string
  tags: string[]
  links: ProjectLink[]
  teaser?: ProjectFigure
  sections: ProjectSection[]
  bibtex?: string
}
