import type { Metadata } from "next";
import "../home.css";
import "../landing.css";
import {
  fontVars,
  LandingNav,
  LandingFooter,
  StoreButtons,
  CategoryStrip,
  TrustCards,
  FaqSection,
  RelatedLinks,
  JsonLd,
  ChipCheck,
  buildFaqJsonLd,
  buildBreadcrumbJsonLd,
  type FaqItem,
} from "../_landing/parts";

const title = "Cheap Places to Stay Worldwide | Corneroom";
const description =
  "Find cheap places to stay worldwide. Corneroom is genuinely affordable spaces from verified hosts — priced so real people can book — plus real free community stays.";
const slug = "cheap-places-to-stay";

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

const faqs: FaqItem[] = [
  {
    q: "How does Corneroom keep places to stay cheap?",
    a: "Prices come from everyday hosts sharing space they already have, not from hotels or property managers — so they're set for real budgets. Any service fee is small, capped and shown before you confirm, with no charges stacked on at checkout. And because you can book just the space you need, you're not paying for room you won't use.",
  },
  {
    q: "Are there genuinely free places to stay too?",
    a: "Yes. Alongside affordable paid spaces, many hosts open their space for free because they love meeting travelers. On a free community stay there's no service fee for the guest or the host. Free stays are real — they just depend on host availability, so it's worth searching early.",
  },
  {
    q: "Is a cheap stay still safe?",
    a: "Affordable doesn't mean anonymous. Every host and every guest verifies their identity before a booking, so you always know who you're staying with. You can also read real reviews and message the host for free before you commit.",
  },
  {
    q: "What kinds of cheap spaces can I book?",
    a: "More than a bed. Book a room to sleep, a desk to work, a shower between flights, a boat, a social space & more — by the night or by the hour. New categories keep landing, so you can book exactly what fits your trip and your budget.",
  },
  {
    q: "Can I find cheap places to stay worldwide?",
    a: "Yes. Corneroom connects a verified community across 120+ countries and thousands of cities, so affordable — and often free — spaces turn up across the map. Availability varies by place and season, so search early and message hosts.",
  },
  {
    q: "Can I earn by sharing my space affordably?",
    a: "Absolutely. Listing is free and you set your own price — affordable, or even free. Share a spare room, a desk, a boat & more, only ever host verified guests, and get fast, secure payouts on paid stays.",
  },
];

const related = [
  {
    href: "/free-places-to-stay",
    title: "Free places to stay",
    blurb: "How genuinely free community stays work — and how to find them.",
  },
  {
    href: "/airbnb-alternative",
    title: "Airbnb alternative",
    blurb: "Affordable real prices and space types beyond a whole home.",
  },
  {
    href: "/day-use-stays",
    title: "Day-use & hourly stays",
    blurb: "Book a shower, desk or rest space by the hour to save even more.",
  },
  {
    href: "/host",
    title: "Become a host",
    blurb: "List your space & earn — founding hosts keep 100% for 12 months.",
  },
];

export default function CheapPlacesToStayPage() {
  return (
    <div className={`home landing ${fontVars}`}>
      <JsonLd data={buildBreadcrumbJsonLd("Cheap places to stay", slug)} />
      <JsonLd data={buildFaqJsonLd(faqs)} />

      <LandingNav />

      <main>
        {/* HERO */}
        <section className="lp-hero">
          <div className="wrap">
            <p className="eyebrow">Affordable · Verified · Worldwide</p>
            <h1>
              Find <span className="hl">cheap places to stay</span> — priced for real people
            </h1>
            <p className="lp-sub">
              Corneroom is built to be affordable. Everyday hosts share spaces at prices real budgets
              can handle, with no surprise fees at checkout — and plenty share for free. Every host
              and guest is verified, and you can book a room, a desk, a shower, a boat &amp; more, by
              the night or the hour, worldwide.
            </p>
            <StoreButtons />
            <div className="hero-badges">
              <span className="chip">
                <ChipCheck /> Genuinely affordable
              </span>
              <span className="chip">
                <ChipCheck /> Verified hosts &amp; guests
              </span>
              <span className="chip">
                <ChipCheck /> Free stays available
              </span>
            </div>
          </div>
        </section>

        {/* WHAT MAKES THEM CHEAP */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Why it&apos;s actually cheaper</p>
              <h2>Affordable by design — not a sale that disappears</h2>
            </div>
            <div className="prose">
              <p>
                Cheap doesn&apos;t have to mean sketchy. On Corneroom, prices come from everyday
                hosts sharing space they already have — a spare room, a quiet desk, a shower — so
                they&apos;re set for real budgets, not hotel margins. Any service fee is small,
                capped and shown before you confirm, so nothing quietly doubles at checkout.
              </p>
              <p>
                Booking just the space you need helps too: pay for a room for the night or a desk for
                the afternoon, not a whole property. And when a host shares for free, it&apos;s
                genuinely free — see exactly how{" "}
                <a href="/free-places-to-stay">free places to stay</a> work on Corneroom.
              </p>
            </div>
          </div>
        </section>

        {/* HOW TO FIND THEM */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">How it works</p>
              <h2>How to find a cheap stay in three steps</h2>
            </div>
            <div className="lp-steps">
              <div className="step">
                <div className="n">1</div>
                <h3>Search your destination</h3>
                <p>
                  Enter where you&apos;re headed and what you need. Compare affordable spaces — and
                  genuinely free ones — side by side.
                </p>
              </div>
              <div className="step">
                <div className="n">2</div>
                <h3>Get verified &amp; message</h3>
                <p>
                  Verify your ID once — every guest and host does. Message the host for free to
                  confirm the details before you book.
                </p>
              </div>
              <div className="step">
                <div className="n">3</div>
                <h3>Book &amp; save</h3>
                <p>
                  Book an affordable space with the total shown up front, stay well, and leave a
                  review to keep the community trusted worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY / TRUST */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Cheap, but never anonymous</p>
              <h2>Safety comes from two-sided verification</h2>
            </div>
            <div className="prose">
              <p>
                An affordable stay should feel just as safe as a pricey one. On Corneroom every host{" "}
                <strong>and</strong> every guest verifies their identity before a booking, so you
                always know who you&apos;re staying with — and hosts know who&apos;s arriving. Real
                reviews and free messaging let you get comfortable before you commit.
              </p>
              <ul className="checklist">
                <li>
                  <ChipCheck />
                  <span>ID verification for hosts and guests, every time</span>
                </li>
                <li>
                  <ChipCheck />
                  <span>Read real reviews from past stays</span>
                </li>
                <li>
                  <ChipCheck />
                  <span>Message the host for free before you book</span>
                </li>
              </ul>
            </div>
            <div style={{ marginTop: "2rem" }}>
              <TrustCards />
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">More than a cheap bed</p>
              <h2>Affordable spaces of every kind</h2>
              <p>
                It&apos;s not only a place to sleep. Book what you actually need — for a night or a
                few hours — and new categories keep landing.
              </p>
            </div>
            <CategoryStrip />
          </div>
        </section>

        {/* FAQ */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">Questions?</p>
              <h2>Cheap places to stay FAQ</h2>
            </div>
            <FaqSection items={faqs} />
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="sec tint">
          <div className="wrap">
            <div className="appcta">
              <div className="appcta-in">
                <div>
                  <h2>Find your next affordable stay</h2>
                  <p>
                    Join a verified community sharing affordable — and genuinely free — spaces
                    worldwide. Search, book, host and message, all from the Corneroom app.
                  </p>
                  <StoreButtons />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Keep exploring</p>
              <h2>Related pages</h2>
            </div>
            <RelatedLinks links={related} />
            <p className="prose" style={{ marginTop: "1.4rem" }}>
              Or head back to the <a href="/">Corneroom home page</a> to see everything the platform
              offers.
            </p>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
