"use client";

import { useState } from "react";

export default function CookieBar() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;

  return (
    <div className="fixed left-1/2 bottom-[18px] -translate-x-1/2 bg-white border border-line rounded-[14px] shadow-soft px-[18px] py-[14px] z-[120] flex flex-col sm:flex-row items-start sm:items-center gap-5 max-w-[640px] w-[calc(100%-40px)] text-[13px] text-ink-2">
      <span>
        We use cookies to measure site performance and improve your experience.{" "}
        <a href="#" className="text-primary underline">
          Privacy policy
        </a>
      </span>
      <div className="flex gap-[10px] sm:ml-auto shrink-0">
        <button
          onClick={() => setHidden(true)}
          className="bg-[#f1f3f8] text-ink-2 px-[18px] py-[9px] rounded-lg font-semibold text-[13px]"
        >
          Decline
        </button>
        <button
          onClick={() => setHidden(true)}
          className="bg-primary text-white px-[18px] py-[9px] rounded-lg font-semibold text-[13px]"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
