"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08080F]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-[64px]">
        {/* Logo */}
        <Link
          href="#home"
          className="font-display font-semibold text-[15px] text-ink tracking-tight hover:text-accent-light transition-colors"
        >
          <span className="text-accent">I</span>yanuoluwa Oke
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 text-[13.5px] text-muted-light hover:text-ink transition-colors rounded-md hover:bg-white/[0.04] font-sans"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-[11.5px] font-mono text-muted-light">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 blink-dot" />
            Available for work
          </div>
          <a
            href="https://drive.google.com/file/d/1QwpycQIutZnM9STD5lv9PMcv4v3nZxjS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-[13px] font-medium bg-accent hover:bg-accent-light transition-colors text-white rounded-lg shadow-glow-sm"
          >
            Download CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-ink transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-ink transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-ink transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#08080F]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-[14px] text-muted-light hover:text-ink transition-colors border-b border-white/[0.04] last:border-0"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1QwpycQIutZnM9STD5lv9PMcv4v3nZxjS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 px-4 py-2.5 text-[13px] font-medium bg-accent text-white rounded-lg text-center"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
