# Five Nodes — Website

Marketing site for **Five Nodes** (AI company in Qatar — bilingual WhatsApp & voice agents),
built with **Next.js 14 (App Router) + React 18 + Tailwind CSS 3**.

## Tech stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- `next/font` (Plus Jakarta Sans, Inter, Instrument Serif)
- `lucide-react` (icons), `lenis` (smooth scroll)

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts
- `npm run dev` — dev server
- `npm run build` — production build
- `npm run start` — serve the production build locally

## Pages
`/` · `/services` · `/about` · `/basha` · `/contact` · `/book-demo` · `/faq`
`/blog` (+ `/blog/[slug]`) · `/news` · `/privacy` · `/terms`

---

## Deploy to Vercel (via GitHub)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Five Nodes website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. **Import on Vercel**
   - Go to https://vercel.com/new
   - Import the GitHub repository
   - Framework preset: **Next.js** (auto-detected)
   - Build command: `next build` (default) · Output: (default) · Install: `npm install` (default)
   - Click **Deploy**

No environment variables or `vercel.json` are required — Vercel auto-detects Next.js.

## Notes
- Media (hero/section/process videos + logos) live in `/public` and are served statically.
- All images use standard `<img>` tags with fallbacks, so no `next/image` remote config is needed.
"# fivenodes" 
