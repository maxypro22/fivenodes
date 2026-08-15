"use client";

import { useEffect, useRef } from "react";

/**
 * Pointer-driven 3D tilt.
 *
 * The wrapper owns the perspective; the inner element rotates toward the
 * cursor, lifts slightly, and carries a specular highlight that tracks the
 * pointer. Values are eased every frame rather than transitioned in CSS, so
 * the card follows the mouse continuously instead of chasing it in steps.
 *
 * Falls back to a plain static box for coarse pointers (touch) and for
 * visitors who prefer reduced motion.
 */
export default function Tilt3D({
  children,
  max = 9, // peak rotation, degrees
  scale = 1.02, // hover lift
  lift = 26, // translateZ at rest inside the hover, px
  className = "",
}) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const glareRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    // current + target for each animated channel
    const s = { rx: 0, ry: 0, sc: 1, z: 0, gx: 50, gy: 50, go: 0 };
    const t = { rx: 0, ry: 0, sc: 1, z: 0, gx: 50, gy: 50, go: 0 };

    let raf = 0;
    let running = false;

    const draw = () => {
      inner.style.transform =
        `rotateX(${s.rx.toFixed(3)}deg) rotateY(${s.ry.toFixed(3)}deg) ` +
        `scale(${s.sc.toFixed(4)}) translateZ(${s.z.toFixed(2)}px)`;
      const g = glareRef.current;
      if (g) {
        g.style.opacity = s.go.toFixed(3);
        g.style.background =
          `radial-gradient(circle at ${s.gx.toFixed(1)}% ${s.gy.toFixed(1)}%, ` +
          `rgba(255,255,255,.28), rgba(255,255,255,.06) 38%, transparent 62%)`;
      }
    };

    const tick = () => {
      let moving = false;
      for (const k of Object.keys(s)) {
        const d = t[k] - s[k];
        if (Math.abs(d) > 0.0008) {
          s[k] += d * 0.13;
          moving = true;
        } else {
          s[k] = t[k];
        }
      }
      draw();
      if (moving) {
        raf = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const kick = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      // -0.5 .. 0.5 from the centre of the card
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;

      t.ry = px * max * 2;
      t.rx = -py * max * 2;
      t.sc = scale;
      t.z = lift;
      t.gx = (px + 0.5) * 100;
      t.gy = (py + 0.5) * 100;
      t.go = 1;
      kick();
    };

    const onLeave = () => {
      t.rx = 0;
      t.ry = 0;
      t.sc = 1;
      t.z = 0;
      t.go = 0;
      kick();
    };

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [max, scale, lift]);

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
    >
      <div
        ref={innerRef}
        className="relative will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
        {/* specular highlight that follows the cursor */}
        <div
          ref={glareRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[20px] md:rounded-[26px] mix-blend-overlay"
          style={{ opacity: 0 }}
        />
      </div>
    </div>
  );
}
