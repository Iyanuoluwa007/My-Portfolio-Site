"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href:"#about", label:"About" },
    { href:"#skills", label:"Skills" },
    { href:"#projects", label:"Projects" },
    { href:"#contact", label:"Contact" },
  ];

  const navStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
    background: scrolled ? "rgba(8,8,15,0.82)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
  };

  return (
    <header style={navStyle}>
      <nav style={{ maxWidth:1152, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 24px", height:64 }}>

        {/* Logo */}
        <Link href="#home" style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontWeight:600, fontSize:15, color:"#F0F0F8", textDecoration:"none", letterSpacing:"-0.01em", display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ fontSize:20, lineHeight:1 }}>🧑🏾‍💻</span>
          Iyanuoluwa Oke
        </Link>

        {/* Desktop nav links */}
        <div style={{ display:"flex", gap:2 }} className="nav-desktop">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{ padding:"8px 16px", fontSize:13.5, color:"#94A3B8", textDecoration:"none", borderRadius:8, transition:"color 0.2s, background 0.2s", fontFamily:"'DM Sans',system-ui,sans-serif" }}
              onMouseEnter={e => { e.currentTarget.style.color="#F0F0F8"; e.currentTarget.style.background="rgba(255,255,255,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.color="#94A3B8"; e.currentTarget.style.background="transparent"; }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop right */}
        <div style={{ display:"flex", alignItems:"center", gap:12 }} className="nav-desktop">
          <div style={{ display:"flex", alignItems:"center", gap:6, padding:"6px 13px", borderRadius:100, border:"1px solid rgba(255,255,255,0.09)", background:"rgba(255,255,255,0.03)", fontSize:11.5, fontFamily:"'JetBrains Mono',monospace", color:"#94A3B8" }}>
            <span className="blink-dot" style={{ width:5.5, height:5.5, borderRadius:"50%", background:"#34D399", flexShrink:0 }} />
            Available
          </div>
          <a href="https://drive.google.com/file/d/1QwpycQIutZnM9STD5lv9PMcv4v3nZxjS/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            style={{ padding:"8px 18px", fontSize:13, fontWeight:500, background:"#6366F1", color:"#fff", borderRadius:10, textDecoration:"none", boxShadow:"0 0 16px rgba(99,102,241,0.2)", transition:"background 0.2s", fontFamily:"'DM Sans',sans-serif" }}
            onMouseEnter={e => e.currentTarget.style.background="#818CF8"}
            onMouseLeave={e => e.currentTarget.style.background="#6366F1"}
          >
            Download CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ display:"none", flexDirection:"column", gap:5, padding:8, background:"transparent", border:"none", cursor:"pointer" }}
          className="nav-mobile" aria-label="Menu"
        >
          <span style={{ display:"block", width:20, height:1.5, background:"#F0F0F8", borderRadius:1, transition:"all 0.2s", transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
          <span style={{ display:"block", width:20, height:1.5, background:"#F0F0F8", borderRadius:1, transition:"all 0.2s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display:"block", width:20, height:1.5, background:"#F0F0F8", borderRadius:1, transition:"all 0.2s", transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", background:"rgba(8,8,15,0.97)", backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)", padding:"12px 24px 20px" }} className="nav-mobile-menu">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ display:"block", padding:"13px 0", fontSize:14, color:"#94A3B8", textDecoration:"none", borderBottom:"1px solid rgba(255,255,255,0.05)", fontFamily:"'DM Sans',sans-serif" }}
            >
              {label}
            </Link>
          ))}
          <a href="https://drive.google.com/file/d/1QwpycQIutZnM9STD5lv9PMcv4v3nZxjS/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            style={{ display:"block", marginTop:14, padding:"12px 0", textAlign:"center", background:"#6366F1", color:"#fff", fontSize:13.5, fontWeight:500, borderRadius:12, textDecoration:"none", fontFamily:"'DM Sans',sans-serif" }}
          >
            Download CV
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
