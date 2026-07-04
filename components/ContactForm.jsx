"use client";

import { useState } from "react";

const SERVICES = [
  "AI Voice Agents",
  "WhatsApp Automation",
  "Workflow Automation",
  "AI Consulting",
  "Omnichannel Monitoring",
  "Smart Booking",
  "Data & Intelligence",
  "Customer Memory",
  "Notifications",
  "Something Else",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="bg-white border border-line rounded-[20px] p-8 shadow-card text-center">
        <div className="w-14 h-14 rounded-full bg-primary-soft text-primary grid place-items-center mx-auto">
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
            <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-xl text-ink mt-4">Message sent!</h3>
        <p className="text-muted text-sm mt-2">We typically reply within 24 hours.</p>
      </div>
    );
  }

  const field =
    "w-full border border-line rounded-lg px-[14px] py-[11px] text-sm bg-white focus:outline-none focus:border-primary transition-colors";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="bg-white border border-line rounded-[20px] p-7 shadow-card flex flex-col gap-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-semibold text-ink-2 mb-1.5">Name</label>
          <input required type="text" placeholder="Your name" className={field} />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-ink-2 mb-1.5">Email</label>
          <input required type="email" placeholder="you@company.com" className={field} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-semibold text-ink-2 mb-1.5">Phone</label>
          <input type="tel" placeholder="+974 XXXX XXXX" className={field} />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-ink-2 mb-1.5">Service</label>
          <select className={field} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-[13px] font-semibold text-ink-2 mb-1.5">Message</label>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your project and goals..."
          className={`${field} resize-none`}
        />
      </div>
      <button type="submit" className="btn btn-primary py-[13px] mt-1">
        Send Message
      </button>
    </form>
  );
}
