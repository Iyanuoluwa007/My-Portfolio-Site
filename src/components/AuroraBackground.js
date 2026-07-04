"use client";
import { useEffect, useRef } from "react";
import { getThemeRgb } from "@/lib/theme";

// Two fixed canvases build the live background:
//  - a tiny low-resolution canvas (blobs + flowing light waves) stretched over
//    the viewport and blurred by the GPU, so each frame is nearly free;
//  - a crisp full-resolution canvas with a few slow-drifting star particles.
const SCALE = 0.1;
const FRAME_MS = 1000 / 30;
const PARTICLE_COUNT = 24;

// Positions, radii, and amplitudes are relative to the viewport so the
// composition holds on mobile, ultra-wide, and high-DPI screens alike.
const BLOB_DEFS = [
  { var: "--accent",         cx: 0.18, cy: 0.24, r: 0.52, ax: 0.10, ay: 0.08, sx: 0.045, sy: 0.038, px: 0.0, py: 2.1, alpha: 0.34 },
  { var: "--accent-soft",    cx: 0.80, cy: 0.30, r: 0.44, ax: 0.08, ay: 0.11, sx: 0.036, sy: 0.052, px: 1.7, py: 0.4, alpha: 0.26 },
  { var: "--accent-lighter", cx: 0.55, cy: 0.75, r: 0.40, ax: 0.12, ay: 0.07, sx: 0.030, sy: 0.044, px: 3.9, py: 1.2, alpha: 0.16 },
  { var: "--accent",         cx: 0.30, cy: 0.85, r: 0.36, ax: 0.07, ay: 0.09, sx: 0.052, sy: 0.033, px: 5.1, py: 3.3, alpha: 0.22 },
  { var: "--accent-soft",    cx: 0.90, cy: 0.80, r: 0.34, ax: 0.06, ay: 0.10, sx: 0.041, sy: 0.047, px: 2.6, py: 4.8, alpha: 0.18 },
];

const WAVE_DEFS = [
  { var: "--accent",         baseY: 0.64, amp: 0.10, freq: 2.2, speed: 0.045, drift: 0.020, width: 0.050, alpha: 0.11, phase: 0.0 },
  { var: "--accent-soft",    baseY: 0.74, amp: 0.08, freq: 2.8, speed: 0.034, drift: 0.014, width: 0.065, alpha: 0.08, phase: 2.1 },
  { var: "--accent-lighter", baseY: 0.55, amp: 0.12, freq: 1.7, speed: 0.026, drift: 0.010, width: 0.038, alpha: 0.06, phase: 4.4 },
];

const FALLBACKS = {
  "--accent": "#6366F1",
  "--accent-soft": "#818CF8",
  "--accent-lighter": "#A5B4FC",
};

export default function AuroraBackground() {
  const softRef = useRef(null);
  const fineRef = useRef(null);

  useEffect(() => {
    const soft = softRef.current;
    const fine = fineRef.current;
    const sctx = soft.getContext("2d");
    const fctx = fine.getContext("2d");
    if (!sctx || !fctx) return undefined;

    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const rgbOf = (v) => getThemeRgb(v, FALLBACKS[v]);
    const blobs = BLOB_DEFS.map((d) => ({ ...d, rgb: rgbOf(d.var) }));
    const waves = WAVE_DEFS.map((d) => ({ ...d, rgb: rgbOf(d.var) }));
    const starRgb = rgbOf("--accent-lighter");

    // Star particles live in relative 0..1 space and drift upward forever.
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.6 + Math.random() * 1.1,
      vy: 0.004 + Math.random() * 0.006,
      sway: 0.004 + Math.random() * 0.008,
      tw: 0.3 + Math.random() * 0.7,
      ph: Math.random() * Math.PI * 2,
    }));

    let sw = 0, sh = 0, fw = 0, fh = 0, dpr = 1;
    let raf = 0;
    let last = 0;

    const isMobile = () => window.innerWidth < 768;
    const activeBlobs = () => (isMobile() ? blobs.slice(0, 3) : blobs);
    const activeWaves = () => (isMobile() ? waves.slice(0, 1) : waves);

    const drawSoft = (t) => {
      sctx.clearRect(0, 0, sw, sh);
      sctx.globalCompositeOperation = "lighter";

      for (const b of activeBlobs()) {
        const x = (b.cx + Math.cos(t * b.sx * Math.PI * 2 + b.px) * b.ax) * sw;
        const y = (b.cy + Math.sin(t * b.sy * Math.PI * 2 + b.py) * b.ay) * sh;
        const radius =
          b.r * Math.max(sw, sh) * (1 + 0.12 * Math.sin(t * b.sx * Math.PI + b.py));
        const { r, g, b: bl } = b.rgb;
        const grad = sctx.createRadialGradient(x, y, 0, x, y, Math.max(radius, 1));
        grad.addColorStop(0, `rgba(${r},${g},${bl},${b.alpha})`);
        grad.addColorStop(1, `rgba(${r},${g},${bl},0)`);
        sctx.fillStyle = grad;
        sctx.fillRect(0, 0, sw, sh);
      }

      // Flowing light waves: slow sine ribbons that read as moving energy
      // once blurred and stretched to full screen.
      sctx.lineCap = "round";
      for (const wv of activeWaves()) {
        const { r, g, b: bl } = wv.rgb;
        const yBase = wv.baseY + Math.sin(t * wv.drift * Math.PI * 2 + wv.phase) * 0.03;
        sctx.beginPath();
        const steps = 32;
        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * sw;
          const y =
            (yBase +
              Math.sin((i / steps) * wv.freq * Math.PI * 2 + t * wv.speed * Math.PI * 2 + wv.phase) *
                wv.amp) * sh;
          if (i === 0) sctx.moveTo(x, y);
          else sctx.lineTo(x, y);
        }
        sctx.strokeStyle = `rgba(${r},${g},${bl},${wv.alpha})`;
        sctx.lineWidth = Math.max(wv.width * sh, 1.5);
        sctx.stroke();
      }
    };

    const drawFine = (t) => {
      fctx.clearRect(0, 0, fw, fh);
      if (isMobile()) return;
      const { r, g, b: bl } = starRgb;
      for (const p of particles) {
        const y = (((p.y - t * p.vy) % 1) + 1) % 1;
        const x = (((p.x + Math.sin(t * p.sway * Math.PI * 2 + p.ph) * 0.01) % 1) + 1) % 1;
        const alpha = 0.10 * (0.55 + 0.45 * Math.sin(t * p.tw + p.ph));
        fctx.beginPath();
        fctx.arc(x * fw, y * fh, p.r * dpr, 0, Math.PI * 2);
        fctx.fillStyle = `rgba(${r},${g},${bl},${Math.max(alpha, 0.02)})`;
        fctx.fill();
      }
    };

    const draw = (t) => {
      drawSoft(t);
      drawFine(t);
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

    const drawStatic = () => {
      // Reduced motion: one static colour wash, no particles, no animation.
      drawSoft(40);
      fctx.clearRect(0, 0, fw, fh);
    };

    const resize = () => {
      sw = soft.width = Math.max(1, Math.round(window.innerWidth * SCALE));
      sh = soft.height = Math.max(1, Math.round(window.innerHeight * SCALE));
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      fw = fine.width = Math.max(1, Math.round(window.innerWidth * dpr));
      fh = fine.height = Math.max(1, Math.round(window.innerHeight * dpr));
      if (reducedMq.matches) drawStatic();
    };

    const onVisibility = () => (document.hidden ? stop() : start());
    const onMotionChange = () => {
      if (reducedMq.matches) {
        stop();
        drawStatic();
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

  const layerStyle = {
    position: "fixed",
    inset: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 0,
    pointerEvents: "none",
  };

  return (
    <>
      <canvas
        ref={softRef}
        aria-hidden="true"
        style={{
          ...layerStyle,
          filter: "blur(42px) saturate(1.15)",
          opacity: 0.55,
          transform: "translateZ(0)",
        }}
      />
      <canvas
        ref={fineRef}
        aria-hidden="true"
        style={{ ...layerStyle, opacity: 0.6 }}
      />
    </>
  );
}
