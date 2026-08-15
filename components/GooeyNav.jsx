"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const PARTICLE_COLORS = ["rgb(var(--primary))", "rgb(var(--primary-dark))", "rgb(var(--on-primary))"];

const noise = (n = 1) => n / 2 - Math.random() * n;

const getXY = (distance, pointIndex, totalPoints) => {
  const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
  return [distance * Math.cos(angle), distance * Math.sin(angle)];
};

/**
 * Click-driven take on React Bits' GooeyNav: a pill smoothly slides/resizes
 * to whichever item is clicked, with a small particle burst on every
 * transition, and stays synced to the active route as navigation completes.
 * The original demo's black-backdrop + mix-blend-mode:lighten goo trick
 * assumes a dark page behind the nav, which breaks (the white blob just
 * vanishes) against this navbar's white surface in light mode — so the pill
 * is rendered as a normal theme-colored element instead, sized/positioned
 * with the same math.
 */
export default function GooeyNav({
  items,
  activeIndex = 0,
  animationTime = 500,
  particleCount = 10,
  particleDistances = [50, 8],
  particleR = 70,
  timeVariance = 250,
  className = "",
  linkClassName = "",
}) {
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const pillRef = useRef(null);
  const lastElRef = useRef(null);

  const createParticle = (i, t, d, r) => {
    const rotate = noise(r / 10);
    return {
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };

  const burst = () => {
    const pill = pillRef.current;
    if (!pill) return;
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, particleDistances, particleR);
      const particle = document.createElement("span");
      particle.className = "gooey-particle";
      particle.style.setProperty("--end-x", `${p.end[0]}px`);
      particle.style.setProperty("--end-y", `${p.end[1]}px`);
      particle.style.setProperty("--time", `${p.time}ms`);
      particle.style.setProperty("--scale", `${p.scale}`);
      particle.style.setProperty("--rotate", `${p.rotate}deg`);
      particle.style.background = p.color;
      pill.appendChild(particle);
      setTimeout(() => {
        try {
          pill.removeChild(particle);
        } catch {
          // already removed
        }
      }, p.time);
    }
  };

  const positionPill = (el) => {
    const container = containerRef.current;
    const pill = pillRef.current;
    if (!container || !pill || !el) return;
    const cRect = container.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    Object.assign(pill.style, {
      left: `${r.left - cRect.left}px`,
      top: `${r.top - cRect.top}px`,
      width: `${r.width}px`,
      height: `${r.height}px`,
    });
    pill.classList.add("is-visible");
  };

  const handleClick = (e) => {
    const el = e.currentTarget;
    if (lastElRef.current === el) return;
    lastElRef.current = el;
    positionPill(el);
    burst();
  };

  useEffect(() => {
    const activeLi = listRef.current?.querySelectorAll("li")[activeIndex];
    if (activeLi) {
      lastElRef.current = activeLi;
      // position without a transition on first paint / route change
      const pill = pillRef.current;
      if (pill) pill.style.transition = "none";
      positionPill(activeLi);
      requestAnimationFrame(() => {
        if (pill) pill.style.transition = "";
      });
    }

    const ro = new ResizeObserver(() => {
      const li = listRef.current?.querySelectorAll("li")[activeIndex];
      if (li === lastElRef.current) positionPill(li);
    });
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, items.length]);

  return (
    <div ref={containerRef} className={`gooey-nav-container ${className}`}>
      <nav>
        <ul ref={listRef} className="flex items-center gap-1">
          {items.map((item, i) => (
            <li key={item.label} className={i === activeIndex ? "is-active" : ""} onClick={handleClick}>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className={`gooey-link ${linkClassName}`}>
                  {item.label}
                </a>
              ) : (
                <Link href={item.href} className={`gooey-link ${linkClassName}`}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <span ref={pillRef} className="gooey-pill" />
    </div>
  );
}
