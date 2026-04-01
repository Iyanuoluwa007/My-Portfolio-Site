"use client";

import { motion } from "framer-motion";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const links = [
  {
    label: "Email",
    value: "oke.iyanuoluwa12@gmail.com",
    href: "mailto:oke.iyanuoluwa12@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "iyanuoluwa-enoch-oke",
    href: "https://www.linkedin.com/in/iyanuoluwa-enoch-oke/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "Iyanuoluwa007",
    href: "https://github.com/Iyanuoluwa007",
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background accent */}
      <div className="orb w-[600px] h-[400px] left-1/2 -translate-x-1/2 top-0 opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #6366F1, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Top border */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent mb-20" />

        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">

          {/* Left: CTA */}
          <div>
            <motion.p {...inView()} className="section-label mb-4">05 — Contact</motion.p>
            <motion.h2 {...inView(0.1)} className="font-display text-[38px] md:text-[56px] font-bold text-ink tracking-[-0.02em] leading-[1.05] mb-6">
              Let&apos;s build<br />
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #6366F1 0%, #A5B4FC 100%)" }}>
                something great.
              </span>
            </motion.h2>
            <motion.p {...inView(0.2)} className="text-[16px] text-muted-light leading-[1.8] max-w-md mb-8">
              Open to full-time roles, research collaborations, and freelance
              projects in robotics, AI systems engineering, and computer vision.
              Based in the UK, available globally.
            </motion.p>
            <motion.a
              {...inView(0.3)}
              href="mailto:oke.iyanuoluwa12@gmail.com"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-accent hover:bg-accent-light text-white font-medium text-[14px] rounded-xl shadow-glow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
              </svg>
              Send me a message
            </motion.a>
          </div>

          {/* Right: Contact card */}
          <motion.div {...inView(0.2)} className="p-7 rounded-2xl border border-white/[0.08] bg-surface shadow-card">
            <p className="text-[12px] font-mono text-muted tracking-widest uppercase mb-6">Quick links</p>

            <div className="flex flex-col gap-4">
              {links.map(({ label, value, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] hover:border-white/[0.15] bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
                >
                  <span className="text-muted group-hover:text-accent-light transition-colors">{icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-mono text-muted uppercase tracking-wider">{label}</p>
                    <p className="text-[13.5px] text-muted-light group-hover:text-ink transition-colors truncate mt-0.5">
                      {value}
                    </p>
                  </div>
                  <svg className="opacity-0 group-hover:opacity-100 transition-opacity text-muted flex-shrink-0"
                    width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 12L12 4M12 4H6M12 4v6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>

            {/* CV download */}
            <div className="mt-5 pt-5 border-t border-white/[0.07]">
              <a
                href="https://drive.google.com/file/d/1QwpycQIutZnM9STD5lv9PMcv4v3nZxjS/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-accent/30 bg-accent/[0.07] hover:bg-accent/[0.12] transition-all group"
              >
                <div>
                  <p className="text-[11px] font-mono text-accent/80 uppercase tracking-wider">Resume</p>
                  <p className="text-[13.5px] text-ink mt-0.5">Download CV</p>
                </div>
                <svg className="text-accent group-hover:translate-y-0.5 transition-transform"
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div {...inView(0.4)} className="mt-20 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-display font-semibold text-[14px] text-ink">
            <span className="text-accent">I</span>yanuoluwa Oke
          </p>
          <p className="text-[12px] font-mono text-muted">
            © {new Date().getFullYear()} — Independent Robotics &amp; AI Systems Engineer
          </p>
          <div className="flex items-center gap-1.5 text-[11.5px] font-mono text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 blink-dot" />
            Based in Manchester, UK
          </div>
        </motion.div>
      </div>
    </section>
  );
}
