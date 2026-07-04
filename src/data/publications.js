// Publication metadata. To add a new publication, append an object here.
// The Publications section renders entirely from this list.
export const publications = [
  {
    id: "zenodo-19284847",
    type: "Research Paper",
    title:
      "Sentinel Quant: A Human-in-the-Loop Multi-Model Portfolio Management System with Formal AI Governance Architecture",
    authors: "Oke, I. E.",
    bibtexAuthor: "Oke, Iyanuoluwa Enoch",
    year: 2026,
    publisher: "Zenodo",
    version: "1.0",
    doi: "10.5281/zenodo.19284847",
    doiUrl: "https://doi.org/10.5281/zenodo.19284847",
    zenodoUrl: "https://zenodo.org/records/19284847",
    abstract:
      "Recent advances in Large Language Models (LLMs) have demonstrated capabilities in financial reasoning, yet existing frameworks either operate as passive analytical tools or as fully autonomous agents without structured oversight. We introduce Sentinel Quant, a live-deployed portfolio management system that combines LLM-based market analysis with deterministic risk controls and a novel dual-model governance architecture. The system employs Claude Opus 4.6 as a supervisory reviewer that generates structured recommendations across six portfolio review domains, while Claude Sonnet 4.6 serves as the operational executor that implements only explicitly human-approved actions under comprehensive constraint validation. This separation ensures the advisory model has no execution capability and the execution model has no autonomous decision-making authority.\n\nThe system manages three independent strategy sleeves (short-term momentum, mid-term trend, long-term ETF accumulation), supports dual-broker execution across Alpaca (US equities) and Trading212 (UK UCITS ETFs), and enforces eight independent risk checks that override all AI outputs. Deployed in continuous production since March 2026, we report preliminary operational metrics and discuss failure modes, safety mechanisms, and design principles derived from live operation. Our work differs fundamentally from recent multi-agent HFT systems such as QuantAgent by addressing portfolio governance and execution safety rather than signal generation speed. Source code is publicly available.",
    keywords: [
      "Portfolio Management",
      "Large Language Models",
      "Human-in-the-Loop",
      "AI Governance",
      "Risk Management",
      "Dual-Model Architecture",
      "Autonomous Trading",
    ],
  },
  {
    id: "zenodo-18751702",
    type: "Research Paper",
    title:
      "Robotic Vision with Deep Learning: Real-Time Object Detection and Tracking for Autonomous Mobile Robots Using Convolutional Neural Networks",
    authors: "Oke, I. E.",
    bibtexAuthor: "Oke, Iyanuoluwa Enoch",
    year: 2026,
    publisher: "Zenodo",
    version: null,
    doi: "10.5281/zenodo.18751702",
    doiUrl: "https://doi.org/10.5281/zenodo.18751702",
    zenodoUrl: "https://zenodo.org/records/18751702",
    abstract:
      "Deploying deep learning based perception systems on autonomous mobile robots requires balancing detection accuracy, tracking stability, and strict real-time computational constraints. This work presents a systematic benchmarking study and end-to-end integration of modern object detection and multi-object tracking algorithms within a closed-loop autonomous driving framework. YOLOv11 and SSD detectors are evaluated alongside ByteTrack and StrongSORT trackers in the CARLA simulator.\n\nYOLOv11 demonstrates substantial performance gains over SSD while maintaining real-time inference. StrongSORT provides higher tracking accuracy, whereas ByteTrack offers lower latency and better identity stability. An integrated perception-to-control pipeline enables pedestrian-aware braking with total system latency below 25 ms. The research establishes reproducible benchmarks and deployment guidelines for edge robotic perception systems.",
    keywords: [
      "Deep Learning",
      "Computer Vision",
      "Object Detection",
      "Multi-Object Tracking",
      "YOLOv11",
      "ByteTrack",
      "StrongSORT",
      "Autonomous Robots",
      "Real-Time Systems",
      "CARLA",
    ],
  },
  {
    id: "zenodo-18751803",
    type: "Research Paper",
    title:
      "Comparative Analysis of AI and Optimization Methods for Inverse Kinematics in 7-DOF Robotic Systems",
    authors: "Oke Iyanuoluwa Enoch",
    bibtexAuthor: "Oke, Iyanuoluwa Enoch",
    year: 2026,
    publisher: "Zenodo",
    version: "1.0.0",
    doi: "10.5281/zenodo.18751803",
    doiUrl: "https://doi.org/10.5281/zenodo.18751803",
    zenodoUrl: "https://zenodo.org/records/18751803",
    abstract:
      "This research compares artificial intelligence and optimization techniques for solving inverse kinematics in a 7-DOF robotic manipulator. Methods include Differential Evolution, Particle Swarm Optimization, Simulated Annealing, Genetic Algorithm, Gradient Descent, Linear Regression, Decision Tree, Neural Network, and Support Vector Machine. The study provides guidance for selecting suitable approaches across robotic applications.",
    keywords: [],
  },
  {
    id: "zenodo-18751778",
    type: "Research Paper",
    title:
      "ZetaBot: Mobile Robotic Platform with Live Video Streaming and 6-DOF Arm",
    authors: "Oke Iyanuoluwa Enoch",
    bibtexAuthor: "Oke, Iyanuoluwa Enoch",
    year: 2026,
    publisher: "Zenodo",
    version: "1.0.1",
    doi: "10.5281/zenodo.18751778",
    doiUrl: "https://doi.org/10.5281/zenodo.18751778",
    zenodoUrl: "https://zenodo.org/records/18751778",
    abstract:
      "This paper presents the design and implementation of a mobile robotic platform integrating wireless video streaming, a six-degree-of-freedom robotic manipulator, and distributed microcontroller architecture. The robot combines an ESP32-CAM vision module with an Arduino Nano controlled robotic arm using serial communication. Features include live video streaming, Bluetooth Android control, modular architecture, solar charging support, and LCD operational feedback.\n\nExperimental validation demonstrated wireless operation with video latency below 200 ms and manipulator accuracy within ±2°. Applications include agricultural robotics, hazardous inspection, education, mobile manipulation, and research robotics.",
    keywords: [
      "Mobile Robotics",
      "ESP32",
      "Robotic Manipulation",
      "Embedded Systems",
      "IoT",
      "Computer Vision",
      "Wireless Control",
    ],
  },
];
