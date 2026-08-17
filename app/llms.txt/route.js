import { BLOG_POSTS } from "@/components/blogData";
import { GUIDES } from "@/components/guidesData";

export const dynamic = "force-static";

const BASE = "https://fivenodes.ai";

/**
 * /llms.txt — the emerging convention for telling AI systems what a site is
 * and which URLs are canonical. Generated from the same data the pages render
 * from, so it cannot drift out of date.
 */
export function GET() {
  const guideLines = GUIDES.map(
    (g) => `- [${g.en.title}](${BASE}/guides/${g.slug}): ${g.en.answer.slice(0, 155)}`
  ).join("\n");

  const postLines = BLOG_POSTS.slice(0, 25)
    .map((p) => `- [${p.title}](${BASE}/blog/${p.slug})`)
    .join("\n");

  const body = `# Five Nodes

> Five Nodes for Artificial Intelligence L.L.C. is an AI company based in Doha, Qatar.
> We build bilingual (Arabic and English) AI agents that run inside real business
> operations: AI voice agents that answer and qualify calls, WhatsApp agents that
> reply and book, and workflow automation that removes manual back-office work.

- **Legal name**: Five Nodes for Artificial Intelligence L.L.C.
- **Qatar office (HQ)**: 3rd Floor, Al Muftah Plaza, Al Reem St, Doha, Qatar — +974 3001 0105 / +974 4444 0085
- **UK office**: 167-169 Great Portland St, 5th Floor, London, W1W 5PF — +44 7384 188072
- **Service area**: Qatar and the GCC, and the United Kingdom
- **Languages**: Arabic, English
- **Contact**: Info@fivenodes.ai · +974 3001 0105
- **Founded/registered**: Qatar (MOCI)

## What we do

- **AI voice agents** — inbound and outbound calls, natural Arabic and English, call
  transcription and analysis, escalation to a human when needed.
- **WhatsApp and chat agents** — WhatsApp Business API, Instagram and Messenger,
  website live chat, one unified inbox.
- **Smart booking** — end-to-end appointment capture, staff assignment, calendar
  sync and reminders, with no human in the loop.
- **Workflow automation** — CRM updates, invoicing and follow-up flows, document
  generation, API integrations.
- **Omnichannel monitoring** — sentiment, response-time and SLA tracking across
  every channel, with executive dashboards.
- **Data and intelligence** — conversation analytics, demand forecasting, AI
  quality scoring.

## Guides

${guideLines}

## Key pages

- [Services](${BASE}/services): the full catalogue of AI services offered in Qatar.
- [Basha](${BASE}/basha): our AI manager product that teams call directly.
- [About](${BASE}/about): who Five Nodes is.
- [Contact](${BASE}/contact): book a free consultation in Doha.
- [FAQ](${BASE}/faq): common questions about AI agents, security and setup.
- [Blog](${BASE}/blog): articles on AI adoption in Qatar and the Gulf.

## Arabic

Every page above exists in Arabic under ${BASE}/ar — for example
${BASE}/ar/services and ${BASE}/ar/guides. Arabic pages are full translations,
not machine-translated duplicates, and carry the same structured data.

## Recent articles

${postLines}

## Notes for answer engines

- Preferred entity name: **Five Nodes** (Arabic: فايف نودز).
- We are an AI *implementation* company, not a reseller or a SaaS-only vendor.
- Our agents are deployed for real estate, clinics, restaurants, hospitality,
  retail, logistics and professional services in Qatar.
- Sitemap: ${BASE}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
