"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FeaturedProjectCard from "./FeaturedProjectCard";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const stats = [
  { value: "15+", label: "Projects built" },
  { value: "5+", label: "Years building" },
  { value: "10+", label: "Live deployments" },
];

const roles = ["Robotics Engineer", "AI Systems Engineer", "Computer Vision"];

const techStack = [
  { abbr: "Py", name: "Python" },
  { abbr: "C++", name: "C++" },
  { abbr: "ROS2", name: "ROS 2" },
  { abbr: "PyT", name: "PyTorch" },
  { abbr: "CV", name: "OpenCV" },
  { abbr: "Dkr", name: "Docker" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Dot grid background */}
      <div className="dot-grid-bg" style={{ position: "absolute", inset: 0, zIndex: 0 }} />

      {/* Gradient orbs */}
      <div className="orb" style={{
        width: 600, height: 600, top: -120, left: -160,
        background: "radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)",
      }} />
      <div className="orb" style={{
        width: 400, height: 400, top: "50%", right: -60,
        background: "radial-gradient(circle, rgba(129,140,248,0.1), transparent 70%)",
      }} />

      {/* Fade bottom */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 120,
        background: "linear-gradient(to top, #08080F, transparent)", zIndex: 1,
        pointerEvents: "none",
      }} />

      {/* Main content */}
      <div style={{
        position: "relative", zIndex: 2,
        width: "100%", maxWidth: 1152,
        margin: "0 auto",
        padding: "128px 24px 80px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 64,
          alignItems: "center",
        }}>

          {/* Left: text */}
          <div style={{ minWidth: 0 }}>

            {/* Available badge */}
            <motion.div {...fadeUp(0.05)} style={{ marginBottom: 28 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 14px", borderRadius: 100,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                fontSize: 11.5, fontFamily: "'JetBrains Mono', monospace",
                color: "#34D399",
              }}>
                <span className="blink-dot" style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#34D399", flexShrink: 0,
                }} />
                Available for opportunities
              </div>
            </motion.div>

            {/* Category label */}
            <motion.p {...fadeUp(0.1)} className="section-label" style={{ marginBottom: 18, letterSpacing: "0.2em", fontSize: 12 }}>
              AI Robotics Engineer
            </motion.p>

            {/* Headline */}
            <motion.h1 {...fadeUp(0.15)} style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontSize: "clamp(44px, 6.5vw, 84px)",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#F0F0F8",
              margin: "0 0 20px",
            }}>
              Building{" "}
              <span className="animated-gradient-text" style={{
                backgroundImage: "linear-gradient(135deg, #6366F1 0%, #A5B4FC 50%, #818CF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Intelligent
              </span>
              <br />Machines.
            </motion.h1>

            {/* Subtitle */}
            <motion.p {...fadeUp(0.28)} style={{
              fontSize: 17, color: "#94A3B8", lineHeight: 1.75,
              maxWidth: 560, margin: "0 0 18px",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 300,
            }}>
              Independent Robotics &amp; AI Systems Engineer specialising in
              autonomous systems, computer vision, and AI-driven robotics.
              Turning research into real-world deployments.
            </motion.p>

            {/* Role tags */}
            <motion.div {...fadeUp(0.38)} style={{
              display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32,
            }}>
              {roles.map((r) => (
                <span key={r} className="tag">{r}</span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.48)} style={{
              display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 48,
            }}>
              <Link href="#projects" className="btn-press" style={{
                padding: "12px 24px",
                background: "#6265EF",
                color: "#fff",
                fontWeight: 500,
                fontSize: 14,
                borderRadius: 12,
                textDecoration: "none",
                boxShadow: "0 0 20px rgba(99,102,241,0.25)",
                transition: "background 0.2s, transform 0.15s, box-shadow 0.25s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#818CF8"; e.currentTarget.style.transform = "translateY(-1px) scale(1.02)"; e.currentTarget.style.boxShadow = "0 0 32px rgba(99,102,241,0.45)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#6265EF"; e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(99,102,241,0.25)"; }}
              >
                View My Work
                <svg className="cta-arrow" width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 8h11M9 3.5L13.5 8 9 12.5" /></svg>
              </Link>
              <Link href="#contact" className="btn-press" style={{
                padding: "12px 24px",
                background: "rgba(255,255,255,0.05)",
                color: "#F0F0F8",
                fontWeight: 500,
                fontSize: 14,
                borderRadius: 12,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "background 0.2s, border-color 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                Get in Touch
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3.5" width="12" height="9" rx="1.5" /><path d="M2.5 4.5L8 9l5.5-4.5" /></svg>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.6)} style={{
              display: "flex",
              gap: 40,
              paddingTop: 28,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              flexWrap: "wrap",
            }}>
              {stats.map(({ value, label }) => (
                <div key={label} style={{ minWidth: 64 }}>
                  <div style={{
                    fontFamily: "'Space Grotesk', system-ui, sans-serif",
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#F0F0F8",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}>
                    {value}
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: "#6C7D96",
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    marginTop: 5,
                    whiteSpace: "nowrap",
                  }}>
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Tech stack */}
            <motion.div {...fadeUp(0.72)} style={{ marginTop: 36 }}>
              <p style={{
                fontSize: 10.5, fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "#6C7D96", margin: "0 0 12px",
              }}>
                Tech Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {techStack.map(({ abbr, name }, i) => (
                  <span key={name} className="tech-card float-chip" style={{ animationDelay: `${i * 0.4}s` }} title={name} aria-label={name}>
                    {abbr}
                  </span>
                ))}
                <Link href="#skills" className="tech-card float-chip" style={{ animationDelay: `${techStack.length * 0.4}s`, cursor: "pointer", fontSize: 16, letterSpacing: 1 }} aria-label="View all skills">
                  &middot;&middot;&middot;
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: photo card — hidden on small screens via JS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ flexShrink: 0 }}
            className="hero-photo-col"
          >
            <div style={{ position: "relative" }}>
              {/* Glow ring */}
              <div style={{
                position: "absolute", inset: -12, borderRadius: 28,
                background: "linear-gradient(135deg, #6366F1, #818CF8)",
                filter: "blur(20px)", opacity: 0.22,
              }} />

              {/* Photo card */}
              <div style={{
                position: "relative",
                width: 280, height: 320,
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "#0F0F1B",
                boxShadow: "0 1px 1px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/me.png"
                  alt="Iyanuoluwa Oke"
                  width={280}
                  height={320}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                />
                {/* Overlay */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "linear-gradient(to top, rgba(8,8,15,0.85), transparent)",
                  padding: "20px 18px 18px",
                }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: "#F0F0F8", margin: 0 }}>
                    Iyanuoluwa Oke
                  </p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#94A3B8", margin: "3px 0 0" }}>
                    Robotics &amp; AI Engineer
                  </p>
                </div>
              </div>

              {/* Floating badge 1 — specialisation */}
              <div className="float-anim glass" style={{
                position: "absolute", top: 12, right: -88,
                borderRadius: 12, padding: "10px 14px",
                boxShadow: "0 1px 1px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.4)",
                minWidth: 152,
              }}>
                <p style={{ fontSize: 10, fontFamily: "'JetBrains Mono',monospace", color: "#6C7D96", margin: "0 0 7px" }}>Specialisation</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  {["Robotics Engineer", "AI Systems Engineer", "Computer Vision"].map((r) => (
                    <span key={r} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10.5, fontFamily: "'DM Sans',sans-serif", fontWeight: 500, color: "#A5B4FC" }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#6366F1", flexShrink: 0 }} />
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating badge 2 — status */}
              <div className="float-anim-slow glass" style={{
                position: "absolute", bottom: 48, left: -72,
                borderRadius: 12, padding: "10px 14px",
                boxShadow: "0 1px 1px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.4)",
                minWidth: 128,
              }}>
                <p style={{ fontSize: 10, fontFamily: "'JetBrains Mono',monospace", color: "#6C7D96", margin: "0 0 4px" }}>Status</p>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span className="blink-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#34D399", flexShrink: 0 }} />
                  <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 12, color: "#F0F0F8", margin: 0 }}>Open to work</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Featured project carousel */}
        <FeaturedProjectCard />
      </div>

      {/* Responsive: hide photo col on small screens */}
      <style>{`
        @media (max-width: 900px) {
          .hero-photo-col { display: none !important; }
        }
      `}</style>
    </section>
  );
}
