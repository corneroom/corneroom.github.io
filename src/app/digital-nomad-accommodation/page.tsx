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

const title = "Digital Nomad Accommodation — Stay & Work | Corneroom";
const description =
  "Digital nomad accommodation that works: affordable stays plus desks and work spaces, monthly-friendly and day-use, verified community, worldwide. Find a place to live and work on Corneroom.";
const slug = "digital-nomad-accommodation";

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
    q: "What makes Corneroom good for digital nomads?",
    a: "You get both sides of nomad life in one app: affordable places to stay and real work spaces — a desk, a quiet studio, a spot to focus. You can book monthly-friendly stays for a longer base, or day-use a work space when you just need a few focused hours. Every host and guest is verified, and it works worldwide.",
  },
  {
    q: "Can I book a work space or desk, not just a place to sleep?",
    a: "Yes. Work is a core category on Corneroom — book a desk or a quiet space to get things done, by the day or by the hour. It's ideal when your stay isn't set up for calls and deep work, or when you're between places and just need somewhere to focus.",
  },
  {
    q: "Are there monthly or longer stays for nomads?",
    a: "Many hosts welcome longer stays, so you can find a monthly-friendly base rather than rebooking every few nights. Affordable pricing and honest, capped fees make settling in for a while easier on the budget.",
  },
  {
    q: "Is it affordable enough for long-term travel?",
    a: "That's the point. Corneroom is built to be affordable — everyday hosts price for real budgets, any fee is small and shown before you confirm, and there are genuinely free community stays too. Booking just the space you need keeps costs down over a long trip.",
  },
  {
    q: "How do I know hosts and guests are trustworthy?",
    a: "Every host and every guest completes ID verification before booking, so you're joining a real, verified community — not an anonymous marketplace. Real reviews and free messaging help you settle in with confidence wherever you land.",
  },
  {
    q: "Does it work in the cities nomads actually go to?",
    a: "Corneroom connects a verified community across 120+ countries and thousands of cities, so you can line up a stay and a place to work as you move. Availability varies by city and season, so it helps to search early and message hosts.",
  },
];

const related = [
  {
    href: "/day-use-stays",
    title: "Day-use & hourly stays",
    blurb: "Book a desk or focus space by the hour for a productive work day.",
  },
  {
    href: "/cheap-places-to-stay",
    title: "Cheap places to stay",
    blurb: "Genuinely affordable spaces to keep long-term travel sustainable.",
  },
  {
    href: "/airbnb-alternative",
    title: "Airbnb alternative",
    blurb: "Affordable real prices and space types beyond a whole home.",
  },
  {
    href: "/host",
    title: "Become a host",
    blurb: "List your space & earn — founding hosts keep 100% for 12 months.",
  },
];

export default function DigitalNomadAccommodationPage() {
  return (
    <div className={`home landing ${fontVars}`}>
      <JsonLd data={buildBreadcrumbJsonLd("Digital nomad accommodation", slug)} />
      <JsonLd data={buildFaqJsonLd(faqs)} />

      <LandingNav />

      <main>
        {/* HERO */}
        <section className="lp-hero">
          <div className="wrap">
            <p className="eyebrow">Affordable · Verified · Worldwide</p>
            <h1>
              <span className="hl">Digital nomad accommodation</span> — stay and work in one app
            </h1>
            <p className="lp-sub">
              Remote work needs more than a bed. Corneroom pairs affordable stays with real work
              spaces — book a desk to focus by the day or the hour, and a monthly-friendly base when
              you settle in. Every host and guest is verified, prices are honest, and it works
              worldwide.
            </p>
            <StoreButtons />
            <div className="hero-badges">
              <span className="chip">
                <ChipCheck /> Stays &amp; work spaces
              </span>
              <span className="chip">
                <ChipCheck /> Verified community
              </span>
              <span className="chip">
                <ChipCheck /> Monthly-friendly &amp; day-use
              </span>
            </div>
          </div>
        </section>

        {/* WHY IT WORKS FOR NOMADS */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Built for remote work on the move</p>
              <h2>A place to live and a place to focus — without overpaying</h2>
            </div>
            <div className="prose">
              <p>
                Nomad life falls apart when your stay can&apos;t handle a work day — bad wifi
                corners, no desk, calls in a stairwell. Corneroom solves both halves in one app. Book
                an affordable place to stay, and when you need to get real work done, book a desk or
                a quiet work space too — by the day or by the hour, wherever you are.
              </p>
              <p>
                Because you book only what you need and hosts price for real budgets, long-term
                travel stays sustainable. Settling somewhere for a while? Look for a monthly-friendly
                base — and if you want to stretch the budget further, our{" "}
                <a href="/cheap-places-to-stay">cheap places to stay</a> and genuinely free community
                stays are in the same app.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">More than a place to sleep</p>
              <h2>Everything a working traveler needs</h2>
              <p>
                Stay, work, freshen up between places, or unwind with the community — book exactly
                what your day needs. New categories keep landing.
              </p>
            </div>
            <CategoryStrip />
          </div>
        </section>

        {/* AFFORDABLE + FLEXIBLE */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Flexible by the day or the month</p>
              <h2>Day-use focus, or a monthly-friendly base</h2>
            </div>
            <div className="prose">
              <p>
                Some days you just need three focused hours at a desk before a flight; other months
                you want a steady base to work from. Corneroom handles both — day-use and hourly work
                spaces for focused sessions, and longer stays when you want to slow down. Any fee is
                small, capped and shown before you confirm.
              </p>
              <ul className="checklist">
                <li>
                  <ChipCheck />
                  <span>Day-use desks and work spaces for focused sessions</span>
                </li>
                <li>
                  <ChipCheck />
                  <span>Monthly-friendly stays for a longer base</span>
                </li>
                <li>
                  <ChipCheck />
                  <span>Message any host for free before you commit</span>
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
              <h2>A verified community, wherever you land</h2>
              <p>
                Every host and every guest verifies their identity before booking — so a new city
                still feels like somewhere you belong.
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
              <h2>Set up your stay and workspace in three steps</h2>
            </div>
            <div className="lp-steps">
              <div className="step">
                <div className="n">1</div>
                <h3>Search your next city</h3>
                <p>
                  Enter where you&apos;re headed and what you need — a place to stay, a desk to work,
                  or both. Compare real, verified spaces.
                </p>
              </div>
              <div className="step">
                <div className="n">2</div>
                <h3>Get verified &amp; book</h3>
                <p>
                  Verify your ID once — every guest and host does. Book a stay by the night or month,
                  and a work space by the day or hour.
                </p>
              </div>
              <div className="step">
                <div className="n">3</div>
                <h3>Work, explore, review</h3>
                <p>
                  Get your work done, meet the community, and leave an honest review to keep it
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
              <h2>Digital nomad accommodation FAQ</h2>
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
                  <h2>Find your next base — and workspace</h2>
                  <p>
                    Join a verified community sharing affordable stays and real work spaces
                    worldwide. Search, book, host and message, all from the Corneroom app.
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
