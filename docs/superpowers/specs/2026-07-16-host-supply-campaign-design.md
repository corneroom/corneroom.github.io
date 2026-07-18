# Founding-Host Supply Campaign — Design

**Date:** 2026-07-16
**Status:** Approved by Prince (design review in session)
**Goal:** Onboard as many hosts as possible before full launch. Corneroom is only
useful with supply; the same mobile app is used for host onboarding, so the
campaign launches only after App Store 1.0.0 approval.

## Strategy summary

- **Focus cities (5):** Toronto, NYC, Bangkok, Chiang Mai, Hanoi. Paid spend
  weighted toward SE Asia + Toronto; NYC runs at reduced weight (high CPMs).
- **Offer:** Founding Host = permanent badge + **0% platform fee for the first
  12 months** + first placement when guests arrive.
- **Timing:** Everything is built now; nothing deploys until 1.0.0 is approved.
  No pre-approval teaser or waitlist.
- **Android:** onboards via a **Google Play Open testing** track — a public
  Play Store listing + join link that installs like a normal app, with only
  private feedback (no public star ratings) while in beta. A Play Console
  **organization account already exists**, so the remaining work is listing +
  forms + pipeline (see Dependencies). Email capture ("Android is coming —
  leave your email", Formspree; site is a static export) ships on the page
  only as a fallback if the Play track isn't live at campaign launch.
- **North-star metric:** published listings per city — not installs, not taps.

## 1. `/host` flagship page

Built in this repo (Next.js static export, home design-system tokens from
`src/app/home.css`). Sections:

1. **Hero** — "List your space & earn" (canonical shipped copy), **both store
   badges** (App Store + Google Play open-testing link), offer strap:
   "Founding hosts keep 100% of their earnings for 12 months."
2. **What you can list** — five category cards with brand category colors:
   Sleep #86C3E1 (spare room, guest bed), Work #DBB5EE (desk, home office),
   Shower #FAF271 (a bathroom — travelers between flights, gym-less days),
   Boat #F9906C (berth, day use), Social #FF642B (rooftop, backyard, hangout
   space) — always "& more", never a fixed count of categories.
3. **How you earn** — you set your price per night or per hour depending on
   category; payouts via Stripe; link to existing `/payouts` for mechanics.
   No invented income figures anywhere. Free/community hosting mentioned
   honestly as an option.
4. **Founding-host offer** — 0% platform fee for 12 months, permanent
   Founding Host badge, first placement when guests arrive. Honest framing:
   "Guests arrive at full launch — founding hosts are live from day one."
5. **Trust** — both hosts and guests are ID-verified (always say both), hosts
   approve every booking, reviews.
6. **How it works (3 steps)** — Download → Verify (a few minutes) → List
   (photos, price, availability). ~10 minutes total; sets friction
   expectations up front.
7. **FAQ** with FAQPage structured data — what can I list / fees / payouts /
   when do guests arrive / is it free / Android.
8. **Android** — Google Play badge → open-testing listing. Fallback if Play
   isn't live at launch: Formspree-embedded email capture form.

SEO plumbing per `promo/seo-landing-pages.md` checklist: unique title (≤60
chars) + meta description (≤155), single H1, sitemap.xml entry, IndexNow ping
on deploy, internal links to related pages and the app.

## 2. `/host/{city}` pages (5)

One template + `cities.json` + `generateStaticParams` (the SEO plan's
programmatic-page pattern). Slugs: `/host/toronto`, `/host/nyc`,
`/host/bangkok`, `/host/chiang-mai`, `/host/hanoi`.

Per page: localized hero ("Become a founding host in Hanoi"), city-appropriate
category emphasis (Chiang Mai/Hanoi: desks + nomad demand; Toronto/NYC: spare
rooms + day-use), same offer/steps/CTA/FAQ as the hub, BreadcrumbList
structured data. **No local price claims** until real data exists.

## 3. Campaign kit (files under `promo/`, ready at approval)

| Channel | Deliverables |
|---|---|
| Meta (IG/FB) | 3 creative concepts × square (1080×1080) + story (1080×1920), primary-text/headline variants per city |
| TikTok | 2–3 scripts + rendered 9:16 motion-graphic videos (10–20s, HyperFrames) |
| X | Founder launch thread (build-in-public tone) + announcement graphic |
| LinkedIn | Toronto/NYC "income from your spare space" post |
| Communities | Copy-paste posts per city: FB groups, Reddit (r/toronto, nomad subs), nomad Discords — community-toned, not ad-toned |

**Three ad concepts:**
- **(a) Earn** — "Your spare room could pay your rent" (claim-free phrasing;
  no dollar figures — ad-policy and honesty requirement).
- **(b) Curiosity** — "You can list a *shower*." Category surprise is the most
  differentiated hook.
- **(c) Status** — "Be the first host in Chiang Mai." Founding scarcity.

All copy follows the ASO brand voice: no corner/Corneroom puns, no "luxury",
"spaces" not "rooms/listings", both-sides verified, "& more", free stays real
but not overstated.

## 4. Measurement

- UTM scheme on every campaign link: `utm_source=meta|tiktok|x|linkedin|community`,
  `utm_medium=paid|organic`, `utm_campaign=host-{city}`.
- App Store campaign tokens (`pt`/`ct`) on App Store links for App Store
  Connect campaign analytics.
- Web analytics: the site already has consent-gated GA4
  (`src/components/Analytics.tsx`, `G-39FGGH8GE4`) — UTM-tagged traffic to the
  host pages is captured there automatically once the visitor accepts cookies.
  No new analytics work needed.
- Watch published listings per city (backend/dashboard), not installs.

## 5. Dependencies — must be true before campaigns go live

1. **App Store 1.0.0 approved** — gates page deploy and everything else.
2. **Offer is real in the product:** 0%-fee configuration for founding hosts
   in payment-service; Founding Host badge (may ship in a follow-up build,
   but page copy must match whatever is actually honored at launch).
3. **Thailand SMS sender-ID registration** resolved (Twilio) — blocker for
   Bangkok/Chiang Mai spend if signup requires OTP; verify Vietnam delivery.
4. **Google Play Open testing track live** (org Play Console account exists):
   - Store listing: description copy + ASO screenshots re-exported at Play
     sizes + feature graphic (1024×500).
   - Data safety form (same answers as the Apple privacy nutrition label).
   - Content rating questionnaire (chat + UGC, mirrors the iOS declaration).
   - Fastlane `supply` lane (Play Developer API key) added alongside the
     Firebase lane — same build number on both platforms, per the standing
     rule.
   - Budget one review round-trip: first Google review can take up to a week;
     data-safety mismatches are the most common rejection.
   - Stripe stays as-is: bookings are real-world services, exempt from Google
     Play Billing.
5. NYC campaigns run at reduced spend weight.

**Build order:** pages + full campaign kit now → deploy at approval →
campaigns go live per city as that city's dependencies clear.

## Out of scope

- Play Store **production** launch (open testing is the beta channel for now;
  promotion to production is a later decision).
- Host referral program (post-launch lever).
- Programmatic SEO city pages beyond the 5 host pages (separate SEO plan).
- Demand-side (traveler) campaigns.
