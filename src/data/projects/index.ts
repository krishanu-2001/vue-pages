import type { Project, ProjectBlock } from './types'
import { proceduralVideo } from './procedural-video'
import { p2pInference } from './p2p-inference'
import { osEvolve } from './os-evolve'
import { spindle } from './spindle'

export type { Project } from './types'

/** Order shown on the Projects index and in the sidebar. */
export const projects: Project[] = [proceduralVideo, p2pInference, osEvolve, spindle]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function projectPath(project: Project): string {
  return `/projects/${project.slug}`
}

function blockToText(block: ProjectBlock): string[] {
  switch (block.type) {
    case 'text':
      return [block.text]
    case 'list':
      return block.items
    case 'figure':
      return [block.figure.caption ?? '']
    case 'figureRow':
      return block.figures.map((f) => f.caption ?? '')
    case 'table':
      return [block.table.caption ?? '', ...block.table.rows.map((r) => r.join(' — '))]
    case 'stats':
      return block.stats.map((s) => `${s.value} ${s.label}`)
    case 'equation':
      return [block.note ?? '']
    case 'code':
      return [block.code]
    case 'subsection':
      return [`### ${block.title}`, ...block.blocks.flatMap(blockToText)]
    default:
      return []
  }
}

/**
 * Flattens a project into markdown-ish text so the shared table-of-contents
 * and search index (both of which read markdown) work on project pages too.
 */
export function projectAsMarkdown(project: Project): string {
  const lines = [`# ${project.title}`, project.subtitle, project.summary, project.tags.join(', ')]
  for (const section of project.sections) {
    lines.push(`## ${section.title}`)
    lines.push(...section.blocks.flatMap(blockToText))
  }
  if (project.bibtex) lines.push('## BibTeX')
  return lines.filter(Boolean).join('\n\n')
}
