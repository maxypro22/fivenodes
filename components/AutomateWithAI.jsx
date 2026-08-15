"use client";

import { useEffect, useRef, useState } from "react";
import { QV_NODES } from "./automateNodes";
import "./automate-with-ai.css";

/**
 * "Automate With AI" — ported from the Five Nodes static prototype.
 *
 * The prototype built its tabs and panels imperatively and animated them with
 * a sampled Framer spring. React owns the markup here, but the animation maths,
 * the spring config, the keyboard behaviour and the scroll trigger are all
 * carried over unchanged so the motion matches the original exactly.
 */

/* Framer spring reproduction: { type:"spring", duration:1, bounce:0.2 }.
   Framer maps bounce -> damping ratio: zeta = 1 - bounce. Solved so the
   residual settles at `duration`, then sampled and played with linear easing. */
function springSamples(durationSec, bounce, steps) {
  const zeta = 1 - bounce;
  const w = -Math.log(0.001) / (zeta * durationSec);
  const wd = w * Math.sqrt(1 - zeta * zeta);
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * durationSec;
    out.push(1 - Math.exp(-zeta * w * t) * (Math.cos(wd * t) + ((zeta * w) / wd) * Math.sin(wd * t)));
  }
  out[out.length - 1] = 1;
  return out;
}

const QV_SPRING = springSamples(1, 0.2, 60);

/* ANIMATION #1 — card:   opacity .001 -> 1, y  -50 -> 0
   ANIMATION #2 — visual: opacity 0    -> 1, y -187 -> 0 */
function playAppear(el, fromY, fromOpacity) {
  if (!el) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  el.animate(
    {
      transform: QV_SPRING.map((p) => `translateY(${(fromY * (1 - p)).toFixed(3)}px)`),
      opacity: QV_SPRING.map((p) => String(fromOpacity + (1 - fromOpacity) * p)),
    },
    { duration: 1000, easing: "linear", fill: "both" }
  );
}

/* Hidden panels would otherwise finish their draw-in animations before ever
   being seen. Restart them whenever a panel becomes visible. */
function restartDrawAnimations(card) {
  if (!card) return;
  card.querySelectorAll(".qv-drawline, .qv-arc, .qv-bar u").forEach((el) => {
    const prev = el.style.animation;
    el.style.animation = "none";
    void el.offsetWidth; // force reflow
    el.style.animation = prev;
  });
}

export default function AutomateWithAI({
  eyebrow = "Automate With AI",
  titleLead = "Build Once.",
  titleEm = "Automate Forever.",
  desc = "Monitor performance, track metrics, and manage your entire AI ecosystem from a single intelligent workspace.",
  nodes = QV_NODES,
  tablistLabel = "Automation stages",
}) {
  const [current, setCurrent] = useState(0);
  const panelsRef = useRef(null);
  const cardRefs = useRef([]);
  const tabRefs = useRef([]);
  const firstRun = useRef(true);

  // Tab change: restart the draw-ins, then replay both appear animations.
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return; // the scroll trigger below owns the initial play
    }
    const card = cardRefs.current[current];
    restartDrawAnimations(card);
    playAppear(card, -50, 0.001);
    playAppear(card?.querySelector(".qv-card__visual"), -187, 0);
  }, [current]);

  // Scroll-enter trigger: the prototype fires the appear animation on first view.
  useEffect(() => {
    const panels = panelsRef.current;
    if (!panels) return;
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const card = cardRefs.current[current];
          playAppear(card, -50, 0.001);
          playAppear(card?.querySelector(".qv-card__visual"), -187, 0);
          obs.disconnect();
        });
      },
      { threshold: 0.2 } // ≈ the source's "top 80%" trigger geometry
    );
    io.observe(panels);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyDown = (e, i) => {
    let next = null;
    if (e.key === "ArrowRight") next = (i + 1) % nodes.length;
    if (e.key === "ArrowLeft") next = (i - 1 + nodes.length) % nodes.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = nodes.length - 1;
    if (next === null) return;
    e.preventDefault();
    setCurrent(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="qv-automate" id="automate-with-ai" aria-labelledby="qv-title">
      <div className="qv-automate__bg" aria-hidden="true" />
      <div className="qv-automate__grid" aria-hidden="true" />
      <div className="qv-automate__spot" aria-hidden="true" />
      <div className="qv-automate__ring qv-automate__ring--a" aria-hidden="true" />
      <div className="qv-automate__ring qv-automate__ring--b" aria-hidden="true" />

      <div className="qv-automate__inner">
        {/* Heading block */}
        <div className="qv-automate__head">
          <div className="qv-eyebrow">
            <span className="qv-eyebrow__dash" />
            <span className="qv-eyebrow__text">{eyebrow}</span>
          </div>
          <h2 className="qv-automate__title" id="qv-title">
            {titleLead} <em>{titleEm}</em>
          </h2>
          <p className="qv-automate__desc">{desc}</p>
        </div>

        {/* Tabs */}
        <div className="qv-tabs" role="tablist" aria-label={tablistLabel}>
          {nodes.map((node, i) => (
            <button
              key={node.key}
              type="button"
              className="qv-tab"
              role="tab"
              id={`qv-tab-${node.key}`}
              aria-controls={`qv-panel-${node.key}`}
              aria-selected={i === current}
              tabIndex={i === current ? 0 : -1}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              onClick={() => setCurrent(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <div className="qv-tab__body">
                <span className="qv-tab__highlight" />
                <span className="qv-tab__label">{node.tab}</span>
                <span className="qv-tab__glow" />
                <span className="qv-tab__light" />
              </div>
              <div className="qv-tab__line">
                <span className="qv-tab__lineLight" />
              </div>
              <span className="qv-tab__mask" />
            </button>
          ))}
        </div>

        {/* Panels */}
        <div className="qv-panels" ref={panelsRef}>
          {nodes.map((node, i) => (
            <div
              key={node.key}
              className="qv-card"
              id={`qv-panel-${node.key}`}
              role="tabpanel"
              aria-labelledby={`qv-tab-${node.key}`}
              hidden={i !== current}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <div className="qv-card__visual">
                <div className="qv-mock" dangerouslySetInnerHTML={{ __html: node.mock }} />
              </div>
              <div className="qv-card__body">
                <p className="qv-card__num" aria-hidden="true">
                  {node.n}
                </p>
                <h3 className="qv-card__title">{node.title}</h3>
                <p className="qv-card__text">{node.text}</p>
                <ul className="qv-list">
                  {node.list.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
