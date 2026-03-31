# Corneroom Website

Promo site for [Corneroom](https://corneroom.com) — deployed via GitHub Pages.

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
2. Push to `main` — GitHub Actions builds and deploys automatically
3. Live at [corneroom.com](https://corneroom.com) within ~1 minute

### Larger changes (new sections, layout rework)

1. Create a branch:
   ```bash
   git checkout -b feature/new-section
   ```
2. Make changes, test locally with `npm run dev`
3. Push and open a PR:
   ```bash
   git push -u origin feature/new-section
   gh pr create --title "Add new section"
   ```
4. GitHub Actions builds the PR and comments a **preview URL**
5. Review the preview, get feedback, iterate
6. Merge PR → auto-deploys to production

### Updating photos

Replace any file in `public/images/heroes/` (numbered `1.jpg` through `12.jpg`). Odd numbers appear in the "Spaces" contexts, even numbers in "Hosts".

## Deployment

Fully automated via GitHub Actions:

| Trigger | What happens | URL |
|---------|-------------|-----|
| Push to `main` | Builds + deploys to production | [corneroom.com](https://corneroom.com) |
| Open/update PR | Builds + deploys preview, comments link | `corneroom.github.io/pr-{number}/` |
| Close PR | Cleans up preview | — |

### Workflows

- `.github/workflows/deploy.yml` — production deploy
- `.github/workflows/pr-preview.yml` — PR preview deploy + comment
- `.github/workflows/pr-cleanup.yml` — PR preview cleanup

### Custom Domain

DNS is configured on GoDaddy (`corneroom.com` → GitHub Pages IPs). The `CNAME` file in the repo root tells GitHub Pages which domain to serve.

## Design Tokens

Brand colors and design tokens are defined in `src/app/globals.css` under `@theme extend`, ported from the Flutter mobile app's design system:

- **Primary:** `#FF642B` (orange)
- **Categories:** Sleep `#86C3E1`, Work `#DBB5EE`, Shower `#FAF271`, Boat `#F9906C`, Nightlife `#FF642B`
- **Font:** SF Pro Rounded (falls back to system fonts)
