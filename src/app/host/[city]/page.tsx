import type { Metadata } from "next";
import "../../home.css";
import "../../landing.css";
import {
  fontVars,
  LandingNav,
  LandingFooter,
  StoreButtons,
  FaqSection,
  RelatedLinks,
  JsonLd,
  ChipCheck,
  buildFaqJsonLd,
  buildBreadcrumbJsonLd,
  type FaqItem,
} from "../../_landing/parts";
import { HOST_CITIES, getCity } from "../cities";

export const dynamicParams = false;

export function generateStaticParams() {
  return HOST_CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city)!;
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: `https://corneroom.com/host/${c.slug}` },
    openGraph: {
      title: c.title,
      description: c.description,
      url: `https://corneroom.com/host/${c.slug}`,
      siteName: "Corneroom",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: "@corneroomApp",
      title: c.title,
      description: c.description,
    },
    other: { "theme-color": "#FF642B" },
  };
}

const cityFaqs = (name: string): FaqItem[] => [
  {
    q: `What can I list in ${name}?`,
    a: "A spare room or guest bed, a desk or home office, a bathroom travelers can book for a shower, a boat berth, a rooftop or living room for hangouts — & more, with new categories landing over time.",
  },
  {
    q: "What does founding hosting cost?",
    a: "Listing is free, and founding hosts pay a 0% platform fee for their first 12 months — you keep 100% of what you earn. After that, a small, capped service fee applies to paid bookings, always shown transparently.",
  },
  {
    q: "When do guests arrive?",
    a: `Hosting opens first — travelers arrive at full launch. Founding hosts in ${name} are live from day one with first placement when travelers start searching.`,
  },
];

export default async function HostCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = getCity(city)!;
  const faqs = cityFaqs(c.name);
  const related = [
    {
      href: "/host",
      title: "Become a host",
      blurb: "Everything about listing, earning and the founding offer.",
    },
    ...HOST_CITIES.filter((o) => o.slug !== c.slug).map((o) => ({
      href: `/host/${o.slug}`,
      title: `Host in ${o.name}`,
      blurb: `Become a founding host in ${o.name}.`,
    })),
  ];

  return (
    <div className={`home landing ${fontVars}`}>
      <JsonLd data={buildBreadcrumbJsonLd(`Host in ${c.name}`, `host/${c.slug}`)} />
      <JsonLd data={buildFaqJsonLd(faqs)} />

      <LandingNav />

      <main>
        {/* HERO */}
        <section className="lp-hero">
          <div className="wrap">
            <p className="eyebrow">Hosts · {c.name} · Founding offer</p>
            <h1>
              Become a <span className="hl">founding host</span> in {c.name}
            </h1>
            <p className="lp-sub">{c.heroSub}</p>
            <StoreButtons />
            <div className="hero-badges">
              <span className="chip">
                <ChipCheck /> 0% platform fee for 12 months
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

        {/* LOCAL DEMAND */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">What travelers need in {c.name}</p>
              <h2>Your space is already in demand</h2>
            </div>
            <div className="prose">
              <ul className="checklist">
                {c.demand.map((d) => (
                  <li key={d.title}>
                    <ChipCheck />
                    <span>
                      <b>{d.title}</b> — {d.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                Not sure your space fits? Corneroom lists spaces by what they&apos;re <em>for</em>{" "}
                — sleep, work, shower, boat, social &amp; more. See{" "}
                <a href="/host">everything you can list</a>.
              </p>
            </div>
          </div>
        </section>

        {/* FOUNDING OFFER */}
        <section className="sec tint">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">The founding-host offer</p>
              <h2>First in {c.name} gets the best terms</h2>
            </div>
            <div className="prose">
              <ul className="checklist">
                <li>
                  <ChipCheck />
                  <span>
                    <b>0% platform fee for your first 12 months</b> — keep 100% of what you earn
                  </span>
                </li>
                <li>
                  <ChipCheck />
                  <span>
                    <b>Permanent Founding Host badge</b> on your profile and every space
                  </span>
                </li>
                <li>
                  <ChipCheck />
                  <span>
                    <b>First placement in {c.name}</b> when guests arrive at full launch
                  </span>
                </li>
              </ul>
              <p>
                Guests arrive at full launch — founding hosts are live from day one, first in
                search results when travelers land in {c.name}.
              </p>
            </div>
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
              <h2>Hosting in {c.name} FAQ</h2>
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
                  <h2>Be first on the map in {c.name}</h2>
                  <p>
                    Download the app, verify once, and list your first space — as a founding
                    host, everything you earn for 12 months is yours.
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
              <h2>More on hosting</h2>
            </div>
            <RelatedLinks links={related} />
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
