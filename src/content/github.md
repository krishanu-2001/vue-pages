# GitHub Projects

## ML Systems

### Distributed-Inference-for-Edge-LLMs

**Decentralized LLM Inference on a P2P Network** | Spring 2026 · [Full write-up →](/projects/p2p-inference)

Course project under CS 380D - Distributed Systems, supervised by Prof. Vijay Chidambaram.

Distributed LLM inference framework inspired by SGLang's RadixAttention architecture. Built a multi-node simulation where each node hosts an LLM instance with bounded GPU memory and maintains a radix tree for KV cache prefix sharing. Implements cache-aware routing — each node's router maintains approximate radix trees for all peers, performing longest-prefix-match to maximize KV cache hits and minimize redundant prefill computation (O(n^2) prefill vs O(n) per-token decode). Supports configurable routing policies (cache-aware, round-robin, self-routing) with lazy tree synchronization via periodic broadcast, avoiding synchronization overhead while preserving cache locality. Simulates realistic network delays and memory pressure across a LAN topology.

Cut mean request latency 23% and reached a 91.4% cache-hit rate on skewed MMLU workloads over a 4-node SGLang/H100 cluster, with gossip-based anti-entropy replacing the central router entirely.

- **Repo:** https://github.com/krishanu-2001/Distributed-Inference-for-Edge-LLMs
- **Tech:** Python, gRPC, SGLang/RadixAttention, radix trees, gossip protocols, KV cache management
- **Period:** Spring 2026

---

### OS-Evolve

**Automated Policy Learning for CPU Scheduling** | Aug 2025 - Dec 2025 · [Full write-up →](/projects/os-evolve)

Course project under CS395T-Adv. Systems for GenAI, supervised by Prof. Aditya Akella.

- Designed an evolutionary framework with strict guardrails to leverage LLMs for synthesis of task-optimal system policies.
- Apps like Google Drive and Docs serve different workloads but are deployed on the same servers with shared scheduling policies. To handle each application's unique workload, shifting from kernels to user-plane implementation of CPU scheduling.
- Evolved policies beat the CFS baseline on every SysBench configuration tested, up to 1502 -> 1541 events/sec at 64 threads; a SQLite Global Knowledge Base seeds veteran policies into new runs so optimizations transfer across workloads.

- **Repo:** https://github.com/krishanu-2001/OS-Evolve
- **Tech:** C++, ghOSt, ShinkaEvolve, SysBench, SQLite

---

### Edgar-Database-Analyser

Full-stack financial intelligence platform for SEC EDGAR filings analysis. Built a web scraping pipeline to extract and transform SEC filing data, computing financial metrics (EBITDA, ROI, Magic Number, Customer Acquisition Cost) across publicly traded companies. Predicts investability scores using XGBoost regression boosting, achieving 95% similarity with Zacks rank. Features multi-company comparison dashboards with interactive charting, backed by a GraphQL API over Firebase NoSQL storage. 10-contributor open-source project.

- **Repo:** https://github.com/krishanu-2001/Edgar-Database-Analyser
- **Tech:** React, Vite, GraphQL, Firebase, Python, BeautifulSoup, XGBoost, sklearn
- **Period:** Feb 2022 - Aug 2022

---

## Generative Models

### Phantom-video-XL

**Procedural Video Generation for Instructional Videos** | Aug 2025 - Dec 2025 · [Full write-up →](/projects/procedural-video)

Course project under CS395T-Visual Recognition, supervised by Prof. Kristen Grauman.

- Despite advances in video generation, existing methods do not support stepwise consistent video generation where the world is consistent. Experiments use HowTo100M cooking subtask with recipes containing multiple steps.
- Designed Wan-2.1 inference pipeline conditioning video generation on reference images of tools and ingredients, enabling the model to generate videos for individual cooking steps and coherently stitch them.
- Extended the Identity-GRPO reward model by introducing an Object State Consistency Metric — a human-like verifier that tracks ingredient state transitions across steps and assesses goal-consistency, improving temporal coherence 36% over the Phantom baseline.

- **Repo:** https://github.com/krishanu-2001/Phantom-video-XL
- **Tech:** Phantom-WAN, Diffusion-Pipe (LoRA), GPT-4o, Grounding DINO, CLIP, FAISS, TransNetV2

---

### SIPT-GAN

Novel generative architecture for multi-domain image-to-image translation. Designed a Style-Infused Perception Transformer GAN with dual-branched transformer blocks — a long-range context branch using multi-headed attention for global style dependencies and a short-range context branch using depth-wise convolution for fine-grained texture fidelity. Introduces a two-stage Adaptive Instance Normalization (AdaIN) control that infuses style at both low-level features (color palettes, textures) and high-level features (domain-relevant artifacts, structure) via modified SIPT blocks and de-convolution layers. Achieves FID 15.90 and LPIPS 0.54 at 82M parameters on AFHQ and CelebA-HQ, outperforming quadratic one-to-one training baselines. Powers the "Ethical Dataset for Non-Existing Living Beings" research.

- **Repo:** https://github.com/krishanu-2001/SIPT-GAN
- **Tech:** PyTorch, CUDA, Transformers, GANs, AdaIN, GradCAM, StarGAN-v2 baseline
- **Period:** Apr 2024 - present

---

### ASTNet

Attention-based residual autoencoder for video anomaly detection. Extended the ASTNet architecture — an attention-guided spatio-temporal network that combines residual autoencoders with temporal attention mechanisms to detect anomalous events in surveillance video. Evaluated on standard benchmarks (UCSD Ped2, CUHK Avenue, ShanghaiTech Campus) for real-time anomaly detection on highways. Connected to a broader research program spanning 7 publications on video anomaly detection using generative adversarial approaches.

- **Repo:** https://github.com/krishanu-2001/astnet
- **Tech:** PyTorch, attention mechanisms, residual autoencoders, spatio-temporal networks
- **Period:** Sep 2022
