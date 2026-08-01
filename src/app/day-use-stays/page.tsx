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

const title = "Day-Use & Hourly Stays — Book by the Hour | Corneroom";
const description =
  "Book by the hour on Corneroom: a shower on a layover, a desk for a work day, a rest space between check-in and check-out. Affordable day-use stays with verified hosts and guests, worldwide.";
const slug = "day-use-stays";

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
    q: "What are day-use and hourly stays?",
    a: "They're spaces you book for a few hours instead of a whole night — a shower on a long layover, a desk for a focused work day, or a rest space between check-in and check-out. You pay for the time you actually use, so it's affordable and there's no need to book a full night you don't need.",
  },
  {
    q: "What can I book by the hour on Corneroom?",
    a: "A shower to freshen up, a desk or quiet space to work, a rest space to recharge & more. New categories keep landing, so the list of things you can book by the hour keeps growing.",
  },
  {
    q: "When are hourly stays most useful?",
    a: "Airport layovers, early arrivals before check-in, late departures after check-out, a remote-work day between meetings, or anytime you need a real space for a few hours but not overnight. It's the gap most booking sites leave wide open.",
  },
  {
    q: "Is it cheaper than booking a full night?",
    a: "Usually, yes — you only pay for the hours you use rather than a whole night. Any service fee is small, capped and shown before you confirm, so the total you see is the total you pay.",
  },
  {
    q: "Are day-use hosts and guests verified?",
    a: "Both sides are. Every host and every guest completes ID verification before booking — the same two-sided check that applies to overnight stays — so a quick few-hour booking still feels safe.",
  },
  {
    q: "Can I host my space for day-use bookings?",
    a: "Yes. Listing is free, and you can offer your space by the hour, by the night, or both. A spare desk, a shower, a rest space & more can earn between the times you'd normally leave it empty — and you only ever host verified guests.",
  },
];

const related = [
  {
    href: "/digital-nomad-accommodation",
    title: "Digital nomad accommodation",
    blurb: "Affordable stays plus desks and work spaces for working travelers.",
  },
  {
    href: "/cheap-places-to-stay",
    title: "Cheap places to stay",
    blurb: "Genuinely affordable spaces real people can actually book.",
  },
  {
    href: "/airbnb-alternative",
    title: "Airbnb alternative",
    blurb: "Affordable real prices and space types beyond a whole home.",
  },
  {
    href: "/host",
    title: "Become a host",
    blurb: "List your space & earn — offer it by the hour or by the night.",
  },
];

export default function DayUseStaysPage() {
  return (
    <div className={`home landing ${fontVars}`}>
      <JsonLd data={buildBreadcrumbJsonLd("Day-use & hourly stays", slug)} />
      <JsonLd data={buildFaqJsonLd(faqs)} />

      <LandingNav />

      <main>
        {/* HERO */}
        <section className="lp-hero">
          <div className="wrap">
            <p className="eyebrow">Affordable · Verified · Worldwide</p>
            <h1>
              <span className="hl">Day-use &amp; hourly stays</span> — book by the hour, not the night
            </h1>
            <p className="lp-sub">
              Sometimes you don&apos;t need a whole night — you need a shower on a layover, a desk for
              a work day, or a rest space between check-in and check-out. Corneroom lets you book real
              spaces by the hour, from verified hosts, at affordable prices, worldwide.
            </p>
            <StoreButtons />
            <div className="hero-badges">
              <span className="chip">
                <ChipCheck /> Pay for hours, not a full night
              </span>
              <span className="chip">
                <ChipCheck /> Verified hosts &amp; guests
              </span>
              <span className="chip">
                <ChipCheck /> Shower, work, rest &amp; more
              </span>
            </div>
          </div>
        </section>

        {/* THE WEDGE */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">The gap other booking sites leave</p>
              <h2>Real spaces for a few hours — finally bookable</h2>
            </div>
            <div className="prose">
              <p>
                Almost every booking site is built around one thing: a full overnight stay. But
                travel is full of in-between moments a whole night doesn&apos;t fit — a six-hour
                layover, an early landing before check-in, a work day with nowhere to focus.
                Corneroom is built for exactly those moments. Book a space by the hour, use it, and
                move on.
              </p>
              <p>
                It&apos;s affordable because you only pay for the time you use, and it&apos;s safe
                because the same two-sided verification applies to a quick booking as an overnight
                one. Need somewhere for the night instead? Our{" "}
                <a href="/cheap-places-to-stay">cheap places to stay</a> live in the same app.
              </p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">When day-use wins</p>
              <h2>Three moments made for booking by the hour</h2>
            </div>
            <div className="lp-steps">
              <div className="step">
                <div className="n">1</div>
                <h3>The long layover</h3>
                <p>
                  A shower and a quiet spot to reset between flights — so you arrive at your next stop
                  feeling human, without paying for a night you&apos;ll barely use.
                </p>
              </div>
              <div className="step">
                <div className="n">2</div>
                <h3>The work day</h3>
                <p>
                  A desk or quiet space for focused hours between meetings — better wifi, a real
                  surface, and no coffee-shop noise on your calls.
                </p>
              </div>
              <div className="step">
                <div className="n">3</div>
                <h3>The check-in gap</h3>
                <p>
                  Landed early or leaving late? Book a rest space to freshen up and store your energy
                  until your next stay is ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">More than a place to sleep</p>
              <h2>Book exactly what a few hours calls for</h2>
              <p>
                Shower, work, rest, socialize &amp; more — by the hour or by the night. New categories
                keep landing, so this list only grows.
              </p>
            </div>
            <CategoryStrip />
          </div>
        </section>

        {/* AFFORDABLE */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Affordable by the hour</p>
              <h2>Pay for the time you use — nothing more</h2>
            </div>
            <div className="prose">
              <p>
                A few hours shouldn&apos;t cost the price of a full night. On Corneroom, hourly and
                day-use spaces are priced by everyday hosts for exactly the time you book, and any fee
                is small, capped and shown before you confirm. What you see is what you pay.
              </p>
              <ul className="checklist">
                <li>
                  <ChipCheck />
                  <span>Only pay for the hours you actually book</span>
                </li>
                <li>
                  <ChipCheck />
                  <span>Small, capped, transparent fees — no checkout surprises</span>
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
        <section className="sec">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">Built on trust</p>
              <h2>Verified on both sides, even for a quick booking</h2>
              <p>
                Every host and every guest verifies their identity before booking — so a few-hour stay
                is as safe as an overnight one.
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
              <h2>Day-use &amp; hourly stays FAQ</h2>
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
                  <h2>Book a space for a few hours</h2>
                  <p>
                    Join a verified community sharing affordable spaces worldwide — by the hour or by
                    the night. Search, book, host and message, all from the Corneroom app.
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
