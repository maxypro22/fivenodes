"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-driven hand-off of the hero video.
 *
 * The video lives in a fixed overlay. At scroll progress 0 it sits exactly over
 * the hero slot ([data-transfer-slot="hero"]); at progress 1 it has travelled
 * down and settled exactly into the target slot ([data-transfer-slot="target"])
 * in the Automate Operations section. Scrolling back up reverses it.
 *
 * Progress is derived from the two slots' live geometry every frame rather than
 * accumulated, so it is exactly reversible and self-corrects after any reflow.
 * Both slots stay empty — we only measure them, so the page keeps normal flow.
 */

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const lerp = (a, b, t) => a + (b - a) * t;
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export default function ScrollMediaTransfer({
  chip = "Live agents · Arabic & English",
  captionTitle = "Voice · WhatsApp · Automation",
  captionSub = "Working inside your real operations",
  badge = "24/7",
}) {
  const layerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    const card = cardRef.current;
    if (!layer || !card) return;

    const hero = document.querySelector('[data-transfer-slot="hero"]');
    const target = document.querySelector('[data-transfer-slot="target"]');
    if (!hero || !target) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let eased = -1; // smoothed progress, -1 = uninitialised
    let raf = 0;
    let running = false;

    const targetProgress = () => {
      const h = hero.getBoundingClientRect();
      const t = target.getBoundingClientRect();
      const vh = window.innerHeight;
      const y = window.scrollY || window.pageYOffset;

      // Scroll offsets at which each slot sits centred in the viewport.
      const start = Math.max(0, y + h.top + h.height / 2 - vh / 2);
      const end = y + t.top + t.height / 2 - vh / 2;
      if (end <= start) return 0;
      return clamp01((y - start) / (end - start));
    };

    const paint = (p) => {
      const h = hero.getBoundingClientRect();
      const t = target.getBoundingClientRect();
      const vh = window.innerHeight;

      // The card is always somewhere between the two slots, so only bail out
      // when BOTH are fully past the viewport on the same side.
      const bothAbove = h.bottom < -300 && t.bottom < -300;
      const bothBelow = h.top > vh + 300 && t.top > vh + 300;
      const visible = !bothAbove && !bothBelow;
      layer.style.opacity = visible ? "1" : "0";
      if (!visible) return;

      const e = easeInOut(p);
      const w = lerp(h.width, t.width, e);
      const ht = lerp(h.height, t.height, e);
      const x = lerp(h.left, t.left, e);
      const y = lerp(h.top, t.top, e);

      card.style.width = `${w}px`;
      card.style.height = `${ht}px`;
      card.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const tick = () => {
      const p = targetProgress();
      if (eased < 0 || reduce) {
        eased = p;
      } else {
        eased += (p - eased) * 0.14; // damped follow
        if (Math.abs(p - eased) < 0.0004) eased = p;
      }
      paint(eased);

      if (eased !== p) {
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

    const onResize = () => {
      eased = -1;
      kick();
    };

    kick();
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(document.body);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={layerRef}
      className="pointer-events-none fixed inset-0 z-[40] overflow-hidden transition-opacity duration-300"
      style={{ opacity: 0 }}
    >
      <div
        ref={cardRef}
        /* Zero-sized until the paint loop measures the slots, so a failed
           measure collapses the card instead of blowing it up. */
        style={{ width: 0, height: 0 }}
        className="absolute left-0 top-0 rounded-[26px] md:rounded-[34px] p-[1px] bg-gradient-to-br from-white/90 via-white/30 to-primary/25 shadow-[0_40px_90px_-40px_rgba(16,22,41,.55)] will-change-transform"
      >
        <div className="relative w-full h-full rounded-[25px] md:rounded-[33px] overflow-hidden bg-[#0b1020]">
          <video
            className="absolute inset-0 w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/hero-robot.mp4" type="video/mp4" />
          </video>

          {/* cinematic grade: vignette + bottom fade for chip legibility */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#070b16]/70 via-transparent to-[#070b16]/20" />
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_18px_rgba(7,11,22,.45)]" />
          <div className="absolute inset-0 pointer-events-none rounded-[25px] md:rounded-[33px] ring-1 ring-inset ring-white/12" />

          {/* live chip — start-* so it mirrors to the right in RTL */}
          <div className="absolute start-4 top-4 md:start-5 md:top-5 flex items-center gap-2 rounded-full bg-white/12 backdrop-blur-md border border-white/20 px-3 py-1.5 text-[11px] md:text-xs font-semibold text-white">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-[#4ade80] animate-ping opacity-75" />
              <span className="relative w-2 h-2 rounded-full bg-[#4ade80]" />
            </span>
            {chip}
          </div>

          {/* bottom caption */}
          <div className="absolute inset-x-4 bottom-4 md:inset-x-5 md:bottom-5 flex items-end justify-between gap-3">
            <p className="text-white font-heading font-semibold text-[13px] md:text-[15px] leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,.6)]">
              {captionTitle}
              <span className="block text-white/70 font-body font-normal text-[11px] md:text-xs mt-0.5">
                {captionSub}
              </span>
            </p>
            <span className="hidden sm:inline-flex shrink-0 rounded-full bg-white/12 backdrop-blur-md border border-white/20 px-3 py-1.5 text-[11px] font-semibold text-white">
              {badge}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
