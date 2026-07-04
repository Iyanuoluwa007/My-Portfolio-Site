"use client";
import { useEffect, useRef } from "react";
import { getThemeRgb } from "@/lib/theme";

const SIZE = 520;
const IDLE_MS = 1800;

// Soft accent glow that trails the pointer with spring easing. It lives in
// the background layer (behind all content), never captures pointer events,
// and animates only transform/opacity so it stays on the GPU compositor.
export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMq.matches) {
      el.style.display = "none";
      return undefined;
    }

    const a = getThemeRgb("--accent", "#6366F1");
    const b = getThemeRgb("--accent-soft", "#818CF8");
    el.style.background = `radial-gradient(circle, rgba(${a.r},${a.g},${a.b},0.15) 0%, rgba(${b.r},${b.g},${b.b},0.05) 45%, transparent 70%)`;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let x = targetX;
    let y = targetY;
    let opacity = 0;
    let lastMove = 0;
    let raf = 0;

    const loop = () => {
      const now = performance.now();
      const dist = Math.hypot(targetX - x, targetY - y);

      // Brighten slightly with movement, fade out gently when idle.
      let targetOpacity = 0;
      if (now - lastMove < IDLE_MS) {
        targetOpacity = Math.min(0.9, 0.5 + dist * 0.002);
      }

      x += (targetX - x) * 0.09;
      y += (targetY - y) * 0.09;
      opacity += (targetOpacity - opacity) * 0.05;

      el.style.transform = `translate3d(${x - SIZE / 2}px, ${y - SIZE / 2}px, 0)`;
      el.style.opacity = opacity.toFixed(3);

      // Park the loop once fully faded and settled; mousemove restarts it.
      if (opacity < 0.004 && targetOpacity === 0 && dist < 0.5) {
        el.style.opacity = "0";
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      lastMove = performance.now();
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const onLeave = () => {
      lastMove = 0;
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: SIZE,
        height: SIZE,
        borderRadius: "50%",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0,
        filter: "blur(28px)",
        willChange: "transform, opacity",
      }}
    />
  );
}
