import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { processAdmonitions } from '../utils/processAdmonitions'
import { resolveImagePath } from '../data/images'
import { Admonition } from './Admonition'
import type { Components } from 'react-markdown'
import '../styles/markdown.css'

interface MarkdownRendererProps {
  content: string
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\*\*/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

const components: Components = {
  h1: ({ children }) => <h1>{children}</h1>,
  h2: ({ children }) => {
    const text = typeof children === 'string' ? children : String(children)
    const id = slugify(text)
    return <h2 id={id}>{children}</h2>
  },
  h3: ({ children }) => {
    const text = typeof children === 'string' ? children : String(children)
    const id = slugify(text)
    return <h3 id={id}>{children}</h3>
  },
  img: ({ src, alt, className }) => {
    const resolvedSrc = resolveImagePath(src || '')
    return <img src={resolvedSrc} alt={alt || ''} className={className} loading="lazy" />
  },
  a: ({ href, children }) => {
    if (href?.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    // Keep in-site navigation client-side; leave anchors and files to the browser.
    if (href?.startsWith('/') && !href.includes('.')) {
      return <Link to={href}>{children}</Link>
    }
    return <a href={href}>{children}</a>
  },
  table: ({ children }) => (
    <div className="table-wrapper">
      <table>{children}</table>
    </div>
  ),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  div: ({ node, children, ...props }) => {
    const admonitionType = (props as Record<string, string>)['data-admonition']
    const admonitionTitle = (props as Record<string, string>)['data-title']
    if (admonitionType && admonitionTitle) {
      return (
        <Admonition type={admonitionType} title={admonitionTitle}>
          {children}
        </Admonition>
      )
    }
    return <div {...props}>{children}</div>
  },
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const processed = processAdmonitions(content)

  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {processed}
      </ReactMarkdown>
    </div>
  )
}
