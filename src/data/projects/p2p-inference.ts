import type { Project } from './types'

export const p2pInference: Project = {
  slug: 'p2p-inference',
  label: 'Decentralized LLM Inference',
  title: 'Decentralized LLM Inference on a P2P Network',
  subtitle: 'Prefix-Cache-Aware Routing Without a Central Coordinator',
  authors: [{ name: 'Krishanu Saini', isSelf: true }],
  affiliation: 'The University of Texas at Austin',
  venue: 'CS 380D: Distributed Systems · Prof. Vijay Chidambaram',
  period: 'Spring 2026',
  summary:
    'Peer-to-peer LLM serving where every node keeps a radix tree of its own KV-cache prefixes and gossips approximate peer state. Requests route to whoever already holds the longest matching prefix — 23% lower mean latency and a 91.4% cache-hit rate with no central router and no KV-cache transfer.',
  tags: ['Distributed Systems', 'LLM Serving', 'KV Cache', 'Gossip Protocols', 'SGLang'],
  links: [
    { label: 'Code', href: 'https://github.com/krishanu-2001/Distributed-Inference-for-Edge-LLMs' },
    { label: 'arXiv Preprint', pending: true },
  ],
  teaser: {
    src: 'figures/p2p-inference/architecture.png',
    alt: 'Peer-to-peer inference architecture with per-node radix trees',
    caption:
      'Each node serves an LLM instance, maintains a radix tree over its local KV-cache prefixes, and holds approximate radix trees for its peers refreshed by gossip. Routing is a longest-prefix match over those estimates.',
    hint: 'system architecture diagram',
  },
  sections: [
    {
      title: 'Overview',
      blocks: [
        {
          type: 'text',
          text: "Production LLM serving stacks such as **SGLang** cut prefill cost by reusing KV-cache prefixes, but they lean on a central router that sees every node's cache. That router is a single point of failure and a scaling bottleneck, and it does not exist in a peer-to-peer or edge deployment where nodes join, leave, and sit behind unpredictable network latency.",
        },
        {
          type: 'text',
          text: 'This project asks whether prefix-cache-aware routing survives decentralisation. Each node keeps a **radix tree** of its own cached prefixes plus approximate trees for its peers, kept fresh by **gossip-based anti-entropy replication**. No coordinator, and — critically — no KV-cache transfer between nodes: only compact cache *estimates* cross the network.',
        },
      ],
    },
    {
      title: 'Abstract',
      blocks: [
        {
          type: 'text',
          text: 'We present a decentralized prefix-cache-aware routing scheme for peer-to-peer LLM serving. Every peer maintains a radix tree over the token prefixes it has cached and replicates a summary of that tree through gossip-based anti-entropy, so each node can perform a longest-prefix match across the estimated state of the whole cluster before deciding whether to serve a request locally or forward it. The design removes the central coordinator assumed by cache-aware routers and never moves KV-cache bytes between nodes.',
        },
        {
          type: 'text',
          text: 'On skewed **MMLU** workloads over a 4-node **SGLang/H100** cluster, decentralized routing cuts mean request latency by **23%** and raises the cache-hit rate to **91.4%**. We then characterise where the approach breaks down: forwarding only pays below roughly **200 ms** network RTT, and prefix affinity concentrates **2.3–2.6×** more traffic on hot nodes. We propose a gossip-piggybacked push-back mechanism that lets overloaded peers shed affinity and disperse that load.',
        },
      ],
    },
    {
      title: 'Method',
      blocks: [
        {
          type: 'subsection',
          title: '1. Per-Node Radix Trees',
          blocks: [
            {
              type: 'text',
              text: 'Each node indexes its resident KV cache in a radix tree keyed on token prefixes, so a longest-prefix match returns how much of an incoming request can skip prefill. Prefill is `O(n²)` in sequence length against `O(n)` per decoded token, which is why prefix reuse dominates end-to-end latency on multi-turn and templated workloads.',
            },
          ],
        },
        {
          type: 'subsection',
          title: '2. Gossip-Based Anti-Entropy Replication',
          blocks: [
            {
              type: 'text',
              text: "Peers exchange compact digests of their radix trees on a periodic anti-entropy round, so every node holds an eventually-consistent *estimate* of its peers' caches. Estimates are allowed to be stale: a wrong guess costs one redundant prefill, not a correctness violation, which is what makes the protocol cheap enough to run without a coordinator.",
            },
          ],
        },
        {
          type: 'subsection',
          title: '3. Routing Policies',
          blocks: [
            {
              type: 'text',
              text: 'A request is either served locally or forwarded to the peer with the longest estimated matching prefix. We compare cache-aware routing against round-robin and self-routing baselines, and model realistic network delay and bounded GPU memory so that eviction pressure and forwarding cost both show up in the results.',
            },
          ],
        },
      ],
    },
    {
      title: 'Results',
      blocks: [
        {
          type: 'stats',
          stats: [
            { value: '−23%', label: 'mean request latency' },
            { value: '91.4%', label: 'cache-hit rate' },
            { value: '4 × H100', label: 'SGLang cluster' },
          ],
        },
        {
          type: 'text',
          text: 'Measured on skewed MMLU request traces, where prefix reuse is high but unevenly distributed across topics — the regime that separates cache-aware routing from round-robin.',
        },
      ],
    },
    {
      title: 'Where Decentralized Routing Breaks',
      blocks: [
        {
          type: 'list',
          items: [
            '**Forwarding has a latency budget.** Routing a request to a peer that holds the prefix only beats prefilling locally below roughly 200 ms network RTT; above that, the round trip costs more than the prefill it saves.',
            '**Prefix affinity creates hot nodes.** Sending every matching request to the peer that already cached the prefix concentrates 2.3–2.6× more traffic on those nodes, which is exactly the imbalance a router is supposed to prevent.',
            '**Push-back restores balance.** We designed a gossip-piggybacked push-back signal: a saturated peer degrades its advertised cache estimate on the existing anti-entropy round, so neighbours stop routing to it without any new control channel.',
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
                'Serving engine',
                'SGLang (RadixAttention)',
                'LLM instance per node with bounded GPU memory',
              ],
              [
                'Local cache index',
                'Radix tree over token prefixes',
                'Longest-prefix match for prefill reuse',
              ],
              [
                'Peer state',
                'Gossip anti-entropy digests',
                'Eventually-consistent estimates of peer caches',
              ],
              ['Routing', 'Cache-aware / round-robin / self', 'Serve-local vs. forward decision'],
              [
                'Transport',
                'gRPC over simulated LAN delays',
                'Request forwarding and gossip rounds',
              ],
              ['Workload', 'Skewed MMLU traces', 'High but unevenly distributed prefix reuse'],
            ],
          },
        },
      ],
    },
  ],
  bibtex: `@misc{saini2026decentralized,
  author = {Saini, Krishanu},
  title  = {Decentralized Prefix-Cache-Aware Routing for Peer-to-Peer LLM Inference},
  note   = {CS 380D: Distributed Systems, The University of Texas at Austin},
  year   = {2026}
}`,
}
