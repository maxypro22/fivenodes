"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollIndicator() {
  const [p, setP] = useState(0);
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef(null);
  const draggingRef = useRef(false);

  // keep the thumb in sync with the page scroll position
  useEffect(() => {
    const update = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? Math.min(1, Math.max(0, st / h)) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const ratioFromClientY = (clientY) => {
    const rect = trackRef.current.getBoundingClientRect();
    return Math.min(1, Math.max(0, (clientY - rect.top) / rect.height));
  };

  const scrollToRatio = (ratio, immediate) => {
    setP(ratio);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const target = ratio * h;
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.scrollTo(target, { immediate });
    } else {
      window.scrollTo({ top: target, behavior: immediate ? "auto" : "smooth" });
    }
  };

  // drag the thumb
  const onThumbDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    draggingRef.current = true;
    setDragging(true);
    document.body.style.userSelect = "none";

    const move = (ev) => scrollToRatio(ratioFromClientY(ev.clientY), true);
    const up = () => {
      draggingRef.current = false;
      setDragging(false);
      document.body.style.userSelect = "";
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  // click anywhere on the rail to jump (smoothly)
  const onTrackDown = (e) => scrollToRatio(ratioFromClientY(e.clientY), false);

  return (
    <div
      ref={trackRef}
      onPointerDown={onTrackDown}
      className="hidden lg:block fixed right-3 top-28 bottom-24 z-[90] w-1.5 rounded-full bg-primary/10 cursor-pointer"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, rgba(37,99,235,.20) 0 2px, transparent 2px 11px)",
      }}
      aria-hidden="true"
    >
      {/* white pointer thumb */}
      <span
        onPointerDown={onThumbDown}
        className={`absolute left-1/2 w-[14px] h-[38px] rounded-full bg-white border shadow-[0_4px_14px_rgba(16,22,41,.28)] cursor-grab active:cursor-grabbing will-change-transform ${
          dragging
            ? "border-primary/60 shadow-[0_6px_20px_rgba(37,99,235,.4)]"
            : "border-line"
        }`}
        style={{ top: `${p * 100}%`, transform: `translate(-50%, -${p * 100}%)` }}
      />
    </div>
  );
}
