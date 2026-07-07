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

const title = "Free Places to Stay While Traveling | Corneroom";
const description =
  "Find free places to stay worldwide. Corneroom offers real free community stays with verified hosts and guests — plus very affordable paid spaces when you need them.";
const slug = "free-places-to-stay";

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
    q: "Are the free places to stay on Corneroom really free?",
    a: "Yes. Free community stays are genuinely free — many hosts open their space at no charge because they enjoy meeting travelers. On a free stay there's no service fee for either the guest or the host. Free stays are real, though they're not the only option: very affordable paid spaces are available too.",
  },
  {
    q: "How do free community stays work?",
    a: "A host lists a space and sets the price to free. You search, get verified, send a message, and book — just like any other stay. When you arrive you're a guest in someone's space, so being respectful and communicative keeps the community welcoming for everyone.",
  },
  {
    q: "Is it safe to stay somewhere for free?",
    a: "Safety comes from Corneroom's two-sided verification: every host and every guest confirms their identity before a booking. You can also read real reviews and message the host beforehand, so you know who you're staying with. Free doesn't mean anonymous.",
  },
  {
    q: "What if I can't find a free stay for my dates?",
    a: "Free stays depend on host availability, so they aren't guaranteed everywhere for every date. When a free space isn't open, Corneroom also lists very affordable paid spaces with small, capped, transparent fees — so you still have a budget-friendly option.",
  },
  {
    q: "Do free places to stay exist worldwide?",
    a: "Corneroom connects a verified community across 120+ countries and thousands of cities, and free community stays turn up across that map. Availability varies by place and season, so it's worth searching early and messaging hosts.",
  },
  {
    q: "Can I host travelers for free too?",
    a: "Yes. Listing is free and you set your own price — including free. Many hosts share a spare room, a couch, a desk & more at no charge simply for the company and the connection, and only ever host verified guests.",
  },
];

const related = [
  {
    href: "/couchsurfing-alternative",
    title: "Couchsurfing alternative",
    blurb: "The community-first way to stay for free, brought up to date.",
  },
  {
    href: "/airbnb-alternative",
    title: "Airbnb alternative",
    blurb: "Affordable real prices and space types beyond a whole home.",
  },
  {
    href: "/app",
    title: "Get the app",
    blurb: "Browse, book and host verified spaces worldwide from your phone.",
  },
];

export default function FreePlacesToStayPage() {
  return (
    <div className={`home landing ${fontVars}`}>
      <JsonLd data={buildBreadcrumbJsonLd("Free places to stay", slug)} />
      <JsonLd data={buildFaqJsonLd(faqs)} />

      <LandingNav />

      <main>
        {/* HERO */}
        <section className="lp-hero">
          <div className="wrap">
            <p className="eyebrow">Free · Verified · Worldwide</p>
            <h1>
              Find <span className="hl">free places to stay</span> while traveling
            </h1>
            <p className="lp-sub">
              Free community stays are real on Corneroom — hosted by people who love meeting
              travelers, with no service fee for either side. Every host and guest is verified, and
              when a free space isn&apos;t open, very affordable paid ones are a tap away. Sleep,
              work, shower, boat, socialize &amp; more, worldwide.
            </p>
            <StoreButtons />
            <div className="hero-badges">
              <span className="chip">
                <ChipCheck /> Real free stays
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

        {/* WHAT THEY ARE */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">The honest version</p>
              <h2>Free accommodation that&apos;s real — not too good to be true</h2>
            </div>
            <div className="prose">
              <p>
                Plenty of hosts on Corneroom share their space for free. Not as a gimmick, but
                because hosting travelers is something they genuinely enjoy — the stories, the
                company, the chance to show someone their city. On a free community stay there&apos;s
                no service fee for the guest or the host. It&apos;s community, not commerce.
              </p>
              <p>
                We&apos;ll be straight with you: free stays depend on host availability, so
                they&apos;re not guaranteed in every city on every date. That&apos;s why Corneroom
                also lists very affordable paid spaces — so if a free space isn&apos;t open, you
                still have a budget-friendly place to land. If saving money is the goal, our{" "}
                <a href="/airbnb-alternative">affordable Airbnb alternative</a> covers the paid side
                in more detail.
              </p>
            </div>
          </div>
        </section>

        {/* HOW TO FIND THEM */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head c">
              <p className="eyebrow">How it works</p>
              <h2>How to find a free stay in three steps</h2>
            </div>
            <div className="lp-steps">
              <div className="step">
                <div className="n">1</div>
                <h3>Search your destination</h3>
                <p>
                  Enter where you&apos;re headed and what you need. Filter for free community stays,
                  or browse affordable paid spaces alongside them.
                </p>
              </div>
              <div className="step">
                <div className="n">2</div>
                <h3>Get verified &amp; message</h3>
                <p>
                  Verify your ID once — every guest and host does. Message the host for free to
                  introduce yourself and confirm the details.
                </p>
              </div>
              <div className="step">
                <div className="n">3</div>
                <h3>Book &amp; show up well</h3>
                <p>
                  Book your stay, arrive respectful and communicative, and leave a review — that&apos;s
                  what keeps free hosting alive worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY / TRUST */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Free, but never anonymous</p>
              <h2>Safety comes from two-sided verification</h2>
            </div>
            <div className="prose">
              <p>
                A free stay should feel just as safe as a paid one. On Corneroom every host{" "}
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
              <p className="eyebrow">More than a couch</p>
              <h2>Free and affordable spaces of every kind</h2>
              <p>
                It&apos;s not only a place to sleep. Book what you actually need — and new categories
                keep landing.
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
              <h2>Free places to stay FAQ</h2>
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
                  <h2>Find your next free stay</h2>
                  <p>
                    Join a verified community sharing genuinely free — and very affordable — spaces
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
