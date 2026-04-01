"use client";

import { motion } from "framer-motion";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const highlights = [
  { icon: "◈", text: "MSc Robotics & Automation" },
  { icon: "◈", text: "BEng Electrical & Electronics Engineering" },
  { icon: "◈", text: "ROS2 & Autonomous Systems" },
  { icon: "◈", text: "Deep Learning & Computer Vision" },
];

const focus = [
  "Autonomous Robotics",
  "Computer Vision",
  "ROS2 Systems",
  "Deep Learning",
  "AI Portfolio Systems",
  "BSL Translation AI",
  "Multi-Agent Systems",
  "Quantitative Finance AI",
];

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Subtle orb */}
      <div className="orb w-[500px] h-[300px] right-0 top-1/2 opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #6366F1, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div {...inView()} className="mb-16">
          <p className="section-label mb-3">01 — About</p>
          <h2 className="font-display text-[38px] md:text-[48px] font-bold text-ink tracking-tight leading-tight">
            Engineer. Builder. Researcher.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">

          {/* Left: narrative */}
          <div>
            <motion.p {...inView(0.1)} className="text-[16px] text-muted-light leading-[1.8] mb-5">
              I&apos;m <span className="text-ink font-medium">Iyanuoluwa Enoch Oke</span> — an
              independent Robotics &amp; AI Systems Engineer building systems at the
              intersection of robotics, computer vision, and artificial intelligence.
            </motion.p>
            <motion.p {...inView(0.2)} className="text-[16px] text-muted-light leading-[1.8] mb-5">
              My work spans the full stack of intelligent systems: from low-level motor
              control and sensor fusion in ROS2 environments to high-level AI decision
              layers using modern deep learning architectures and multi-agent frameworks.
            </motion.p>
            <motion.p {...inView(0.3)} className="text-[16px] text-muted-light leading-[1.8] mb-8">
              I don&apos;t just build demos — I ship production-grade systems. Sentinel Quant
              runs live on real capital. Signlytic AI achieves 100% Top-1 accuracy on 5,203
              BSL signs. Every project is engineered to production standard.
            </motion.p>

            {/* Highlights list */}
            <motion.div {...inView(0.4)} className="grid grid-cols-1 gap-2.5">
              {highlights.map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-[14px] text-muted-light">
                  <span className="text-accent text-xs">{icon}</span>
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: focus areas grid */}
          <motion.div {...inView(0.2)}>
            <div className="p-6 rounded-2xl border border-white/[0.07] bg-surface">
              <p className="text-[12px] font-mono text-muted mb-5 tracking-widest uppercase">Areas of Focus</p>
              <div className="flex flex-wrap gap-2">
                {focus.map((f) => (
                  <span key={f} className="skill-chip">{f}</span>
                ))}
              </div>
            </div>

            {/* Quick stats card */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { n: "5,203", sub: "BSL signs recognised" },
                { n: "$1K+", sub: "Live trading capital" },
                { n: "15+", sub: "GitHub projects" },
              ].map(({ n, sub }) => (
                <div key={sub} className="p-4 rounded-xl border border-white/[0.07] bg-surface text-center">
                  <p className="font-display font-bold text-[22px] text-accent-light tracking-tight">{n}</p>
                  <p className="text-[11px] text-muted font-mono mt-1 leading-tight">{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
