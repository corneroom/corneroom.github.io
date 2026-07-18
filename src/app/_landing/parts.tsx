import { Inter, Plus_Jakarta_Sans } from "next/font/google";

/* Fonts — same pairing as the new home design. */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});
export const fontVars = `${jakarta.variable} ${inter.variable}`;

/* Real store URLs — reused from AppBadges.tsx (do not invent). */
export const APP_STORE_URL = "https://apps.apple.com/app/corneroom/id6740086312";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=ca.inspiredtech.corneroom";

/* Pin + house mark — identical to the home design (NOT a letter tile). */
export function Mark({ className = "mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 3C12.8 3 7 8.8 7 16c0 8.2 10.4 18.2 12.2 19.9a1.2 1.2 0 0 0 1.6 0C22.6 34.2 33 24.2 33 16 33 8.8 27.2 3 20 3Z"
        fill="#FF642B"
      />
      <path
        d="M20 10.5l7 5.4V25a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 13 25v-9.1l7-5.4Z"
        fill="#fff"
      />
      <path d="M17.6 26.5v-4.2a2.4 2.4 0 0 1 4.8 0v4.2h-4.8Z" fill="#FF642B" />
    </svg>
  );
}

const Check = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/* App Store + Google Play buttons — same visual as the home App CTA. */
export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`stores ${className}`}>
      <a
        className="store"
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Corneroom on the App Store"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16.4 12.9c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.5 2.2 2.6 2.1 1-.04 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.7 1.1 0 1.8-1 2.5-2 .8-1.2 1.1-2.3 1.1-2.4-.03-.02-2.1-.8-2.1-3.2ZM14.3 6.3c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .07 1.9-.5 2.5-1.2Z" />
        </svg>
        <span>
          <small>Download on the</small>
          <b>App Store</b>
        </span>
      </a>
      <a
        className="store"
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Corneroom on Google Play"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l.1.1 9.3-9.3v-.2L3.6 2.3Zm12.5 12.5-3.1-3.1v-.2l3.1-3.1.1.04 3.7 2.1c1 .6 1 1.6 0 2.2l-3.7 2.1-.1.04Zm-.4.4-3.2-3.2-9.4 9.4c.4.4 1 .4 1.7.05l10.9-6.3Zm0-8-10.9-6.3c-.7-.4-1.3-.3-1.7.05l9.4 9.4 3.2-3.2Z" />
        </svg>
        <span>
          <small>Get it on</small>
          <b>Google Play</b>
        </span>
      </a>
    </div>
  );
}

/* Sticky top nav — no JS, no backdrop-filter (rendered with a permanent hairline). */
export function LandingNav() {
  return (
    <header className="nav scrolled">
      <div className="wrap nav-in">
        <a className="brand" href="/" aria-label="Corneroom home">
          <Mark />
          Corneroom
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="/free-places-to-stay">Free stays</a>
          <a href="/couchsurfing-alternative">Couchsurfing alternative</a>
          <a href="/airbnb-alternative">Airbnb alternative</a>
          <a href="/host">Become a host</a>
        </nav>
        <div className="nav-cta">
          <a href="/app" className="btn btn-ghost">
            Why Corneroom
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
}

type FaqItem = { q: string; a: string };

/* Accessible, no-JS FAQ using native <details>. */
export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((it) => (
        <details key={it.q}>
          <summary>{it.q}</summary>
          <div className="fa">{it.a}</div>
        </details>
      ))}
    </div>
  );
}

type RelatedLink = { href: string; title: string; blurb: string };

export function RelatedLinks({ links }: { links: RelatedLink[] }) {
  return (
    <div className="related">
      {links.map((l) => (
        <a key={l.href} className="rl" href={l.href}>
          <b>{l.title}</b>
          <small>{l.blurb}</small>
        </a>
      ))}
    </div>
  );
}

/* Category strip — Sleep / Work / Shower / Boat / Social & more (never a fixed number). */
const CATS = [
  { label: "Sleep", small: "Beds & rooms", dot: "var(--sleep)" },
  { label: "Work", small: "Desks & studios", dot: "var(--work)" },
  { label: "Shower", small: "Fresh & clean", dot: "var(--shower)", shower: true },
  { label: "Boat", small: "On the water", dot: "var(--boat)" },
  { label: "Social", small: "Meet & hang out", dot: "var(--social)" },
];

export function CategoryStrip() {
  return (
    <div className="catstrip">
      {CATS.map((c) => (
        <div key={c.label} className="cs">
          <span
            className={`csdot${c.shower ? " dot-shower" : ""}`}
            style={{ background: c.dot }}
            aria-hidden="true"
          />
          <b>{c.label}</b>
          <small>{c.small}</small>
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
  );
}

/* Two-sided verified trust cards. */
const TRUST = [
  {
    title: "ID verified, both sides",
    desc: "Every host and every guest verifies their identity before a single booking — so the whole community can open its doors with confidence.",
  },
  {
    title: "Secure payments",
    desc: "Pay and get paid safely through Corneroom. On paid stays, money is only released once your booking is confirmed.",
  },
  {
    title: "Real reviews",
    desc: "Honest ratings from real stays keep hosts and guests accountable and easy to trust, worldwide.",
  },
];

export function TrustCards() {
  return (
    <div className="trust-cards">
      {TRUST.map((t) => (
        <div key={t.title} className="tcard">
          <div className="ic">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden="true"
            >
              <path d="M12 2 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-4Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <h3>{t.title}</h3>
          <p>{t.desc}</p>
        </div>
      ))}
    </div>
  );
}

export const ChipCheck = Check;

/* Shared footer — includes the "Discover" column for internal linking. */
export function LandingFooter() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot">
            <div className="foot-brand">
              <Mark />
              Corneroom
            </div>
            <p>
              Find &amp; share spaces worldwide. A verified, affordable community for travelers
              and hosts — to sleep, work, shower, boat, socialize &amp; more.
            </p>
          </div>
          <div className="foot">
            <h4>Discover</h4>
            <ul>
              <li>
                <a href="/couchsurfing-alternative">Couchsurfing alternative</a>
              </li>
              <li>
                <a href="/airbnb-alternative">Airbnb alternative</a>
              </li>
              <li>
                <a href="/free-places-to-stay">Free places to stay</a>
              </li>
              <li>
                <a href="/host">Become a host</a>
              </li>
              <li>
                <a href="/app">Get the app</a>
              </li>
            </ul>
          </div>
          <div className="foot">
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="/#explore">Sleep</a>
              </li>
              <li>
                <a href="/#explore">Work</a>
              </li>
              <li>
                <a href="/#explore">Shower</a>
              </li>
              <li>
                <a href="/#explore">Boat &amp; more</a>
              </li>
            </ul>
          </div>
          <div className="foot">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/safety">Safety</a>
              </li>
              <li>
                <a href="/community-standards">Community standards</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {year} Corneroom · Find &amp; share spaces worldwide.</span>
          <span>Affordable spaces · a verified community · worldwide</span>
        </div>
      </div>
    </footer>
  );
}

/* JSON-LD helpers. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function buildBreadcrumbJsonLd(name: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://corneroom.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `https://corneroom.com/${slug}`,
      },
    ],
  };
}

export type { FaqItem, RelatedLink };
