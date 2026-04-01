"use client";

import { motion } from "framer-motion";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const featured = [
  {
    number: "01",
    title: "Sentinel Quant",
    subtitle: "Live AI Portfolio Management System",
    description:
      "A production-deployed, dual-broker AI trading system managing real capital across US equities. Features regime-aware risk management, confidence-weighted position sizing, short-term momentum scanning, and a live public dashboard. Built on a self-learning feedback loop with Phase 1 active.",
    tags: ["Python", "Docker", "Alpaca API", "T212", "Next.js", "Vercel"],
    metrics: [
      { label: "Live since", value: "2024" },
      { label: "Strategies", value: "3" },
      { label: "Brokers", value: "2" },
    ],
    href: "https://github.com/Iyanuoluwa007/Sentinel-Quant_PE",
    live: "https://sentinel-quant-dashboard.vercel.app",
    accent: "#6366F1",
  },
  {
    number: "02",
    title: "Signlytic AI",
    subtitle: "Bidirectional BSL Translation System",
    description:
      "A bidirectional British Sign Language translation system. Direction 1 converts live BSL video to speech/text using a Video-SWIN Transformer achieving 100% Top-1 accuracy across 5,203 signs. Direction 2 converts speech/text to animated BSL signing via motion generation and real-time overlay.",
    tags: ["PyTorch", "Video-SWIN", "MediaPipe", "React", "Gradio", "Python"],
    metrics: [
      { label: "Top-1 accuracy", value: "100%" },
      { label: "Signs recognised", value: "5,203" },
      { label: "Directions", value: "2-way" },
    ],
    href: "https://github.com/Iyanuoluwa007/Signlytic-Overlay",
    live: "https://signlytic-ai-website.vercel.app",
    accent: "#818CF8",
  },
  {
    number: "03",
    title: "Autonomous CARLA Agent",
    subtitle: "Hybrid VLA Decision Layer for Self-Driving",
    description:
      "A hybrid Vision-Language-Action autonomous driving agent in CARLA simulator. Integrates YOLOv5 (4-class custom model) with ByteTrack for multi-object tracking, a graded FrontCollisionGuard system with 4 response tiers, and a Pure Pursuit path-following controller.",
    tags: ["Python", "CARLA", "YOLOv5", "ByteTrack", "ROS2", "OpenCV"],
    metrics: [
      { label: "Response tiers", value: "4" },
      { label: "Tracker", value: "ByteTrack" },
      { label: "Simulator", value: "CARLA" },
    ],
    href: "https://github.com/Iyanuoluwa007/Carla_project-YOLO-SSD",
    live: null,
    accent: "#A5B4FC",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="featured" className="section relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] right-0 bottom-0 opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #6366F1, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div {...inView()} className="mb-16">
          <p className="section-label mb-3">03 — Featured Work</p>
          <h2 className="font-display text-[38px] md:text-[48px] font-bold text-ink tracking-tight leading-tight">
            Production-grade systems
          </h2>
          <p className="text-[16px] text-muted-light mt-4 max-w-xl leading-relaxed">
            Not just demos — real systems deployed to production with real users, real capital, or real-world impact.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.number}
              {...inView(i * 0.12)}
              className="group relative rounded-2xl border border-white/[0.07] bg-surface overflow-hidden transition-all duration-300 hover:border-white/[0.14]"
              style={{ "--accent": project.accent }}
            >
              {/* Top accent bar */}
              <div
                className="h-[2px] w-full"
                style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
              />

              <div className="p-7 md:p-9">
                <div className="grid lg:grid-cols-[1fr_260px] gap-8 items-start">

                  {/* Left: content */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-[11px] text-muted tracking-widest">{project.number}</span>
                      <div className="h-px flex-1 bg-white/[0.06]" />
                    </div>

                    <h3 className="font-display text-[24px] md:text-[28px] font-bold text-ink tracking-tight mb-1">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[12px] mb-4" style={{ color: project.accent }}>
                      {project.subtitle}
                    </p>
                    <p className="text-[14.5px] text-muted-light leading-[1.75] mb-6 max-w-xl">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-7">
                      {project.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[13px] text-muted-light hover:text-ink transition-colors group/link"
                      >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        View on GitHub
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[13px] transition-colors"
                          style={{ color: project.accent }}
                        >
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M4 12L12 4M12 4H6M12 4v6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Live Site
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: metrics */}
                  <div className="flex flex-col gap-3">
                    {project.metrics.map(({ label, value }) => (
                      <div
                        key={label}
                        className="p-4 rounded-xl border border-white/[0.07] bg-[#08080F]/60"
                      >
                        <p className="font-display font-bold text-[26px] tracking-tight"
                          style={{ color: project.accent }}>
                          {value}
                        </p>
                        <p className="text-[11.5px] font-mono text-muted mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
