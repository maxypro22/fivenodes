"use client";

import { useEffect, useRef } from "react";

/**
 * Cycling text-scramble, ported from the implementation on fivenodes.ai.
 *
 * Each character is given a random start/end frame; before its start it shows
 * the outgoing character, between start and end it flickers through a symbol
 * pool ("dud" characters, rendered green), and after its end it settles on the
 * final character. Constants below are the production values.
 */

const CHARS = "!<>-_\\/[]{}—=+*^?#";
const DUD = "#00C853";

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = CHARS;
    this.currentText = el.textContent || "";
    this.queue = [];
    this.frame = 0;
    this.frameRequest = 0;
    this.resolve = () => {};
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const old = this.currentText;
    const length = newText.length;
    const promise = new Promise((res) => (this.resolve = res));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = i < old.length ? old[i] : this.chars[Math.floor(Math.random() * this.chars.length)];
      const to = newText[i];
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40) + 20;
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.currentText = newText;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      const q = this.queue[i];
      if (this.frame >= q.end) {
        complete++;
        output += `<span class="sc">${q.to}</span>`;
      } else if (this.frame >= q.start) {
        if (!q.char || Math.random() < 0.28) {
          q.char = this.chars[Math.floor(Math.random() * this.chars.length)];
        }
        output +=
          `<span class="sc dud" style="display:inline-block;width:0.6em;text-align:center;` +
          `color:${DUD};-webkit-text-fill-color:${DUD};background:none">${q.char}</span>`;
      } else {
        output += `<span class="sc">${q.from}</span>`;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  stop() {
    cancelAnimationFrame(this.frameRequest);
  }
}

export default function ScrambleText({ words, interval = 2500, className = "", as: Tag = "span" }) {
  const ref = useRef(null);
  const fx = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !words?.length) return;

    // Scrambling is pure decoration; hold the first word for reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    fx.current = new TextScramble(el);
    let i = 1;
    let timer;
    const next = () => {
      fx.current?.setText(words[i]).then(() => {
        i = (i + 1) % words.length;
        timer = setTimeout(next, interval);
      });
    };
    timer = setTimeout(next, interval);

    return () => {
      clearTimeout(timer);
      fx.current?.stop();
    };
  }, [words, interval]);

  return (
    <Tag ref={ref} className={className} aria-label={words?.[0]}>
      {words?.[0]}
    </Tag>
  );
}
