import Link from "next/link";
import SubscribeForm from "./SubscribeForm";

const SERVICES = [
  ["AI Voice Solutions", "/services"],
  ["AI Chat & Messaging", "/services"],
  ["Omnichannel Monitoring", "/services"],
  ["Smart Booking", "/services"],
  ["Workflow Automation", "/services"],
  ["Data & Intelligence", "/services"],
  ["Basha AI", "/basha"],
];

const RESOURCES = [
  ["News", "/news"],
  ["Blog", "/blog"],
  ["About Us", "/about"],
  ["Book a Demo", "/book-demo"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

const CONTACTS = [
  ["+974 3001 0105", "Doha — Office"],
  ["+974 4444 0085", "Doha — Support"],
];

const SOCIALS = {
  LinkedIn:
    "M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.6 4.75 6V21H21v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H13z",
  X: "M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.4l8-9.2L1 2h7l4.9 6.5zM16.7 20h1.7L7.4 4H5.6z",
  Facebook:
    "M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z",
  Instagram:
    "M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.4.5.6.2 1.1.5 1.6 1s.8 1 1 1.6c.3.6.4 1.3.5 2.4C21.9 8.9 22 9.3 22 12s0 3-.1 4.1c0 1.1-.2 1.8-.5 2.4a4.5 4.5 0 01-1 1.6 4.5 4.5 0 01-1.6 1c-.6.3-1.3.4-2.4.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.8-.2-2.4-.5a4.5 4.5 0 01-1.6-1 4.5 4.5 0 01-1-1.6c-.3-.6-.4-1.3-.5-2.4C2 15 2 14.7 2 12s0-3 .1-4.1c0-1.1.2-1.8.5-2.4a4.5 4.5 0 011-1.6 4.5 4.5 0 011.6-1c.6-.3 1.3-.4 2.4-.5C9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zM17.4 5.6a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z",
  TikTok:
    "M16.5 3c.3 2.1 1.5 3.6 3.5 3.9V10c-1.3.1-2.5-.3-3.6-1v6.3c0 3.4-2.6 5.7-5.8 5.7-3 0-5.1-2.2-5.1-5 0-3 2.4-5.1 5.6-4.8v3.2c-.4-.1-.8-.2-1.2-.2-1.1 0-2 .9-2 2s.9 2.1 2.1 2.1c1.2 0 2.2-.9 2.2-2.3V3z",
};

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-line-soft pt-[70px] pb-[30px]">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.7fr] gap-12">
          {/* Brand column — centered on mobile */}
          <div className="text-center lg:text-left">
            <Link href="/" className="inline-flex items-center mb-[18px]" aria-label="Five Nodes home">
              <img src="/fivenodes-logo-black.png" alt="Five Nodes" className="h-11 w-auto" />
            </Link>
            <p className="text-muted text-sm max-w-[320px] mx-auto lg:mx-0 leading-[1.6]">
              AI company in Qatar engineering bilingual voice &amp; WhatsApp agents and AI automation
              that run your operations 24/7.
            </p>
            <div className="text-[13px] font-semibold text-ink-2 mt-5 mb-2">Stay Connected</div>
            <div className="flex justify-center lg:justify-start">
              <SubscribeForm />
            </div>
          </div>

          {/* Link columns — 2 per row on mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <FooterCol title="Services" items={SERVICES} />
            <FooterCol title="Resources" items={RESOURCES} />

            {/* Contact */}
            <div className="col-span-2 lg:col-span-1">
              <div className="text-xs tracking-[.12em] uppercase text-muted-2 font-bold mb-[18px]">
                Contact
              </div>
            {CONTACTS.map(([ph, city]) => (
              <div key={ph} className="flex items-center justify-between gap-4 mb-3">
                <span className="text-sm text-ink-2 font-medium">{ph}</span>
                <span className="text-[10px] tracking-[.1em] uppercase text-muted-2">{city}</span>
              </div>
            ))}
            <a href="mailto:Info@fivenodes.ai" className="block text-sm text-ink-2 my-[14px] font-medium hover:text-primary">
              Info@fivenodes.ai
            </a>
            <div className="bg-white border border-line rounded-xl px-4 py-[14px] text-[13px] text-muted leading-[1.6]">
              3rd Floor, Al Muftah Plaza,
              <br />
              Al Reem St, Doha, Qatar.
            </div>
            <div className="flex gap-[10px] mt-[22px] justify-center lg:justify-start">
              {Object.entries(SOCIALS).map(([name, d]) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="w-[38px] h-[38px] rounded-full bg-[#eceef4] text-ink-2 grid place-items-center transition-all duration-200 hover:bg-primary hover:text-white hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
            </div>
          </div>
        </div>


        {/* Bottom */}
        <div className="border-t border-line-soft mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[13px] text-muted-2">© 2026 Five Nodes. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[13px] text-muted hover:text-ink">Privacy Policy</Link>
            <Link href="/terms" className="text-[13px] text-muted hover:text-ink">Terms of Service</Link>
            <Link href="/faq" className="text-[13px] text-muted hover:text-ink">FAQ</Link>
            <Link href="/contact" className="text-[13px] text-muted hover:text-ink">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div className="text-xs tracking-[.12em] uppercase text-muted-2 font-bold mb-[18px]">
        {title}
      </div>
      <ul className="flex flex-col gap-3">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="text-sm text-ink-2 hover:text-primary transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
