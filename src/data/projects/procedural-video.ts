import type { Project } from './types'

export const proceduralVideo: Project = {
  slug: 'procedural-video',
  label: 'Procedural Video Generation',
  title: 'Procedural Video Generation',
  subtitle: 'Diffusion-Based Procedural Video Generation for Instructional Videos',
  authors: [
    { name: 'Agrim Jain' },
    { name: 'Krishanu Saini', isSelf: true },
    { name: 'Shabari S Nair' },
  ],
  affiliation: 'The University of Texas at Austin',
  venue: 'CS 381V: Visual Recognition · Advisor: Prof. Kristen Grauman',
  period: 'Aug 2025 — Dec 2025',
  summary:
    'Fine-tuned Phantom-WAN with a training-free memory pipeline so that multi-step cooking videos keep the same objects, in the same states, across every generated step — a 36% gain in temporal coherence over the baseline.',
  tags: ['Video Diffusion', 'LoRA', 'VLM', 'Retrieval', 'Evaluation Metrics'],
  links: [
    {
      label: 'Paper',
      href: 'https://usualitylabs.com/phantom-video/static/docs/VR_Project_Report.pdf',
    },
    {
      label: 'Slides',
      href: 'https://usualitylabs.com/phantom-video/static/docs/VR_Presentation.pdf',
    },
    { label: 'Code', href: 'https://github.com/krishanu-2001/Phantom-video-XL' },
    { label: 'Project Page', href: 'https://usualitylabs.com/phantom-video/' },
  ],
  teaser: {
    src: 'figures/procedural-video/pipeline.png',
    alt: 'Memory-based procedural video generation pipeline',
    caption:
      'Pipeline: GPT-4o enhances the step prompt, fine-tuned Phantom-WAN generates the clip, and a FAISS-indexed memory of CLIP object embeddings (populated by Grounding DINO detections) conditions the next step.',
    hint: 'pipeline architecture diagram',
  },
  sections: [
    {
      title: 'Memory-Based Procedural Video Generation',
      blocks: [
        {
          type: 'text',
          text: 'Our approach generates coherent instructional cooking videos from text prompts. We fine-tune **Phantom-WAN** using **Diffusion-Pipe** on the **HowTo100M** dataset to capture cooking domain knowledge. A memory-based inference pipeline with **FAISS** retrieval enforces object consistency across clips, with **GPT-4o** for text prompt enhancement and **Grounding DINO** plus **CLIP** embeddings for object detection and similarity matching.',
        },
      ],
    },
    {
      title: 'Abstract',
      blocks: [
        {
          type: 'text',
          text: 'Generating coherent multi-step instructional videos from text descriptions remains a significant challenge in computer vision. While recent advances in diffusion-based video generation have shown promising results, maintaining temporal consistency and object-state coherence across extended sequences remains difficult. In this work, we propose an approach that combines fine-tuned diffusion models with a memory-based inference pipeline to generate procedural cooking videos.',
        },
        {
          type: 'text',
          text: 'We fine-tune Phantom-WAN with LoRA using Diffusion-Pipe on a curated subset of HowTo100M to learn cooking-specific visual patterns. Our memory module leverages FAISS for efficient retrieval of object representations, ensuring consistency across generated clips. We use GPT-4o as a vision-language model for prompt enhancement and object extraction, combined with Grounding DINO for precise open-vocabulary detection and CLIP embeddings for similarity matching.',
        },
        {
          type: 'text',
          text: 'Our experiments demonstrate a **36% improvement in temporal coherence** over baseline methods, with significant gains in object-state stability and procedural accuracy. We introduce novel evaluation metrics — DINO L2 Distance, Shot Boundary Detection, and Object-State Consistency — to assess procedural video quality without human preference labels.',
        },
      ],
    },
    {
      title: 'Methodology',
      blocks: [
        {
          type: 'subsection',
          title: '1. Text Prompt Enhancement with a VLM',
          blocks: [
            {
              type: 'text',
              text: 'We leverage GPT-4o to enhance user text prompts with detailed procedural descriptions. The VLM identifies the key objects, actions, and temporal sequence required for a cooking task, emitting structured prompts that guide generation step by step.',
            },
          ],
        },
        {
          type: 'subsection',
          title: '2. Fine-tuning Phantom-WAN',
          blocks: [
            {
              type: 'text',
              text: 'We fine-tune the Phantom-WAN video diffusion model (LoRA adapters, Diffusion-Pipe) on a curated cooking subset of HowTo100M. Domain-specific training lets the model capture cooking-specific appearance and temporal dynamics that the base model does not model well.',
            },
          ],
        },
        {
          type: 'subsection',
          title: '3. Memory-Based Inference Pipeline',
          blocks: [
            {
              type: 'text',
              text: 'The memory module stores object representations as CLIP embeddings indexed with FAISS. During inference, Grounding DINO detects objects in generated frames; detections are matched against stored representations so that tools and ingredients keep their identity across clips. The pipeline is training-free — it wraps the sampler rather than changing it.',
            },
            {
              type: 'equation',
              tex: 'Similarity(o_t, M) = max_{m ∈ M}  ( φ(o_t) · φ(m) ) / ( ‖φ(o_t)‖ ‖φ(m)‖ )',
              note: 'where φ is the CLIP embedding function, o_t the object detected at time t, and M the memory bank of stored object representations.',
            },
          ],
        },
      ],
    },
    {
      title: 'Evaluation Metrics',
      blocks: [
        {
          type: 'text',
          text: 'We introduce a suite of metrics to assess generated instructional videos:',
        },
        {
          type: 'list',
          items: [
            '**DINO L2 Distance** — visual consistency between consecutive frames using DINOv2 features.',
            '**Shot Boundary Detection** — TransNetV2 identifies abrupt transitions that signal temporal incoherence.',
            '**Step Consistency** — whether the generated procedural steps follow a logical order.',
            '**Goal Consistency** — alignment between the generated video and the intended cooking goal.',
            '**Object-State Consistency** — tracks object transformations (e.g. raw → cooked) across frames.',
          ],
        },
        {
          type: 'table',
          table: {
            caption:
              'Quantitative comparison of video generation methods on cooking video generation.',
            headers: [
              'Method',
              'L2 DINO Dist ↓',
              'Shot Boundary ↓',
              'Step Consist. ↑',
              'Goal Consist. ↑',
              'Obj-State ↑',
            ],
            rows: [
              ['Baseline Phantom-WAN', '0.847', '12.3', '0.52', '0.48', '0.41'],
              ['Fine-tuned (No Memory)', '0.623', '8.7', '0.68', '0.61', '0.54'],
              ['Ours (Full Pipeline)', '0.412', '4.2', '0.81', '0.76', '0.73'],
            ],
            highlightLast: true,
          },
        },
      ],
    },
    {
      title: 'Key Findings',
      blocks: [
        {
          type: 'stats',
          stats: [
            { value: '36%', label: 'better temporal coherence' },
            { value: '66%', label: 'fewer shot boundaries' },
            { value: '78%', label: 'better object-state consistency' },
          ],
        },
        {
          type: 'list',
          items: [
            'Fine-tuning on HowTo100M substantially improves cooking-specific video quality.',
            'The memory module is the decisive component for maintaining object identity across clips.',
            'Domain-specific fine-tuning and memory-based inference compound: together they beat either alone on every metric.',
          ],
        },
      ],
    },
    {
      title: 'Post-Training with Automated Rewards',
      blocks: [
        {
          type: 'text',
          text: 'Because Object-State Consistency is computed automatically, it can stand in for a human-preference signal. We designed a **GRPO** post-training objective that uses the object-state metric as its reward, extending the Identity-GRPO reward model with a verifier that tracks ingredient state transitions across steps and scores goal consistency.',
        },
      ],
    },
    {
      title: 'Architecture Components',
      blocks: [
        {
          type: 'table',
          table: {
            headers: ['Component', 'Model / Tool', 'Purpose'],
            rows: [
              ['Video Generation', 'Phantom-WAN', 'Base diffusion model for video synthesis'],
              ['Fine-tuning', 'Diffusion-Pipe (LoRA)', 'Efficient fine-tuning on HowTo100M'],
              ['Text Enhancement', 'GPT-4o', 'VLM for prompt enhancement and object extraction'],
              ['Object Detection', 'Grounding DINO', 'Open-vocabulary object detection'],
              ['Embeddings', 'CLIP', 'Visual-semantic representations'],
              ['Memory Index', 'FAISS', 'Efficient similarity search for retrieval'],
              ['Shot Detection', 'TransNetV2', 'Evaluation metric for temporal coherence'],
            ],
          },
        },
      ],
    },
  ],
  bibtex: `@article{jain2026procedural,
  author  = {Jain, Agrim and Saini, Krishanu and Nair, Shabari S},
  title   = {Diffusion-Based Procedural Video Generation for Instructional Videos},
  booktitle = {CS 381V: Visual Recognition, The University of Texas at Austin},
  year    = {2026},
  advisor = {Grauman, Kristen}
}`,
}
