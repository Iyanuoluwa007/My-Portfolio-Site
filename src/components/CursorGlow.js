"use client";
import { useEffect, useRef } from "react";
import { getThemeRgb } from "@/lib/theme";

const SIZE = 520;
const TRAIL_SIZE = 300;
const IDLE_MS = 1800;

// Accent glow that trails the pointer with spring easing, plus a smaller
// slower bloom orb behind it for a subtle trail. Hovering links or buttons
// intensifies the glow slightly. Lives behind all content, never captures
// pointer events, and animates only transform/opacity (GPU compositor).
export default function CursorGlow() {
  const glowRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    const trail = trailRef.current;
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMq.matches) {
      el.style.display = "none";
      trail.style.display = "none";
      return undefined;
    }

    const a = getThemeRgb("--accent", "#6366F1");
    const b = getThemeRgb("--accent-soft", "#818CF8");
    el.style.background = `radial-gradient(circle, rgba(${a.r},${a.g},${a.b},0.15) 0%, rgba(${b.r},${b.g},${b.b},0.05) 45%, transparent 70%)`;
    trail.style.background = `radial-gradient(circle, rgba(${b.r},${b.g},${b.b},0.10) 0%, transparent 65%)`;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let x = targetX, y = targetY;
    let tx2 = targetX, ty2 = targetY;
    let opacity = 0;
    let scale = 1;
    let hoverBoost = 0;
    let lastMove = 0;
    let raf = 0;

    const loop = () => {
      const now = performance.now();
      const dist = Math.hypot(targetX - x, targetY - y);

      // Brighten with movement and on interactive hover, fade out when idle.
      let targetOpacity = 0;
      if (now - lastMove < IDLE_MS) {
        targetOpacity = Math.min(0.95, 0.5 + dist * 0.002 + hoverBoost * 0.22);
      }
      const targetScale = 1 + hoverBoost * 0.12;

      x += (targetX - x) * 0.09;
      y += (targetY - y) * 0.09;
      tx2 += (targetX - tx2) * 0.045;
      ty2 += (targetY - ty2) * 0.045;
      opacity += (targetOpacity - opacity) * 0.05;
      scale += (targetScale - scale) * 0.08;

      el.style.transform = `translate3d(${x - SIZE / 2}px, ${y - SIZE / 2}px, 0) scale(${scale.toFixed(3)})`;
      el.style.opacity = opacity.toFixed(3);
      trail.style.transform = `translate3d(${tx2 - TRAIL_SIZE / 2}px, ${ty2 - TRAIL_SIZE / 2}px, 0)`;
      trail.style.opacity = (opacity * 0.7).toFixed(3);

      // Park the loop once fully faded and settled; mousemove restarts it.
      if (opacity < 0.004 && targetOpacity === 0 && dist < 0.5) {
        el.style.opacity = "0";
        trail.style.opacity = "0";
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

    const onOver = (e) => {
      hoverBoost =
        e.target instanceof Element &&
        e.target.closest("a, button, [role='button'], input, textarea")
          ? 1
          : 0;
    };

    const onLeave = () => {
      lastMove = 0;
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const orbStyle = (size, blur) => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: size,
    height: size,
    borderRadius: "50%",
    zIndex: 0,
    pointerEvents: "none",
    opacity: 0,
    filter: `blur(${blur}px)`,
    willChange: "transform, opacity",
  });

  return (
    <>
      <div ref={trailRef} aria-hidden="true" style={orbStyle(TRAIL_SIZE, 36)} />
      <div ref={glowRef} aria-hidden="true" style={orbStyle(SIZE, 28)} />
    </>
  );
}
