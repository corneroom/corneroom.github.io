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

const title = "Airbnb Alternative — Cheaper Real Stays | Corneroom";
const description =
  "Want an Airbnb alternative that's actually affordable? Corneroom has real prices, verified hosts and guests, free community stays, and spaces Airbnb doesn't offer.";
const slug = "airbnb-alternative";

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
    q: "Is Corneroom really cheaper than Airbnb?",
    a: "For many trips, yes. Corneroom spaces are priced by everyday hosts, and any service fee is small, capped and shown before you confirm — no cleaning fees or surprise charges stacked on at checkout. There are also genuinely free community stays, which no traditional booking site offers.",
  },
  {
    q: "What can I book that Airbnb doesn't offer?",
    a: "Beyond a place to sleep, Corneroom lets you book a desk to work, a shower between flights, a boat for the afternoon, a social hangout & more. New categories keep landing, so you can book exactly the kind of space you need, not just a whole home or room.",
  },
  {
    q: "Are the hosts and guests verified?",
    a: "Both sides are. Every host and every guest completes ID verification before booking. That two-sided check keeps the community trustworthy for travelers and hosts alike.",
  },
  {
    q: "Are there hidden fees like on other platforms?",
    a: "No. The total you see is the total you pay. Any fee on a paid space is transparent and capped, and free community stays carry no service fee at all for either party.",
  },
  {
    q: "Does Corneroom work worldwide?",
    a: "Yes. Corneroom connects a verified community across 120+ countries and thousands of cities, so you can find an affordable space almost anywhere you travel.",
  },
  {
    q: "Can I earn by hosting, like on Airbnb?",
    a: "Absolutely. Listing is free, you set your own prices and availability, you only ever host verified guests, and payouts are fast and secure. Share a spare room, a desk, a boat & more and earn from space you already have.",
  },
];

const related = [
  {
    href: "/couchsurfing-alternative",
    title: "Couchsurfing alternative",
    blurb: "Real free community stays with verified hosts and guests.",
  },
  {
    href: "/free-places-to-stay",
    title: "Free places to stay",
    blurb: "How to find genuinely free accommodation while traveling.",
  },
  {
    href: "/app",
    title: "Get the app",
    blurb: "Browse, book and host verified spaces worldwide from your phone.",
  },
];

export default function AirbnbAlternativePage() {
  return (
    <div className={`home landing ${fontVars}`}>
      <JsonLd data={buildBreadcrumbJsonLd("Airbnb alternative", slug)} />
      <JsonLd data={buildFaqJsonLd(faqs)} />

      <LandingNav />

      <main>
        {/* HERO */}
        <section className="lp-hero">
          <div className="wrap">
            <p className="eyebrow">Affordable · Verified · Worldwide</p>
            <h1>
              The <span className="hl">Airbnb alternative</span> that&apos;s actually affordable
            </h1>
            <p className="lp-sub">
              Real prices from everyday hosts, no surprise fees at checkout, and space types Airbnb
              doesn&apos;t offer — work, shower, boat, social &amp; more. Every host and guest is
              verified, and yes, genuinely free community stays are real. Book affordable spaces
              worldwide with Corneroom.
            </p>
            <StoreButtons />
            <div className="hero-badges">
              <span className="chip">
                <ChipCheck /> No hidden fees
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

        {/* DIFFERENTIATOR + COMPARISON */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Why look past the usual booking sites</p>
              <h2>Affordable, real, and built for how people actually travel</h2>
            </div>
            <div className="prose">
              <p>
                Big booking platforms are great at glossy listings and less great at the total on
                the final screen. Cleaning fees, service fees and taxes can quietly double a nightly
                price. Corneroom takes a different path: everyday hosts set honest prices, any fee is
                small and capped, and what you see is what you pay.
              </p>
              <p>
                You also get more than a place to sleep. Need a quiet desk for the afternoon, a
                shower between flights, or a boat for a few hours? Those are real categories here.
                And if free is what you&apos;re after, our{" "}
                <a href="/couchsurfing-alternative">Couchsurfing alternative</a> lives in the same
                app.
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
                    <th scope="col">Typical home-rental sites</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="feat">Pricing</td>
                    <td className="us-col yes">Real prices, small capped fee</td>
                    <td className="no">Fees &amp; charges stack at checkout</td>
                  </tr>
                  <tr>
                    <td className="feat">Free community stays</td>
                    <td className="us-col yes">Yes, genuinely free</td>
                    <td className="no">No</td>
                  </tr>
                  <tr>
                    <td className="feat">Space types</td>
                    <td className="us-col yes">Sleep, work, shower, boat, social &amp; more</td>
                    <td className="no">Mostly whole homes &amp; rooms</td>
                  </tr>
                  <tr>
                    <td className="feat">Two-sided ID verification</td>
                    <td className="us-col yes">Hosts and guests, always</td>
                    <td className="no">Uneven, often guest-only</td>
                  </tr>
                  <tr>
                    <td className="feat">Worldwide reach</td>
                    <td className="us-col yes">120+ countries</td>
                    <td className="no">Wide, but pricier</td>
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
              <p className="eyebrow">More than a place to sleep</p>
              <h2>Categories Airbnb doesn&apos;t have</h2>
              <p>
                Book exactly the kind of space your trip needs. New categories keep landing, so this
                list only grows over time.
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
                spaces for real budgets, and on top of that, many share their space for free simply
                because they love hosting. Free community stays carry no service fee for anyone. When
                you book a paid space, the fee is small, capped and shown before you confirm — see
                how <a href="/free-places-to-stay">free places to stay</a> work too.
              </p>
              <ul className="checklist">
                <li>
                  <ChipCheck />
                  <span>Honest nightly prices without checkout surprises</span>
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
                Every host and every guest verifies their identity before booking — so travelers and
                hosts can trust who they&apos;re dealing with.
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
              <h2>Book an affordable space in three steps</h2>
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
              <h2>Airbnb alternative FAQ</h2>
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
                  <h2>Book an affordable space in minutes</h2>
                  <p>
                    Join a verified community sharing affordable spaces worldwide — with real free
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
