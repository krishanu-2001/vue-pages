## Earlier Research

Work from the Computational Intelligence and Machine Learning Lab at IIT Indore, supervised by Prof. Aruna Tiwari and Dr. Sanjay Singh. These lines of work produced the [publications](/publications) listed on this site.

### Anomaly Detection using Generative Adversarial Network

**Jan 2022 - Feb 2024**
Computational Intelligence and Machine Learning Lab

A study by IIT Delhi points out that the national highways constitute only 2% of the length of roads in India, but they account for 30.3% of total road accidents and 36% of deaths.

Our research leverages high-speed cameras to capture real-time data on anomalies such as over-speeding, wrong-lane driving, and traffic patterns. This enables the identification of road accidents and immediate alerts to the local authorities. We are also collaborating with the local industry to provide solutions for detecting anomalies on highways and expressways in India.

**Also presented as: Surveillance and Safety for Highways**

<div style="display: flex; gap: 1rem; align-items: flex-start;">
  <img src="/docs/projects/traffic1.png" alt="Traffic Anomaly Detection 1" style="width: 48%; object-fit: contain;" />
  <img src="/docs/projects/traffic2.png" alt="Traffic Anomaly Detection 2" style="width: 48%; object-fit: contain;" />
</div>

---

### Image-to-Image Translation using Generative Adversarial Network

**Jun 2023 - Feb 2024**
Computational Intelligence and Machine Learning Lab

Image-to-image style translation is a technique that transforms the style of an image while preserving its content. It has various applications in fields like computer graphics and dataset creation.

**Objectives:**

- Conditional Generation: Generated images conditioned on specific references or domain labels
- Multidomain Style Transfer: Simultaneously blended multiple styles while preserving the original content

This research was started to find answers to questions like — Can an image of a vehicle be translated to a completely unrelated domain such as a soccer ball? What is exactly the difference between style and content in an image?

<img src="/docs/projects/Image-to-Image.png" alt="Image-to-Image Translation" style="max-width: 60%;" />

---

### Teaching AI to Sketch

Deep learning models with the help of convolutional neural networks learn to interpret and understand images by extracting and analyzing hierarchical features. This works well for images which resemble gaussian distribution. However, unlike natural images, sketches are designed as vectors which poses a significant challenge.

Our research addresses this challenge by developing a deep learning model capable of completing a sketch initiated by a person. It takes a target class name as input — for example, wheel, wheel-barrow, and wine glass.

<img src="/docs/projects/sketches.png" alt="Sketch Completion" style="max-width: 60%;" />

---

### An Ethical Dataset for Non-Existing Living Beings (SIPT-GAN)

One of the bottlenecks for AI is the availability of ethically sourced data for training. Production houses have utilized green screens and sensors to generate such data since a long time now. Generative AI provides us a means to utilize existing videos and mask confidential information while retaining the semantics of a scene or an action.

Built using **SIPT-GAN** (Style-Infused Perception Transformer based GAN) — a novel approach for multi-domain image-to-image translation using a single model. The architecture uses dual-branched transformer blocks: a long-range context branch with multi-headed attention for global style elements, and a short-range context branch with depth-wise convolution for fine-grained details. A two-stage style infusion via Adaptive Instance Normalization (AdaIN) controls style transfer at different representation levels.

- **Parameters:** 82M
- **FID Score:** 15.90 | **LPIPS:** 0.54
- **Tech:** PyTorch, CUDA, Transformer + GAN architecture

**GitHub:** [SIPT-GAN](https://github.com/krishanu-2001/SIPT-GAN)

<img src="/docs/projects/Image-to-Image.png" alt="SIPT-GAN Architecture" style="max-width: 60%;" />

---

### Orthodontics — Teeth Alignment Prediction

Orthodontics is a specialist branch of dentistry. The term "orthodontics" can be broken down into two Greek words — "orthos" meaning straight or correct and "dontics" meaning teeth.

Our research aims to predict the future appearance of a patient's teeth during orthodontic treatment. By analyzing the functional characteristics of molars, premolars, canines, and incisors, we utilized generative AI to create a reconstruction model enhanced with exemplar data.

_Video demonstration available on request._

---

See the full list of papers on the [Publications](/publications) page.
