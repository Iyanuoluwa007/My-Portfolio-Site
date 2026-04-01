"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

// Language dot colour map
const langColor = {
  Python: "#3572A5",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  C: "#555555",
  Jupyter: "#DA5B0B",
  default: "#6366F1",
};

function LangDot({ lang }) {
  const color = langColor[lang] || langColor.default;
  return (
    <span className="flex items-center gap-1.5 text-[11.5px] text-muted font-mono">
      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
      {lang}
    </span>
  );
}

export default function ProjectsClient({ repos }) {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? repos : repos.slice(0, 6);

  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div {...inView()} className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <p className="section-label mb-3">04 — All Projects</p>
            <h2 className="font-display text-[38px] md:text-[48px] font-bold text-ink tracking-tight leading-tight">
              Open Source Work
            </h2>
            <p className="text-[16px] text-muted-light mt-3 max-w-xl leading-relaxed">
              Exploring the boundaries of robotics, AI, and intelligent systems.
            </p>
          </div>
          <a
            href="https://github.com/Iyanuoluwa007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13px] text-muted-light hover:text-ink border border-white/[0.08] hover:border-white/[0.15] px-4 py-2.5 rounded-xl transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            All repos
          </a>
        </motion.div>

        {repos.length === 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-40 rounded-2xl border border-white/[0.06] bg-surface animate-pulse" />
            ))}
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {visible.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...inView(i * 0.06)}
                  className="project-card p-6 flex flex-col gap-4 group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#6366F1">
                        <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
                      </svg>
                    </div>
                    <svg
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-muted flex-shrink-0 mt-1"
                      width="14" height="14" viewBox="0 0 16 16" fill="none"
                      stroke="currentColor" strokeWidth="1.5"
                    >
                      <path d="M4 12L12 4M12 4H6M12 4v6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Name + description */}
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-[14.5px] text-ink mb-1.5 group-hover:text-accent-light transition-colors leading-snug">
                      {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
                    </h3>
                    <p className="text-[12.5px] text-muted leading-[1.6] line-clamp-3">
                      {repo.description || "No description available."}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
                    {repo.language ? <LangDot lang={repo.language} /> : <span />}
                    <span className="flex items-center gap-1 text-[11px] text-muted font-mono">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                      </svg>
                      {repo.stargazers_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {repos.length > 6 && (
              <motion.div {...inView(0.3)} className="flex justify-center mt-10">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-3 border border-white/[0.1] hover:border-white/[0.2] text-[13px] text-muted-light hover:text-ink rounded-xl transition-all"
                >
                  {showAll ? "Show less" : `Show ${repos.length - 6} more projects`}
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
