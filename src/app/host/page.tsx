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
        {/* HERO */}
        <section className="lp-hero">
          <div className="wrap">
            <p className="eyebrow">Hosts · Founding offer</p>
            <h1>
              List your space &amp; <span className="hl">earn</span>
            </h1>
            <p className="lp-sub">
              A spare room, a quiet desk, even a bathroom between flights — travelers need it,
              and you set the price. Founding hosts keep 100% of their earnings through our first
              year, with a permanent badge and first placement when guests arrive.
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
                  <span>Founding hosts keep 100% of earnings, our first year</span>
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
