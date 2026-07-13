export default function TopBar() {
  return (
    <div className="hidden lg:block bg-bg border-b border-line-soft text-xs text-muted">
      <div className="wrap flex items-center justify-between h-[34px]">
        <div className="flex items-center gap-[18px]">
          <span>Doha, Qatar — Al Muftah Plaza</span>
          <span className="w-px h-3 bg-line" />
          <a href="tel:+97430010105" dir="ltr" className="hover:text-ink">+974 3001 0105</a>
          <a href="tel:+97444440085" dir="ltr" className="hover:text-ink">+974 4444 0085</a>
        </div>
        <div className="flex items-center gap-[18px]">
          <a href="mailto:Info@fivenodes.ai" className="hover:text-ink">Info@fivenodes.ai</a>
        </div>
      </div>
    </div>
  );
}
