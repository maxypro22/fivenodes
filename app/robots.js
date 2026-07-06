const AI_BOTS = [
  "GPTBot",
  "ClaudeBot",
  "PerplexityBot",
  "GoogleOther",
  "Google-Extended",
  "OAI-SearchBot",
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
