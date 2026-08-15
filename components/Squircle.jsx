"use client";

import { useEffect, useRef, useState } from "react";

// True "squircle" corners (superellipse, n=4) — the flatter-then-sharper
// continuous curve used by iOS/Linear/Framer-style cards, not a plain
// border-radius arc (n=2, a circle). Straight edges run between the four
// corners; only the corners themselves trace the superellipse. Measured via
// ResizeObserver and re-clipped on every resize since the exact box size
// varies with content/breakpoint — a static CSS value can't do this.
const N = 4;
const STEPS_PER_CORNER = 16;

function superQuarter(cx, cy, r, startAngle) {
  const pts = [];
  for (let i = 0; i <= STEPS_PER_CORNER; i++) {
    const theta = startAngle + (i / STEPS_PER_CORNER) * (Math.PI / 2);
    const c = Math.cos(theta);
    const s = Math.sin(theta);
    const dx = Math.sign(c) * Math.abs(c) ** (2 / N) * r;
    const dy = Math.sign(s) * Math.abs(s) ** (2 / N) * r;
    pts.push([cx + dx, cy + dy]);
  }
  return pts;
}

function squirclePolygon(w, h, r) {
  const rad = Math.max(0, Math.min(r, w / 2, h / 2));
  const corners = [
    ...superQuarter(rad, rad, rad, Math.PI), // top-left
    ...superQuarter(w - rad, rad, rad, 1.5 * Math.PI), // top-right
    ...superQuarter(w - rad, h - rad, rad, 0), // bottom-right
    ...superQuarter(rad, h - rad, rad, 0.5 * Math.PI), // bottom-left
  ];
  return `polygon(${corners.map(([x, y]) => `${x.toFixed(2)}px ${y.toFixed(2)}px`).join(",")})`;
}

// Polymorphic: pass as={Link} (or any component) to keep routing/semantics
// while still measuring and clipping the actual rendered element.
export default function Squircle({ as: Component = "div", radius = 32, className = "", style, children, ...rest }) {
  const ref = useRef(null);
  const [clip, setClip] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width && height) setClip(squirclePolygon(width, height, radius));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [radius]);

  return (
    <Component ref={ref} className={className} style={{ ...style, clipPath: clip || undefined }} {...rest}>
      {children}
    </Component>
  );
}
