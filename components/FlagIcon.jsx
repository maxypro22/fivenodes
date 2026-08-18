/**
 * Country flags as inline SVG.
 *
 * Not emoji: Windows ships no glyphs for regional-indicator sequences, so
 * "\u{1F1F6}\u{1F1E6}" renders as the bare letters "QA" on most Windows
 * browsers. SVG renders identically on every platform.
 */

const FLAGS = {
  qa: {
    label: "Qatar",
    // 11:28 official ratio flattened to a usable box; maroon field with the
    // nine-point serrated white hoist.
    svg: (
      <>
        <rect width="28" height="20" fill="#8A1538" />
        <path
          fill="#fff"
          d="M0 0h6.4l3.2 1.111L6.4 2.222l3.2 1.111L6.4 4.444l3.2 1.112L6.4 6.667l3.2 1.111L6.4 8.889 9.6 10l-3.2 1.111 3.2 1.111-3.2 1.111 3.2 1.111-3.2 1.112 3.2 1.11-3.2 1.112L9.6 20H0z"
        />
      </>
    ),
  },
  gb: {
    label: "United Kingdom",
    svg: (
      <>
        <rect width="28" height="20" fill="#012169" />
        <path d="M0 0l28 20M28 0L0 20" stroke="#fff" strokeWidth="4" />
        <path d="M0 0l28 20M28 0L0 20" stroke="#C8102E" strokeWidth="2.4" />
        <path d="M14 0v20M0 10h28" stroke="#fff" strokeWidth="6.6" />
        <path d="M14 0v20M0 10h28" stroke="#C8102E" strokeWidth="4" />
      </>
    ),
  },
};

export default function FlagIcon({ code = "qa", className = "w-[22px] h-[16px]" }) {
  const f = FLAGS[code];
  if (!f) return null;
  return (
    <svg
      viewBox="0 0 28 20"
      className={`${className} shrink-0 rounded-[2px] ring-1 ring-black/10`}
      role="img"
      aria-label={f.label}
    >
      {f.svg}
    </svg>
  );
}
