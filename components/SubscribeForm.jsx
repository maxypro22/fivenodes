"use client";

export default function SubscribeForm() {
  return (
    <form className="flex gap-2 max-w-[320px]" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Your email"
        className="flex-1 border border-line rounded-lg px-[14px] py-[11px] text-sm bg-white focus:outline-none focus:border-primary"
      />
      <button
        type="submit"
        className="bg-primary text-white px-5 py-[11px] rounded-lg font-semibold text-sm hover:bg-primary-dark"
      >
        Subscribe
      </button>
    </form>
  );
}
