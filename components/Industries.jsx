"use client";

import { useState } from "react";

/* Sectors we build agents for. The first VISIBLE entries always show;
   the rest sit behind "+ More" so the cloud never dominates the page. */
const INDUSTRIES = [
  "Real Estate",
  "Property Management",
  "Healthcare & Clinics",
  "Dental Clinics",
  "Restaurants & Cafés",
  "Hotels & Hospitality",
  "Retail & E-commerce",
  "Automotive & Car Rental",
  "Logistics & Delivery",
  "Education & Training",
  "Finance & Insurance",
  "Legal Services",
  "Travel & Tourism",
  "Beauty & Salons",
  "Fitness & Gyms",
  "Home Services & Maintenance",
  "Construction & Contracting",
  "Recruitment & HR",
  "Events & Weddings",
  "Facility Management",
  "Government & Public Sector",
  "Manufacturing",
];

const VISIBLE = 13;

export default function Industries({
  title = "Industries",
  desc = "Bilingual AI agents built for the way each sector actually runs — booking, follow-up and support, in Arabic and English.",
  items = INDUSTRIES,
  /* String, not a function — props crossing the Server→Client boundary must be
     serialisable. "{n}" is substituted with the hidden count. */
  moreLabel = "+ {n} More",
  lessLabel = "− Less",
  visible = VISIBLE,
}) {
  const [open, setOpen] = useState(false);
  const shown = open ? items : items.slice(0, visible);
  const hidden = items.length - visible;

  return (
    <section className="py-16 md:py-20 bg-surface border-y border-line-soft">
      <div className="wrap">
        <h2 className="reveal font-heading font-extrabold text-[clamp(24px,3vw,34px)] tracking-[-.02em] text-ink">
          {title}
        </h2>
        <p className="reveal d1 text-muted text-[14.5px] md:text-base mt-3 max-w-[560px] leading-[1.6]">
          {desc}
        </p>

        <ul className="reveal d2 flex flex-wrap gap-2.5 mt-7">
          {shown.map((name) => (
            <li key={name}>
              <span className="inline-flex items-center rounded-[9px] bg-ink text-bg px-3.5 py-2 text-[13.5px] font-semibold leading-none transition-all duration-200 ease-smooth hover:-translate-y-px hover:bg-primary hover:text-[rgb(var(--on-primary))] cursor-default">
                {name}
              </span>
            </li>
          ))}

          {hidden > 0 && (
            <li>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="inline-flex items-center rounded-[9px] px-2.5 py-2 text-[13.5px] font-semibold leading-none text-muted-2 transition-colors duration-200 hover:text-primary"
              >
                {open ? lessLabel : moreLabel.replace("{n}", hidden)}
              </button>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
