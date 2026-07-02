export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/97430010105"
      className="fixed right-[22px] bottom-[22px] z-[120] flex items-center gap-[10px] bg-gradient-to-br from-wa-1 to-wa-2 text-white font-bold text-sm px-5 py-3 rounded-full shadow-[0_12px_30px_-8px_rgba(18,140,62,.6)] transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.02]"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
        <path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5s-1.2-1.6-1.2-3 .7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.5-.3.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l.8-1c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.4.3.1.2.1.8-.1 1.5z" />
      </svg>
      Chat on WhatsApp
    </a>
  );
}
