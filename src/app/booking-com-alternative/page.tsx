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

const title = "Booking.com Alternative — Real Community Spaces | Corneroom";
const description =
  "Want a Booking.com alternative with a human touch? Corneroom is real community spaces from verified hosts and guests — affordable, beyond hotels, with genuinely free stays too.";
const slug = "booking-com-alternative";

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
    q: "How is Corneroom different from Booking.com?",
    a: "Booking.com is mostly hotels and large properties booked through a screen. Corneroom is real community spaces shared by everyday people you actually meet — a room, a desk, a shower, a boat, a social space & more. It's affordable, verified on both sides, and there are genuinely free community stays that hotel sites simply don't offer.",
  },
  {
    q: "Is Corneroom cheaper than booking a hotel?",
    a: "For many trips, yes. Everyday hosts set honest prices, any service fee is small, capped and shown before you confirm — so there's no stack of charges at checkout. And because you can book just the space you need, you're not paying hotel rates for room you won't use.",
  },
  {
    q: "Are the hosts and guests verified?",
    a: "Both sides are. Every host and every guest completes ID verification before booking — so you're trusting real, verified people, not just a property listing. That two-sided check keeps the community safe for travelers and hosts alike.",
  },
  {
    q: "What can I book beyond a hotel room?",
    a: "Beyond a place to sleep, Corneroom lets you book a desk to work, a shower between flights, a boat for the afternoon, a social hangout & more — by the night or by the hour. New categories keep landing, so you can book exactly what your trip needs.",
  },
  {
    q: "Are there hidden fees at checkout?",
    a: "No. The total you see is the total you pay. Any fee on a paid space is transparent and capped, and free community stays carry no service fee at all for either party.",
  },
  {
    q: "Does Corneroom work worldwide?",
    a: "Yes. Corneroom connects a verified community across 120+ countries and thousands of cities, so you can find an affordable, real place to stay almost anywhere you travel.",
  },
];

const related = [
  {
    href: "/airbnb-alternative",
    title: "Airbnb alternative",
    blurb: "Affordable real prices and space types beyond a whole home.",
  },
  {
    href: "/cheap-places-to-stay",
    title: "Cheap places to stay",
    blurb: "Genuinely affordable spaces real people can actually book.",
  },
  {
    href: "/free-places-to-stay",
    title: "Free places to stay",
    blurb: "How to find genuinely free accommodation while traveling.",
  },
  {
    href: "/host",
    title: "Become a host",
    blurb: "List your space & earn — founding hosts keep 100% for 12 months.",
  },
];

export default function BookingComAlternativePage() {
  return (
    <div className={`home landing ${fontVars}`}>
      <JsonLd data={buildBreadcrumbJsonLd("Booking.com alternative", slug)} />
      <JsonLd data={buildFaqJsonLd(faqs)} />

      <LandingNav />

      <main>
        {/* HERO */}
        <section className="lp-hero">
          <div className="wrap">
            <p className="eyebrow">Affordable · Verified · Worldwide</p>
            <h1>
              The <span className="hl">Booking.com alternative</span> with a human touch
            </h1>
            <p className="lp-sub">
              Big hotel sites are efficient — and impersonal. Corneroom is real community spaces
              shared by verified people you actually meet: a room, a desk, a shower, a boat, a social
              space &amp; more. Affordable prices with no surprise fees, verified hosts <em>and</em>{" "}
              guests, genuinely free stays, worldwide.
            </p>
            <StoreButtons />
            <div className="hero-badges">
              <span className="chip">
                <ChipCheck /> Real people, not just properties
              </span>
              <span className="chip">
                <ChipCheck /> Verified hosts &amp; guests
              </span>
              <span className="chip">
                <ChipCheck /> No hidden fees
              </span>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATOR + COMPARISON */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Why look past the hotel sites</p>
              <h2>Affordable, real, and built around people</h2>
            </div>
            <div className="prose">
              <p>
                Booking a hotel through a giant marketplace is quick, but it&apos;s a transaction — a
                property, a price, and a stack of fees at the end. Corneroom is built around people
                instead. Everyday hosts share real spaces, set honest prices, and you book from
                verified individuals, not anonymous listings. Any fee is small, capped and shown up
                front, so what you see is what you pay.
              </p>
              <p>
                You also get more than a standard room. Need a quiet desk for the afternoon, a shower
                between flights, or a boat for a few hours? Those are real categories here. And if
                budget is the priority, our <a href="/cheap-places-to-stay">cheap places to stay</a>{" "}
                and genuinely free community stays live in the same app.
              </p>
            </div>

            <div className="cmp-wrap" style={{ marginTop: "1.8rem" }}>
              <table className="cmp">
                <caption>An honest comparison — no knocking, just how we&apos;re different.</caption>
                <thead>
                  <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col" className="us">
                      Corneroom
                    </th>
                    <th scope="col">Typical hotel booking sites</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="feat">Who you book</td>
                    <td className="us-col yes">Real, verified people</td>
                    <td className="no">Properties &amp; brands</td>
                  </tr>
                  <tr>
                    <td className="feat">Pricing</td>
                    <td className="us-col yes">Affordable, small capped fee</td>
                    <td className="no">Rates plus fees &amp; taxes</td>
                  </tr>
                  <tr>
                    <td className="feat">Free community stays</td>
                    <td className="us-col yes">Yes, genuinely free</td>
                    <td className="no">No</td>
                  </tr>
                  <tr>
                    <td className="feat">Space types</td>
                    <td className="us-col yes">Sleep, work, shower, boat, social &amp; more</td>
                    <td className="no">Mostly hotel rooms</td>
                  </tr>
                  <tr>
                    <td className="feat">Two-sided ID verification</td>
                    <td className="us-col yes">Hosts and guests, always</td>
                    <td className="no">Property-level only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">More than a hotel room</p>
              <h2>Spaces a hotel site doesn&apos;t list</h2>
              <p>
                Book exactly the kind of space your trip needs — for a night or just a few hours. New
                categories keep landing, so this list only grows over time.
              </p>
            </div>
            <CategoryStrip />
          </div>
        </section>

        {/* AFFORDABLE + FREE */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Cheaper than you expect</p>
              <h2>Affordable paid spaces — and real free ones</h2>
            </div>
            <div className="prose">
              <p>
                Corneroom is designed to be affordable, not premium. Everyday hosts price their
                spaces for real budgets, and many share their space for free simply because they love
                hosting. Free community stays carry no service fee for anyone. When you book a paid
                space, the fee is small, capped and shown before you confirm — no charges quietly
                stacked on at the end.
              </p>
              <ul className="checklist">
                <li>
                  <ChipCheck />
                  <span>Honest prices without checkout surprises</span>
                </li>
                <li>
                  <ChipCheck />
                  <span>Genuinely free community stays alongside paid ones</span>
                </li>
                <li>
                  <ChipCheck />
                  <span>Message any host for free before you book</span>
                </li>
              </ul>
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
                Every host and every guest verifies their identity before booking — so you&apos;re
                trusting real people, and hosts know exactly who&apos;s arriving.
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
              <h2>Book a real space in three steps</h2>
            </div>
            <div className="lp-steps">
              <div className="step">
                <div className="n">1</div>
                <h3>Search &amp; compare</h3>
                <p>
                  Enter where you&apos;re going and what you need. Compare real prices from verified
                  hosts — the total you see is the total you pay.
                </p>
              </div>
              <div className="step">
                <div className="n">2</div>
                <h3>Get verified &amp; book</h3>
                <p>
                  Verify your ID once, like every guest and host. Then book an affordable space, or a
                  genuinely free community stay.
                </p>
              </div>
              <div className="step">
                <div className="n">3</div>
                <h3>Stay &amp; review</h3>
                <p>
                  Enjoy your space, meet your host, and leave an honest review to keep the community
                  trusted worldwide.
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
              <h2>Booking.com alternative FAQ</h2>
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
                  <h2>Book a real space in minutes</h2>
                  <p>
                    Join a verified community sharing affordable, real spaces worldwide — with free
                    stays too. Search, book, host and message, all from the Corneroom app.
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
