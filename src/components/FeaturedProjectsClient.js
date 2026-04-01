"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const langColor = {
  Python: "#3572A5",
  JavaScript: "#F0C040",
  TypeScript: "#3178C6",
  C: "#6E6E6E",
  "Jupyter Notebook": "#DA5B0B",
  default: "#6366F1",
};

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}

function formatName(name) {
  return name.replace(/-/g, " ").replace(/_/g, " ");
}

function timeAgo(iso) {
  const diff = Date.now() - new Date(iso);
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

export default function FeaturedProjectsClient({ repos }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="featured"
      style={{
        position: "relative",
        padding: "96px 0",
        overflow: "hidden",
        backgroundColor: "#08080F",
      }}
    >
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          right: -60,
          bottom: 0,
          background: "radial-gradient(circle, rgba(99,102,241,0.07), transparent 70%)",
        }}
      />

      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div {...inView()} style={{ marginBottom: 40, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <span className="section-label" style={{ marginBottom: 12 }}>03 — Latest Projects</span>
            <h2 style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              color: "#F0F0F8",
              letterSpacing: "-0.02em",
              margin: 0,
            }}>
              Recently Shipped
            </h2>
            <p style={{ fontSize: 15, color: "#64748B", marginTop: 8, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              Top 10 repositories, sorted by latest activity — live from GitHub.
            </p>
          </div>

          {/* Live badge */}
          <div style={{
            display: "flex", alignItems: "center", gap: 7,
            padding: "7px 14px", borderRadius: 100,
            border: "1px solid rgba(52,211,153,0.2)",
            background: "rgba(52,211,153,0.06)",
            fontSize: 11.5, fontFamily: "'JetBrains Mono', monospace", color: "#34D399",
          }}>
            <span className="blink-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#34D399", flexShrink: 0 }} />
            Live from GitHub
          </div>
        </motion.div>

        {/* Scrollable container */}
        <motion.div {...inView(0.1)}>
          <div style={{
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#0F0F1B",
            overflow: "hidden",
          }}>

            {/* Table header */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "44px 1fr 100px 90px 48px 40px",
              padding: "11px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
              gap: 12,
            }}
              className="repo-header"
            >
              {["#", "Repository", "Language", "Updated", "★", ""].map((h) => (
                <span key={h} style={{
                  fontSize: 10.5, fontFamily: "'JetBrains Mono', monospace",
                  color: "#64748B", letterSpacing: "0.1em", textTransform: "uppercase",
                }}>
                  {h}
                </span>
              ))}
            </div>

            {/* Scrollable rows */}
            <div style={{
              maxHeight: 540,
              overflowY: "auto",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(99,102,241,0.35) transparent",
            }}>
              {repos.length === 0 ? (
                // Skeleton
                [...Array(5)].map((_, i) => (
                  <div key={i} style={{
                    height: 72,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                    display: "flex", alignItems: "center", padding: "0 20px", gap: 16,
                  }}>
                    <div style={{ width: 32, height: 10, borderRadius: 4, background: "rgba(255,255,255,0.06)" }} />
                    <div style={{ flex: 1, height: 10, borderRadius: 4, background: "rgba(255,255,255,0.06)" }} />
                    <div style={{ width: 70, height: 10, borderRadius: 4, background: "rgba(255,255,255,0.06)" }} />
                  </div>
                ))
              ) : (
                repos.map((repo, i) => (
                  <a
                    key={repo.id}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHovered(repo.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "44px 1fr 100px 90px 48px 40px",
                      padding: "0 20px",
                      gap: 12,
                      alignItems: "center",
                      minHeight: 68,
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      textDecoration: "none",
                      background: hovered === repo.id ? "rgba(99,102,241,0.06)" : (i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)"),
                      transition: "background 0.15s",
                      cursor: "pointer",
                    }}
                    className="repo-row"
                  >
                    {/* Index */}
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      color: hovered === repo.id ? "#6366F1" : "#475569",
                      fontWeight: 500,
                      transition: "color 0.15s",
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Name + description */}
                    <div style={{ minWidth: 0 }}>
                      <p style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        color: hovered === repo.id ? "#F0F0F8" : "#CBD5E1",
                        margin: "0 0 3px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        transition: "color 0.15s",
                      }}>
                        {formatName(repo.name)}
                      </p>
                      {repo.description && (
                        <p style={{
                          fontSize: 12,
                          color: "#475569",
                          margin: 0,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          fontFamily: "'DM Sans', sans-serif",
                          maxWidth: "100%",
                        }}>
                          {repo.description}
                        </p>
                      )}
                    </div>

                    {/* Language */}
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      {repo.language ? (
                        <>
                          <span style={{
                            width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                            background: langColor[repo.language] || langColor.default,
                          }} />
                          <span style={{
                            fontSize: 11.5, fontFamily: "'JetBrains Mono', monospace",
                            color: "#64748B", whiteSpace: "nowrap",
                            overflow: "hidden", textOverflow: "ellipsis",
                          }}>
                            {repo.language}
                          </span>
                        </>
                      ) : (
                        <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "#334155" }}>—</span>
                      )}
                    </div>

                    {/* Updated */}
                    <div>
                      <p style={{ fontSize: 11.5, fontFamily: "'JetBrains Mono', monospace", color: "#64748B", margin: 0 }}>
                        {timeAgo(repo.pushedAt)}
                      </p>
                      <p style={{ fontSize: 10.5, fontFamily: "'JetBrains Mono', monospace", color: "#334155", margin: "2px 0 0" }}>
                        {formatDate(repo.pushedAt)}
                      </p>
                    </div>

                    {/* Stars */}
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="#64748B">
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                      </svg>
                      <span style={{ fontSize: 11.5, fontFamily: "'JetBrains Mono', monospace", color: "#64748B" }}>
                        {repo.stars}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <svg
                        width="13" height="13"
                        viewBox="0 0 16 16" fill="none"
                        stroke={hovered === repo.id ? "#6366F1" : "#334155"}
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        style={{ transition: "stroke 0.15s, transform 0.15s", transform: hovered === repo.id ? "translate(1px, -1px)" : "none" }}
                      >
                        <path d="M4 12L12 4M12 4H6M12 4v6"/>
                      </svg>
                    </div>
                  </a>
                ))
              )}
            </div>

            {/* Footer bar */}
            <div style={{
              padding: "11px 20px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}>
              <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "#334155" }}>
                {repos.length} repos shown · sorted by latest push
              </span>
              <a
                href="https://github.com/Iyanuoluwa007?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  fontSize: 11.5, fontFamily: "'JetBrains Mono', monospace",
                  color: "#6366F1", textDecoration: "none",
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                View all on GitHub
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12L12 4M12 4H6M12 4v6"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .repo-header { display: none !important; }
          .repo-row {
            grid-template-columns: 32px 1fr 40px !important;
          }
          .repo-row > *:nth-child(3),
          .repo-row > *:nth-child(4),
          .repo-row > *:nth-child(5) { display: none !important; }
        }
      `}</style>
    </section>
  );
}
