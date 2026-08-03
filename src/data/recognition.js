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
    title: "Reviewer Certificate — Springer Nature",
    org: "BMC Artificial Intelligence",
    period: "19 June 2026",
    description:
      "Awarded by Springer Nature in recognition of peer review contribution to BMC Artificial Intelligence, reviewing submitted manuscripts for scientific rigour, methodology, and contribution to the field.",
    stats: [
      { value: "1", label: "Manuscript reviewed" },
      { value: "2026", label: "Review year" },
      { value: "BMC AI", label: "Journal" },
    ],
    tags: ["Peer Review", "Springer Nature", "Academic Service"],
    links: [
      { label: "Certificate (PDF)", href: "/evidence/springer-reviewer-certificate.pdf" },
      { label: "BMC Artificial Intelligence", href: "https://bmcartificialintel.biomedcentral.com/" },
    ],
    images: [
      {
        src: "/evidence/springer-reviewer-certificate.jpg",
        alt: "Springer Nature reviewer certificate awarded to Iyanuoluwa Enoch Oke for contribution to BMC Artificial Intelligence, dated 19 June 2026",
        caption: "Springer Nature reviewer certificate, 19 June 2026",
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
    date: "July 2026",
    description:
      "A full tutorial on building a production-ready robotic perception system: ROS 2 integration, YOLOv11 detection, ByteTrack multi-object tracking, and ONNX optimisation for deployment on edge hardware.",
    tags: ["ROS 2", "YOLOv11", "ByteTrack", "ONNX"],
    url: "https://www.freecodecamp.org/news/how-to-build-a-real-time-object-detection-and-tracking-pipeline-with-ros-2-and-yolov11/",
    secondaryLink: {
      label: "Featured by freeCodeCamp",
      href: "https://x.com/freeCodeCamp/status/2082617450735047065",
    },
  },
  {
    id: "devto-signlytic",
    outlet: "DEV Community",
    title:
      "I Built a BSL Translation Extension That Nobody Asked For. Here Is Why I Did It Anyway.",
    date: "August 2026",
    description:
      "The story behind Signlytic, a Chrome extension that turns live captions into British Sign Language animations in real time, and the case for building accessibility tooling without waiting for permission.",
    tags: ["Accessibility", "Computer Vision", "Chrome Extension"],
    url: "https://dev.to/iyanuoluwa007/i-built-a-bsl-translation-extension-that-nobody-asked-for-here-is-why-i-did-it-anyway-4fk9",
  },
  {
    id: "devto-carla",
    outlet: "DEV Community",
    title: "I Built a Real-Time Perception Stack on CARLA. Here Is What Actually Happened.",
    date: "July 2026",
    description:
      "Practical lessons from integrating YOLOv11, ByteTrack, StrongSORT, CARLA, and ROS 2 into a real-time perception system, and why the hard problems are systems-level rather than model-level.",
    tags: ["CARLA", "ROS 2", "Perception", "SLAM"],
    url: "https://dev.to/iyanuoluwa007/i-built-a-real-time-perception-stack-on-carla-here-is-what-actually-happened-5abl",
  },
  {
    id: "hackernoon-final-decision",
    outlet: "HackerNoon",
    title: "Why I Don't Let AI Make the Final Decision",
    date: "2026",
    description:
      "On human-in-the-loop design for high-stakes autonomous systems: why separating advisory models from execution authority, and enforcing deterministic constraints over model output, is a safety requirement rather than a limitation.",
    tags: ["AI Governance", "Human-in-the-Loop", "Risk Management"],
    url: "https://hackernoon.com/why-i-dont-let-ai-make-the-final-decision",
  },
  {
    id: "hackernoon-lab-lying",
    outlet: "HackerNoon",
    title: "The Lab Is Lying to You",
    date: "2026",
    description:
      "On the gap between benchmark performance and real-world deployment: why clean evaluation numbers routinely fail to survive contact with live systems, latency budgets, and messy sensor data.",
    tags: ["Benchmarking", "Deployment", "ML Engineering"],
    url: "https://hackernoon.com/the-lab-is-lying-to-you",
  },
];
