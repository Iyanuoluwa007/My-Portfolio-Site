"use client";
import { useEffect, useRef } from "react";
import { getThemeRgb } from "@/lib/theme";

// Renders slow-drifting colour fields to a tiny offscreen-resolution canvas
// that is stretched over the viewport and blurred by the GPU. Keeping the
// internal resolution low makes every frame nearly free to draw.
const SCALE = 0.1;
const FRAME_MS = 1000 / 30;

// Blob positions and radii are relative to the viewport so the layout holds
// on mobile, ultra-wide, and high-DPI screens alike.
const BLOB_DEFS = [
  { var: "--accent",         cx: 0.18, cy: 0.24, r: 0.52, ax: 0.10, ay: 0.08, sx: 0.045, sy: 0.038, px: 0.0, py: 2.1, alpha: 0.34 },
  { var: "--accent-soft",    cx: 0.80, cy: 0.30, r: 0.44, ax: 0.08, ay: 0.11, sx: 0.036, sy: 0.052, px: 1.7, py: 0.4, alpha: 0.26 },
  { var: "--accent-lighter", cx: 0.55, cy: 0.75, r: 0.40, ax: 0.12, ay: 0.07, sx: 0.030, sy: 0.044, px: 3.9, py: 1.2, alpha: 0.16 },
  { var: "--accent",         cx: 0.30, cy: 0.85, r: 0.36, ax: 0.07, ay: 0.09, sx: 0.052, sy: 0.033, px: 5.1, py: 3.3, alpha: 0.22 },
  { var: "--accent-soft",    cx: 0.90, cy: 0.80, r: 0.34, ax: 0.06, ay: 0.10, sx: 0.041, sy: 0.047, px: 2.6, py: 4.8, alpha: 0.18 },
];

const FALLBACKS = {
  "--accent": "#6366F1",
  "--accent-soft": "#818CF8",
  "--accent-lighter": "#A5B4FC",
};

export default function AuroraBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let blobs = BLOB_DEFS.map((def) => ({
      ...def,
      rgb: getThemeRgb(def.var, FALLBACKS[def.var]),
    }));

    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;

    const activeBlobs = () => (window.innerWidth < 768 ? blobs.slice(0, 3) : blobs);

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (const b of activeBlobs()) {
        const x = (b.cx + Math.cos(t * b.sx * Math.PI * 2 + b.px) * b.ax) * w;
        const y = (b.cy + Math.sin(t * b.sy * Math.PI * 2 + b.py) * b.ay) * h;
        const radius =
          b.r * Math.max(w, h) * (1 + 0.12 * Math.sin(t * b.sx * Math.PI + b.py));
        const { r, g, b: bl } = b.rgb;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, Math.max(radius, 1));
        grad.addColorStop(0, `rgba(${r},${g},${bl},${b.alpha})`);
        grad.addColorStop(1, `rgba(${r},${g},${bl},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }
    };

    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      if (now - last < FRAME_MS) return;
      last = now;
      draw(now / 1000);
    };

    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const start = () => {
      if (raf || reducedMq.matches || document.hidden) return;
      raf = requestAnimationFrame(loop);
    };

    const resize = () => {
      w = canvas.width = Math.max(1, Math.round(window.innerWidth * SCALE));
      h = canvas.height = Math.max(1, Math.round(window.innerHeight * SCALE));
      // Reduced motion gets a single static colour wash instead of animation.
      if (reducedMq.matches) draw(40);
    };

    const onVisibility = () => (document.hidden ? stop() : start());
    const onMotionChange = () => {
      if (reducedMq.matches) {
        stop();
        draw(40);
      } else {
        start();
      }
    };

    resize();
    start();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    reducedMq.addEventListener("change", onMotionChange);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      reducedMq.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        filter: "blur(42px) saturate(1.15)",
        opacity: 0.55,
        transform: "translateZ(0)",
      }}
    />
  );
}
