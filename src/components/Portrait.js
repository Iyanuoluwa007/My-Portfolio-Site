"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SRC = "/portrait.jpg";
const ALT = "Portrait of Iyanuoluwa Enoch Oke";

// Avatar in the contact section that expands into a larger view on click,
// so anyone assessing the work can see the face clearly.
export default function Portrait() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    // Captured now so the cleanup does not read a possibly-changed ref.
    const trigger = triggerRef.current;

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    // Stop the page scrolling behind the overlay.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26 }}>
        <button
          ref={triggerRef}
          onClick={() => setOpen(true)}
          aria-label="View a larger portrait of Iyanuoluwa Enoch Oke"
          style={{
            width: 92,
            height: 92,
            padding: 0,
            borderRadius: "50%",
            border: "2px solid rgba(99,102,241,0.4)",
            background: "transparent",
            cursor: "zoom-in",
            overflow: "hidden",
            flexShrink: 0,
            boxShadow: "0 0 26px rgba(99,102,241,0.22)",
            transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.borderColor = "rgba(99,102,241,0.7)";
            e.currentTarget.style.boxShadow = "0 0 34px rgba(99,102,241,0.38)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
            e.currentTarget.style.boxShadow = "0 0 26px rgba(99,102,241,0.22)";
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SRC}
            alt={ALT}
            width={92}
            height={92}
            loading="lazy"
            decoding="async"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 42%", display: "block" }}
          />
        </button>

        <div style={{ minWidth: 0 }}>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 16, color: "#F0F0F8", margin: 0 }}>
            Iyanuoluwa Enoch Oke
          </p>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, color: "#676AFB", margin: "4px 0 0" }}>
            Robotics &amp; AI Engineer
          </p>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Portrait of Iyanuoluwa Enoch Oke"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "rgba(8,8,15,0.86)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              cursor: "zoom-out",
            }}
          >
            <motion.figure
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.26, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{ position: "relative", margin: 0, cursor: "default" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SRC}
                alt={ALT}
                style={{
                  width: "min(340px, 74vw)",
                  maxHeight: "76vh",
                  objectFit: "contain",
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 44px rgba(99,102,241,0.18)",
                  display: "block",
                }}
              />
              <figcaption style={{ textAlign: "center", marginTop: 14 }}>
                <span style={{ display: "block", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15, color: "#F0F0F8" }}>
                  Iyanuoluwa Enoch Oke
                </span>
                <span style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#6C7D96", marginTop: 4 }}>
                  Robotics &amp; AI Engineer
                </span>
              </figcaption>

              <button
                ref={closeRef}
                onClick={() => setOpen(false)}
                aria-label="Close portrait"
                style={{
                  position: "absolute",
                  top: -14,
                  right: -14,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(15,15,27,0.95)",
                  color: "#F0F0F8",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(99,102,241,0.25)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.6)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(15,15,27,0.95)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
