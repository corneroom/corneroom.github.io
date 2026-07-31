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
  type FaqItem,
} from "../../_landing/parts";

const title = "How to Price Your Space — A Fair-Price Guide | Corneroom";
const description =
  "Price your space so real people can say yes. Our simple guide: check what it normally costs, then charge roughly 40–60% of that. Guidance for affordable, community-first hosting — you always set the price.";
const slug = "host/pricing";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `https://corneroom.com/${slug}` },
  openGraph: {
    title,
    description,
    url: `https://corneroom.com/${slug}`,
    siteName: "Corneroom",
    type: "article",
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

/* ------------------------------------------------------------------ *
 * Step icons — one simple, legible glyph per pricing step.
 * ------------------------------------------------------------------ */
const stepIconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function IconSearch() {
  return (
    <svg {...stepIconProps}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-3.6-3.6" />
    </svg>
  );
}
function IconPercent() {
  return (
    <svg {...stepIconProps}>
      <path d="M19 5 5 19" />
      <circle cx="7.5" cy="7.5" r="2.5" />
      <circle cx="16.5" cy="16.5" r="2.5" />
    </svg>
  );
}
function IconStar() {
  return (
    <svg {...stepIconProps}>
      <path d="M12 4l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.9 7.2 19.4l.9-5.4L4.2 9.7l5.4-.8L12 4Z" />
    </svg>
  );
}
function IconAdjust() {
  return (
    <svg {...stepIconProps}>
      <path d="M4 8h11M19 8h1M4 16h5M13 16h7" />
      <circle cx="17" cy="8" r="2.2" />
      <circle cx="11" cy="16" r="2.2" />
    </svg>
  );
}

function IconInfo() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 7.75v.5" />
    </svg>
  );
}

const STEPS = [
  {
    icon: <IconSearch />,
    title: "Check the going rate",
    desc: "Look up what a similar space or service normally costs near you — a room, a desk for the day, a shower, a berth. That's your reference point.",
  },
  {
    icon: <IconPercent />,
    title: "Take about 40–60%",
    desc: "Set your price at roughly 40–60% of that going rate. Affordable enough that a real person books it — fair enough that hosting is worth your while.",
  },
  {
    icon: <IconStar />,
    title: "Start near the lower end",
    desc: "For your very first bookings, lean toward the low side. Early guests and honest reviews build the trust that makes every later booking easier.",
  },
  {
    icon: <IconAdjust />,
    title: "Adjust over time",
    desc: "Change your price whenever you like. Busy season, quiet week, great reviews — nudge it up or down. You're always in control.",
  },
];

/* Illustrative category examples — ROUND, made-up numbers to show the method.
   These are NOT real market data; we have no market dataset to cite. */
const EXAMPLES = [
  { cat: "Sleep", unit: "a spare room, per night", typical: "$100", fair: "$40–60" },
  { cat: "Work", unit: "a desk, per hour", typical: "$10", fair: "$4–6" },
  { cat: "Shower", unit: "a shower, per use", typical: "$20", fair: "$8–12" },
  { cat: "Boat", unit: "a day-use deck, per day", typical: "$200", fair: "$80–120" },
  { cat: "Social", unit: "a space to gather, per hour", typical: "$50", fair: "$20–30" },
];

const WHY = [
  {
    title: "More bookings, not fewer",
    desc: "A fair price is the difference between a space that sits empty and one that's actually used. Affordable spaces get said yes to.",
  },
  {
    title: "A stronger community",
    desc: "Corneroom works when real people — students, travelers on a budget, folks between plans — can actually afford to show up.",
  },
  {
    title: "Better reviews",
    desc: "Guests who feel they got a fair deal leave warmer reviews. Those reviews are what earn you the next booking, and the one after.",
  },
  {
    title: "You're not a hotel",
    desc: "You don't need to match hotel or short-let prices — and you're not trying to. Affordable is the whole point.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Is the 40–60% a rule I have to follow?",
    a: "No. You always set your own price — the site says so everywhere. The 40–60% range is a suggested starting point for keeping Corneroom affordable, not a cap we enforce.",
  },
  {
    q: "Where do the example prices come from?",
    a: "They're illustrative, round numbers we made up to show the method — not real market data for any city. Always check the actual going rate where you are before you set your price.",
  },
  {
    q: "Can I host for free instead?",
    a: "Absolutely. Free community hosting is a real and loved part of Corneroom. Price every booking, some of them, or none — it's your call, per space.",
  },
  {
    q: "Will pricing low mean I earn too little?",
    a: "Pricing fairly usually means your space gets booked more often, not less. As a founding host you also keep 100% of what you earn through our first year — so a fair price still adds up.",
    link: { href: "/host", label: "See the founding-host offer" },
  },
];

const related = [
  {
    href: "/host",
    title: "Become a host",
    blurb: "List a space and keep 100% as a founding host.",
  },
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

/* 3-level breadcrumb: Home > Become a host > How to price your space */
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://corneroom.com/" },
    { "@type": "ListItem", position: 2, name: "Become a host", item: "https://corneroom.com/host" },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to price your space",
      item: `https://corneroom.com/${slug}`,
    },
  ],
};

export default function HostPricingPage() {
  return (
    <div className={`home landing ${fontVars}`}>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={buildFaqJsonLd(faqs)} />

      <LandingNav />

      <main>
        {/* HERO */}
        <section className="lp-hero">
          <div className="wrap">
            <p className="eyebrow">Hosts · Pricing guide</p>
            <h1>
              Price it so real people can <span className="hl">say yes</span>
            </h1>
            <p className="lp-sub">
              Corneroom is built on affordability and community, not squeezing out every last
              dollar. The best price isn&apos;t the highest one — it&apos;s the one a real guest
              can actually afford to book.
            </p>
            <div className="hero-badges">
              <span className="chip">
                <ChipCheck /> You always set the price
              </span>
              <span className="chip">
                <ChipCheck /> Guidance, not a rule
              </span>
              <span className="chip">
                <ChipCheck /> Affordable by design
              </span>
            </div>
          </div>
        </section>

        {/* THE METHOD — 4 steps */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">The simple method</p>
              <h2>Four steps to a fair price</h2>
              <p>
                No spreadsheets, no guesswork. Start from what a space like yours normally costs,
                then price it to be genuinely affordable.
              </p>
            </div>
            <ol className="hw4">
              {STEPS.map((s, i) => (
                <li key={s.title} className="hw4-step">
                  <span className="hw4-num" aria-hidden="true">{i + 1}</span>
                  <span className="hw4-ic">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ILLUSTRATIVE EXAMPLES */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">How it looks</p>
              <h2>The 40–60% idea, category by category</h2>
              <p>
                Here&apos;s the method applied across a few kinds of spaces — sleep, work, shower,
                boat, social &amp; more. Take the going rate, land around 40–60% of it.
              </p>
            </div>

            <div className="callout" role="note">
              <IconInfo />
              <p style={{ margin: 0 }}>
                <b>Illustrative examples only.</b> The numbers below are round, made-up figures to
                show the method — not real market data for any city. Always check the actual going
                rate where you are before setting your price.
              </p>
            </div>

            <div className="cmp-wrap" style={{ marginTop: "1.4rem" }}>
              <table className="cmp">
                <caption>Illustrative only — figures are examples, not real market data.</caption>
                <thead>
                  <tr>
                    <th scope="col">Category &amp; example</th>
                    <th scope="col">Typical going rate*</th>
                    <th scope="col" className="us">A fair Corneroom price (~40–60%)</th>
                  </tr>
                </thead>
                <tbody>
                  {EXAMPLES.map((e) => (
                    <tr key={e.cat}>
                      <td className="feat">
                        {e.cat}
                        <br />
                        <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "var(--ink-3)", fontSize: "0.86rem" }}>
                          {e.unit}
                        </span>
                      </td>
                      <td>{e.typical}</td>
                      <td className="us-col yes">{e.fair}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="prose" style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--ink-3)" }}>
              *An illustrative &ldquo;normal&rdquo; price for comparison — not a quote, benchmark, or
              claim about any real market.
            </p>
          </div>
        </section>

        {/* WHY PRICE THIS WAY */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">Why price this way</p>
              <h2>A fair price works in your favor</h2>
            </div>
            <div className="trust-cards">
              {WHY.map((w) => (
                <div key={w.title} className="tcard">
                  <div className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                      <path d="M12 2 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-4Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
            <div className="callout c-center" role="note" style={{ marginTop: "2rem" }}>
              <IconInfo />
              <p style={{ margin: 0 }}>
                <b>This is guidance, not a hard rule.</b> You set your own price on every space, and
                you can change it any time. The 40–60% range is simply where we suggest starting to
                keep the community affordable for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">Questions?</p>
              <h2>Pricing your space, answered</h2>
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
                  <h2>Set a fair price and start hosting</h2>
                  <p>
                    Download the app, verify once, and list your first space. Price it so real
                    people can say yes — as a founding host, everything you earn in our first year
                    is yours.
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
              <p className="eyebrow">Keep reading</p>
              <h2>More for hosts</h2>
            </div>
            <RelatedLinks links={related} />
            <p className="prose" style={{ marginTop: "1.4rem" }}>
              Ready to list? Head to <a href="/host">become a host</a>, or back to the{" "}
              <a href="/">Corneroom home page</a>.
            </p>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
