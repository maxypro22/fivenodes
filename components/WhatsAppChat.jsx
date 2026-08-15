"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated WhatsApp conversation inside a phone frame.
 *
 * Messages play in sequence like a screen recording: the client sends, a typing
 * indicator appears, then the agent replies. The thread scrolls to follow, holds
 * at the end, then loops. Nothing is a video — it is all DOM, so it stays sharp
 * at any size and costs no bandwidth.
 */

const DEFAULT_MESSAGES = [
  { from: "them", text: "Hi, do you have a 3-bedroom apartment in West Bay?", delay: 900 },
  {
    from: "us",
    text: "Good evening! Yes — we have 2 units available in West Bay right now, both furnished.",
    delay: 1500,
  },
  {
    from: "us",
    card: { title: "Marina Tower — 3BR", meta: "West Bay · 165 m² · Furnished", price: "QAR 12,500 / month" },
    delay: 900,
  },
  { from: "them", text: "Is the second one still available this week?", delay: 1600 },
  {
    from: "us",
    text: "It is. I can hold it for you and arrange a viewing — would Saturday at 5 PM suit you?",
    delay: 1500,
  },
  { from: "them", text: "Perfect, book it please", delay: 1400 },
  {
    from: "us",
    text: "Done ✅ Saturday 5 PM confirmed. I've sent the location and the agent's number to this chat.",
    delay: 1500,
  },
];

/* Small AI mark — used for the contact avatar and as the "written by AI"
   badge on every agent reply. */
function AiMark({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3.2 13.6 8 18.4 9.6 13.6 11.2 12 16 10.4 11.2 5.6 9.6 10.4 8z"
        fill="currentColor"
      />
      <path d="M18 15.2 18.7 17.3 20.8 18 18.7 18.7 18 20.8 17.3 18.7 15.2 18l2.1-.7z" fill="currentColor" />
    </svg>
  );
}

function AiBadge({ label }) {
  return (
    <span className="mb-[3px] inline-flex items-center gap-1 rounded-full bg-[#128c3e]/12 px-1.5 py-[1px] text-[9.5px] font-bold uppercase tracking-[.08em] text-[#128c3e]">
      <AiMark className="h-[9px] w-[9px]" />
      {label}
    </span>
  );
}

/* Stylised listing thumbnail. The project has no property photography, so this
   is drawn rather than faked with an unrelated stock image. */
function ListingThumb() {
  return (
    <svg viewBox="0 0 186 92" className="mb-1.5 block h-[72px] w-full rounded-[8px]" aria-hidden="true">
      <defs>
        <linearGradient id="qvSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bcd8f2" />
          <stop offset="1" stopColor="#eaf2fa" />
        </linearGradient>
        <linearGradient id="qvTower" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#9fb2c8" />
          <stop offset="1" stopColor="#6f8298" />
        </linearGradient>
      </defs>
      <rect width="186" height="92" fill="url(#qvSky)" />
      <circle cx="151" cy="22" r="9" fill="#fff" opacity=".75" />
      {/* skyline */}
      <rect x="12" y="34" width="30" height="58" rx="2" fill="#8496ad" />
      <rect x="47" y="20" width="38" height="72" rx="2" fill="url(#qvTower)" />
      <rect x="90" y="42" width="26" height="50" rx="2" fill="#8496ad" />
      <rect x="121" y="30" width="34" height="62" rx="2" fill="url(#qvTower)" />
      <rect x="160" y="50" width="18" height="42" rx="2" fill="#8496ad" />
      {/* windows */}
      {[0, 1, 2, 3, 4, 5].map((r) =>
        [0, 1, 2].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={52 + c * 11}
            y={27 + r * 11}
            width="7"
            height="7"
            rx="1"
            fill="#eef4fb"
            opacity={(r + c) % 3 === 0 ? ".95" : ".55"}
          />
        ))
      )}
      {[0, 1, 2, 3, 4].map((r) =>
        [0, 1, 2].map((c) => (
          <rect
            key={`b-${r}-${c}`}
            x={126 + c * 10}
            y={37 + r * 11}
            width="6"
            height="7"
            rx="1"
            fill="#eef4fb"
            opacity={(r + c) % 2 === 0 ? ".9" : ".5"}
          />
        ))
      )}
      <rect y="84" width="186" height="8" fill="#7d8ea3" />
    </svg>
  );
}

function Ticks() {
  return (
    <svg viewBox="0 0 18 12" className="w-[15px] h-[11px] shrink-0" aria-hidden="true">
      <path
        d="M1 6.5 4 9.5 10.5 2.5"
        fill="none"
        stroke="#53bdeb"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 6.5 9.5 9.5 16 2.5"
        fill="none"
        stroke="#53bdeb"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhatsAppChat({
  contact = "Dania Real Estate",
  status = "AI agent · online",
  time = "23:59",
  messages = DEFAULT_MESSAGES,
  dir = "ltr",
  variant = "phone",
  width = 268,
  threadHeight = 330,
  aiLabel = "AI",
  ariaLabel = "WhatsApp conversation where an AI agent answers a customer's property enquiry and confirms a viewing appointment.",
}) {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(messages.length);
      return;
    }

    const clear = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };

    const run = () => {
      clear();
      setShown(0);
      setTyping(false);
      let t = 400;
      messages.forEach((m, i) => {
        // the agent "types" before each of its replies
        if (m.from === "us") {
          timers.current.push(setTimeout(() => setTyping(true), t));
          t += 900;
          timers.current.push(
            setTimeout(() => {
              setTyping(false);
              setShown(i + 1);
            }, t)
          );
        } else {
          timers.current.push(setTimeout(() => setShown(i + 1), t));
        }
        t += m.delay ?? 1200;
      });
      // hold on the finished thread, then replay
      timers.current.push(setTimeout(run, t + 2600));
    };

    // only animate once the phone is actually on screen
    const el = scrollRef.current;
    let io;
    if (el) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            run();
            io.disconnect();
          }
        },
        { threshold: 0.35 }
      );
      io.observe(el);
    } else {
      run();
    }

    return () => {
      clear();
      io?.disconnect();
    };
  }, [messages]);

  // keep the newest message in view
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [shown, typing]);

  const visible = messages.slice(0, shown);

  return (
    <div
      className="relative mx-auto w-full"
      style={{ maxWidth: variant === "canvas" ? 420 : width }}
      dir={dir}
      /* An illustrative mockup: the bubbles animate in after hydration, so the
         thread is not meaningful markup. Expose it as a single labelled image
         rather than letting a screen reader crawl a half-built conversation. */
      role="img"
      aria-label={ariaLabel}
    >
      {/* phone shell */}
      <div
        aria-hidden="true"
        className={variant === "canvas" ? "relative rounded-[26px] bg-line-soft/70 p-3 ring-1 ring-line shadow-[0_30px_70px_-34px_rgba(16,22,41,.45)]" : "relative rounded-[46px] bg-[#0b0f14] p-[10px] shadow-[0_50px_90px_-30px_rgba(8,11,22,.65)] ring-1 ring-black/10"}
      >
        <div className={variant === "canvas" ? "relative overflow-hidden rounded-[18px] bg-transparent" : "relative overflow-hidden rounded-[37px] bg-[#ece5dd]"}>
          {/* status bar — phone chrome only */}
          <div
            className={`relative z-10 items-center justify-between px-6 pt-3 pb-1 text-[12px] font-semibold text-[#0b0f14] ${
              variant === "canvas" ? "hidden" : "flex"
            }`}
          >
            <span>{time}</span>
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 18 12" className="w-[17px] h-3" aria-hidden="true">
                <path d="M1 9h2v3H1zM5 6.5h2V12H5zM9 4h2v8H9zM13 1.5h2V12h-2z" fill="currentColor" />
              </svg>
              <svg viewBox="0 0 16 12" className="w-4 h-3" aria-hidden="true">
                <path
                  d="M8 10.2 9.6 8.6a2.3 2.3 0 0 0-3.2 0zM3.2 5.4a6.8 6.8 0 0 1 9.6 0l1.5-1.6a9 9 0 0 0-12.6 0z"
                  fill="currentColor"
                />
              </svg>
              <span className="rounded-[4px] bg-[#0b0f14] px-1 py-[1px] text-[9px] font-bold text-white">100</span>
            </span>
          </div>

          {/* dynamic island — phone chrome only */}
          {variant !== "canvas" && (
            <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-[25px] w-[96px] -translate-x-1/2 rounded-full bg-[#0b0f14]" />
          )}

          {/* chat header */}
          <div
            className={`relative z-10 flex items-center gap-3 px-4 py-2.5 ${
              variant === "canvas"
                ? "rounded-[14px] bg-bg border border-line mb-2.5"
                : "bg-[#f6f5f3] border-b border-black/5"
            }`}
          >
            {variant !== "canvas" && (
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#0b0f14] rtl:rotate-180" aria-hidden="true">
                <path
                  d="M15 5l-7 7 7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#25d366] to-[#128c3e] text-white">
              <AiMark className="h-[17px] w-[17px]" />
            </span>
            <span className="min-w-0">
              <span
                className={`block truncate text-[14px] font-semibold leading-tight ${
                  variant === "canvas" ? "text-ink" : "text-[#0b0f14]"
                }`}
              >
                {contact}
              </span>
              <span
                className={`block truncate text-[11px] leading-tight ${
                  variant === "canvas" ? "text-muted-2" : "text-[#5c6670]"
                }`}
              >
                {status}
              </span>
            </span>
          </div>

          {/* thread */}
          <div
            ref={scrollRef}
            className={`relative overflow-hidden [scrollbar-width:none] ${
              variant === "canvas" ? "px-0 py-0" : "px-2.5 py-2.5"
            }`}
            style={{
              height: variant === "canvas" ? 300 : threadHeight,
              backgroundColor: variant === "canvas" ? "transparent" : "#ece5dd",
              backgroundImage:
                variant === "canvas"
                  ? "none"
                  : "radial-gradient(rgba(11,15,20,.05) 1px, transparent 1px), radial-gradient(rgba(11,15,20,.04) 1px, transparent 1px)",
              backgroundSize: "22px 22px, 22px 22px",
              backgroundPosition: "0 0, 11px 11px",
            }}
          >
            <div className="flex flex-col gap-1.5">
              {visible.map((m, i) => {
                const mine = m.from === "us";
                return (
                  <div
                    key={i}
                    className={`flex ${mine ? "justify-end" : "justify-start"} [animation:qvPop_.32s_cubic-bezier(.22,.61,.36,1)_both]`}
                  >
                    <div
                      className={`relative max-w-[85%] rounded-[12px] px-2.5 py-[7px] text-[13.5px] leading-[1.45] shadow-[0_1px_1px_rgba(8,11,22,.12)] ${
                        mine ? "bg-[#d9fdd3] text-[#0b1114]" : "bg-white text-[#0b1114]"
                      }`}
                    >
                      {mine && <AiBadge label={aiLabel} />}
                      {m.card ? (
                        <span className="block w-[158px]">
                          <ListingThumb />
                          <span className="block text-[12px] font-semibold">{m.card.title}</span>
                          <span className="mt-0.5 block text-[10.5px] text-[#5c6670]">{m.card.meta}</span>
                          <span className="mt-1 block text-[11.5px] font-bold text-[#128c3e]">
                            {m.card.price}
                          </span>
                        </span>
                      ) : (
                        <span className="block">{m.text}</span>
                      )}
                      <span className="mt-0.5 flex items-center justify-end gap-1 text-[10.5px] text-[#667781]">
                        12:45
                        {mine && <Ticks />}
                      </span>
                    </div>
                  </div>
                );
              })}

              {typing && (
                <div className="flex justify-end [animation:qvPop_.3s_ease_both]">
                  <div className="flex items-center gap-1 rounded-[12px] bg-[#d9fdd3] px-3 py-2.5 shadow-[0_1px_1px_rgba(8,11,22,.12)]">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-[#667781]"
                        style={{ animation: `qvBlink 1.1s ${d * 0.18}s infinite ease-in-out` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* top fade so scrolled messages dissolve rather than clip */}
            {variant !== "canvas" && (
              <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#ece5dd] to-transparent" />
            )}
          </div>

          {/* composer */}
          <div className={`flex items-center gap-2 ${variant === "canvas" ? "mt-2.5 rounded-[14px] bg-bg border border-line px-3 py-2.5" : "bg-[#f6f5f3] px-3 py-2.5 border-t border-black/5"}`}>
            <span className={`flex-1 rounded-full px-3.5 py-2 text-[12.5px] ${variant === "canvas" ? "bg-surface text-muted-2 border border-line" : "bg-white text-[#8b949c] shadow-[0_1px_1px_rgba(8,11,22,.08)]"}`}>
              Message
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#25d366]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-white rtl:rotate-180" aria-hidden="true">
                <path d="M3 20l18-8L3 4l4 8-4 8z" fill="currentColor" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes qvPop { from { opacity: 0; transform: translateY(8px) scale(.97); } to { opacity: 1; transform: none; } }
        @keyframes qvBlink { 0%,80%,100% { opacity:.35; transform: translateY(0); } 40% { opacity:1; transform: translateY(-2px); } }
      `}</style>
    </div>
  );
}
