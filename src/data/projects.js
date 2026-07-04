// Curated project list. Rendered by the Projects section and the
// featured project carousel in the hero.
export const projects = [
  {
    title: "Signlytic AI",
    subtitle: "Bidirectional British Sign Language Translation System",
    description: "Real-time BSL translation system using MediaPipe Holistic and Video-SWIN-T trained on 5,200+ sign sequences — achieving 100% Top-1 accuracy. Deployed as a Chrome extension with a Three.js 3D avatar and four caption integrations.",
    tags: ["Python", "MediaPipe", "PyTorch", "FastAPI", "Chrome Extension"],
    links: [
      { label: "Repository", href: "https://github.com/Iyanuoluwa007/Signlytic-Overlay" },
      { label: "Website", href: "https://signlytic-ai-website.vercel.app" },
    ],
  },
  {
    title: "Sentinel Quant v3.2",
    subtitle: "Live AI Algorithmic Trading System",
    description: "Dual-broker AI trading system managing live capital across Alpaca and Trading 212 with Docker orchestration, VIX regime detection, three autonomous strategy sleeves, and a 138-check automated audit.",
    tags: ["Python", "Alpaca API", "Trading212", "Docker", "Next.js"],
    links: [
      { label: "Repository", href: "https://github.com/Iyanuoluwa007/Sentinel-Quant_PE" },
      { label: "Demo", href: "https://sentinel-quant-dashboard.vercel.app" },
    ],
  },
  {
    title: "Autonomous Robot Perception Stack",
    subtitle: "CARLA Simulation",
    description: "ROS 2 perception and localisation stack integrating YOLOv11, ByteTrack, StrongSORT, and visual SLAM in CARLA — sustaining 25–35 FPS with ~0.9m median localisation error in urban driving scenes.",
    tags: ["ROS 2", "YOLOv11", "SLAM", "ByteTrack", "Python"],
    links: [
      { label: "Repository", href: "https://github.com/Iyanuoluwa007/Carla_project-YOLO-SSD" },
    ],
  },
  {
    title: "Tracked 6-DOF Robotic Arm",
    subtitle: "ZetaBot",
    description: "Camera-assisted 6-DOF robotic arm built with Arduino Nano, ESP32, and a ROS serial bridge on a solar-supported power architecture — achieving sub-2° RMS joint tracking error during tested motion profiles.",
    tags: ["C++", "Arduino", "ESP32", "ROS", "Embedded"],
    links: [
      { label: "Repository", href: "https://github.com/Iyanuoluwa007/zetabot" },
    ],
  },
  {
    title: "AgentFoundry",
    subtitle: "Meta-Agent Workflow Compiler",
    description: "Meta-agent framework that compiles YAML-defined specifications into canonical JSON workflows, Mermaid diagrams, and runnable Python agents — with deterministic, auditable validation and code generation pipelines.",
    tags: ["Python", "YAML", "Pydantic", "Jinja2", "Mermaid"],
    links: [
      { label: "Repository", href: "https://github.com/Iyanuoluwa007/AgentFoundry" },
    ],
  },
  {
    title: "Nexus",
    subtitle: "Multi-Agent Code Refactoring System",
    description: "AI-powered swarm system for autonomous codebase analysis, refactoring, testing, and documentation generation using multi-agent orchestration.",
    tags: ["Python", "Multi-Agent", "LLM", "Automation"],
    links: [
      { label: "Repository", href: "https://github.com/Iyanuoluwa007/Nexus" },
    ],
  },
];
