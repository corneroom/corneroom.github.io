# Corneroom Website

Promo site for [Corneroom](https://corneroom.com) — deployed via **Cloudflare Pages**.

> [!IMPORTANT]
> **Deployment is Cloudflare Pages, NOT GitHub Pages.**
> Production deploys are built and served by **Cloudflare** (push to `main`), or
> from a machine with **Wrangler** (`npm run deploy`). There are **no GitHub
> Actions** in the deploy path, so being out of Actions minutes does **not**
> block website deploys.
>
> The following files in this repo are **dead legacy artifacts** from the old
> GitHub Pages setup — do **not** edit them, trust them, or build deploy tooling
> around them:
> - `.github/workflows/deploy.yml` (GitHub Pages workflow — not used)
> - `CNAME` (GitHub Pages custom-domain file — Cloudflare routes via its own DNS)
>
> See the [Deployment](#deployment) section before changing anything deploy-related.

## Stack

- **Next.js 15** — static export
- **Tailwind CSS v4** — styling
- **Framer Motion** — scroll animations
- **shadcn/ui** — component utilities (cva, clsx, tailwind-merge, radix)
- **Lucide React** — icons

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── globals.css         # Tailwind config + design tokens + animations
│   └── page.tsx            # Main page — composes all sections
├── components/
│   ├── Navbar.tsx           # Fixed nav, scroll-aware bg
│   ├── Hero.tsx             # Gradient headline, CTAs, social proof
│   ├── Categories.tsx       # 5 space category cards with hover effects
│   ├── HowItWorks.tsx       # 3-step cards
│   ├── GlobalMap.tsx        # SVG dot world map with city markers
│   ├── ForHosts.tsx         # Host perks + animated earnings card
│   ├── Testimonials.tsx     # Infinite marquee of review cards
│   ├── TrustBadges.tsx      # 6-column trust icon grid
│   ├── DownloadCTA.tsx      # Full-width gradient download banner
│   ├── Footer.tsx           # Multi-column mega footer
│   └── maps/
│       └── DotMap.tsx       # SVG world dot map component
└── lib/
    └── utils.ts            # cn() utility (clsx + tailwind-merge)

public/
└── images/heroes/          # 1.jpg through 12.jpg (replace to update)
```

## Making Changes

### Quick edits (content, copy, colors)

1. Edit files in `src/` directly
2. Test locally with `npm run dev`
3. Push to `main` — Cloudflare Pages picks up the change and deploys automatically
4. Live at [corneroom.com](https://corneroom.com) within a few minutes

### Larger changes (new sections, layout rework)

1. Create a branch:
   ```bash
   git checkout -b feature/new-section
   ```
2. Make changes, test locally with `npm run dev`
3. Push the branch:
   ```bash
   git push -u origin feature/new-section
   ```
4. Cloudflare Pages builds a **preview deployment** for the branch and exposes it under a per-branch subdomain (visible in the Cloudflare Pages dashboard or the GitHub PR check)
5. Review the preview, iterate
6. Open a PR and merge → production deploys from `main`

### Updating photos

Replace any file in `public/images/heroes/` (numbered `1.jpg` through `12.jpg`). Odd numbers appear in the "Spaces" contexts, even numbers in "Hosts".

## Deployment

Hosted on **Cloudflare Pages** with the GitHub repo connected as the build source. Build and deploy are handled by Cloudflare — **no GitHub Actions workflow is responsible for production deploys** (the `deploy.yml` in this repo is a dead GitHub Pages leftover). Pushing to `main` triggers an automatic production build; pushing to any other branch triggers a preview deployment.

| Trigger | What happens | URL |
|---------|-------------|-----|
| Push to `main` | Cloudflare Pages builds + deploys to production | [corneroom.com](https://corneroom.com) |
| Push to feature branch | Cloudflare Pages builds + deploys a preview | per-branch preview URL (see Cloudflare dashboard) |
| `npm run deploy` (local) | Build locally + direct-upload to Cloudflare via Wrangler | production (or preview, see below) |

### Local deploy (Wrangler — no git push, no Actions)

Deploys the locally-built `out/` straight to Cloudflare Pages. Useful to ship a
change without going through a git push.

One-time setup:

```bash
npx wrangler login                       # browser OAuth to your Cloudflare account
export CF_PAGES_PROJECT=<project-name>   # exact Pages project name (Cloudflare dashboard → Workers & Pages)
```

Then:

```bash
npm run deploy                # build + upload out/ to production (--branch=main)
# preview first (recommended): CF_DEPLOY_BRANCH=preview npm run deploy
```

`CF_PAGES_PROJECT` is required; set `CF_DEPLOY_BRANCH` to anything other than
`main` to publish a preview deployment instead of production.

### Build settings (Cloudflare dashboard)

- **Framework preset**: Next.js (Static HTML Export)
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Node version**: 20+ (matches `next.config.ts` requirements)

### Custom Domain

DNS is configured on GoDaddy. `corneroom.com` is delegated to Cloudflare Pages via the standard CNAME / Cloudflare DNS records configured in the Cloudflare dashboard. The `CNAME` file in the repo root is a legacy artifact from the previous GitHub Pages deploy and is no longer load-bearing — Cloudflare Pages routes via its own DNS configuration.

## Design Tokens

Brand colors and design tokens are defined in `src/app/globals.css` under `@theme extend`, ported from the Flutter mobile app's design system:

- **Primary:** `#FF642B` (orange)
- **Categories:** Sleep `#86C3E1`, Work `#DBB5EE`, Shower `#FAF271`, Boat `#F9906C`, Nightlife `#FF642B`
- **Font:** SF Pro Rounded (falls back to system fonts)
