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
  "List a spare room, desk, shower, boat, hangout space & more. Verified hosts & guests, you set the price — founding hosts keep 100% of their earnings through our first year.";
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

/* ------------------------------------------------------------------ *
 * Inline step icons — one simple, legible glyph per hosting step.
 * Stroke-based so they inherit color and stay crisp at any size.
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

function IconList() {
  return (
    <svg {...stepIconProps}>
      <path d="M4 10.5 12 4l8 6.5" />
      <path d="M6 9.5V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9.5" />
      <path d="M12 12v5M9.5 14.5h5" />
    </svg>
  );
}
function IconVerify() {
  return (
    <svg {...stepIconProps}>
      <path d="M12 3 5 6v5.5c0 4.3 3 7.4 7 8.5 4-1.1 7-4.2 7-8.5V6l-7-3Z" />
      <path d="m9 11.5 2 2 4-4" />
    </svg>
  );
}
function IconHost() {
  return (
    <svg {...stepIconProps}>
      <path d="M4 20V9.5L12 4l8 5.5V20" />
      <path d="M10 20v-4a2 2 0 0 1 4 0v4" />
      <path d="M3 20h18" />
    </svg>
  );
}
function IconPaid() {
  return (
    <svg {...stepIconProps}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M6.5 9.5h.01M17.5 14.5h.01" />
    </svg>
  );
}

/* Payout-diagram node icons */
function IconPrice() {
  return (
    <svg {...stepIconProps}>
      <path d="M12 3v18M15.5 7.5c0-1.7-1.6-2.7-3.5-2.7S8.5 5.9 8.5 7.6 10 9.8 12 10.2s3.5 1 3.5 2.8-1.6 2.8-3.5 2.8-3.5-1-3.5-2.8" />
    </svg>
  );
}
function IconPay() {
  return (
    <svg {...stepIconProps}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.6" />
      <path d="M10.5 18.5h3" />
      <path d="m9.5 8.5 2 2 3.5-3.5" />
    </svg>
  );
}
function IconBank() {
  return (
    <svg {...stepIconProps}>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 9.5V18M9.5 9.5V18M14.5 9.5V18M19 9.5V18" />
      <path d="M3.5 21h17" />
    </svg>
  );
}

/* Founding Host badge — small custom rosette graphic (not just named). */
function FoundingBadge() {
  return (
    <svg
      className="fbadge"
      viewBox="0 0 64 64"
      role="img"
      aria-label="Founding Host badge"
    >
      <circle cx="32" cy="27" r="19" fill="#FFE9DF" stroke="#FF642B" strokeWidth="2" />
      <path
        d="M32 15.5l3 6.1 6.7 1-4.8 4.7 1.1 6.7L32 34.6l-6 3.1 1.1-6.7-4.8-4.7 6.7-1 3-6.1Z"
        fill="#FF642B"
      />
      <path d="M23 42l-3 15 12-5 12 5-3-15" fill="#FB8F75" stroke="#FF642B" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

/* Arrow used between diagram nodes (rotates on small screens via CSS). */
function FlowArrow() {
  return (
    <svg className="flow-arrow" viewBox="0 0 40 24" fill="none" aria-hidden="true">
      <path
        d="M2 12h32"
        stroke="var(--primary)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="m28 6 8 6-8 6"
        stroke="var(--primary)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const STEPS = [
  {
    icon: <IconList />,
    title: "List your space",
    desc: "Add photos, set your price and availability, and publish — right from the app.",
  },
  {
    icon: <IconVerify />,
    title: "Get verified",
    desc: "Verify your ID once. Every guest verifies too, before they can ever book.",
  },
  {
    icon: <IconHost />,
    title: "Host a guest",
    desc: "You approve every booking. A verified guest arrives and uses the space.",
  },
  {
    icon: <IconPaid />,
    title: "Get paid",
    desc: "Guests pay in the app; your earnings land in your bank through Stripe.",
    paid: true,
  },
];

/* Real category photos — legible at a glance. "& more" keeps the count open. */
const CATS = [
  { label: "Sleep", desc: "A spare room or bed", img: "/images/categories/sleep.jpg", alt: "A sunlit bedroom with a made bed, ready to host an overnight guest" },
  { label: "Work", desc: "A desk or quiet office", img: "/images/categories/work.avif", alt: "A tidy home desk set up as a quiet workspace to book by the hour" },
  { label: "Shower", desc: "A bathroom to freshen up", img: "/images/categories/shower.jpg", alt: "A clean modern bathroom with a walk-in shower available to book" },
  { label: "Boat", desc: "A berth or day-use deck", img: "/images/categories/boat.jpg", alt: "A boat moored on calm water, open for a berth or a day on deck" },
  { label: "Social", desc: "A rooftop, yard or living room", img: "/images/categories/nightlife.jpg", alt: "A warm social space set up for friends to gather in the evening" },
];

const faqs: FaqItem[] = [
  {
    q: "What can I list on Corneroom?",
    a: "More than you'd think: a spare room or guest bed, a desk or home office, a bathroom travelers can book for a shower, a boat berth or day-use deck, a rooftop or living room for hangouts — & more, with new categories landing over time. If travelers could use it, you can probably list it.",
  },
  {
    q: "How much does it cost to be a host?",
    a: "Listing a space is free. Founding hosts pay a 0% platform fee through Corneroom's first year — you keep 100% of what you earn. After that, a small, capped service fee applies to paid bookings, always shown transparently before anything is charged.",
  },
  {
    q: "How do I get paid?",
    a: "You set your price — per night or per hour depending on the kind of space. Guests pay in the app, and your earnings are paid out securely to your bank through Stripe. See the payouts page for exactly how and when money moves.",
  },
  {
    q: "How much can I earn?",
    a: "That's genuinely up to you — your price, your space, your availability, your city. We won't invent a number: hosting income depends on demand where you are. What we can promise is that you keep 100% of it as a founding host through our first year.",
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
        {/* HERO — copy + real app screenshot (earnings screen) */}
        <section className="lp-hero">
          <div className="wrap lp-hero-grid">
            <div className="lp-hero-copy">
              <p className="eyebrow">Hosts · Founding offer</p>
              <h1>
                List your space &amp; <span className="hl">earn</span>
              </h1>
              <p className="lp-sub">
                A spare room, a quiet desk, even a bathroom between flights — you set the price and
                keep 100% as a founding host.
              </p>
              <StoreButtons />
              <div className="hero-badges">
                <span className="chip">
                  <ChipCheck /> 0% platform fee, our first year
                </span>
                <span className="chip">
                  <ChipCheck /> Verified hosts &amp; guests
                </span>
                <span className="chip">
                  <ChipCheck /> You approve every booking
                </span>
              </div>
            </div>
            <div className="lp-hero-vis">
              <div className="phone" role="img" aria-label="Corneroom app earnings screen, where hosts get paid">
                <span className="notch" />
                <div className="screen">
                  <img
                    src="/home/screens/earn.png"
                    alt="Corneroom app screen showing a host's earnings and payouts to their bank"
                    width={270}
                    height={586}
                  />
                </div>
              </div>
              <span className="phone-tag" aria-hidden="true">This is where you get paid</span>
            </div>
          </div>
        </section>

        {/* HOW HOSTING WORKS — 4-step visual, moved up under the hero */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">How hosting works</p>
              <h2>Four steps, start to paid</h2>
            </div>
            <ol className="hw4">
              {STEPS.map((s, i) => (
                <li key={s.title} className="hw4-step">
                  <span className="hw4-num" aria-hidden="true">{i + 1}</span>
                  <span className={`hw4-ic${s.paid ? " paid" : ""}`}>
                    {s.paid ? (
                      <img
                        src="/home/screens/earn.png"
                        alt=""
                        width={120}
                        height={260}
                        aria-hidden="true"
                      />
                    ) : (
                      s.icon
                    )}
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHAT YOU CAN LIST — real category photos */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">What you can list</p>
              <h2>If travelers can use it, you can share it</h2>
              <p>
                Corneroom goes beyond overnight stays — spaces are listed by what they&apos;re{" "}
                <em>for</em>, and the categories keep growing.
              </p>
            </div>
            <div className="catphotos">
              {CATS.map((c) => (
                <div key={c.label} className="cp">
                  <img className="cp-img" src={c.img} alt={c.alt} width={480} height={360} loading="lazy" />
                  <div className="cp-lbl">
                    <b>{c.label}</b>
                    <small>{c.desc}</small>
                  </div>
                </div>
              ))}
              <div className="cp cp-more">
                <span className="cp-plus" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
                <b>&amp; more</b>
                <small>New categories keep landing</small>
              </div>
            </div>
          </div>
        </section>

        {/* ILLUSTRATIVE HOST STORY — "Between flights" (shower / day-use) */}
        <section className="sec">
          <div className="wrap">
            <div className="storycard">
              <div className="story-media">
                <img
                  src="/images/categories/shower.jpg"
                  alt="A clean, bright bathroom with a walk-in shower — the kind of space a host near an airport could offer"
                  width={640}
                  height={520}
                  loading="lazy"
                />
                <span className="story-tag">Example</span>
              </div>
              <div className="story-copy">
                <p className="eyebrow">An illustrative example</p>
                <h2>A shower and a reset — hours before any check-in</h2>
                <p>
                  Picture a host near the airport listing their bathroom and a quiet spot to rest.
                  A red-eye traveler lands at 6am with a hotel that won&apos;t check them in until
                  3pm — and books an hour to freshen up.
                </p>
                <p className="story-sub">
                  The space you&apos;re not using is the space someone needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW YOU EARN + FOUNDING — merged, anchored by the payout diagram */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">How you earn</p>
              <h2>Your space, your price, your rules</h2>
              <p>
                You decide what your space is worth — per night for stays, per hour for desks,
                showers and day-use. Here&apos;s how the money moves.
              </p>
            </div>

            {/* Payout flow diagram */}
            <div className="payflow" role="img" aria-label="Payout flow: you set the price, the guest pays in the app, and you are paid to your bank via Stripe.">
              <div className="pf-node">
                <span className="pf-ic"><IconPrice /></span>
                <b>You set the price</b>
                <small>Change it any time</small>
              </div>
              <FlowArrow />
              <div className="pf-node">
                <span className="pf-ic"><IconPay /></span>
                <b>Guest pays in the app</b>
                <small>Secure, held until confirmed</small>
              </div>
              <FlowArrow />
              <div className="pf-node">
                <span className="pf-ic"><IconBank /></span>
                <b>Paid to your bank</b>
                <small>Securely, via Stripe</small>
              </div>
            </div>
            <p className="payflow-note">
              Exactly how and when money moves is spelled out on the{" "}
              <a href="/payouts">payouts page</a>.
            </p>

            {/* Founding-host offer with the badge shown, not just named */}
            <div className="founding">
              <div className="founding-badge">
                <FoundingBadge />
                <b>Founding Host</b>
                <small>Permanent badge on your profile</small>
              </div>
              <div className="founding-copy">
                <h3>Early hosts get the best deal we&apos;ll ever offer</h3>
                <p>
                  The hosts who list now are the reason there&apos;s something worth launching, so
                  they get terms nobody after them will:
                </p>
                <ul className="checklist">
                  <li>
                    <ChipCheck />
                    <span>
                      <b>0% platform fee through our first year</b> — keep 100% of what you earn
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
                  <li>
                    <ChipCheck />
                    <span>Prefer community over commerce? Free hosting is welcome too</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="sec">
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
                  <h2>Your space could be listed by tonight</h2>
                  <p>
                    Download the app, verify once, and list your first space — as a founding
                    host, everything you earn in our first year is yours.
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
