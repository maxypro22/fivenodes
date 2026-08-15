export const SOLUTIONS = [
  {
    t: "AI Voice Solutions",
    tag: "Every call answered. Every lead captured.",
    d: "Inbound & outbound call agents with voice analytics, transcription, and multilingual support (AR/EN/HI).",
    f: ["Inbound Call Agent", "Outbound Call Agent", "Voice Analytics & Transcription", "Multilingual (AR/EN/HI)"],
  },
  {
    t: "AI Chat & Messaging",
    tag: "Your AI team across every platform.",
    d: "WhatsApp, Instagram DM, Facebook Messenger, Telegram and website live chat — replies in seconds.",
    f: ["WhatsApp AI Agent", "Instagram DM Agent", "Facebook Messenger Agent", "Telegram Agent", "Website Live Chat"],
  },
  {
    t: "Omnichannel Monitoring",
    tag: "See everything. Miss nothing.",
    d: "Live platform monitoring with sentiment analysis and full response tracking across every channel.",
    f: ["WhatsApp Monitoring", "Instagram Monitoring", "Facebook Monitoring", "Telegram Monitoring", "Sentiment Analysis", "Response Time Tracking", "Team Scoring"],
  },
  {
    t: "Smart Booking",
    tag: "From request to confirmation — zero humans.",
    d: "End-to-end booking with automatic staff assignment and real-time capacity management.",
    f: ["End-to-End Booking", "Staff Auto-Assignment", "Shift Optimization", "Capacity Management"],
  },
  {
    t: "Workflow Automation",
    tag: "Kill the busywork. Free your team.",
    d: "CRM automation, intelligent lead routing, and automated invoice follow-ups.",
    f: ["CRM Automation", "Lead Routing", "Invoice Follow-ups", "Internal Task Automation"],
  },
  {
    t: "Data & Intelligence",
    tag: "Faster decisions. Real numbers. Real-time.",
    d: "Behavior analytics, conversation intelligence and demand forecasting at a glance.",
    f: ["Behavior Analytics", "Conversation Intelligence", "Demand Forecasting", "AI Quality Scoring", "Custom Dashboards"],
  },
  {
    t: "AI Customer Memory",
    tag: "Your system remembers every customer.",
    d: "A customer memory engine that auto-updates your CRM with every interaction.",
    f: ["Customer Memory Engine", "Auto CRM Updates", "Interaction History", "Churn Detection & Alerts"],
  },
  {
    t: "Smart Notifications",
    tag: "No customer forgotten. Ever.",
    d: "Automated appointment reminders and intelligent re-engagement campaigns.",
    f: ["Pre-appointment Reminders", "Post-service Follow-ups", "Re-engagement Campaigns", "Review Requests"],
  },
];

export const PROCESS = [
  {
    n: "STEP 01",
    t: "Discovery & Strategy",
    d: "We audit your workflows and map exactly where AI drives the biggest impact for your business.",
  },
  {
    n: "STEP 02",
    t: "Custom Build & Integration",
    d: "Our engineers build and configure your AI solution from the ground up, integrating it seamlessly with your existing systems, CRM, and processes.",
  },
  {
    n: "STEP 03",
    t: "Launch & Ongoing Support",
    d: "We handle the full deployment, monitor performance, and continuously optimize your AI. You get a dedicated account manager every step of the way.",
  },
];

// logo: path to a verified real logo in /public/clients, or null to fall
// back to a styled text wordmark (kept null where the client name was too
// ambiguous to confidently match to one real company — see conversation).
export const CLIENTS = [
  { name: "Dania Maids", logo: "/clients/dania-maids.png" },
  { name: "A.I.C", logo: null },
  { name: "Aram", logo: null },
  { name: "Dania Real Estate", logo: "/clients/dania-real-estate.jpg" },
  { name: "Suhail", logo: "/clients/suhail.png" },
  { name: "X1 Milano", logo: null },
  { name: "NexIT", logo: "/clients/nexit.jpg" },
  { name: "Power Vision", logo: "/clients/power-vision.png" },
  { name: "Shop Five", logo: "/clients/shop-five.png" },
];

// Original brand logos (Simple Icons CDN, brand colors) with Clearbit fallback
export const TECH_LOGOS = [
  { name: "NVIDIA", slug: "nvidia", color: "76B900", domain: "nvidia.com" },
  {
    name: "OpenAI",
    slug: "openai",
    color: "000000",
    domain: "openai.com",
    svg: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.1419.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z",
  },
  { name: "Claude AI", slug: "claude", color: "D97757", domain: "anthropic.com" },
  { name: "Supabase", slug: "supabase", color: "3FCF8E", domain: "supabase.com" },
  { name: "Turso", slug: "turso", color: "1BF7B0", domain: "turso.tech" },
  { name: "Vercel", slug: "vercel", color: "000000", domain: "vercel.com" },
  { name: "GitHub", slug: "github", color: "181717", domain: "github.com" },
  { name: "Clerk", slug: "clerk", color: "6C47FF", domain: "clerk.com" },
];
