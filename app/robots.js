// Answer engines and retrieval crawlers we want citing us.
const AI_BOTS = [
  "GPTBot", // OpenAI training + browsing
  "OAI-SearchBot", // ChatGPT Search index
  "ChatGPT-User", // live fetch when a user asks about us
  "ClaudeBot", // Anthropic
  "Claude-User",
  "PerplexityBot", // Perplexity index
  "Perplexity-User",
  "Google-Extended", // Gemini grounding
  "GoogleOther",
  "Applebot", // Siri / Spotlight
  "Applebot-Extended", // Apple Intelligence
  "meta-externalagent", // Meta AI
  "CCBot", // Common Crawl — feeds many open corpora
  "cohere-ai",
  "Amazonbot",
  "DuckAssistBot",
];

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://fivenodes.ai/sitemap.xml",
    host: "https://fivenodes.ai",
  };
}
