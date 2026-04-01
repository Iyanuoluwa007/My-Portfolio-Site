"use client";
import { motion } from "framer-motion";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const contactLinks = [
  {
    label: "Email", value: "oke.iyanuoluwa12@gmail.com",
    href: "mailto:oke.iyanuoluwa12@gmail.com",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>,
  },
  {
    label: "LinkedIn", value: "iyanuoluwa-enoch-oke",
    href: "https://www.linkedin.com/in/iyanuoluwa-enoch-oke/",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: "GitHub", value: "Iyanuoluwa007",
    href: "https://github.com/Iyanuoluwa007",
    icon: <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>,
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ position:"relative", padding:"96px 0", overflow:"hidden", backgroundColor:"#08080F" }}>
      <div className="orb" style={{ width:600, height:400, left:"50%", transform:"translateX(-50%)", top:0, background:"radial-gradient(circle, rgba(99,102,241,0.06), transparent 70%)" }} />
      <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 24px", position:"relative", zIndex:1 }}>

        {/* Divider */}
        <div style={{ height:1, background:"linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)", marginBottom:72 }} />

        <div className="contact-grid" style={{ display:"grid", gridTemplateColumns:"1fr 400px", gap:64, alignItems:"center" }}>

          {/* Left: CTA */}
          <div>
            <motion.span {...inView()} className="section-label" style={{ marginBottom:14 }}>04 — Contact</motion.span>
            <motion.h2 {...inView(0.1)} style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontSize:"clamp(32px,5vw,56px)", fontWeight:700, color:"#F0F0F8", letterSpacing:"-0.025em", lineHeight:1.05, margin:"0 0 20px" }}>
              Let&apos;s build<br />
              <span style={{ backgroundImage:"linear-gradient(135deg, #6366F1, #A5B4FC)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                something great.
              </span>
            </motion.h2>
            <motion.p {...inView(0.2)} style={{ fontSize:16, color:"#94A3B8", lineHeight:1.8, maxWidth:400, marginBottom:28, fontFamily:"'DM Sans',sans-serif", fontWeight:300 }}>
              Open to full-time roles, research collaborations, and freelance
              projects in robotics, AI systems engineering, and computer vision.
              Based in the UK, available globally.
            </motion.p>
            <motion.a {...inView(0.3)}
              href="mailto:oke.iyanuoluwa12@gmail.com"
              style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"13px 26px", background:"#6366F1", color:"#fff", fontWeight:500, fontSize:14, borderRadius:14, textDecoration:"none", boxShadow:"0 0 20px rgba(99,102,241,0.25)", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif" }}
              onMouseEnter={e => { e.currentTarget.style.background="#818CF8"; e.currentTarget.style.transform="translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="#6366F1"; e.currentTarget.style.transform="translateY(0)"; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
              Send me a message
            </motion.a>
          </div>

          {/* Right: card */}
          <motion.div {...inView(0.2)} style={{ padding:28, borderRadius:20, border:"1px solid rgba(255,255,255,0.09)", background:"#0F0F1B", boxShadow:"0 1px 1px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)" }}>
            <p style={{ fontSize:11, fontFamily:"'JetBrains Mono',monospace", color:"#64748B", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:20 }}>Quick links</p>

            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {contactLinks.map(({ label, value, href, icon }) => (
                <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                  style={{ display:"flex", alignItems:"center", gap:14, padding:"13px 16px", borderRadius:12, border:"1px solid rgba(255,255,255,0.06)", background:"rgba(255,255,255,0.02)", textDecoration:"none", transition:"all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.14)"; e.currentTarget.style.background="rgba(255,255,255,0.05)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.06)"; e.currentTarget.style.background="rgba(255,255,255,0.02)"; }}
                >
                  <span style={{ color:"#64748B", flexShrink:0, display:"flex" }}>{icon}</span>
                  <div style={{ flex:1, minWidth:0 }}>
                    <p style={{ fontSize:10.5, fontFamily:"'JetBrains Mono',monospace", color:"#64748B", textTransform:"uppercase", letterSpacing:"0.1em", margin:0 }}>{label}</p>
                    <p style={{ fontSize:13, color:"#94A3B8", margin:"3px 0 0", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", fontFamily:"'DM Sans',sans-serif" }}>{value}</p>
                  </div>
                  <svg style={{ color:"#64748B", flexShrink:0, opacity:0.6 }} width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M12 4H6M12 4v6"/></svg>
                </a>
              ))}
            </div>

            {/* CV */}
            <div style={{ marginTop:16, paddingTop:16, borderTop:"1px solid rgba(255,255,255,0.07)" }}>
              <a href="https://drive.google.com/file/d/1QwpycQIutZnM9STD5lv9PMcv4v3nZxjS/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"13px 16px", borderRadius:12, border:"1px solid rgba(99,102,241,0.3)", background:"rgba(99,102,241,0.07)", textDecoration:"none", transition:"all 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background="rgba(99,102,241,0.13)"}
                onMouseLeave={e => e.currentTarget.style.background="rgba(99,102,241,0.07)"}
              >
                <div>
                  <p style={{ fontSize:10.5, fontFamily:"'JetBrains Mono',monospace", color:"rgba(99,102,241,0.8)", textTransform:"uppercase", letterSpacing:"0.1em", margin:0 }}>Resume</p>
                  <p style={{ fontSize:13.5, color:"#F0F0F8", margin:"3px 0 0", fontFamily:"'DM Sans',sans-serif" }}>Download CV</p>
                </div>
                <svg style={{ color:"#6366F1" }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div {...inView(0.4)} style={{ marginTop:64, paddingTop:28, borderTop:"1px solid rgba(255,255,255,0.07)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:14 }}>
          <p style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, fontSize:14, color:"#F0F0F8", margin:0 }}>
            Iyanuoluwa Oke
          </p>
          <p style={{ fontSize:12, fontFamily:"'JetBrains Mono',monospace", color:"#64748B", margin:0 }}>
            © {new Date().getFullYear()} — Independent Robotics &amp; AI Systems Engineer
          </p>
          <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:11.5, fontFamily:"'JetBrains Mono',monospace", color:"#64748B" }}>
            <span className="blink-dot" style={{ width:6, height:6, borderRadius:"50%", background:"#34D399", flexShrink:0 }} />
            Manchester, UK
          </div>
        </motion.div>
      </div>

      <style>{`@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
