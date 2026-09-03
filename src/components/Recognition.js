"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { highlights, articles } from "@/data/recognition";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const cardStyle = {
  background: "#0F0F1B",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: 16,
  padding: 24,
  display: "flex",
  flexDirection: "column",
  gap: 14,
  transition: "border-color 0.25s, box-shadow 0.25s, transform 0.2s",
};

const cardOn = (e) => {
  e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)";
  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.2)";
  e.currentTarget.style.transform = "translateY(-3px)";
};
const cardOff = (e) => {
  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
  e.currentTarget.style.boxShadow = "none";
  e.currentTarget.style.transform = "translateY(0)";
};

const subHeading = {
  fontFamily: "'JetBrains Mono',monospace",
  fontSize: 11,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "#64748B",
  margin: "0 0 18px",
  fontWeight: 500,
};

const ExternalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12L12 4M12 4H6M12 4v6" />
  </svg>
);

// Matches the "Read Abstract" disclosure used in the Publications section.
function DisclosureButton({ expanded, onClick, controls, label }) {
  return (
    <button
      onClick={onClick}
      aria-expanded={expanded}
      aria-controls={controls}
      style={{ display: "inline-flex", alignItems: "center", gap: 5, border: "none", background: "transparent", padding: "6px 0", color: "#818CF8", fontSize: 12.5, fontWeight: 500, fontFamily: "'DM Sans',sans-serif", cursor: "pointer", transition: "color 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#A5B4FC")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#818CF8")}
    >
      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
        style={{ transition: "transform 0.25s", transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}>
        <path d="M6 3l5 5-5 5" />
      </svg>
      {label}
    </button>
  );
}

function LinkRow({ links }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 14, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: "auto" }}>
      {links.map(({ label, href }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12.5, color: "#6366F1", textDecoration: "none", fontFamily: "'DM Sans',sans-serif", fontWeight: 500, transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#A5B4FC")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6366F1")}
        >
          <ExternalIcon />
          {label}
        </a>
      ))}
    </div>
  );
}

// Renders an evidence screenshot, or nothing at all if the file is missing.
function EvidenceImage({ src, alt, caption }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;

  return (
    <figure style={{ margin: 0 }}>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#08080F" }}
        aria-label={`View full size: ${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setOk(false)}
          // Portrait scans (the A4 certificate) are bounded so they cannot
          // dominate the card; landscape screenshots are unaffected.
          style={{ width: "100%", maxHeight: 620, objectFit: "contain", display: "block", transition: "transform 0.35s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </a>
      {caption && (
        <figcaption style={{ fontSize: 11, color: "#64748B", fontFamily: "'JetBrains Mono',monospace", marginTop: 7 }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function HighlightCard({ item, index }) {
  const [expanded, setExpanded] = useState(false);
  const evidenceId = `evidence-${item.id}`;

  return (
    <motion.article
      {...inView(index * 0.08)}
      style={cardStyle}
      onMouseEnter={cardOn}
      onMouseLeave={cardOff}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <span className="tag" style={{ fontSize: 10.5 }}>{item.kind}</span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#64748B" }}>{item.period}</span>
      </div>

      <div>
        <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 16, color: "#F0F0F8", margin: "0 0 4px", lineHeight: 1.4 }}>
          {item.title}
        </h4>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, color: "#6366F1", margin: 0 }}>
          {item.org}
        </p>
      </div>

      <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.7, margin: 0, fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
        {item.description}
      </p>

      {/* Stat row */}
      <div style={{ display: "flex", gap: 28, flexWrap: "wrap", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        {item.stats.map(({ value, label }) => (
          <div key={label}>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 700, color: "#F0F0F8", letterSpacing: "-0.02em", lineHeight: 1 }}>
              {value}
            </div>
            <div style={{ fontSize: 11, color: "#64748B", fontFamily: "'DM Sans',sans-serif", marginTop: 5 }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {item.tags.map((t) => (
          <span key={t} className="skill-chip" style={{ padding: "3px 10px", fontSize: 11 }}>{t}</span>
        ))}
      </div>

      {/* Evidence is collapsed by default so cards stay compact and uniform. */}
      {item.images?.length > 0 && (
        <div>
          <DisclosureButton
            expanded={expanded}
            onClick={() => setExpanded(!expanded)}
            controls={evidenceId}
            label={expanded ? "Hide evidence" : `View evidence (${item.images.length})`}
          />
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={evidenceId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                style={{ overflow: "hidden" }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 14 }}>
                  {item.images.map((img) => (
                    <EvidenceImage key={img.src} {...img} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <LinkRow links={item.links} />
    </motion.article>
  );
}

function ArticleCard({ item, index }) {
  const links = [{ label: "Read article", href: item.url }, ...(item.features ?? [])];

  return (
    <motion.article
      {...inView(index * 0.06)}
      style={{ ...cardStyle, gridColumn: item.featured ? "1 / -1" : "auto" }}
      onMouseEnter={cardOn}
      onMouseLeave={cardOff}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <span className="tag" style={{ fontSize: 10.5 }}>{item.outlet}</span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#64748B" }}>{item.date}</span>
        {item.featured && (
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: "#34D399" }}>
            ★ Editorially featured
          </span>
        )}
      </div>

      <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: item.featured ? 18 : 15.5, color: "#F0F0F8", margin: 0, lineHeight: 1.4 }}>
        {item.title}
      </h4>

      <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.7, margin: 0, fontFamily: "'DM Sans',sans-serif", fontWeight: 300, flex: 1 }}>
        {item.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {item.tags.map((t) => (
          <span key={t} className="skill-chip" style={{ padding: "3px 10px", fontSize: 11 }}>{t}</span>
        ))}
      </div>

      <LinkRow links={links} />
    </motion.article>
  );
}

export default function Recognition() {
  return (
    <section id="recognition" style={{ position: "relative", padding: "96px 0", overflow: "hidden" }}>
      <div className="orb" style={{ width: 420, height: 420, left: -120, top: "25%", background: "radial-gradient(circle, rgba(129,140,248,0.07), transparent 70%)" }} />
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div {...inView()} style={{ marginBottom: 48 }}>
          <span className="section-label" style={{ marginBottom: 12 }}>05 — Recognition</span>
          <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: "#F0F0F8", letterSpacing: "-0.02em", margin: 0 }}>
            Writing &amp; Recognition
          </h2>
          <p style={{ fontSize: 15, color: "#64748B", marginTop: 8, maxWidth: 560, lineHeight: 1.7, fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
            Open source contribution, academic peer review, and technical writing published by leading
            engineering platforms.
          </p>
        </motion.div>

        {/* Open source & peer review */}
        <motion.h3 {...inView(0.05)} style={subHeading}>
          Open Source &amp; Peer Review
        </motion.h3>
        <div className="rec-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start", marginBottom: 56 }}>
          {highlights.map((item, i) => (
            <HighlightCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Technical writing */}
        <motion.h3 {...inView(0.05)} style={subHeading}>
          Technical Writing
        </motion.h3>
        <div className="rec-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }}>
          {articles.map((item, i) => (
            <ArticleCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) { .rec-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
