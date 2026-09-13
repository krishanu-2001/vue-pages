import type { ProjectBlock, ProjectTable } from '../../data/projects/types'
import { slugifyHeading } from '../../utils/extractHeadings'
import { InlineText } from './InlineText'
import { Figure } from './Figure'

function Table({ table }: { table: ProjectTable }) {
  return (
    <div className="project-table">
      <div className="project-table__scroll">
        <table>
          <thead>
            <tr>
              {table.headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr
                key={i}
                className={table.highlightLast && i === table.rows.length - 1 ? 'is-ours' : ''}
              >
                {row.map((cell, j) => (
                  <td key={j}>
                    <InlineText text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.caption && <div className="project-table__caption">{table.caption}</div>}
    </div>
  )
}

export function Blocks({ blocks }: { blocks: ProjectBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'text':
            return (
              <p key={i}>
                <InlineText text={block.text} />
              </p>
            )
          case 'list': {
            const items = block.items.map((item, j) => (
              <li key={j}>
                <InlineText text={item} />
              </li>
            ))
            return block.ordered ? <ol key={i}>{items}</ol> : <ul key={i}>{items}</ul>
          }
          case 'figure':
            return <Figure key={i} figure={block.figure} />
          case 'figureRow':
            return (
              <div key={i} className="project-figure-row">
                {block.figures.map((figure, j) => (
                  <Figure key={j} figure={{ ...figure, width: 'half' }} />
                ))}
              </div>
            )
          case 'table':
            return <Table key={i} table={block.table} />
          case 'stats':
            return (
              <div key={i} className="project-stats">
                {block.stats.map((stat, j) => (
                  <div key={j} className="project-stat">
                    <div className="project-stat__value">{stat.value}</div>
                    <div className="project-stat__label">{stat.label}</div>
                  </div>
                ))}
              </div>
            )
          case 'equation':
            return (
              <div key={i} className="project-equation">
                <div className="project-equation__tex">{block.tex}</div>
                {block.note && (
                  <div className="project-equation__note">
                    <InlineText text={block.note} />
                  </div>
                )}
              </div>
            )
          case 'code':
            return (
              <pre key={i} className="project-code">
                <code>{block.code}</code>
              </pre>
            )
          case 'subsection':
            return (
              <section key={i} className="project-subsection">
                <h3 id={slugifyHeading(block.title)}>{block.title}</h3>
                <Blocks blocks={block.blocks} />
              </section>
            )
          default:
            return null
        }
      })}
    </>
  )
}
