"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const stats = [
  { value: "15+", label: "Projects built" },
  { value: "3+", label: "Years building" },
  { value: "100%", label: "Top-1 accuracy" },
];

const roles = ["Robotics Engineer", "AI Systems Engineer", "Computer Vision"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 dot-grid-bg opacity-100" />

      {/* Gradient orbs */}
      <div
        className="orb w-[600px] h-[600px] -top-32 -left-40 opacity-[0.12]"
        style={{ background: "radial-gradient(circle, #6366F1, transparent 70%)" }}
      />
      <div
        className="orb w-[400px] h-[400px] top-1/2 right-0 opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #818CF8, transparent 70%)" }}
      />

      {/* Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#08080F] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_340px] gap-16 items-center">

          {/* Left: Text content */}
          <div>
            {/* Available badge */}
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-[11.5px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 blink-dot" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-[52px] md:text-[68px] lg:text-[76px] font-bold leading-[1.0] tracking-[-0.03em] text-ink mb-6"
            >
              Building{" "}
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #6366F1 0%, #A5B4FC 50%, #818CF8 100%)" }}>
                Intelligent
              </span>
              <br />
              Machines.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.35)}
              className="text-[17px] text-muted-light leading-relaxed max-w-xl mb-4 font-light"
            >
              Independent Robotics &amp; AI Systems Engineer specialising in
              autonomous systems, computer vision, and AI-driven robotics.
              Turning research into real-world deployments.
            </motion.p>

            {/* Role tags */}
            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-2 mb-10">
              {roles.map((r) => (
                <span key={r} className="tag">{r}</span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium text-[14px] rounded-xl shadow-glow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 bg-white/[0.05] hover:bg-white/[0.09] text-ink border border-white/[0.1] font-medium text-[14px] rounded-xl transition-all duration-200"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...fadeUp(0.7)}
              className="flex gap-8 mt-14 pt-10 border-t border-white/[0.07]"
            >
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-[28px] font-bold text-ink tracking-tight">
                    {value}
                  </div>
                  <div className="text-[12px] text-muted font-sans mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-[-12px] rounded-[28px] opacity-25"
                style={{ background: "linear-gradient(135deg, #6366F1, #818CF8)", filter: "blur(20px)" }} />

              {/* Card */}
              <div className="relative rounded-[24px] overflow-hidden border border-white/[0.1] bg-surface shadow-card"
                style={{ width: 300, height: 340 }}>
                <Image
                  src="/me.png"
                  alt="Iyanuoluwa Oke"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Card overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080F]/80 via-transparent to-transparent" />

                {/* Card bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-display font-semibold text-[15px] text-ink">
                    Iyanuoluwa Oke
                  </p>
                  <p className="text-[12px] text-muted-light font-mono mt-0.5">
                    Robotics &amp; AI Engineer
                  </p>
                </div>
              </div>

              {/* Floating tech badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-8 glass rounded-xl px-3.5 py-2.5 shadow-card"
              >
                <p className="text-[10px] font-mono text-muted-light mb-0.5">BSL Accuracy</p>
                <p className="font-display font-bold text-[18px] text-ink">100%</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-10 bottom-16 glass rounded-xl px-3.5 py-2.5 shadow-card"
              >
                <p className="text-[10px] font-mono text-muted-light mb-0.5">Live system</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 blink-dot" />
                  <p className="font-display font-semibold text-[13px] text-ink">Sentinel Quant</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
