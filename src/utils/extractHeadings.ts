export interface Heading {
  id: string
  text: string
  level: 2 | 3
}

/** Shared anchor-id rule — markdown headings and project sections must agree. */
export function slugifyHeading(text: string): string {
  return text
    .replace(/\*\*/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function extractHeadings(markdown: string): Heading[] {
  const regex = /^(#{2,3})\s+(.+)$/gm
  const headings: Heading[] = []
  let match
  while ((match = regex.exec(markdown)) !== null) {
    const text = match[2]
      .replace(/\*\*/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .trim()
    headings.push({ id: slugifyHeading(text), text, level: match[1].length as 2 | 3 })
  }
  return headings
}
