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

const title = "Couchsurfing Alternative — Free Stays | Corneroom";
const description =
  "Looking for a Couchsurfing alternative? Corneroom offers real free community stays, verified hosts and guests, and spaces beyond a couch — worldwide.";
const slug = "couchsurfing-alternative";

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
    q: "Is Corneroom really a free Couchsurfing alternative?",
    a: "Yes — free community stays are real on Corneroom. Many hosts open their space at no charge because they love meeting travelers, and free stays never carry a service fee for either side. Alongside them you'll also find very affordable paid spaces, so there's a fit for every trip.",
  },
  {
    q: "How is Corneroom different from Couchsurfing?",
    a: "Couchsurfing moved to a paid membership and its community has thinned over the years. Corneroom keeps genuinely free stays, verifies both hosts and guests, and goes beyond a spare couch — you can book a bed, a desk, a shower, a boat, a social hangout & more, in one app that works worldwide.",
  },
  {
    q: "Are hosts and guests verified?",
    a: "Both are. Every host and every guest completes ID verification before a single booking. That two-sided check is a core reason travelers and hosts feel safe opening their doors on Corneroom.",
  },
  {
    q: "What kinds of spaces can I find?",
    a: "Sleep, Work, Shower, Boat and Social to start — and the list keeps growing. Instead of only a couch, you book exactly the kind of space you need, whether that's a room for the night or a quiet desk for the afternoon.",
  },
  {
    q: "Does Corneroom work worldwide?",
    a: "Yes. Corneroom connects a verified community across 120+ countries and thousands of cities, so wherever you land there's an affordable — often free — space and someone glad you came.",
  },
  {
    q: "How much does it cost to join?",
    a: "Creating an account and listing a space are free. Free community stays cost nothing to book, and paid spaces show a small, capped fee transparently before you confirm. No surprise charges.",
  },
];

const related = [
  {
    href: "/airbnb-alternative",
    title: "Airbnb alternative",
    blurb: "Affordable real prices and space types Airbnb doesn't have.",
  },
  {
    href: "/free-places-to-stay",
    title: "Free places to stay",
    blurb: "How genuinely free community stays work — and how to find them.",
  },
  {
    href: "/cheap-places-to-stay",
    title: "Cheap places to stay",
    blurb: "Genuinely affordable spaces real people can actually book.",
  },
  {
    href: "/app",
    title: "Get the app",
    blurb: "Browse, book and host verified spaces worldwide from your phone.",
  },
  {
    href: "/host",
    title: "Become a host",
    blurb: "List your space & earn — founding hosts keep 100% for 12 months.",
  },
];

export default function CouchsurfingAlternativePage() {
  return (
    <div className={`home landing ${fontVars}`}>
      <JsonLd data={buildBreadcrumbJsonLd("Couchsurfing alternative", slug)} />
      <JsonLd data={buildFaqJsonLd(faqs)} />

      <LandingNav />

      <main>
        {/* HERO */}
        <section className="lp-hero">
          <div className="wrap">
            <p className="eyebrow">Free · Verified · Worldwide</p>
            <h1>
              The <span className="hl">Couchsurfing alternative</span> with real free stays
            </h1>
            <p className="lp-sub">
              Couchsurfing went paid and started to feel dated. Corneroom keeps what made it
              special — genuinely free community stays — and adds verified hosts <em>and</em>{" "}
              guests, plus spaces beyond a couch: sleep, work, shower, boat, socialize &amp; more,
              across the globe.
            </p>
            <StoreButtons />
            <div className="hero-badges">
              <span className="chip">
                <ChipCheck /> Free stays are real
              </span>
              <span className="chip">
                <ChipCheck /> Verified hosts &amp; guests
              </span>
              <span className="chip">
                <ChipCheck /> 120+ countries
              </span>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATOR + COMPARISON */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Why people are switching</p>
              <h2>A warmer, more useful way to stay for free</h2>
            </div>
            <div className="prose">
              <p>
                If you loved the old spirit of couch-sharing — staying with locals, making real
                friends, traveling on a budget — you don&apos;t have to give it up. Corneroom is
                built around the same idea, just brought up to date. Free community stays are still
                here, hosting is still about people rather than profit, and the whole community is
                verified so saying yes feels safe.
              </p>
              <p>
                The difference is what you can actually book. Instead of only a couch, you choose
                the kind of space you need for the trip in front of you — and there are affordable
                paid options right alongside the free ones. Not sure paid is your thing? Compare it
                with our <a href="/airbnb-alternative">affordable Airbnb alternative</a> too.
              </p>
            </div>

            <div className="cmp-wrap" style={{ marginTop: "1.8rem" }}>
              <table className="cmp">
                <caption>An honest comparison — no knocking, just the facts as we see them.</caption>
                <thead>
                  <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col" className="us">
                      Corneroom
                    </th>
                    <th scope="col">Classic couch-sharing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="feat">Genuinely free stays</td>
                    <td className="us-col yes">Yes — free community stays</td>
                    <td className="no">Yes, but behind a paid membership</td>
                  </tr>
                  <tr>
                    <td className="feat">Two-sided ID verification</td>
                    <td className="us-col yes">Hosts and guests, always</td>
                    <td className="no">Limited / optional</td>
                  </tr>
                  <tr>
                    <td className="feat">Space types</td>
                    <td className="us-col yes">Sleep, work, shower, boat, social &amp; more</td>
                    <td className="no">Mostly a spare couch</td>
                  </tr>
                  <tr>
                    <td className="feat">Affordable paid options</td>
                    <td className="us-col yes">Yes, transparent capped fees</td>
                    <td className="no">Not really the point</td>
                  </tr>
                  <tr>
                    <td className="feat">Worldwide reach</td>
                    <td className="us-col yes">120+ countries</td>
                    <td className="no">Varies, quieter than it was</td>
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
              <p className="eyebrow">Beyond a couch</p>
              <h2>A space for every kind of trip</h2>
              <p>
                Book exactly what you need — not just somewhere to crash. New categories keep
                landing, so this list only grows.
              </p>
            </div>
            <CategoryStrip />
          </div>
        </section>

        {/* AFFORDABLE + FREE */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Affordable, and often free</p>
              <h2>Free community stays — plus budget-friendly paid ones</h2>
            </div>
            <div className="prose">
              <p>
                Plenty of hosts share their space for free simply because they enjoy the company. On
                a free stay there&apos;s no service fee for anyone — it&apos;s community, not
                commerce. When you&apos;d rather book a paid space, prices stay honest and any fee is
                small, capped and shown up front. See exactly how{" "}
                <a href="/free-places-to-stay">free places to stay</a> work on Corneroom.
              </p>
              <ul className="checklist">
                <li>
                  <ChipCheck />
                  <span>Real free community stays, with no hidden service fee</span>
                </li>
                <li>
                  <ChipCheck />
                  <span>Affordable paid spaces when you want more privacy or space</span>
                </li>
                <li>
                  <ChipCheck />
                  <span>Message any host for free before you decide</span>
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
                Corneroom isn&apos;t anonymous. Hosts and guests both verify who they are — so the
                community feels safe enough to open its doors.
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
              <h2>From search to stay in three steps</h2>
            </div>
            <div className="lp-steps">
              <div className="step">
                <div className="n">1</div>
                <h3>Search &amp; discover</h3>
                <p>
                  Tell us where you&apos;re headed and what you need — a free couch, a bed, a desk &amp;
                  more. Browse real, verified spaces near you.
                </p>
              </div>
              <div className="step">
                <div className="n">2</div>
                <h3>Get verified &amp; book</h3>
                <p>
                  Verify your ID once — every guest and host does. Then book, including genuinely
                  free community stays.
                </p>
              </div>
              <div className="step">
                <div className="n">3</div>
                <h3>Show up &amp; belong</h3>
                <p>
                  Meet your host, settle in, travel like a local, and leave a review to keep the
                  community trusted worldwide.
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
              <h2>Couchsurfing alternative FAQ</h2>
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
                  <h2>Your next free stay is in your pocket</h2>
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
