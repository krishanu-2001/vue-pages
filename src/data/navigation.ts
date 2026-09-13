import homeContent from '../content/home.md?raw'
import projectsContent from '../content/projects.md?raw'
import githubContent from '../content/github.md?raw'
import publicationsContent from '../content/publications.md?raw'
import experienceContent from '../content/experience.md?raw'
import { projects, projectAsMarkdown, projectPath } from './projects'

export interface NavItem {
  slug: string
  label: string
  path: string
  content: string
  /** Rendered indented under its parent entry in the sidebar. */
  nested?: boolean
}

export interface NavSection {
  title: string
  items: NavItem[]
}

/** Project write-ups get their own nav entries so search and the TOC cover them. */
const projectItems: NavItem[] = projects.map((project) => ({
  slug: `project-${project.slug}`,
  label: project.label,
  path: projectPath(project),
  content: projectAsMarkdown(project),
  nested: true,
}))

export const navigation: NavSection[] = [
  {
    title: 'Overview',
    items: [{ slug: 'home', label: 'Highlights & About', path: '/', content: homeContent }],
  },
  {
    title: 'Research',
    items: [
      {
        slug: 'projects',
        label: 'All Projects',
        path: '/projects',
        content: `## Selected Work\n\n${projectsContent}`,
      },
      ...projectItems,
      {
        slug: 'publications',
        label: 'Publications',
        path: '/publications',
        content: publicationsContent,
      },
    ],
  },
  {
    title: 'Industry',
    items: [
      {
        slug: 'experience',
        label: 'Work Experience',
        path: '/experience',
        content: experienceContent,
      },
    ],
  },
  {
    title: 'Engineering',
    items: [
      { slug: 'github', label: 'GitHub Repositories', path: '/github', content: githubContent },
    ],
  },
]

export function getPageBySlug(slug: string): NavItem | undefined {
  for (const section of navigation) {
    const item = section.items.find((i) => i.slug === slug)
    if (item) return item
  }
  return undefined
}

export function getPageByPath(path: string): NavItem | undefined {
  for (const section of navigation) {
    const item = section.items.find((i) => i.path === path)
    if (item) return item
  }
  return undefined
}

export function getAllPages(): NavItem[] {
  return navigation.flatMap((s) => s.items)
}
