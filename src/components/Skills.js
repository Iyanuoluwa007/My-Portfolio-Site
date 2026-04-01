"use client";

import { motion } from "framer-motion";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const skillGroups = [
  {
    category: "Robotics & Autonomy",
    icon: "⬡",
    color: "#6366F1",
    skills: ["ROS2", "SLAM", "Motion Planning", "Sensor Fusion", "CARLA Simulator", "ABB RobotStudio", "RAPID Programming", "Path Following"],
  },
  {
    category: "Computer Vision & AI",
    icon: "⬡",
    color: "#818CF8",
    skills: ["YOLOv5 / v8", "ByteTrack", "StrongSORT", "Video-SWIN Transformer", "MediaPipe", "OpenCV", "Object Detection", "Gesture Recognition"],
  },
  {
    category: "Deep Learning",
    icon: "⬡",
    color: "#A5B4FC",
    skills: ["PyTorch", "Transformer Architecture", "Temporal Models", "Custom Training Pipelines", "RAG Systems", "LLM Integration", "Multi-Agent AI", "Reinforcement Learning"],
  },
  {
    category: "Languages & Tools",
    icon: "⬡",
    color: "#C7D2FE",
    skills: ["Python", "JavaScript / TypeScript", "C / C++", "Next.js", "Docker", "Git / GitHub", "Linux / Bash", "REST APIs"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] -left-20 top-1/4 opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #818CF8, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div {...inView()} className="mb-16">
          <p className="section-label mb-3">02 — Skills</p>
          <h2 className="font-display text-[38px] md:text-[48px] font-bold text-ink tracking-tight leading-tight">
            Technical Expertise
          </h2>
          <p className="text-[16px] text-muted-light mt-4 max-w-xl leading-relaxed">
            A full-stack engineering skill set spanning robotics hardware, intelligent perception, and AI systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map(({ category, icon, color, skills }, i) => (
            <motion.div
              key={category}
              {...inView(i * 0.1)}
              className="p-6 rounded-2xl border border-white/[0.07] bg-surface hover:border-white/[0.12] transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[18px]" style={{ color }}>{icon}</span>
                <h3 className="font-display font-semibold text-[15px] text-ink">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="skill-chip">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
