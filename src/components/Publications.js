"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { publications } from "@/data/publications";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

function apaCitation(pub) {
  const version = pub.version ? ` (Version ${pub.version})` : "";
  return `${pub.authors} (${pub.year}). ${pub.title}${version}. ${pub.publisher}. ${pub.doiUrl}`;
}

function bibtexCitation(pub) {
  const recordId = pub.doi.split("zenodo.")[1];
  const versionLine = pub.version ? `  version      = {${pub.version}},\n` : "";
  return `@misc{oke_${pub.year}_${recordId},
  author       = {${pub.bibtexAuthor}},
  title        = {${pub.title}},
  year         = {${pub.year}},
  publisher    = {${pub.publisher}},
${versionLine}  doi          = {${pub.doi}},
  url          = {${pub.doiUrl}}
}`;
}

const linkBtnStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 5,
  fontSize: 12,
  fontWeight: 500,
  fontFamily: "'DM Sans',sans-serif",
  color: "#94A3B8",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: 8,
  padding: "6px 12px",
  cursor: "pointer",
  textDecoration: "none",
  transition: "all 0.2s",
  whiteSpace: "nowrap",
};

const hoverOn = (e) => {
  e.currentTarget.style.color = "#C7D2FE";
  e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
  e.currentTarget.style.background = "rgba(99,102,241,0.08)";
};
const hoverOff = (e) => {
  e.currentTarget.style.color = "#94A3B8";
  e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
};

const ExternalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12L12 4M12 4H6M12 4v6" />
  </svg>
);

const CopyIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
    <path d="M10.5 5.5v-2A1.5 1.5 0 009 2H4a1.5 1.5 0 00-1.5 1.5V9A1.5 1.5 0 004 10.5h1.5" />
  </svg>
);

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#34D399" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8.5l3.5 3.5L13 4.5" />
  </svg>
);

function PublicationCard({ pub, index }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(null);

  const copy = async (kind, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(kind);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context); silently ignore.
    }
  };

  const abstractId = `abstract-${pub.id}`;

  return (
    <motion.article
      {...inView(index * 0.07)}
      style={{
        background: "#0F0F1B",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 16,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.2s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.2)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {/* Type and year badges */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <span className="tag" style={{ fontSize: 10.5 }}>{pub.type}</span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#6C7D96" }}>{pub.year}</span>
        {pub.version && (
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#6C7D96" }}>v{pub.version}</span>
        )}
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 16, color: "#F0F0F8", margin: 0, lineHeight: 1.4 }}>
        {pub.title}
      </h3>

      {/* Authors and publisher */}
      <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, color: "#676AFB", margin: 0 }}>
        {pub.authors} · {pub.publisher}
      </p>

      {/* Abstract toggle */}
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={abstractId}
          style={{ ...linkBtnStyle, border: "none", background: "transparent", padding: 0, color: "#818CF8", fontSize: 12.5 }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#A5B4FC")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#818CF8")}
        >
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
            style={{ transition: "transform 0.25s", transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}>
            <path d="M6 3l5 5-5 5" />
          </svg>
          {expanded ? "Hide Abstract" : "Read Abstract"}
        </button>
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={abstractId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{ overflow: "hidden" }}
            >
              {pub.abstract.split("\n\n").map((para, i) => (
                <p key={i} style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.7, margin: "12px 0 0", fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
                  {para}
                </p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Keywords */}
      {pub.keywords.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {pub.keywords.map((k) => (
            <span key={k} className="skill-chip" style={{ padding: "3px 10px", fontSize: 11 }}>{k}</span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: "auto" }}>
        <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer"
          style={{ ...linkBtnStyle, fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: "#818CF8", borderColor: "rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.07)" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#C7D2FE"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "#818CF8"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)"; }}
          aria-label={`DOI ${pub.doi} (opens in new tab)`}
        >
          DOI {pub.doi}
          <ExternalIcon />
        </a>
        <a href={pub.zenodoUrl} target="_blank" rel="noopener noreferrer"
          style={linkBtnStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}
          aria-label={`View ${pub.title} on Zenodo (opens in new tab)`}
        >
          Zenodo
          <ExternalIcon />
        </a>
        <button onClick={() => copy("cite", apaCitation(pub))}
          style={linkBtnStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}
          aria-label="Copy citation to clipboard"
        >
          {copied === "cite" ? <CheckIcon /> : <CopyIcon />}
          {copied === "cite" ? "Copied" : "Cite"}
        </button>
        <button onClick={() => copy("bibtex", bibtexCitation(pub))}
          style={linkBtnStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}
          aria-label="Copy BibTeX citation to clipboard"
        >
          {copied === "bibtex" ? <CheckIcon /> : <CopyIcon />}
          {copied === "bibtex" ? "Copied" : "BibTeX"}
        </button>
      </div>
    </motion.article>
  );
}

export default function Publications() {
  return (
    <section id="publications" style={{ position: "relative", padding: "96px 0", overflow: "hidden" }}>
      <div className="orb" style={{ width: 400, height: 400, right: -100, top: "20%", background: "radial-gradient(circle, rgba(99,102,241,0.06), transparent 70%)" }} />
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div {...inView()} style={{ marginBottom: 48 }}>
          <span className="section-label" style={{ marginBottom: 12 }}>04 — Publications</span>
          <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: "#F0F0F8", letterSpacing: "-0.02em", margin: 0 }}>
            Research & Publications
          </h2>
          <p style={{ fontSize: 15, color: "#6C7D96", marginTop: 8, maxWidth: 520, lineHeight: 1.7, fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
            Peer-archived research in AI governance, robotic perception, and embedded robotic systems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="pub-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }}>
          {publications.map((pub, i) => (
            <PublicationCard key={pub.id} pub={pub} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) { .pub-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
