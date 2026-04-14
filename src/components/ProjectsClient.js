"use client";
import { motion } from "framer-motion";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const projects = [
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

export default function ProjectsClient() {
  return (
    <section id="projects" style={{ position:"relative", padding:"96px 0", backgroundColor:"#08080F" }}>
      <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 24px", position:"relative", zIndex:1 }}>

        {/* Header */}
        <motion.div {...inView()} style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, flexWrap:"wrap", gap:16 }}>
          <div>
            <span className="section-label" style={{ marginBottom:12 }}>03 — Projects</span>
            <h2 style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontSize:"clamp(28px,4vw,44px)", fontWeight:700, color:"#F0F0F8", letterSpacing:"-0.02em", margin:0 }}>
              Open Source Work
            </h2>
            <p style={{ fontSize:15, color:"#64748B", marginTop:8, fontFamily:"'DM Sans',sans-serif", fontWeight:300 }}>
              A focused selection of production systems and engineering experiments.
            </p>
          </div>
          <a href="https://github.com/Iyanuoluwa007" target="_blank" rel="noopener noreferrer"
            style={{ display:"flex", alignItems:"center", gap:7, fontSize:13, color:"#94A3B8", textDecoration:"none", border:"1px solid rgba(255,255,255,0.09)", padding:"9px 16px", borderRadius:12, transition:"all 0.2s", whiteSpace:"nowrap" }}
            onMouseEnter={e => { e.currentTarget.style.color="#F0F0F8"; e.currentTarget.style.borderColor="rgba(255,255,255,0.18)"; }}
            onMouseLeave={e => { e.currentTarget.style.color="#94A3B8"; e.currentTarget.style.borderColor="rgba(255,255,255,0.09)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            View all repos
          </a>
        </motion.div>

        {/* Cards grid */}
        <div className="proj-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              {...inView(i * 0.07)}
              style={{
                background:"#0F0F1B",
                border:"1px solid rgba(255,255,255,0.07)",
                borderRadius:16,
                padding:24,
                display:"flex",
                flexDirection:"column",
                gap:14,
                transition:"border-color 0.25s, box-shadow 0.25s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(99,102,241,0.35)"; e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.2)"; e.currentTarget.style.transform="translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"; e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="translateY(0)"; }}
            >
              {/* Title block */}
              <div>
                <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, fontSize:15, color:"#F0F0F8", margin:"0 0 4px", lineHeight:1.3 }}>
                  {project.title}
                </h3>
                <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"#6366F1", margin:0 }}>
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p style={{ fontSize:13, color:"#64748B", lineHeight:1.65, margin:0, fontFamily:"'DM Sans',sans-serif", flex:1 }}>
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {project.tags.map(t => (
                  <span key={t} className="tag" style={{ fontSize:10.5 }}>{t}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display:"flex", gap:12, paddingTop:10, borderTop:"1px solid rgba(255,255,255,0.05)" }}>
                {project.links.map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ display:"flex", alignItems:"center", gap:5, fontSize:12.5, color:"#6366F1", textDecoration:"none", fontFamily:"'DM Sans',sans-serif", fontWeight:500, transition:"color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color="#A5B4FC"}
                    onMouseLeave={e => e.currentTarget.style.color="#6366F1"}
                  >
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M12 4H6M12 4v6"/></svg>
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div {...inView(0.4)} style={{ display:"flex", justifyContent:"center", marginTop:32 }}>
          <a
            href="https://github.com/Iyanuoluwa007"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display:"flex", alignItems:"center", gap:8, padding:"11px 24px", border:"1px solid rgba(255,255,255,0.1)", background:"transparent", color:"#94A3B8", fontSize:13, borderRadius:12, textDecoration:"none", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.2)"; e.currentTarget.style.color="#F0F0F8"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"; e.currentTarget.style.color="#94A3B8"; }}
          >
            View all projects on GitHub
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M12 4H6M12 4v6"/></svg>
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) { .proj-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .proj-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
