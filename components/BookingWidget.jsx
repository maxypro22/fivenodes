"use client";

import { useState } from "react";

const CALENDLY = "https://calendly.com/fivenodes-info/30min";

export default function BookingWidget({ fee = 1000, currency = "QAR" }) {
  const [plan, setPlan] = useState("discovery");

  const options = [
    {
      id: "discovery",
      name: "Discovery session",
      price: "Free",
      note: "30-minute demo — see AI voice, WhatsApp, and workflow automation in action.",
    },
    {
      id: "paid",
      name: "Paid consultation",
      price: `${currency} ${fee}`,
      note: "A deep strategy session — we map your operations and build an automation plan.",
    },
  ];

  return (
    <div className="reveal d1 bg-white border border-line rounded-[22px] p-8 shadow-card">
      <h2 className="font-heading font-bold text-2xl text-ink">30-minute discovery call</h2>
      <p className="text-sm text-muted mt-2 leading-[1.7]">
        Pick a slot that suits you. We'll walk through your business and identify automation
        opportunities.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        {options.map((o) => {
          const active = plan === o.id;
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => setPlan(o.id)}
              className={`text-left rounded-[16px] border p-5 transition-all ${
                active
                  ? "border-primary bg-primary-soft/50 shadow-soft"
                  : "border-line hover:border-primary/50"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-heading font-bold text-[17px] text-ink">{o.name}</span>
                <span
                  className={`text-sm font-bold ${active ? "text-primary" : "text-ink-2"}`}
                >
                  {o.price}
                </span>
              </div>
              <p className="text-[13px] text-muted mt-1.5 leading-[1.6]">{o.note}</p>
            </button>
          );
        })}
      </div>

      <a
        href={CALENDLY}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary w-full justify-center mt-6 py-[14px]"
      >
        Book a call
      </a>
      <p className="text-[12px] text-muted-2 text-center mt-3">
        Opens our Calendly scheduler in a new tab.
      </p>
    </div>
  );
}
