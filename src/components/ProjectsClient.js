"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const langColor = {
  Python:"#3572A5", JavaScript:"#F7DF1E", TypeScript:"#3178C6",
  C:"#555555", "Jupyter Notebook":"#DA5B0B", default:"#6366F1",
};

export default function ProjectsClient({ repos }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? repos : repos.slice(0, 6);

  return (
    <section id="projects" style={{ position:"relative", padding:"96px 0", backgroundColor:"#08080F" }}>
      <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 24px", position:"relative", zIndex:1 }}>

        <motion.div {...inView()} style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, flexWrap:"wrap", gap:16 }}>
          <div>
            <span className="section-label" style={{ marginBottom:12 }}>03 — Projects</span>
            <h2 style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontSize:"clamp(28px,4vw,44px)", fontWeight:700, color:"#F0F0F8", letterSpacing:"-0.02em", margin:0 }}>
              Open Source Work
            </h2>
          </div>
          <a href="https://github.com/Iyanuoluwa007" target="_blank" rel="noopener noreferrer"
            style={{ display:"flex", alignItems:"center", gap:7, fontSize:13, color:"#94A3B8", textDecoration:"none", border:"1px solid rgba(255,255,255,0.09)", padding:"9px 16px", borderRadius:12, transition:"all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.color="#F0F0F8"; e.currentTarget.style.borderColor="rgba(255,255,255,0.18)"; }}
            onMouseLeave={e => { e.currentTarget.style.color="#94A3B8"; e.currentTarget.style.borderColor="rgba(255,255,255,0.09)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            View all repos
          </a>
        </motion.div>

        {repos.length === 0 ? (
          <div className="proj-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }}>
            {[...Array(6)].map((_,i) => (
              <div key={i} style={{ height:160, borderRadius:16, border:"1px solid rgba(255,255,255,0.06)", background:"#0F0F1B" }} />
            ))}
          </div>
        ) : (
          <>
            <div className="proj-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }}>
              {visible.map((repo, i) => (
                <motion.a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer"
                  {...inView(i * 0.05)}
                  className="project-card"
                  style={{ padding:22 }}
                >
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:10 }}>
                    <div style={{ width:36, height:36, borderRadius:10, border:"1px solid rgba(255,255,255,0.09)", background:"rgba(255,255,255,0.03)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="#6366F1"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>
                    </div>
                    <svg style={{ color:"#64748B", flexShrink:0, marginTop:4, opacity:0 }} className="proj-arrow" width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M12 4H6M12 4v6"/></svg>
                  </div>
                  <div style={{ flex:1, marginTop:8 }}>
                    <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, fontSize:14, color:"#F0F0F8", margin:"0 0 6px", lineHeight:1.3 }}>
                      {repo.name.replace(/-/g," ").replace(/_/g," ")}
                    </h3>
                    <p style={{ fontSize:12.5, color:"#64748B", lineHeight:1.6, margin:0, overflow:"hidden", display:"-webkit-box", WebkitLineClamp:3, WebkitBoxOrient:"vertical", fontFamily:"'DM Sans',sans-serif" }}>
                      {repo.description || "No description available."}
                    </p>
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:12, borderTop:"1px solid rgba(255,255,255,0.05)" }}>
                    {repo.language ? (
                      <span style={{ display:"flex", alignItems:"center", gap:6, fontSize:11.5, color:"#64748B", fontFamily:"'JetBrains Mono',monospace" }}>
                        <span style={{ width:8, height:8, borderRadius:"50%", background:langColor[repo.language]||langColor.default, flexShrink:0 }} />
                        {repo.language}
                      </span>
                    ) : <span />}
                    <span style={{ display:"flex", alignItems:"center", gap:4, fontSize:11, color:"#64748B", fontFamily:"'JetBrains Mono',monospace" }}>
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>
                      {repo.stargazers_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {repos.length > 6 && (
              <motion.div {...inView(0.3)} style={{ display:"flex", justifyContent:"center", marginTop:32 }}>
                <button onClick={() => setShowAll(!showAll)}
                  style={{ padding:"11px 24px", border:"1px solid rgba(255,255,255,0.1)", background:"transparent", color:"#94A3B8", fontSize:13, borderRadius:12, cursor:"pointer", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.2)"; e.currentTarget.style.color="#F0F0F8"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"; e.currentTarget.style.color="#94A3B8"; }}
                >
                  {showAll ? "Show less" : `Show ${repos.length - 6} more`}
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
      <style>{`
        @media (max-width: 900px) { .proj-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .proj-grid { grid-template-columns: 1fr !important; } }
        .project-card:hover .proj-arrow { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
