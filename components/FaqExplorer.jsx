"use client";

import { useMemo, useState } from "react";
import FaqAccordion from "@/components/FaqAccordion";

export default function FaqExplorer({
  groups,
  searchPlaceholder = "Search the FAQ…",
  searchLabel = "Search the FAQ",
  sectionsLabel = "Sections",
  noResultsText = "No questions match your search.",
  // Optional string template with {count} and {query} placeholders. When
  // omitted, the default English (pluralised) result string is used.
  resultsTemplate,
}) {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return groups;
    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (it) =>
            it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [groups, q]);

  const totalMatches = filtered.reduce((s, g) => s + g.items.length, 0);

  const resultsLine = resultsTemplate
    ? resultsTemplate
        .replace("{count}", String(totalMatches))
        .replace("{query}", query)
    : `${totalMatches} result${totalMatches === 1 ? "" : "s"} for “${query}”.`;

  return (
    <div className="wrap grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-14">
      {/* Section navigation */}
      <aside className="hidden lg:block">
        <div className="sticky top-28">
          <div className="eyebrow mb-4">{sectionsLabel}</div>
          <nav className="flex flex-col gap-1.5">
            {groups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="text-[14px] text-muted hover:text-primary transition-colors py-1"
              >
                {g.section}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      <div className="min-w-0">
        {/* Search box */}
        <div className="relative max-w-[560px] mb-10">
          <label htmlFor="faq-search" className="sr-only">
            {searchLabel}
          </label>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-4 w-5 h-5 text-muted"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full bg-white border border-line rounded-[14px] py-3.5 pl-12 pr-4 text-[15px] text-ink placeholder:text-muted-2 outline-none focus:border-primary transition-colors shadow-card"
          />
        </div>

        {q && (
          <p className="text-[14px] text-muted mb-6">
            {totalMatches === 0 ? noResultsText : resultsLine}
          </p>
        )}

        <div className="flex flex-col gap-14">
          {filtered.map((group) => (
            <section
              key={group.id}
              id={group.id}
              className="scroll-mt-28"
            >
              <h2 className="font-heading font-bold text-xl md:text-2xl text-ink mb-1">
                {group.section}
              </h2>
              {group.desc && (
                <p className="text-[14px] text-muted mb-5">{group.desc}</p>
              )}
              <FaqAccordion items={group.items} />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
