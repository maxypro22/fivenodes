export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/97430010105"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 md:right-6 md:bottom-6 z-[120] grid place-items-center w-14 h-14 rounded-full bg-gradient-to-br from-wa-1 to-wa-2 text-white shadow-[0_12px_30px_-8px_rgba(18,140,62,.6)] transition-transform duration-200 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
    >
      <span className="absolute inset-0 rounded-full bg-wa-1/40 animate-ping [animation-duration:2.5s]" />
      <svg viewBox="0 0 24 24" fill="currentColor" className="relative w-7 h-7">
        <path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5s-1.2-1.6-1.2-3 .7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.5-.3.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l.8-1c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.4.3.1.2.1.8-.1 1.5z" />
      </svg>
    </a>
  );
}
