"use client";

import { useEffect, useRef } from "react";

// Animated voice-waveform backdrop for the hero.
// Layered sine waves drift continuously in brand blue on near-black, with a
// soft glow and edge fade so they read as flowing voice/sound waves without
// hurting headline legibility. Respects prefers-reduced-motion (static frame).
export default function VoiceWaveform({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;

    // Wave layers — each drifts at its own speed/frequency for an organic feel.
    // y is the vertical center as a fraction of height; sits around the
    // headline/description, with the readability scrim keeping text crisp.
    const layers = [
      { amp: 0.090, freq: 1.4, speed: 0.16, lineWidth: 2.0, color: "0, 101, 248", alpha: 0.50, y: 0.48 },
      { amp: 0.065, freq: 2.1, speed: -0.11, lineWidth: 1.5, color: "59, 139, 255", alpha: 0.38, y: 0.46 },
      { amp: 0.120, freq: 0.9, speed: 0.09, lineWidth: 1.5, color: "0, 101, 248", alpha: 0.26, y: 0.52 },
      { amp: 0.045, freq: 3.0, speed: 0.22, lineWidth: 1.0, color: "120, 170, 255", alpha: 0.22, y: 0.44 },
    ];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawWave = (layer, t) => {
      const midY = height * layer.y;
      const amplitude = height * layer.amp;
      const step = 6;
      ctx.beginPath();
      for (let x = -step; x <= width + step; x += step) {
        const nx = x / width; // 0..1
        const envelope = Math.sin(nx * Math.PI); // fade amplitude at both edges
        const yy =
          midY +
          Math.sin(nx * Math.PI * 2 * layer.freq + t * layer.speed * Math.PI * 2) *
            amplitude *
            envelope +
          Math.sin(nx * Math.PI * 2 * (layer.freq * 0.5) - t * layer.speed * Math.PI) *
            amplitude *
            0.4 *
            envelope;
        if (x === -step) ctx.moveTo(x, yy);
        else ctx.lineTo(x, yy);
      }
      ctx.strokeStyle = `rgba(${layer.color}, ${layer.alpha})`;
      ctx.lineWidth = layer.lineWidth;
      ctx.shadowColor = `rgba(${layer.color}, ${layer.alpha})`;
      ctx.shadowBlur = 16;
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const render = (time) => {
      const t = time / 1000;
      ctx.clearRect(0, 0, width, height);
      for (const layer of layers) drawWave(layer, t);
      raf = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      ctx.clearRect(0, 0, width, height);
      for (const layer of layers) drawWave(layer, 0);
    } else {
      raf = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
