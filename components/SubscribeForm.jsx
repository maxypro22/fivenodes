"use client";

export default function SubscribeForm({ placeholder = "Enter your email" }) {
  return (
    <form className="relative w-full max-w-[360px]" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder={placeholder}
        className="w-full rounded-full border border-line bg-white ps-5 pe-14 py-3 text-sm text-ink placeholder:text-muted-2 focus:outline-none focus:border-primary"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="absolute top-1/2 -translate-y-1/2 end-1.5 w-9 h-9 rounded-full bg-primary text-white grid place-items-center hover:bg-primary-dark transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
          <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}
