"use client";
import { motion } from "framer-motion";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const S = {
  section: { position:"relative", padding:"96px 0", overflow:"hidden", backgroundColor:"#08080F" },
  inner: { maxWidth:1152, margin:"0 auto", padding:"0 24px", position:"relative", zIndex:1 },
  grid: { display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"start" },
  h2: { fontFamily:"'Space Grotesk',system-ui,sans-serif", fontSize:"clamp(30px,4vw,46px)", fontWeight:700, color:"#F0F0F8", letterSpacing:"-0.02em", lineHeight:1.1, margin:"0 0 32px" },
  p: { fontSize:15.5, color:"#94A3B8", lineHeight:1.8, marginBottom:20, fontFamily:"'DM Sans',system-ui,sans-serif", fontWeight:300 },
  card: { padding:24, borderRadius:20, border:"1px solid rgba(255,255,255,0.08)", background:"#0F0F1B" },
  statCard: { padding:16, borderRadius:14, border:"1px solid rgba(255,255,255,0.07)", background:"rgba(255,255,255,0.02)", textAlign:"center" },
};

const highlights = [
  "MSc Robotics & Automation",
  "BEng Electrical & Electronics Engineering",
  "ROS2 & Autonomous Systems",
  "Deep Learning & Computer Vision",
];

const focus = [
  "Autonomous Robotics","Computer Vision","ROS2 Systems","Deep Learning",
  "AI Portfolio Systems","BSL Translation AI","Multi-Agent Systems","Quant Finance AI",
];

export default function About() {
  return (
    <section id="about" style={S.section}>
      <div className="orb" style={{ width:500, height:300, right:0, top:"40%", background:"radial-gradient(circle, rgba(99,102,241,0.08), transparent 70%)" }} />
      <div style={S.inner}>
        <motion.div {...inView()} style={{ marginBottom:52 }}>
          <span className="section-label" style={{ marginBottom:12 }}>01 — About</span>
          <h2 style={S.h2}>Engineer. Builder. Researcher.</h2>
        </motion.div>

        <div style={{ ...S.grid }} className="about-grid">
          <div>
            <motion.p {...inView(0.1)} style={S.p}>
              I&apos;m <strong style={{ color:"#F0F0F8", fontWeight:500 }}>Iyanuoluwa Enoch Oke</strong> — an
              independent Robotics &amp; AI Systems Engineer building systems at the intersection
              of robotics, computer vision, and artificial intelligence.
            </motion.p>
            <motion.p {...inView(0.2)} style={S.p}>
              My work spans the full stack of intelligent systems: from low-level motor control
              and sensor fusion in ROS2 environments to high-level AI decision layers using
              modern deep learning architectures and multi-agent frameworks.
            </motion.p>
            <motion.p {...inView(0.3)} style={{ ...S.p, marginBottom:28 }}>
              I don&apos;t just build demos — I ship production-grade systems.{" "}
              <a href="https://sentinel-quant-dashboard.vercel.app" target="_blank" rel="noopener noreferrer"
                style={{ color:"#818CF8", textDecoration:"none", borderBottom:"1px solid rgba(129,140,248,0.4)" }}>
                Sentinel Quant
              </a>{" "}is a live-deployed AI algorithmic trading system managing real capital across
              two brokers, with full system monitoring, automated audit pipelines, and a
              private React dashboard.{" "}
              <a href="https://signlytic-ai-website.vercel.app" target="_blank" rel="noopener noreferrer"
                style={{ color:"#818CF8", textDecoration:"none", borderBottom:"1px solid rgba(129,140,248,0.4)" }}>
                Signlytic AI
              </a>{" "}is a bidirectional BSL translation
              system engineered end-to-end. Every project is built to production standard.
            </motion.p>
            <motion.div {...inView(0.4)} style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {highlights.map((h) => (
                <div key={h} style={{ display:"flex", alignItems:"center", gap:10, fontSize:14, color:"#94A3B8", fontFamily:"'DM Sans',sans-serif" }}>
                  <span style={{ color:"#6366F1", fontSize:10, flexShrink:0 }}>◈</span>
                  {h}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div {...inView(0.15)}>
            <div style={S.card}>
              <p style={{ fontSize:11, fontFamily:"'JetBrains Mono',monospace", color:"#64748B", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:16 }}>Areas of Focus</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {focus.map(f => <span key={f} className="skill-chip">{f}</span>)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
