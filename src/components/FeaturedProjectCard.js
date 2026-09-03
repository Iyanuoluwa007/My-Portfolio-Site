"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

// Hero carousel card cycling through the curated projects. The visual panel
// is generated (gradient + dot grid + monogram) so no image assets are
// needed and nothing blocks first paint.
const initialsOf = (title) =>
  title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const arrowBtnStyle = {
  width: 38,
  height: 38,
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.04)",
  color: "#94A3B8",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.2s",
  flexShrink: 0,
};

export default function FeaturedProjectCard() {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const step = (dir) => setIndex((i) => (i + dir + projects.length) % projects.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="glass"
      style={{
        borderRadius: 20,
        padding: 20,
        marginTop: 56,
        transition: "border-color 0.25s, box-shadow 0.25s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.15)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <p style={{ fontSize: 10.5, fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6C7D96", margin: "0 0 16px" }}>
        Featured Project
      </p>

      <div className="feat-grid" style={{ display: "grid", gridTemplateColumns: "200px 1fr auto", gap: 24, alignItems: "center" }}>

        {/* Generated visual */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={project.title + "-visual"}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="dot-grid-bg"
            aria-hidden="true"
            style={{
              height: 132,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "linear-gradient(135deg, rgba(99,102,241,0.28), rgba(129,140,248,0.10) 55%, rgba(8,8,15,0.4))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 42, letterSpacing: "-0.02em", color: "rgba(240,240,248,0.85)", textShadow: "0 0 32px rgba(99,102,241,0.6)" }}>
              {initialsOf(project.title)}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Info */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={project.title + "-info"}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ minWidth: 0 }}
          >
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 18, color: "#F0F0F8", margin: "0 0 3px" }}>
              {project.title}
            </h2>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#676AFB", margin: "0 0 10px" }}>
              {project.subtitle}
            </p>
            <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.65, margin: "0 0 12px", fontFamily: "'DM Sans',sans-serif", fontWeight: 300, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
              {project.description}
            </p>
            <a
              href={project.links[0].href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "#818CF8", textDecoration: "none", fontWeight: 500, fontFamily: "'DM Sans',sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#A5B4FC")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#818CF8")}
            >
              View Project
              <svg className="cta-arrow" width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 8h11M9 3.5L13.5 8 9 12.5" /></svg>
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Carousel controls */}
        <div style={{ display: "flex", gap: 8, alignSelf: "end" }}>
          <button
            onClick={() => step(-1)}
            aria-label="Previous project"
            className="btn-press"
            style={arrowBtnStyle}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#F0F0F8"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)"; e.currentTarget.style.background = "rgba(99,102,241,0.12)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#94A3B8"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5" /></svg>
          </button>
          <button
            onClick={() => step(1)}
            aria-label="Next project"
            className="btn-press"
            style={arrowBtnStyle}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#F0F0F8"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)"; e.currentTarget.style.background = "rgba(99,102,241,0.12)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#94A3B8"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5" /></svg>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .feat-grid { grid-template-columns: 1fr !important; }
          .feat-grid > div:last-child { align-self: start !important; }
        }
      `}</style>
    </motion.div>
  );
}
