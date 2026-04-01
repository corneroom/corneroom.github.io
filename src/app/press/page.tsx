import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Press — Corneroom" };

const facts = [
  { label: "Countries", value: "120+" },
  { label: "Spaces Listed", value: "10K+" },
  { label: "Guests Served", value: "50K+" },
  { label: "Founded", value: "Toronto, CA" },
];

const milestones = [
  {
    date: "March 2026",
    headline: "Corneroom reaches 50,000 guests worldwide",
  },
  {
    date: "January 2026",
    headline: "Expanded to 120+ countries across six continents",
  },
  {
    date: "October 2025",
    headline: "Launched real-time messaging and verified host badges",
  },
  {
    date: "June 2025",
    headline: "10,000 spaces listed on the platform",
  },
  {
    date: "January 2025",
    headline: "Corneroom public launch on iOS and Android",
  },
];

export default function PressPage() {
  return (
    <LegalLayout title="Press" lastUpdated="March 30, 2026">
      <p>
        Corneroom is a global hospitality platform that connects travelers with
        local hosts who share their homes, co-working spaces, and communities.
        Built by{" "}
        <strong>
          Inspired Technologies &amp; Business Solutions Inc.
        </strong>{" "}
        in Toronto, Canada, Corneroom is bringing back the human side of travel
        — one room at a time.
      </p>

      <h2>Key Facts</h2>

      <div className="!mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 text-center"
          >
            <p className="text-2xl font-bold !text-white">{fact.value}</p>
            <p className="mt-1 text-xs !text-white/40">{fact.label}</p>
          </div>
        ))}
      </div>

      <h2>Milestones</h2>

      <div className="!mt-6 space-y-3">
        {milestones.map((m) => (
          <div
            key={m.headline}
            className="flex items-start gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4"
          >
            <span className="shrink-0 whitespace-nowrap text-xs font-medium !text-white/40">
              {m.date}
            </span>
            <span className="text-sm font-medium !text-white/70">
              {m.headline}
            </span>
          </div>
        ))}
      </div>

      <h2>Brand Assets</h2>
      <p>
        Our logo is available in full-color, monochrome, and icon-only formats
        for both light and dark backgrounds. Assets are provided in SVG, PNG,
        and PDF.
      </p>
      <ul>
        <li>
          <strong>Primary color:</strong> Corneroom Purple (#7C3AED)
        </li>
        <li>
          <strong>Logo usage:</strong> Always maintain clear space equal to the
          height of the logomark around the logo. Do not alter colors, stretch,
          or rotate.
        </li>
        <li>
          <strong>Download:</strong> For brand assets, please contact{" "}
          <a href="mailto:press@corneroom.com">press@corneroom.com</a> and we
          will send a full press kit.
        </li>
      </ul>

      <h2>About the Company</h2>
      <p>
        <strong>Inspired Technologies &amp; Business Solutions Inc.</strong>
        <br />
        180 John St
        <br />
        Toronto, ON M5T 1X5
        <br />
        Canada
      </p>
      <p>
        Corneroom was founded with a simple belief: travel is better when it is
        personal. We build tools that empower hosts to share their spaces and
        travelers to discover authentic local experiences — across 120+
        countries and growing.
      </p>

      <h2>Press Contact</h2>
      <p>
        For media inquiries, interviews, or to request a press kit, reach out
        to{" "}
        <a href="mailto:press@corneroom.com">press@corneroom.com</a>. We aim to
        respond to all press inquiries within 24 hours.
      </p>
    </LegalLayout>
  );
}
