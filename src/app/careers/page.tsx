import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Careers — Corneroom" };

const positions = [
  {
    title: "Senior Flutter Developer",
    team: "Mobile",
    type: "Full-time · Remote",
    desc: "Build and ship features for our cross-platform mobile app. You'll work on booking flows, real-time messaging, map integrations, and the host dashboard. Experience with Clean Architecture, Riverpod, and Firebase required.",
  },
  {
    title: "Senior Backend Engineer (Go)",
    team: "Backend",
    type: "Full-time · Remote",
    desc: "Design and scale our microservices architecture on GCP. You'll own services like booking, payments, messaging, and search. Strong Go experience, Firestore/Cloud Run knowledge, and API design skills required.",
  },
  {
    title: "Frontend Engineer (React / Next.js)",
    team: "Web",
    type: "Full-time · Remote",
    desc: "Build our admin dashboard, host portal, and marketing website. You'll work with React 19, Next.js, TypeScript, and Tailwind CSS. Experience with data visualization and responsive design preferred.",
  },
  {
    title: "DevOps / Cloud Engineer",
    team: "Infrastructure",
    type: "Full-time · Remote",
    desc: "Manage our GCP infrastructure with Terraform, Cloud Run, Pub/Sub, and Firestore. Own CI/CD pipelines, monitoring, and security. Experience with containerized microservices and infrastructure-as-code required.",
  },
  {
    title: "Product Manager",
    team: "Product",
    type: "Full-time · Remote",
    desc: "Define and prioritize the product roadmap across mobile, web, and backend. You'll work closely with engineering, design, and community teams. Experience with marketplace or travel products is a strong plus.",
  },
  {
    title: "UX/UI Designer",
    team: "Design",
    type: "Full-time · Remote",
    desc: "Design intuitive experiences for guests and hosts across mobile and web. You'll own the design system, conduct user research, and prototype new features in Figma. Strong portfolio with mobile app design required.",
  },
  {
    title: "Community Manager",
    team: "Community",
    type: "Full-time · Remote",
    desc: "Build and nurture the Corneroom community across 120+ countries. You'll manage social media, host programs, user stories, and community guidelines. Passion for travel and cultural exchange essential.",
  },
  {
    title: "Growth / Marketing Lead",
    team: "Growth",
    type: "Full-time · Remote",
    desc: "Drive user acquisition and host growth across global markets. You'll own SEO, paid campaigns, partnerships, and referral programs. Data-driven mindset with marketplace growth experience preferred.",
  },
  {
    title: "Customer Support Lead",
    team: "Operations",
    type: "Full-time · Remote",
    desc: "Build and lead our support team. You'll create processes for booking issues, disputes, safety reports, and account management. Empathy, multilingual ability, and experience with support tooling are key.",
  },
  {
    title: "Data Analyst",
    team: "Data",
    type: "Full-time · Remote",
    desc: "Turn data into insights that drive product and business decisions. You'll analyze booking patterns, host performance, user behavior, and market trends. SQL, Python, and experience with Firebase Analytics preferred.",
  },
];

export default function CareersPage() {
  return (
    <LegalLayout title="Careers" lastUpdated="March 31, 2026">
      <p>
        We&apos;re a small, remote-first team building a platform that connects people through
        shared spaces across 120+ countries. If you&apos;re passionate about travel, community,
        and building products that matter — we&apos;d love to hear from you.
      </p>

      <h2>Why Corneroom</h2>
      <ul>
        <li><strong>Remote-first:</strong> Work from anywhere in the world — we practice what we preach</li>
        <li><strong>Global impact:</strong> Your work connects travelers and hosts across 120+ countries</li>
        <li><strong>Small team, big ownership:</strong> No bureaucracy — you own your domain end to end</li>
        <li><strong>Competitive compensation:</strong> Salary + equity, flexible hours, unlimited PTO</li>
        <li><strong>Travel perks:</strong> Free Corneroom credits to experience the platform as a user</li>
      </ul>

      <h2>Open Positions</h2>

      <div className="space-y-4">
        {positions.map((pos) => (
          <div key={pos.title} className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="!mt-0 text-base font-bold text-white">{pos.title}</h3>
                <div className="mt-1 flex items-center gap-3 text-xs text-white/40">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">{pos.team}</span>
                  <span>{pos.type}</span>
                </div>
              </div>
              <a
                href={`mailto:careers@corneroom.com?subject=Application: ${pos.title}`}
                className="shrink-0 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
              >
                Apply
              </a>
            </div>
            <p className="mt-3 text-sm text-white/50">{pos.desc}</p>
          </div>
        ))}
      </div>

      <h2>How to Apply</h2>
      <p>
        Send your resume and a brief note about why you&apos;re excited about Corneroom to{" "}
        <a href="mailto:careers@corneroom.com">careers@corneroom.com</a>. Include the role
        title in the subject line. We review every application and respond within 5 business days.
      </p>

      <p>
        Don&apos;t see a perfect fit? Email us anyway — we&apos;re always looking for exceptional
        people who believe in what we&apos;re building.
      </p>
    </LegalLayout>
  );
}
