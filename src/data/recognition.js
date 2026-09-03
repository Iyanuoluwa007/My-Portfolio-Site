// Recognition evidence: technical writing, open source contribution, and
// peer review. To add an entry, append an object to the relevant array.
//
// Highlight cards accept an optional `images` array of { src, alt, caption },
// where `src` is a path under /public. Each image is rendered only if the file
// actually exists: a missing file is caught and hidden at runtime, so the card
// degrades cleanly to its stat block rather than showing a broken image.

export const highlights = [
  {
    id: "praisonai",
    kind: "Open Source",
    title: "Top 20 Contributor — PraisonAI",
    org: "MervinPraison/PraisonAI",
    period: "2026",
    description:
      "Among the top 20 contributors to PraisonAI, an open-source multi-agent AI framework with over 8,000 GitHub stars. My contributions included improvements to agent termination and telemetry correctness, Windows compatibility, LiteLLM fallback support, and substantial hardening of the integration test suite.",
    stats: [
      { value: "#17", label: "Contributor rank" },
      { value: "11", label: "Pull requests merged" },
      { value: "389+", label: "Lines contributed" },
    ],
    tags: ["Multi-Agent AI", "Python", "Open Source", "Testing"],
    links: [
      { label: "Contributor graph", href: "https://github.com/MervinPraison/PraisonAI/graphs/contributors?from=02%2F05%2F2026" },
      { label: "Merged pull requests", href: "https://github.com/MervinPraison/PraisonAI/pulls?q=is%3Apr+author%3AIyanuoluwa007+is%3Aclosed" },
      { label: "Repository", href: "https://github.com/MervinPraison/PraisonAI" },
    ],
    images: [
      {
        src: "/evidence/praisonai-contributors.png",
        alt: "GitHub contributor graph for MervinPraison/PraisonAI showing Iyanuoluwa007 ranked 17th",
        caption: "Contributor graph — ranked #17",
      },
      {
        src: "/evidence/praisonai-pull-requests.png",
        alt: "GitHub pull request list showing 11 closed pull requests authored by Iyanuoluwa007 in PraisonAI",
        caption: "11 pull requests closed and merged",
      },
    ],
  },
  {
    id: "springer-review",
    kind: "Peer Review",
    title: "Reviewer — Springer Nature",
    org: "Scientific Reports · BMC Artificial Intelligence",
    period: "2026",
    description:
      "Awarded two Springer Nature reviewer certificates in 2026 for peer review contributions to Scientific Reports (Nature Portfolio) and BMC Artificial Intelligence, assessing submitted manuscripts for scientific rigour, methodology, and contribution to the field.",
    stats: [
      { value: "2", label: "Manuscripts reviewed" },
      { value: "2", label: "Journals" },
      { value: "2026", label: "Review year" },
    ],
    tags: ["Peer Review", "Springer Nature", "Nature Portfolio", "Academic Service"],
    links: [
      { label: "Scientific Reports certificate (PDF)", href: "/evidence/springer-scientific-reports-certificate.pdf" },
      { label: "BMC AI certificate (PDF)", href: "/evidence/springer-bmc-ai-certificate.pdf" },
      { label: "Scientific Reports", href: "https://www.nature.com/srep/" },
      { label: "BMC Artificial Intelligence", href: "https://bmcartificialintel.biomedcentral.com/" },
    ],
    images: [
      {
        src: "/evidence/springer-scientific-reports-certificate.jpg",
        alt: "Springer Nature reviewer certificate awarded to Iyanuoluwa Enoch Oke for contribution to Scientific Reports, dated 3 September 2026",
        caption: "Scientific Reports reviewer certificate, 3 September 2026",
      },
      {
        src: "/evidence/springer-bmc-ai-certificate.jpg",
        alt: "Springer Nature reviewer certificate awarded to Iyanuoluwa Enoch Oke for contribution to BMC Artificial Intelligence, dated 19 June 2026",
        caption: "BMC Artificial Intelligence reviewer certificate, 19 June 2026",
      },
    ],
  },
  {
    id: "icmlde-2025",
    kind: "Peer Review",
    title: "Reviewer — ICMLDE 2025",
    org: "UPES Dehradun · Procedia Computer Science (Elsevier)",
    period: "November 2025",
    description:
      "Served as external reviewer and assessor for the 4th International Conference on Machine Learning and Data Engineering (ICMLDE 2025), held 6-8 November 2025 at the School of Computer Science, UPES Dehradun, India, with proceedings published in Elsevier's Procedia Computer Science. Recognised by the Organising Chair, the Dean of the School of Computer Science, and the Vice Chancellor of UPES.",
    stats: [
      { value: "4th", label: "Conference edition" },
      { value: "2025", label: "Review year" },
      { value: "Elsevier", label: "Proceedings" },
    ],
    tags: ["Peer Review", "Conference Review", "Machine Learning", "Data Engineering"],
    links: [
      { label: "Certificate (PDF)", href: "/evidence/icmlde-2025-reviewer-certificate.pdf" },
      { label: "Confirmation letter (PDF)", href: "/evidence/icmlde-2025-reviewer-letter.pdf" },
      { label: "ICMLDE 2025", href: "https://icmlde.org/ICMLDE2025.html" },
      { label: "Conference site", href: "https://www.icmlde.org/" },
    ],
    images: [
      {
        src: "/evidence/icmlde-2025-reviewer-certificate.png",
        alt: "ICMLDE 2025 certificate of recognition awarded to Oke Iyanuoluwa Enoch as a reviewer, issued by the School of Computer Science, UPES Dehradun",
        caption: "ICMLDE 2025 certificate of recognition",
      },
      {
        src: "/evidence/icmlde-2025-reviewer-letter.png",
        alt: "Letter from the Organising Chair of ICMLDE 2025 confirming Oke Iyanuoluwa Enoch served as external reviewer, dated 20 December 2025",
        caption: "Organising Chair confirmation letter, 20 December 2025",
      },
    ],
  },
];

export const articles = [
  {
    id: "fcc-ros2-yolov11",
    outlet: "freeCodeCamp",
    featured: true,
    title:
      "How to Build a Real-Time Object Detection and Tracking Pipeline with ROS 2 and YOLOv11",
    date: "25 July 2026",
    description:
      "A full tutorial on building a production-ready robotic perception system: ROS 2 integration, YOLOv11 detection, ByteTrack multi-object tracking, and ONNX optimisation for deployment on edge hardware. Published by freeCodeCamp and promoted to their 2.2M+ followers on X and LinkedIn.",
    tags: ["ROS 2", "YOLOv11", "ByteTrack", "ONNX"],
    url: "https://www.freecodecamp.org/news/how-to-build-a-real-time-object-detection-and-tracking-pipeline-with-ros-2-and-yolov11/",
    // Where freeCodeCamp promoted the article to their own audience.
    features: [
      { label: "freeCodeCamp on X", href: "https://x.com/freeCodeCamp/status/2082617450735047065" },
      { label: "freeCodeCamp on LinkedIn", href: "https://www.linkedin.com/posts/real-time-object-detection-in-robotics-needs-share-7488383219701280768-L6YK/" },
    ],
  },
  {
    id: "coderlegion-ai-recommend",
    outlet: "CoderLegion",
    title: "AI Should Recommend, Not Rule: How I Design Systems That Fail Safely",
    date: "30 August 2026",
    description:
      "The design principle behind every AI system I ship: AI proposes, deterministic rules validate, humans intervene where necessary, and everything important is logged. Covers why a model can be highly accurate and still unsafe as an authority, drawn from applying the pattern across robotics, computer vision, language systems, and quantitative finance.",
    tags: ["AI Governance", "System Design", "Human-in-the-Loop", "Reliability"],
    url: "https://coderlegion.com/25806/ai-should-recommend-not-rule-how-i-design-systems-that-fail-safely",
  },
  {
    id: "devto-signlytic",
    outlet: "DEV Community",
    title:
      "I Built a BSL Translation Extension That Nobody Asked For. Here Is Why I Did It Anyway.",
    date: "1 August 2026",
    description:
      "The story behind Signlytic, a Chrome extension that turns live captions into British Sign Language animations in real time, and the case for building accessibility tooling without waiting for permission.",
    tags: ["Accessibility", "Computer Vision", "Chrome Extension"],
    url: "https://dev.to/iyanuoluwa007/i-built-a-bsl-translation-extension-that-nobody-asked-for-here-is-why-i-did-it-anyway-4fk9",
    // Syndicated to CoderLegion on 30 August 2026.
    features: [
      { label: "Also on CoderLegion", href: "https://coderlegion.com/25805/i-built-a-bsl-translation-extension-that-nobody-asked-for-here-is-why-i-did-it-anyway" },
    ],
  },
  {
    id: "devto-carla",
    outlet: "DEV Community",
    title: "I Built a Real-Time Perception Stack on CARLA. Here Is What Actually Happened.",
    date: "21 July 2026",
    description:
      "Practical lessons from integrating YOLOv11, ByteTrack, StrongSORT, CARLA, and ROS 2 into a real-time perception system, and why the hard problems are systems-level rather than model-level.",
    tags: ["CARLA", "ROS 2", "Perception", "SLAM"],
    url: "https://dev.to/iyanuoluwa007/i-built-a-real-time-perception-stack-on-carla-here-is-what-actually-happened-5abl",
    // Syndicated to CoderLegion on 30 August 2026.
    features: [
      { label: "Also on CoderLegion", href: "https://coderlegion.com/25804/i-built-a-real-time-perception-stack-on-carla-here-is-what-actually-happened" },
    ],
  },
  {
    id: "hackernoon-final-decision",
    outlet: "HackerNoon",
    title: "Why I Don't Let AI Make the Final Decision",
    date: "29 July 2026",
    description:
      "Why the gap between model performance and system reliability is where most AI products quietly collapse. Argues that models are probabilistic components rather than decision-makers, drawing on the human-in-the-loop architecture behind Sentinel Quant and Signlytic.",
    tags: ["AI Governance", "Human-in-the-Loop", "System Reliability"],
    url: "https://hackernoon.com/why-i-dont-let-ai-make-the-final-decision",
  },
  {
    id: "hackernoon-lab-lying",
    outlet: "HackerNoon",
    title: "The Lab Is Lying to You",
    date: "29 July 2026",
    description:
      "What clean benchmarks and polished simulator runs conceal: tracker drift, creeping latency, and edge devices throttling under real load. Lessons from taking ROS 2, YOLOv11, SLAM Toolbox, ByteTrack, and CARLA out of simulation and onto real hardware with ONNX and TensorRT.",
    tags: ["Sim-to-Real", "Benchmarking", "Edge Deployment", "ROS 2"],
    url: "https://hackernoon.com/the-lab-is-lying-to-you",
  },
];
