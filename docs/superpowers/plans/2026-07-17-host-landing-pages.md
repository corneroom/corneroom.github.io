# Host Landing Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the founding-host supply funnel on corneroom.com — a `/host` flagship page plus five templated city pages (`/host/toronto`, `/host/nyc`, `/host/bangkok`, `/host/chiang-mai`, `/host/hanoi`) — ready to deploy the day App Store 1.0.0 is approved.

**Architecture:** Static Next.js pages (`output: export`) in the existing website repo, built entirely from the shared landing-page kit in `src/app/_landing/parts.tsx` (nav, footer, store badges, FAQ + JSON-LD builders) and the existing `home.css`/`landing.css` classes. City pages are one template + a typed data file via `generateStaticParams` — the same pattern as the SEO plan's programmatic pages.

**Tech Stack:** Next.js (App Router, static export), TypeScript, existing CSS design tokens. No new dependencies.

**Spec:** `docs/superpowers/specs/2026-07-16-host-supply-campaign-design.md`. This plan covers the spec's sections 1, 2, and the page-side of 4 (GA4 already wired). The campaign kit (section 3), Play open-testing track, and backend founding-offer work (section 5) are separate follow-up plans — they live in other repos/surfaces.

## Global Constraints

- **NEVER `git push` this repo during implementation** — push deploys corneroom.com (GitHub Pages). Commit locally only. Deploy happens only after App Store 1.0.0 approval, with explicit owner go-ahead (Task 7).
- Brand voice (from CLAUDE.md, mandatory): **no corner/Corneroom puns**; no "luxury"; say "spaces" (not rooms/listings) in marketing copy; verification is **both hosts and guests** — never just one; **"& more"** — never a fixed count of categories; free stays are real, don't overstate.
- **No income figures or dollar amounts anywhere** — "you set your price" is the ceiling of any earnings claim.
- Founding offer copy, verbatim everywhere it appears: **0% platform fee for your first 12 months** + **permanent Founding Host badge** + **first placement when guests arrive**. Honest framing: guests arrive at full launch.
- Category colors: Sleep `#86C3E1`, Work `#DBB5EE`, Shower `#FAF271`, Boat `#F9906C`, Social `#FF642B`.
- Reuse `src/app/_landing/parts.tsx` exports; do not fork the kit. Site is a static export — no server code, no API routes.
- Every page: unique `<title>` ≤ ~60 chars, meta description ≤ ~155 chars, single H1, canonical URL, sitemap entry.

---

### Task 1: City data file

**Files:**
- Create: `src/app/host/cities.ts`

**Interfaces:**
- Produces: `type HostCity`, `const HOST_CITIES: HostCity[]`, `function getCity(slug: string): HostCity | undefined`. Task 3 imports all three. Slugs are exactly: `toronto`, `nyc`, `bangkok`, `chiang-mai`, `hanoi`.

- [ ] **Step 1: Write the file**

```ts
export type HostCity = {
  slug: string;
  name: string;
  title: string; // <title> tag
  description: string; // meta description
  heroSub: string; // hero paragraph
  demand: { title: string; desc: string }[]; // "what travelers need here"
};

export const HOST_CITIES: HostCity[] = [
  {
    slug: "toronto",
    name: "Toronto",
    title: "Become a Corneroom Host in Toronto — List Your Space",
    description:
      "List a spare room, desk, shower & more in Toronto. Verified hosts & guests, you set the price — founding hosts keep 100% of their earnings for 12 months.",
    heroSub:
      "Toronto never has enough affordable space. Your spare room, quiet desk or backyard can help a traveler land softly — and earn, on your terms. Corneroom is Toronto-built, and founding hosts here open the map for everyone else.",
    demand: [
      {
        title: "Spare rooms & guest beds",
        desc: "Travelers, newcomers and visiting students priced out of downtown hotels are looking for a welcoming, affordable night.",
      },
      {
        title: "Desks & home offices",
        desc: "Remote workers across the GTA want a quiet, bookable desk closer than a commute and warmer than a chain café.",
      },
      {
        title: "Social spaces",
        desc: "Rooftops, backyards and living rooms for meetups and hangouts — space for people to actually get together.",
      },
    ],
  },
  {
    slug: "nyc",
    name: "New York",
    title: "Become a Corneroom Host in New York — List Your Space",
    description:
      "List a spare room, desk, shower & more in NYC. Verified hosts & guests, you set the price — founding hosts keep 100% of their earnings for 12 months.",
    heroSub:
      "In a city where every square foot counts, yours can count for more. A spare room, a desk that's empty all day, even a shower between flights — New Yorkers can share it, on their terms, with a verified community.",
    demand: [
      {
        title: "Spare rooms & guest beds",
        desc: "Visitors squeezed by hotel prices want a real, affordable place to sleep — hosted by a real New Yorker.",
      },
      {
        title: "Day-use & showers",
        desc: "Red-eye arrivals and layover travelers need a shower and a reset hours before any check-in time.",
      },
      {
        title: "Desks & workspaces",
        desc: "Freelancers and traveling professionals want a bookable desk that isn't a $600/month coworking commitment.",
      },
    ],
  },
  {
    slug: "bangkok",
    name: "Bangkok",
    title: "Become a Corneroom Host in Bangkok — List Your Space",
    description:
      "List a spare room, desk, shower & more in Bangkok. Verified hosts & guests, you set the price — founding hosts keep 100% of their earnings for 12 months.",
    heroSub:
      "Bangkok is one of the most visited cities on earth — and one of the hardest to rest in between a landing and a check-in. A spare room, a shower, a quiet desk: whatever space you have, travelers are already looking for it.",
    demand: [
      {
        title: "Showers & day-use",
        desc: "Layover and overnight-bus travelers arrive hours before check-in anywhere — a hot shower and a reset is exactly what they need.",
      },
      {
        title: "Spare rooms & guest beds",
        desc: "Budget travelers and digital nomads want an affordable, verified stay with a local — not another anonymous hostel bunk.",
      },
      {
        title: "Desks & workspaces",
        desc: "Remote workers passing through want a bookable desk with good wifi, by the hour or the day.",
      },
    ],
  },
  {
    slug: "chiang-mai",
    name: "Chiang Mai",
    title: "Become a Corneroom Host in Chiang Mai — List Your Space",
    description:
      "List a spare room, desk, shower & more in Chiang Mai. Verified hosts & guests, you set the price — founding hosts keep 100% of their earnings for 12 months.",
    heroSub:
      "Chiang Mai is the digital-nomad capital of the world — thousands of remote workers arrive every month looking for a desk, a room, a community. Founding hosts here will be first on the map when they land.",
    demand: [
      {
        title: "Desks & workspaces",
        desc: "Nomads want a quiet, bookable desk — a real alternative to café-hopping and crowded coworking spaces.",
      },
      {
        title: "Spare rooms & guest beds",
        desc: "New arrivals want an affordable first landing with a local before they commit to a monthly rental.",
      },
      {
        title: "Social spaces",
        desc: "The nomad community runs on meetups — gardens, rooftops and living rooms that can host one are in demand.",
      },
    ],
  },
  {
    slug: "hanoi",
    name: "Hanoi",
    title: "Become a Corneroom Host in Hanoi — List Your Space",
    description:
      "List a spare room, desk, shower & more in Hanoi. Verified hosts & guests, you set the price — founding hosts keep 100% of their earnings for 12 months.",
    heroSub:
      "Hanoi's mix of travelers, students and remote workers means real demand for real spaces — a spare room in the Old Quarter, a quiet desk in Ba Đình, a place to shower after an overnight train. Your space can be first.",
    demand: [
      {
        title: "Spare rooms & guest beds",
        desc: "Backpackers and long-stay travelers want an affordable, verified stay with a local host.",
      },
      {
        title: "Desks & workspaces",
        desc: "A growing remote-work scene is looking for bookable desks with reliable wifi.",
      },
      {
        title: "Showers & day-use",
        desc: "Overnight trains and buses from Sapa and beyond arrive at dawn — hours before any check-in.",
      },
    ],
  },
];

export function getCity(slug: string): HostCity | undefined {
  return HOST_CITIES.find((c) => c.slug === slug);
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: exits 0 (no output).

- [ ] **Step 3: Commit**

```bash
git add src/app/host/cities.ts
git commit -m "Add host city data for founding-host landing pages"
```

---

### Task 2: `/host` flagship page

**Files:**
- Create: `src/app/host/page.tsx`

**Interfaces:**
- Consumes: `HOST_CITIES` from `./cities` (Task 1); `fontVars`, `LandingNav`, `LandingFooter`, `StoreButtons`, `TrustCards`, `FaqSection`, `RelatedLinks`, `JsonLd`, `ChipCheck`, `buildFaqJsonLd`, `buildBreadcrumbJsonLd`, `FaqItem` from `../_landing/parts`.
- Produces: the `/host` route. Task 5 links to it from footer + sibling pages; Task 3's city pages link back to it.

- [ ] **Step 1: Write the page**

```tsx
import type { Metadata } from "next";
import "../home.css";
import "../landing.css";
import {
  fontVars,
  LandingNav,
  LandingFooter,
  StoreButtons,
  TrustCards,
  FaqSection,
  RelatedLinks,
  JsonLd,
  ChipCheck,
  buildFaqJsonLd,
  buildBreadcrumbJsonLd,
  type FaqItem,
} from "../_landing/parts";
import { HOST_CITIES } from "./cities";

const title = "Become a Host — List Your Space & Earn | Corneroom";
const description =
  "List a spare room, desk, shower, boat, hangout space & more. Verified hosts & guests, you set the price — founding hosts keep 100% of their earnings for 12 months.";
const slug = "host";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `https://corneroom.com/${slug}` },
  openGraph: {
    title,
    description,
    url: `https://corneroom.com/${slug}`,
    siteName: "Corneroom",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@corneroomApp",
    title,
    description,
  },
  other: { "theme-color": "#FF642B" },
};

const LISTABLE = [
  { label: "Sleep", dot: "#86C3E1", desc: "A spare room or guest bed", shower: false },
  { label: "Work", dot: "#DBB5EE", desc: "A desk or quiet home office", shower: false },
  { label: "Shower", dot: "#FAF271", desc: "A bathroom travelers can book", shower: true },
  { label: "Boat", dot: "#F9906C", desc: "A berth or day-use deck", shower: false },
  { label: "Social", dot: "#FF642B", desc: "A rooftop, backyard or living room", shower: false },
];

const faqs: FaqItem[] = [
  {
    q: "What can I list on Corneroom?",
    a: "More than you'd think: a spare room or guest bed, a desk or home office, a bathroom travelers can book for a shower, a boat berth or day-use deck, a rooftop or living room for hangouts — & more, with new categories landing over time. If travelers could use it, you can probably list it.",
  },
  {
    q: "How much does it cost to be a host?",
    a: "Listing a space is free. Founding hosts pay a 0% platform fee for their first 12 months — you keep 100% of what you earn. After that, a small, capped service fee applies to paid bookings, always shown transparently before anything is charged.",
  },
  {
    q: "How do I get paid?",
    a: "You set your price — per night or per hour depending on the kind of space. Guests pay in the app, and your earnings are paid out securely to your bank through Stripe. See the payouts page for exactly how and when money moves.",
  },
  {
    q: "How much can I earn?",
    a: "That's genuinely up to you — your price, your space, your availability, your city. We won't invent a number: hosting income depends on demand where you are. What we can promise is that you keep 100% of it for your first 12 months as a founding host.",
  },
  {
    q: "When do guests arrive?",
    a: "Hosting opens first — that's on purpose. Travelers arrive at full launch, and founding hosts are live from day one with first placement in their city. Listing now means you're what travelers find the moment they start looking.",
  },
  {
    q: "Do I have to host for free?",
    a: "No. Free community hosting is a real and loved part of Corneroom, but it's entirely optional — plenty of hosts charge for every booking. You choose per space.",
  },
  {
    q: "Am I in control of who stays?",
    a: "Completely. Every guest is ID-verified — just like every host — and you approve every booking yourself. You set house rules, and reviews on both sides keep the community accountable.",
  },
];

const related = [
  ...HOST_CITIES.map((c) => ({
    href: `/host/${c.slug}`,
    title: `Host in ${c.name}`,
    blurb: `Become a founding host in ${c.name}.`,
  })),
  {
    href: "/payouts",
    title: "How payouts work",
    blurb: "When and how your earnings reach your bank.",
  },
  {
    href: "/pricing",
    title: "Pricing & fees",
    blurb: "Transparent, capped fees — nothing hidden.",
  },
];

export default function HostPage() {
  return (
    <div className={`home landing ${fontVars}`}>
      <JsonLd data={buildBreadcrumbJsonLd("Become a host", slug)} />
      <JsonLd data={buildFaqJsonLd(faqs)} />

      <LandingNav />

      <main>
        {/* HERO */}
        <section className="lp-hero">
          <div className="wrap">
            <p className="eyebrow">Hosts · Founding offer</p>
            <h1>
              List your space &amp; <span className="hl">earn</span>
            </h1>
            <p className="lp-sub">
              A spare room, a quiet desk, even a bathroom between flights — travelers need it,
              and you set the price. Founding hosts keep 100% of their earnings for their first
              12 months, with a permanent badge and first placement when guests arrive.
            </p>
            <StoreButtons />
            <div className="hero-badges">
              <span className="chip">
                <ChipCheck /> 0% platform fee for 12 months
              </span>
              <span className="chip">
                <ChipCheck /> Verified hosts &amp; guests
              </span>
              <span className="chip">
                <ChipCheck /> You approve every booking
              </span>
            </div>
          </div>
        </section>

        {/* WHAT YOU CAN LIST */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">What you can list</p>
              <h2>If travelers can use it, you can share it</h2>
              <p>
                Corneroom goes beyond overnight stays — spaces are listed by what they&apos;re{" "}
                <em>for</em>, and the categories keep growing.
              </p>
            </div>
            <div className="catstrip">
              {LISTABLE.map((c) => (
                <div key={c.label} className="cs">
                  <span
                    className={`csdot${c.shower ? " dot-shower" : ""}`}
                    style={{ background: c.dot }}
                    aria-hidden="true"
                  />
                  <b>{c.label}</b>
                  <small>{c.desc}</small>
                </div>
              ))}
              <div className="cs more">
                <span className="csplus" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
                <b>&amp; more</b>
                <small>New categories keep landing</small>
              </div>
            </div>
          </div>
        </section>

        {/* HOW YOU EARN */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">How you earn</p>
              <h2>Your space, your price, your rules</h2>
            </div>
            <div className="prose">
              <p>
                You decide what your space is worth — per night for stays, per hour for desks,
                showers and day-use. Guests pay in the app, and your earnings are paid out
                securely to your bank through Stripe. Exactly how and when money moves is spelled
                out on the <a href="/payouts">payouts page</a>.
              </p>
              <ul className="checklist">
                <li>
                  <ChipCheck />
                  <span>You set the price — and change it any time</span>
                </li>
                <li>
                  <ChipCheck />
                  <span>Founding hosts keep 100% of earnings for 12 months</span>
                </li>
                <li>
                  <ChipCheck />
                  <span>Prefer community over commerce? Free hosting is welcome too</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOUNDING OFFER */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">The founding-host offer</p>
              <h2>Early hosts get the best deal we&apos;ll ever offer</h2>
            </div>
            <div className="prose">
              <p>
                We&apos;re opening hosting before travelers arrive — on purpose. The hosts who
                list now are the reason there&apos;s something worth launching, so they get
                terms nobody after them will:
              </p>
              <ul className="checklist">
                <li>
                  <ChipCheck />
                  <span>
                    <b>0% platform fee for your first 12 months</b> — keep 100% of what you earn
                  </span>
                </li>
                <li>
                  <ChipCheck />
                  <span>
                    <b>Permanent Founding Host badge</b> on your profile and every space you list
                  </span>
                </li>
                <li>
                  <ChipCheck />
                  <span>
                    <b>First placement</b> in your city when guests arrive at full launch
                  </span>
                </li>
              </ul>
              <p>
                To be clear about timing: guests arrive at full launch. Founding hosts are live
                from day one — set up, verified, and first in line when travelers start searching.
              </p>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">Built on trust</p>
              <h2>Verified on both sides, always</h2>
              <p>
                Nobody books anonymously. Hosts and guests both complete ID verification — so
                opening your door never means opening it to a stranger you know nothing about.
              </p>
            </div>
            <TrustCards />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">How it works</p>
              <h2>From download to listed in about 10 minutes</h2>
            </div>
            <div className="lp-steps">
              <div className="step">
                <div className="n">1</div>
                <h3>Download &amp; sign up</h3>
                <p>
                  Get the Corneroom app and create your free account — hosting and traveling live
                  in the same app.
                </p>
              </div>
              <div className="step">
                <div className="n">2</div>
                <h3>Get verified</h3>
                <p>
                  Verify your ID once — it takes a few minutes, and every guest does the same
                  before they can ever book.
                </p>
              </div>
              <div className="step">
                <div className="n">3</div>
                <h3>List your space</h3>
                <p>
                  Add photos, set your price and availability, and publish. You approve every
                  booking that comes in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">Questions?</p>
              <h2>Hosting on Corneroom FAQ</h2>
            </div>
            <FaqSection items={faqs} />
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="sec">
          <div className="wrap">
            <div className="appcta">
              <div className="appcta-in">
                <div>
                  <h2>Your space could be earning by tonight</h2>
                  <p>
                    Download the app, verify once, and list your first space — as a founding
                    host, everything you earn for 12 months is yours.
                  </p>
                  <StoreButtons />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Host near you</p>
              <h2>Founding-host cities</h2>
            </div>
            <RelatedLinks links={related} />
            <p className="prose" style={{ marginTop: "1.4rem" }}>
              Somewhere else? Corneroom is worldwide — hosts can list a space in any city. Or
              head back to the <a href="/">Corneroom home page</a>.
            </p>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
```

- [ ] **Step 2: Build and verify the exported page**

Run: `npm run build`
Expected: build succeeds, "✓ Generating static pages" includes `/host`.

Run: `grep -c 'application/ld+json' out/host/index.html`
Expected: `2` (BreadcrumbList + FAQPage).

Run: `grep -o '<h1>[^<]*<span' out/host/index.html | head -1`
Expected: output containing `List your space &amp;`.

- [ ] **Step 3: Visual check**

Run: `npx serve out` (or `npm run dev`) and open `http://localhost:3000/host`. Confirm: hero renders with both store badges, category strip shows 5 dots + "& more", FAQ accordion works, no layout breakage against sibling page `/couchsurfing-alternative`.

- [ ] **Step 4: Commit**

```bash
git add src/app/host/page.tsx
git commit -m "Add /host founding-host landing page"
```

---

### Task 3: City pages template

**Files:**
- Create: `src/app/host/[city]/page.tsx`

**Interfaces:**
- Consumes: `HOST_CITIES`, `getCity`, `HostCity` from `../cities` (Task 1); same `_landing/parts` exports as Task 2.
- Produces: routes `/host/toronto`, `/host/nyc`, `/host/bangkok`, `/host/chiang-mai`, `/host/hanoi`. Note: Next 15 — `params` is a **Promise** and must be awaited.

- [ ] **Step 1: Write the template**

```tsx
import type { Metadata } from "next";
import "../../home.css";
import "../../landing.css";
import {
  fontVars,
  LandingNav,
  LandingFooter,
  StoreButtons,
  FaqSection,
  RelatedLinks,
  JsonLd,
  ChipCheck,
  buildFaqJsonLd,
  buildBreadcrumbJsonLd,
  type FaqItem,
} from "../../_landing/parts";
import { HOST_CITIES, getCity } from "../cities";

export const dynamicParams = false;

export function generateStaticParams() {
  return HOST_CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city)!;
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: `https://corneroom.com/host/${c.slug}` },
    openGraph: {
      title: c.title,
      description: c.description,
      url: `https://corneroom.com/host/${c.slug}`,
      siteName: "Corneroom",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: "@corneroomApp",
      title: c.title,
      description: c.description,
    },
    other: { "theme-color": "#FF642B" },
  };
}

const cityFaqs = (name: string): FaqItem[] => [
  {
    q: `What can I list in ${name}?`,
    a: "A spare room or guest bed, a desk or home office, a bathroom travelers can book for a shower, a boat berth, a rooftop or living room for hangouts — & more, with new categories landing over time.",
  },
  {
    q: "What does founding hosting cost?",
    a: "Listing is free, and founding hosts pay a 0% platform fee for their first 12 months — you keep 100% of what you earn. After that, a small, capped service fee applies to paid bookings, always shown transparently.",
  },
  {
    q: "When do guests arrive?",
    a: `Hosting opens first — travelers arrive at full launch. Founding hosts in ${name} are live from day one with first placement when travelers start searching.`,
  },
];

export default async function HostCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = getCity(city)!;
  const faqs = cityFaqs(c.name);
  const related = [
    {
      href: "/host",
      title: "Become a host",
      blurb: "Everything about listing, earning and the founding offer.",
    },
    ...HOST_CITIES.filter((o) => o.slug !== c.slug).map((o) => ({
      href: `/host/${o.slug}`,
      title: `Host in ${o.name}`,
      blurb: `Become a founding host in ${o.name}.`,
    })),
  ];

  return (
    <div className={`home landing ${fontVars}`}>
      <JsonLd data={buildBreadcrumbJsonLd(`Host in ${c.name}`, `host/${c.slug}`)} />
      <JsonLd data={buildFaqJsonLd(faqs)} />

      <LandingNav />

      <main>
        {/* HERO */}
        <section className="lp-hero">
          <div className="wrap">
            <p className="eyebrow">Hosts · {c.name} · Founding offer</p>
            <h1>
              Become a <span className="hl">founding host</span> in {c.name}
            </h1>
            <p className="lp-sub">{c.heroSub}</p>
            <StoreButtons />
            <div className="hero-badges">
              <span className="chip">
                <ChipCheck /> 0% platform fee for 12 months
              </span>
              <span className="chip">
                <ChipCheck /> Verified hosts &amp; guests
              </span>
              <span className="chip">
                <ChipCheck /> You approve every booking
              </span>
            </div>
          </div>
        </section>

        {/* LOCAL DEMAND */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">What travelers need in {c.name}</p>
              <h2>Your space is already in demand</h2>
            </div>
            <div className="prose">
              <ul className="checklist">
                {c.demand.map((d) => (
                  <li key={d.title}>
                    <ChipCheck />
                    <span>
                      <b>{d.title}</b> — {d.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                Not sure your space fits? Corneroom lists spaces by what they&apos;re <em>for</em>{" "}
                — sleep, work, shower, boat, social &amp; more. See{" "}
                <a href="/host">everything you can list</a>.
              </p>
            </div>
          </div>
        </section>

        {/* FOUNDING OFFER */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">The founding-host offer</p>
              <h2>First in {c.name} gets the best terms</h2>
            </div>
            <div className="prose">
              <ul className="checklist">
                <li>
                  <ChipCheck />
                  <span>
                    <b>0% platform fee for your first 12 months</b> — keep 100% of what you earn
                  </span>
                </li>
                <li>
                  <ChipCheck />
                  <span>
                    <b>Permanent Founding Host badge</b> on your profile and every space
                  </span>
                </li>
                <li>
                  <ChipCheck />
                  <span>
                    <b>First placement in {c.name}</b> when guests arrive at full launch
                  </span>
                </li>
              </ul>
              <p>
                Guests arrive at full launch — founding hosts are live from day one, first in
                search results when travelers land in {c.name}.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">How it works</p>
              <h2>From download to listed in about 10 minutes</h2>
            </div>
            <div className="lp-steps">
              <div className="step">
                <div className="n">1</div>
                <h3>Download &amp; sign up</h3>
                <p>
                  Get the Corneroom app and create your free account — hosting and traveling live
                  in the same app.
                </p>
              </div>
              <div className="step">
                <div className="n">2</div>
                <h3>Get verified</h3>
                <p>
                  Verify your ID once — it takes a few minutes, and every guest does the same
                  before they can ever book.
                </p>
              </div>
              <div className="step">
                <div className="n">3</div>
                <h3>List your space</h3>
                <p>
                  Add photos, set your price and availability, and publish. You approve every
                  booking that comes in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">Questions?</p>
              <h2>Hosting in {c.name} FAQ</h2>
            </div>
            <FaqSection items={faqs} />
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="sec">
          <div className="wrap">
            <div className="appcta">
              <div className="appcta-in">
                <div>
                  <h2>Be first on the map in {c.name}</h2>
                  <p>
                    Download the app, verify once, and list your first space — as a founding
                    host, everything you earn for 12 months is yours.
                  </p>
                  <StoreButtons />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Keep exploring</p>
              <h2>More on hosting</h2>
            </div>
            <RelatedLinks links={related} />
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
```

- [ ] **Step 2: Build and verify all five city pages**

Run: `npm run build`
Expected: build succeeds; `/host/[city]` shows 5 static paths.

Run: `for s in toronto nyc bangkok chiang-mai hanoi; do test -f out/host/$s/index.html && echo "OK $s" || echo "MISSING $s"; done`
Expected: five `OK` lines.

Run: `grep -o 'founding host</span> in [A-Za-z ]*' out/host/chiang-mai/index.html | head -1`
Expected: contains `Chiang Mai`.

- [ ] **Step 3: Visual check**

Preview `/host/toronto` and `/host/chiang-mai` in the browser. Confirm localized hero, demand checklist, and that nothing renders as a raw template variable.

- [ ] **Step 4: Commit**

```bash
git add "src/app/host/[city]/page.tsx"
git commit -m "Add founding-host city pages (Toronto, NYC, Bangkok, Chiang Mai, Hanoi)"
```

---

### Task 4: Sitemap entries

**Files:**
- Modify: `public/sitemap.xml`

**Interfaces:**
- Consumes: the six routes produced by Tasks 2–3.
- Produces: sitemap coverage for `/host` and the five city pages.

- [ ] **Step 1: Add six entries**

Insert before the closing `</urlset>` tag, matching the file's existing `loc`/`lastmod`/`priority` format:

```xml
  <url>
    <loc>https://corneroom.com/host</loc>
    <lastmod>2026-07-17</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://corneroom.com/host/toronto</loc>
    <lastmod>2026-07-17</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://corneroom.com/host/nyc</loc>
    <lastmod>2026-07-17</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://corneroom.com/host/bangkok</loc>
    <lastmod>2026-07-17</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://corneroom.com/host/chiang-mai</loc>
    <lastmod>2026-07-17</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://corneroom.com/host/hanoi</loc>
    <lastmod>2026-07-17</lastmod>
    <priority>0.7</priority>
  </url>
```

- [ ] **Step 2: Verify well-formedness**

Run: `python3 -c "import xml.etree.ElementTree as ET; ET.parse('public/sitemap.xml'); print('OK')"`
Expected: `OK`

Run: `grep -c "<url>" public/sitemap.xml`
Expected: `26` (was 20).

- [ ] **Step 3: Commit**

```bash
git add public/sitemap.xml
git commit -m "Add /host and city host pages to sitemap"
```

---

### Task 5: Internal links to /host

**Files:**
- Modify: `src/app/_landing/parts.tsx` (LandingFooter, "Discover" column, around line 260)
- Modify: `src/app/couchsurfing-alternative/page.tsx` (the `related` array, line ~73)
- Modify: `src/app/airbnb-alternative/page.tsx` (the `related` array, line ~73)
- Modify: `src/app/free-places-to-stay/page.tsx` (the `related` array, line ~73)

**Interfaces:**
- Consumes: the `/host` route (Task 2). `RelatedLink` items are `{ href, title, blurb }`.
- Produces: sitewide discoverability of `/host` (footer appears on every landing page).

- [ ] **Step 1: Add footer link**

In `LandingFooter`'s "Discover" `<ul>`, add as a new `<li>` before the "Get the app" item:

```tsx
              <li>
                <a href="/host">Become a host</a>
              </li>
```

- [ ] **Step 2: Add a related-links entry to each of the three SEO pages**

Append to each page's `related` array (same object in all three files):

```tsx
  {
    href: "/host",
    title: "Become a host",
    blurb: "List your space & earn — founding hosts keep 100% for 12 months.",
  },
```

- [ ] **Step 3: Build and verify**

Run: `npm run build`
Expected: success.

Run: `grep -c 'href="/host"' out/couchsurfing-alternative/index.html`
Expected: `2` or more (footer + related card).

- [ ] **Step 4: Commit**

```bash
git add src/app/_landing/parts.tsx src/app/couchsurfing-alternative/page.tsx src/app/airbnb-alternative/page.tsx src/app/free-places-to-stay/page.tsx
git commit -m "Link /host from footer and SEO landing pages"
```

---

### Task 6 (CONDITIONAL — execute only if the Play open-testing track is NOT live at deploy time): Android waitlist fallback

Skip this task entirely if the Google Play open-testing listing is live when the site deploys — the Play badge in `StoreButtons` already handles Android. Execute it only if iOS approval lands first and the owner wants to deploy without a working Play link.

**Files:**
- Create: `src/components/AndroidWaitlist.tsx`
- Modify: `src/app/host/page.tsx` (insert section before the closing-CTA section)

**Interfaces:**
- Consumes: a Formspree form ID. **Owner action first:** create a form at formspree.io (owner account), copy the form ID (the `xxxxyyyy` in `https://formspree.io/f/xxxxyyyy`), and paste it into the `FORMSPREE_FORM_ID` constant. This is an external credential, not authorable here.
- Produces: `<AndroidWaitlist />` client component.

- [ ] **Step 1: Write the component**

```tsx
"use client";

import { useState } from "react";

const FORMSPREE_FORM_ID = ""; // paste real Formspree form ID before use — component throws if empty

export default function AndroidWaitlist() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [email, setEmail] = useState("");

  if (!FORMSPREE_FORM_ID) {
    throw new Error("AndroidWaitlist: FORMSPREE_FORM_ID is not set");
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, source: "host-android-waitlist" }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p className="prose">
        You&apos;re on the list — we&apos;ll email you the moment the Android app is ready.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="android-waitlist">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        aria-label="Email for the Android waitlist"
      />
      <button type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Joining…" : "Notify me"}
      </button>
      {state === "error" && <small>Something went wrong — please try again.</small>}
    </form>
  );
}
```

- [ ] **Step 2: Insert the section into `/host`**

In `src/app/host/page.tsx`, add `import AndroidWaitlist from "../../components/AndroidWaitlist";` and insert before the `{/* CLOSING CTA */}` section:

```tsx
        {/* ANDROID WAITLIST */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">On Android?</p>
              <h2>The Android app is on its way</h2>
              <p>Leave your email and we&apos;ll send you the link the day it&apos;s ready.</p>
            </div>
            <AndroidWaitlist />
          </div>
        </section>
```

Also remove the Google Play badge for this interim state — pass nothing extra; instead, keep `StoreButtons` as-is only if the Play link resolves. If it 404s, replace `<StoreButtons />` in both hero and closing CTA of `/host` and the city template with the App Store anchor markup copied from `StoreButtons` (the first `<a className="store">…</a>` block in `src/app/_landing/parts.tsx:55-77`).

- [ ] **Step 3: Build, verify, commit**

Run: `npm run build` → success; preview `/host`, submit a test email, confirm it arrives in the Formspree dashboard.

```bash
git add src/components/AndroidWaitlist.tsx src/app/host/page.tsx
git commit -m "Add Android waitlist fallback to /host"
```

---

### Task 7: Pre-deploy verification & deploy (BLOCKED until App Store 1.0.0 approval + owner go-ahead)

**Files:**
- Possibly modify: `src/app/_landing/parts.tsx:19` (`APP_STORE_URL`)

- [ ] **Step 1: Verify the App Store URL points at the approved app**

`src/app/_landing/parts.tsx:19` currently hardcodes `https://apps.apple.com/app/corneroom/id6740086312`, but the App Store submission in flight is app id **6754674174**. When 1.0.0 is approved, open the live App Store page from App Store Connect and confirm which id serves it. If it's `6754674174`, update the constant:

```ts
export const APP_STORE_URL = "https://apps.apple.com/app/corneroom/id6754674174";
```

This constant is shared sitewide — fixing it here fixes every page. Do not change it before confirming against the live listing.

- [ ] **Step 2: Verify the Play link**

Open `https://play.google.com/store/apps/details?id=ca.inspiredtech.corneroom` — it must resolve to the open-testing listing. If it 404s, either hold the deploy for the Play track or execute Task 6.

- [ ] **Step 3: Full build + link sweep**

Run: `npm run build`
Run: `grep -rEo 'href="/[a-z-]+[a-z/-]*"' out/host/index.html | sort -u` and confirm every internal path has a matching directory under `out/`.

- [ ] **Step 4: Deploy (owner go-ahead required)**

**STOP — do not run without the owner explicitly approving the deploy in the current conversation.** Then:

```bash
git push origin main
```

(Push = deploy to GitHub Pages / corneroom.com.)

- [ ] **Step 5: Post-deploy**

- Confirm `https://corneroom.com/host` and one city page render live.
- Ping IndexNow / resubmit `sitemap.xml` in Google Search Console + Bing Webmaster Tools (same routine as the 2026-07-06 homepage launch).
- Commit nothing further; campaign links (UTMs, App Store `pt`/`ct` tokens) are produced in the campaign-kit plan, not here.

---

## Follow-up plans (not this plan)

1. **Campaign kit** — Meta/TikTok/X/LinkedIn/community creative + copy under `promo/`, HyperFrames videos, UTM link table. Content production, separate plan.
2. **Play open-testing track** — `app/mobile` fastlane `supply` lane + Play Console listing/data-safety/content-rating. Separate repo, separate plan.
3. **Founding-offer backend** — 0%-fee configuration in payment-service + Founding Host badge. Needs its own investigation/brainstorm before planning; the offer must be honored in-product before campaigns go live.
