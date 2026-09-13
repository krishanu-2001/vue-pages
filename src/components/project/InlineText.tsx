import { Fragment, type ReactNode } from 'react'

/**
 * Renders the small inline-markdown subset used in project data:
 * **bold**, *italic*, `code`, and [label](href).
 */
const PATTERN = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g

export function InlineText({ text }: { text: string }): ReactNode {
  const parts = text.split(PATTERN).filter((p) => p !== '')

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>
        }
        if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
          return <em key={i}>{part.slice(1, -1)}</em>
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={i}>{part.slice(1, -1)}</code>
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (link) {
          return (
            <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer">
              {link[1]}
            </a>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}
