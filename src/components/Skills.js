"use client";
import { motion } from "framer-motion";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const skillGroups = [
  { category:"Robotics & Autonomy", color:"#6366F1", skills:["ROS2","SLAM","Motion Planning","Sensor Fusion","CARLA Simulator","ABB RobotStudio","RAPID Programming","Path Following"] },
  { category:"Computer Vision & AI", color:"#818CF8", skills:["YOLOv5 / v8 / v11","ByteTrack","StrongSORT","Video-SWIN Transformer","MediaPipe","OpenCV","Object Detection","Gesture Recognition"] },
  { category:"Deep Learning", color:"#A5B4FC", skills:["PyTorch","Transformer Architecture","Temporal Models","Custom Training Pipelines","RAG Systems","LLM Integration","Multi-Agent AI","Reinforcement Learning"] },
  { category:"Languages & Tools", color:"#C7D2FE", skills:["Python","JavaScript / TypeScript","C / C++","Next.js","Docker","Git / GitHub","Linux / Bash","REST APIs"] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ position:"relative", padding:"96px 0", overflow:"hidden", backgroundColor:"#08080F" }}>
      <div className="orb" style={{ width:400, height:400, left:-80, top:"30%", background:"radial-gradient(circle, rgba(129,140,248,0.07), transparent 70%)" }} />
      <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 24px", position:"relative", zIndex:1 }}>
        <motion.div {...inView()} style={{ marginBottom:52 }}>
          <span className="section-label" style={{ marginBottom:12 }}>02 — Skills</span>
          <h2 style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontSize:"clamp(30px,4vw,46px)", fontWeight:700, color:"#F0F0F8", letterSpacing:"-0.02em", margin:0 }}>
            Technical Expertise
          </h2>
          <p style={{ fontSize:16, color:"#94A3B8", marginTop:12, maxWidth:480, lineHeight:1.7, fontFamily:"'DM Sans',sans-serif", fontWeight:300 }}>
            A full-stack engineering skill set spanning robotics hardware, intelligent perception, and AI systems.
          </p>
        </motion.div>

        <div className="skills-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
          {skillGroups.map(({ category, color, skills }, i) => (
            <motion.div key={category} {...inView(i * 0.08)}
              style={{ padding:24, borderRadius:20, border:"1px solid rgba(255,255,255,0.08)", background:"#0F0F1B", transition:"border-color 0.25s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
            >
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:18 }}>
                <div style={{ width:8, height:8, borderRadius:"50%", background:color, flexShrink:0 }} />
                <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, fontSize:14.5, color:"#F0F0F8", margin:0 }}>{category}</h3>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
                {skills.map(s => <span key={s} className="skill-chip">{s}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .skills-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
