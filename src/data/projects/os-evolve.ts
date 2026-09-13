import type { Project } from './types'

export const osEvolve: Project = {
  slug: 'os-evolve',
  label: 'OS-Evolve',
  title: 'OS-Evolve',
  subtitle: 'Automated Policy Learning for CPU Scheduling with LLM-Driven Evolution',
  authors: [{ name: 'Krishanu Saini', isSelf: true }],
  affiliation: 'The University of Texas at Austin',
  venue: 'CS 395T: Advanced Systems for GenAI · Prof. Aditya Akella',
  period: 'Aug 2025 — Dec 2025',
  summary:
    'An LLM-driven evolutionary framework that mutates the C++ CFS scheduler and evaluates each candidate as a user-space ghOSt agent. Evolved policies beat the CFS baseline on every SysBench configuration tested, and a knowledge base carries optimizations across workloads.',
  tags: ['Operating Systems', 'LLM Agents', 'Evolutionary Search', 'ghOSt', 'Scheduling'],
  links: [{ label: 'Code', href: 'https://github.com/krishanu-2001/OS-Evolve' }],
  teaser: {
    src: 'figures/os-evolve/evolution-loop.png',
    alt: 'OS-Evolve evolutionary loop',
    caption:
      'The evolution loop: an LLM proposes a mutation to the scheduler source, guardrails reject unsafe edits, the candidate runs as a ghOSt user-space agent against a SysBench workload, and the measured score plus the diff are written back to the Global Knowledge Base.',
    hint: 'evolution loop / system diagram',
  },
  sections: [
    {
      title: 'Overview',
      blocks: [
        {
          type: 'text',
          text: "Applications with completely different workload shapes — a Google Drive sync service and a Docs editing session, say — routinely land on the same machine and share one scheduling policy. The kernel's CFS is deliberately general, so per-workload tuning is left to operators who rarely have time for it.",
        },
        {
          type: 'text',
          text: 'OS-Evolve asks an LLM to write the scheduling policy instead. It mutates the **C++ CFS** implementation under strict guardrails, evaluates each candidate as a **user-space ghOSt agent** against real benchmarks, and keeps what measurably wins. Moving scheduling out of the kernel into the user plane is what makes the search loop safe and fast enough to run at all.',
        },
      ],
    },
    {
      title: 'Abstract',
      blocks: [
        {
          type: 'text',
          text: 'We present an LLM-driven evolutionary framework, adapted from **ShinkaEvolve**, that synthesises task-optimal CPU scheduling policies. Candidate policies are produced by mutating the C++ CFS scheduler and are evaluated as user-space ghOSt agents on a benchmark testbed, so a bad mutation degrades a measurement rather than the host kernel. Guardrails constrain the mutation surface to keep candidates compilable and semantically valid.',
        },
        {
          type: 'text',
          text: 'Evolved policies outperform the CFS baseline on **every SysBench configuration tested** — up to **1502 → 1541 events/sec at 64 threads**. A **Global Knowledge Base**, keyed on workload and optimization target, seeds veteran policies into new runs so that optimizations discovered for one workload transfer to the next at runtime instead of being rediscovered from scratch.',
        },
      ],
    },
    {
      title: 'Method',
      blocks: [
        {
          type: 'subsection',
          title: '1. Guardrailed Mutation of a Real Scheduler',
          blocks: [
            {
              type: 'text',
              text: 'Rather than generating a scheduler from nothing, the framework mutates the existing C++ CFS implementation. Guardrails restrict which regions of the source an LLM may rewrite and reject candidates that fail to compile or that violate invariants, which keeps the search inside the space of runnable policies.',
            },
          ],
        },
        {
          type: 'subsection',
          title: '2. Evaluation as ghOSt User-Space Agents',
          blocks: [
            {
              type: 'text',
              text: 'Each candidate runs through the **ghOSt** framework as a user-space scheduling agent on a benchmark testbed. Scheduling decisions leave the kernel, so an evolution run can evaluate hundreds of policies without rebuilding or risking the host — the property that makes automated search practical for OS policy.',
            },
          ],
        },
        {
          type: 'subsection',
          title: '3. Global Knowledge Base',
          blocks: [
            {
              type: 'text',
              text: 'Results are recorded in a **SQLite** knowledge base keyed on (workload, optimization target). New runs are seeded with veteran policies retrieved from that key, so an optimization found under one workload becomes the starting population for a related one — transfer across workloads at runtime rather than a cold start per benchmark.',
            },
          ],
        },
      ],
    },
    {
      title: 'Results',
      blocks: [
        {
          type: 'table',
          table: {
            caption: 'SysBench CPU throughput, evolved policy vs. the CFS baseline.',
            headers: ['Configuration', 'CFS baseline', 'Evolved policy', 'Δ'],
            rows: [['SysBench, 64 threads', '1502 events/sec', '1541 events/sec', '+2.6%']],
            highlightLast: true,
          },
        },
        {
          type: 'list',
          items: [
            'Evolved policies beat the CFS baseline on **every** SysBench configuration tested, not only the headline thread count.',
            'Seeding from the knowledge base shortens time-to-improvement on a new workload, because the population starts from policies that already work on a related one.',
          ],
        },
      ],
    },
    {
      title: 'System Components',
      blocks: [
        {
          type: 'table',
          table: {
            headers: ['Component', 'Implementation', 'Purpose'],
            rows: [
              [
                'Evolution engine',
                'ShinkaEvolve (adapted)',
                'LLM-driven mutation and selection loop',
              ],
              ['Mutation target', 'C++ CFS scheduler', 'Real scheduler source as the search space'],
              [
                'Execution',
                'ghOSt user-space agents',
                'Run candidate policies safely off the kernel path',
              ],
              ['Benchmarking', 'SysBench', 'Throughput measurement across thread counts'],
              [
                'Knowledge base',
                'SQLite, keyed on workload + target',
                'Seed veteran policies into new runs',
              ],
            ],
          },
        },
      ],
    },
  ],
  bibtex: `@misc{saini2025osevolve,
  author = {Saini, Krishanu},
  title  = {OS-Evolve: Automated Policy Learning for CPU Scheduling},
  note   = {CS 395T: Advanced Systems for GenAI, The University of Texas at Austin},
  year   = {2025}
}`,
}
