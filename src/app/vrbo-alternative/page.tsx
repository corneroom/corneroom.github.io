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

const title = "Vrbo Alternative — Affordable, Beyond Whole Homes | Corneroom";
const description =
  "Want a Vrbo alternative that costs less? Corneroom goes beyond whole-home rentals — book a room, desk, shower, boat & more by night or by the hour, with verified hosts and guests.";
const slug = "vrbo-alternative";

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
    q: "Is Corneroom cheaper than Vrbo?",
    a: "For many trips, yes. Vrbo focuses on whole-home vacation rentals, which tend to price for the whole property. On Corneroom you can book just what you need — a single room, a desk, a shower — from everyday hosts, and any service fee is small, capped and shown before you confirm. There are genuinely free community stays too.",
  },
  {
    q: "What can I book that Vrbo doesn't offer?",
    a: "Beyond a place to sleep, Corneroom lets you book a desk to work, a shower between flights, a boat for the afternoon, a social hangout & more. New categories keep landing, and you can book by the night or by the hour — not just a whole home for a multi-night stay.",
  },
  {
    q: "Can I book by the hour instead of a full night?",
    a: "Yes. Day-use and hourly bookings are a core part of Corneroom — handy for a layover shower, a focused work session or a rest space between check-in and check-out. Whole-home rental sites like Vrbo are built around multi-night stays instead.",
  },
  {
    q: "Are the hosts and guests verified?",
    a: "Both sides are. Every host and every guest completes ID verification before booking. That two-sided check keeps the community trustworthy for travelers and hosts alike.",
  },
  {
    q: "Does Corneroom work worldwide?",
    a: "Yes. Corneroom connects a verified community across 120+ countries and thousands of cities, so you can find an affordable space almost anywhere you travel.",
  },
  {
    q: "Can I earn by hosting, like on Vrbo?",
    a: "Absolutely. Listing is free, you set your own prices and availability, you only ever host verified guests, and payouts are fast and secure. Share a spare room, a desk, a boat & more — you don't need a whole vacation home to start earning.",
  },
];

const related = [
  {
    href: "/airbnb-alternative",
    title: "Airbnb alternative",
    blurb: "Affordable real prices and space types beyond a whole home.",
  },
  {
    href: "/day-use-stays",
    title: "Day-use & hourly stays",
    blurb: "Book a shower, desk or rest space by the hour — not just by the night.",
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

export default function VrboAlternativePage() {
  return (
    <div className={`home landing ${fontVars}`}>
      <JsonLd data={buildBreadcrumbJsonLd("Vrbo alternative", slug)} />
      <JsonLd data={buildFaqJsonLd(faqs)} />

      <LandingNav />

      <main>
        {/* HERO */}
        <section className="lp-hero">
          <div className="wrap">
            <p className="eyebrow">Affordable · Verified · Worldwide</p>
            <h1>
              The <span className="hl">Vrbo alternative</span> that goes beyond whole homes
            </h1>
            <p className="lp-sub">
              Vrbo is built around pricey whole-home vacation rentals. Corneroom is built to be
              affordable — book just what you need: a room, a desk, a shower, a boat, a social space
              &amp; more, by the night or by the hour. Every host and guest is verified, genuinely
              free community stays are real, and it works worldwide.
            </p>
            <StoreButtons />
            <div className="hero-badges">
              <span className="chip">
                <ChipCheck /> Beyond whole homes
              </span>
              <span className="chip">
                <ChipCheck /> Verified hosts &amp; guests
              </span>
              <span className="chip">
                <ChipCheck /> Book by night or hour
              </span>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATOR + COMPARISON */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Why look past whole-home rentals</p>
              <h2>Affordable, flexible, and built for how people actually travel</h2>
            </div>
            <div className="prose">
              <p>
                Whole-home vacation rentals are great when you&apos;re booking a house for a week.
                They&apos;re a lot less useful when you just need a room for a night, a desk for the
                afternoon or a shower between flights — and you often pay for the whole property
                either way. Corneroom takes a different path: everyday hosts set honest prices for
                the exact space they&apos;re sharing, any fee is small and capped, and what you see
                is what you pay.
              </p>
              <p>
                You also get flexibility a home-rental site isn&apos;t built for — booking by the
                hour, not only by the night. And if free is what you&apos;re after, our{" "}
                <a href="/free-places-to-stay">free places to stay</a> live in the same app.
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
                    <th scope="col">Whole-home rental sites</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="feat">What you book</td>
                    <td className="us-col yes">A room, desk, shower, boat &amp; more</td>
                    <td className="no">Mostly whole homes</td>
                  </tr>
                  <tr>
                    <td className="feat">Booking length</td>
                    <td className="us-col yes">By the night or by the hour</td>
                    <td className="no">Multi-night stays</td>
                  </tr>
                  <tr>
                    <td className="feat">Pricing</td>
                    <td className="us-col yes">Affordable, small capped fee</td>
                    <td className="no">Whole-property rates &amp; fees</td>
                  </tr>
                  <tr>
                    <td className="feat">Free community stays</td>
                    <td className="us-col yes">Yes, genuinely free</td>
                    <td className="no">No</td>
                  </tr>
                  <tr>
                    <td className="feat">Two-sided ID verification</td>
                    <td className="us-col yes">Hosts and guests, always</td>
                    <td className="no">Uneven, often guest-only</td>
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
              <h2>Spaces a whole-home rental can&apos;t give you</h2>
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
                spaces for real budgets, and because you book only what you need, you&apos;re not
                paying for a whole house you won&apos;t use. Many hosts even share their space for
                free — free community stays carry no service fee for anyone. On a paid space, the fee
                is small, capped and shown before you confirm.
              </p>
              <ul className="checklist">
                <li>
                  <ChipCheck />
                  <span>Pay for the space you actually need, not the whole property</span>
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
                  hosts — book by the night or by the hour.
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
              <h2>Vrbo alternative FAQ</h2>
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
                    Join a verified community sharing affordable spaces worldwide — beyond whole
                    homes, by the night or the hour, with real free stays too. Search, book, host and
                    message, all from the Corneroom app.
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
