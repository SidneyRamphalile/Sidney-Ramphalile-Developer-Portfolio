"use client";
import { useEffect, useRef } from "react";

/**
 * CosmicBackground
 * A breathtaking galactic starfield rendered on <canvas>:
 *  - hundreds of parallax stars that twinkle and drift
 *  - a soft nebula glow (purple/blue/pink) painted behind the stars
 *  - occasional shooting stars streaking across the sky
 *  - subtle interactive parallax that follows the mouse
 *
 * It is self-contained, DPR-aware, pauses when the tab is hidden,
 * and respects prefers-reduced-motion.
 */
const CosmicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const stars = [];
    const STAR_COUNT_BASE = 260;
    const nebulaBlobs = [];

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    // ---- Star colour palette (white / blue / purple / warm) ----
    const STAR_COLORS = [
      "255, 255, 255",
      "188, 210, 255",
      "205, 196, 255",
      "255, 226, 235",
      "180, 220, 255",
    ];

    const rand = (min, max) => Math.random() * (max - min) + min;

    const buildStars = () => {
      stars.length = 0;
      const count = Math.round(
        STAR_COUNT_BASE * Math.min((width * height) / (1280 * 720), 1.8)
      );
      for (let i = 0; i < count; i++) {
        const depth = Math.random(); // 0 = far, 1 = near
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: depth * 1.4 + 0.3,
          baseAlpha: rand(0.25, 1),
          twinkleSpeed: rand(0.4, 1.8),
          twinklePhase: Math.random() * Math.PI * 2,
          drift: depth * 0.18 + 0.02,
          color: STAR_COLORS[(Math.random() * STAR_COLORS.length) | 0],
          depth,
        });
      }
    };

    const buildNebula = () => {
      nebulaBlobs.length = 0;
      const palette = [
        "120, 60, 220", // purple
        "60, 90, 220", // blue
        "220, 70, 160", // pink
        "40, 120, 200", // cyan-blue
      ];
      const n = 5;
      for (let i = 0; i < n; i++) {
        nebulaBlobs.push({
          x: rand(0, width),
          y: rand(0, height),
          r: rand(width * 0.18, width * 0.42),
          color: palette[i % palette.length],
          alpha: rand(0.05, 0.12),
          driftX: rand(-0.04, 0.04),
          driftY: rand(-0.03, 0.03),
        });
      }
    };

    // ---- Shooting stars ----
    const shootingStars = [];
    const spawnShootingStar = () => {
      const fromLeft = Math.random() > 0.5;
      const startX = fromLeft ? rand(-50, width * 0.3) : rand(width * 0.6, width + 50);
      const startY = rand(-50, height * 0.5);
      const angle = fromLeft ? rand(Math.PI / 7, Math.PI / 4) : rand((Math.PI * 3) / 4, (Math.PI * 6) / 7);
      const speed = rand(7, 13);
      shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: rand(80, 180),
        life: 1,
        decay: rand(0.006, 0.012),
      });
    };

    let lastShoot = 0;
    const nextShootDelay = () => rand(2200, 5200);

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
      buildNebula();
    };

    const drawNebula = () => {
      for (const b of nebulaBlobs) {
        b.x += b.driftX;
        b.y += b.driftY;
        if (b.x < -b.r) b.x = width + b.r;
        if (b.x > width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = height + b.r;
        if (b.y > height + b.r) b.y = -b.r;

        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, `rgba(${b.color}, ${b.alpha})`);
        g.addColorStop(1, `rgba(${b.color}, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(b.x - b.r, b.y - b.r, b.r * 2, b.r * 2);
      }
    };

    let raf = 0;
    let running = true;
    let then = performance.now();

    const render = (now) => {
      if (!running) return;
      const dt = Math.min((now - then) / 16.6667, 3); // normalized frame step
      then = now;

      // ease mouse parallax
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      const px = (mouse.x / width - 0.5) * 2; // -1..1
      const py = (mouse.y / height - 0.5) * 2;

      // base sky
      ctx.clearRect(0, 0, width, height);
      const sky = ctx.createLinearGradient(0, 0, 0, height);
      sky.addColorStop(0, "#0a0a1a");
      sky.addColorStop(0.5, "#0d0a1f");
      sky.addColorStop(1, "#080814");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, width, height);

      drawNebula();

      // stars
      const t = now * 0.001;
      for (const s of stars) {
        const twinkle =
          0.5 + 0.5 * Math.sin(t * s.twinkleSpeed + s.twinklePhase);
        const alpha = s.baseAlpha * (0.35 + 0.65 * twinkle);

        // slow upward drift + parallax offset by depth
        s.y -= s.drift * dt * 0.4;
        if (s.y < -2) {
          s.y = height + 2;
          s.x = Math.random() * width;
        }
        const ox = px * s.depth * 18;
        const oy = py * s.depth * 18;
        const x = s.x + ox;
        const y = s.y + oy;

        // glow halo for brighter stars
        if (s.r > 1.1) {
          const halo = ctx.createRadialGradient(x, y, 0, x, y, s.r * 5);
          halo.addColorStop(0, `rgba(${s.color}, ${alpha * 0.5})`);
          halo.addColorStop(1, `rgba(${s.color}, 0)`);
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(x, y, s.r * 5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(${s.color}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // shooting stars
      if (now - lastShoot > nextShootDelay()) {
        spawnShootingStar();
        lastShoot = now;
      }
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const sh = shootingStars[i];
        sh.x += sh.vx * dt;
        sh.y += sh.vy * dt;
        sh.life -= sh.decay * dt;
        if (sh.life <= 0 || sh.x < -200 || sh.x > width + 200 || sh.y > height + 200) {
          shootingStars.splice(i, 1);
          continue;
        }
        const tailX = sh.x - sh.vx * (sh.len / 13);
        const tailY = sh.y - sh.vy * (sh.len / 13);
        const grad = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${sh.life})`);
        grad.addColorStop(0.3, `rgba(190, 210, 255, ${sh.life * 0.6})`);
        grad.addColorStop(1, "rgba(190, 210, 255, 0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // bright head
        ctx.fillStyle = `rgba(255, 255, 255, ${sh.life})`;
        ctx.beginPath();
        ctx.arc(sh.x, sh.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    const onVisibility = () => {
      running = !document.hidden;
      if (running) {
        then = performance.now();
        raf = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(raf);
      }
    };

    const onPointer = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointer);
      raf = requestAnimationFrame(render);
    } else {
      // render a single static frame for reduced motion
      render(performance.now());
      running = false;
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
};

export default CosmicBackground;
