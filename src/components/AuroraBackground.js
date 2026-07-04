"use client";
import { useEffect, useRef } from "react";
import { getThemeRgb } from "@/lib/theme";

// Layered live background:
//  - a tiny low-resolution canvas (colour fields + flowing light waves)
//    stretched over the viewport and blurred by the GPU;
//  - a crisp full-resolution canvas with star particles and light streaks;
//  - mouse parallax and scroll parallax for depth (desktop, motion allowed).
const SCALE = 0.1;
const FRAME_MS = 1000 / 30;
const PARTICLE_COUNT = 24;
const EXTRA_H = 60; // headroom so scroll parallax never exposes a gap

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

const STREAK_DEFS = [
  { y: 0.30, len: 0.16, speed: 0.016, tilt: -0.05, alpha: 0.10, phase: 0.0 },
  { y: 0.66, len: 0.22, speed: 0.011, tilt: 0.04, alpha: 0.07, phase: 0.55 },
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
    const finePointer = window.matchMedia("(pointer: fine)");
    const rgbOf = (v) => getThemeRgb(v, FALLBACKS[v]);
    const blobs = BLOB_DEFS.map((d) => ({ ...d, rgb: rgbOf(d.var) }));
    const waves = WAVE_DEFS.map((d) => ({ ...d, rgb: rgbOf(d.var) }));
    const sparkRgb = rgbOf("--accent-lighter");
    const streakRgb = rgbOf("--accent-soft");

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
    // Mouse parallax (lerped) and scroll parallax (lerped).
    let pmx = 0.5, pmy = 0.5, mx = 0.5, my = 0.5;
    let scrollTarget = 0, scrollCur = 0;

    const isMobile = () => window.innerWidth < 768;
    const activeBlobs = () => (isMobile() ? blobs.slice(0, 3) : blobs);
    const activeWaves = () => (isMobile() ? waves.slice(0, 1) : waves);

    const drawSoft = (t) => {
      const ox = (mx - 0.5) * 0.05;
      const oy = (my - 0.5) * 0.04;
      sctx.clearRect(0, 0, sw, sh);
      sctx.globalCompositeOperation = "lighter";

      for (const b of activeBlobs()) {
        const x = (b.cx + ox + Math.cos(t * b.sx * Math.PI * 2 + b.px) * b.ax) * sw;
        const y = (b.cy + oy + Math.sin(t * b.sy * Math.PI * 2 + b.py) * b.ay) * sh;
        const radius =
          b.r * Math.max(sw, sh) * (1 + 0.12 * Math.sin(t * b.sx * Math.PI + b.py));
        const { r, g, b: bl } = b.rgb;
        const grad = sctx.createRadialGradient(x, y, 0, x, y, Math.max(radius, 1));
        grad.addColorStop(0, `rgba(${r},${g},${bl},${b.alpha})`);
        grad.addColorStop(1, `rgba(${r},${g},${bl},0)`);
        sctx.fillStyle = grad;
        sctx.fillRect(0, 0, sw, sh);
      }

      sctx.lineCap = "round";
      for (const wv of activeWaves()) {
        const { r, g, b: bl } = wv.rgb;
        const yBase =
          wv.baseY + oy * 0.6 + Math.sin(t * wv.drift * Math.PI * 2 + wv.phase) * 0.03;
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

      const { r, g, b: bl } = sparkRgb;
      for (const p of particles) {
        const y = (((p.y - t * p.vy) % 1) + 1) % 1;
        const x = (((p.x + Math.sin(t * p.sway * Math.PI * 2 + p.ph) * 0.01) % 1) + 1) % 1;
        const alpha = 0.10 * (0.55 + 0.45 * Math.sin(t * p.tw + p.ph));
        fctx.beginPath();
        fctx.arc(x * fw, y * fh, p.r * dpr, 0, Math.PI * 2);
        fctx.fillStyle = `rgba(${r},${g},${bl},${Math.max(alpha, 0.02)})`;
        fctx.fill();
      }

      // Light streaks: faint glints travelling slowly across the field.
      const s = streakRgb;
      fctx.lineCap = "round";
      for (const st of STREAK_DEFS) {
        const prog = ((t * st.speed + st.phase) % 1.4) - 0.2;
        const hx = prog * fw;
        const hy = (st.y + Math.sin(t * 0.05 + st.phase * 7) * 0.02) * fh;
        const tx = hx - st.len * fw;
        const ty = hy - st.tilt * st.len * fh;
        const grad = fctx.createLinearGradient(tx, ty, hx, hy);
        grad.addColorStop(0, `rgba(${s.r},${s.g},${s.b},0)`);
        grad.addColorStop(0.85, `rgba(${s.r},${s.g},${s.b},${st.alpha})`);
        grad.addColorStop(1, `rgba(${s.r},${s.g},${s.b},0)`);
        fctx.strokeStyle = grad;
        fctx.lineWidth = 1.2 * dpr;
        fctx.beginPath();
        fctx.moveTo(tx, ty);
        fctx.lineTo(hx, hy);
        fctx.stroke();
      }
    };

    const draw = (t) => {
      mx += (pmx - mx) * 0.04;
      my += (pmy - my) * 0.04;
      scrollCur += (scrollTarget - scrollCur) * 0.08;
      soft.style.transform = `translate3d(0, ${(-scrollCur).toFixed(2)}px, 0)`;
      fine.style.transform = `translate3d(0, ${(-scrollCur * 1.6).toFixed(2)}px, 0)`;
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
      // Reduced motion: one static colour wash, no particles or streaks.
      mx = my = 0.5;
      soft.style.transform = "translate3d(0,0,0)";
      fine.style.transform = "translate3d(0,0,0)";
      drawSoft(40);
      fctx.clearRect(0, 0, fw, fh);
    };

    const resize = () => {
      const cssH = window.innerHeight + EXTRA_H;
      sw = soft.width = Math.max(1, Math.round(window.innerWidth * SCALE));
      sh = soft.height = Math.max(1, Math.round(cssH * SCALE));
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      fw = fine.width = Math.max(1, Math.round(window.innerWidth * dpr));
      fh = fine.height = Math.max(1, Math.round(cssH * dpr));
      if (reducedMq.matches) drawStatic();
    };

    const onMouse = (e) => {
      pmx = e.clientX / window.innerWidth;
      pmy = e.clientY / window.innerHeight;
    };
    const onScroll = () => {
      scrollTarget = Math.min(window.scrollY * 0.02, 36);
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
    window.addEventListener("scroll", onScroll, { passive: true });
    if (finePointer.matches) {
      window.addEventListener("mousemove", onMouse, { passive: true });
    }
    document.addEventListener("visibilitychange", onVisibility);
    reducedMq.addEventListener("change", onMotionChange);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("visibilitychange", onVisibility);
      reducedMq.removeEventListener("change", onMotionChange);
    };
  }, []);

  const layerStyle = {
    position: "fixed",
    inset: "0 0 auto 0",
    width: "100vw",
    height: `calc(100vh + ${EXTRA_H}px)`,
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
