import type { Project } from './types'

export const spindle: Project = {
  slug: 'spindle',
  label: 'Spindle',
  title: 'Spindle',
  subtitle: 'An AI Assistant for Fashion Designers — Inspiration to Technical Document to Supplier',
  authors: [{ name: 'Krishanu Saini', isSelf: true }],
  affiliation: 'Co-Founder & CTO · Austin, TX',
  venue: 'Texas Venture Labs Investment Competition — Semifinalist (top of an 80-venture cohort)',
  period: 'Mar 2026 — Aug 2026',
  summary:
    'Co-founded and built Spindle 0-to-1 in six months: four production workflows that turn fragmented design inspiration and commercial data into technical documents, then coordinate supplier communication, fitting loops, and product lifecycle across fashion teams.',
  tags: ['Startup', 'Multi-tenant RAG', 'AWS', 'SAM 2', 'LLM Routing', 'Fashion Tech'],
  links: [{ label: 'Case Study', pending: true }],
  teaser: {
    src: 'figures/spindle/architecture.png',
    alt: 'Spindle platform architecture',
    caption:
      'Platform architecture: a multi-tenant RAG layer on AWS (ECS, OpenSearch, Postgres with row-level tenant isolation, Cognito) under four product workflows, with a model-routing layer in front of OpenAI, Anthropic, and Bedrock.',
    hint: 'platform architecture diagram',
  },
  sections: [
    {
      title: 'What Spindle Does',
      blocks: [
        {
          type: 'text',
          text: "A fashion designer's work starts as a pile of fragments — reference images, mood boards, supplier quotes, sales data from last season — and has to end as a technical document precise enough for a factory to cut against. That translation is manual, undocumented, and repeated every season.",
        },
        {
          type: 'text',
          text: 'Spindle is an AI assistant that does that translation and then carries the product forward: it coordinates supplier communication, tracks fitting loops, and manages lifecycle state across a design team. We shipped **four production workflows in six months** — AI-assisted creation, technical documentation, trend validation, and lifecycle tracking — into **four design partners**.',
        },
      ],
    },
    {
      title: 'Traction',
      blocks: [
        {
          type: 'stats',
          stats: [
            { value: '4', label: 'design partners in production' },
            { value: '6 mo', label: 'idea to four shipped workflows' },
            { value: '20+', label: 'customer discovery interviews' },
          ],
        },
        {
          type: 'list',
          items: [
            'Led 20+ discovery interviews with fashion designers and product leaders, converting findings directly into releases.',
            'Developed the financial strategy and pitched Spindle to 6+ investors.',
            '**Semifinalist, Texas Venture Labs Investment Competition (May 2026)** — advanced from a cohort of 80 ventures.',
          ],
        },
      ],
    },
    {
      title: 'Engineering',
      blocks: [
        {
          type: 'subsection',
          title: 'Multi-Tenant RAG Platform',
          blocks: [
            {
              type: 'text',
              text: "Product intelligence runs over supplier and design data in a multi-tenant retrieval platform on AWS — **ECS** for services, **OpenSearch** for retrieval, **Postgres with row-level security** so one brand's data is structurally unable to leak into another's, and **Cognito** for identity. The system reaches **88% recall@5** on fashion keyword lookups, a domain where vocabulary is idiosyncratic and off-the-shelf embeddings underperform.",
            },
          ],
        },
        {
          type: 'subsection',
          title: 'Garment Segmentation and Model Routing',
          blocks: [
            {
              type: 'text',
              text: 'Meta **SAM 2** handles garment segmentation on reference imagery. A routing layer sits in front of OpenAI, Anthropic, and Bedrock, selecting a model per task rather than per product. Token optimization techniques — notably **collage prompting**, batching many garment crops into a single image request — cut bulk inference cost by **75%**.',
            },
          ],
        },
      ],
    },
    {
      title: 'Stack',
      blocks: [
        {
          type: 'table',
          table: {
            headers: ['Layer', 'Technology', 'Purpose'],
            rows: [
              ['Compute', 'AWS ECS, Docker', 'Service deployment'],
              ['Retrieval', 'OpenSearch, pgvector', 'Product and supplier intelligence'],
              ['Data', 'PostgreSQL with row-level security', 'Per-tenant isolation'],
              ['Identity', 'AWS Cognito', 'Multi-tenant auth'],
              ['Vision', 'Meta SAM 2', 'Garment segmentation'],
              ['Models', 'OpenAI, Anthropic, Bedrock', 'Routed per task with token optimization'],
              ['Orchestration', 'LangChain, MCP, Temporal', 'Workflow and tool execution'],
            ],
          },
        },
      ],
    },
  ],
}
