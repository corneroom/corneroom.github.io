"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

/* ─── Animated counter ─── */
function StatCounter({
  target,
  suffix = "",
  prefix = "",
  label,
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.floor(v).toLocaleString()
  );
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [inView, count, target]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-8 backdrop-blur-sm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </span>
      <span className="text-sm font-medium uppercase tracking-widest text-white/40">
        {label}
      </span>
    </motion.div>
  );
}

/* ─── Timeline milestone ─── */
function Milestone({
  year,
  title,
  description,
  index,
}: {
  year: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      className="relative flex gap-6 pb-12 last:pb-0 md:gap-10"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Vertical line + dot */}
      <div className="relative flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#FF642B] bg-[#FF642B]/10">
          <div className="h-3 w-3 rounded-full bg-[#FF642B]" />
        </div>
        <div className="w-px flex-1 bg-gradient-to-b from-[#FF642B]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="-mt-1">
        <span className="mb-1 inline-block rounded-full bg-[#FF642B]/10 px-3 py-0.5 text-xs font-semibold tracking-wide text-[#FF642B]">
          {year}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">{title}</h3>
        <p className="mt-1 max-w-md text-sm leading-relaxed text-white/50 md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Value card ─── */
function ValueCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-colors hover:border-[#FF642B]/20 hover:bg-white/[0.04]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#FF642B]/5 blur-3xl transition-all group-hover:bg-[#FF642B]/10" />
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF642B]/10 text-[#FF642B]">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/50">{description}</p>
    </motion.div>
  );
}

/* ─── Section wrapper ─── */
function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative px-6 py-24 md:py-32 lg:px-10 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      className="mb-4 inline-block rounded-full border border-[#FF642B]/20 bg-[#FF642B]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FF642B]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {children}
    </motion.h2>
  );
}

/* ═══════════════════════════════════════════════
   ICONS (inline SVGs)
   ═══════════════════════════════════════════════ */

const IconHeart = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const IconShield = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const IconUsers = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

const IconLeaf = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.467.732-3.559" />
  </svg>
);

const LogoIcon = () => (
  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF642B]">
    <svg viewBox="0 0 100 100" className="h-4 w-4" fill="white">
      <path d="M50 95c-.7 0-1.5-.2-2.2-.6C46.5 93.5 16 73.7 16 39.1 16 20.3 31.3 5 50 5s34 15.3 34 34.1c0 34.6-30.5 54.5-31.8 55.3-.7.4-1.5.6-2.2.6zm0-68c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z" />
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════
   MILESTONES DATA
   ═══════════════════════════════════════════════ */
const milestones = [
  {
    year: "The Spark",
    title: "Started with a couchsurfing idea",
    description:
      "Our founders were seasoned couchsurfers who loved staying with locals but hated the friction -- outdated platforms, inconsistent trust, zero coverage beyond a couch.",
  },
  {
    year: "The Pivot",
    title: "Expanded to all space types",
    description:
      "We asked: why stop at sleep? If we could connect travelers with a spare couch, we could connect them with a spare desk, shower, dock, parking spot, and more.",
  },
  {
    year: "Going Global",
    title: "Launched in 120+ countries",
    description:
      "From Osaka to Oslo, Toronto to Tulum -- Corneroom grew into a truly global platform with hosts and spaces on every continent.",
  },
  {
    year: "Momentum",
    title: "Reached 50,000+ guests worldwide",
    description:
      "A milestone of trust. Fifty thousand travelers chose Corneroom for sleep, work, showers, boats, nightlife, parking, and storage across the globe.",
  },
  {
    year: "The Future",
    title: "Building what comes next",
    description:
      "New space categories. Smarter matching. Deeper community tools. We are just getting started -- and the roadmap is shaped by the travelers and hosts who use Corneroom every day.",
  },
];

/* ═══════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white antialiased">
      {/* ── Ambient glow backgrounds ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[#FF642B]/[0.03] blur-[120px]" />
        <div className="absolute -right-40 top-[60%] h-[500px] w-[500px] rounded-full bg-[#FF642B]/[0.02] blur-[100px]" />
      </div>

      {/* ── Nav ── */}
      <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
            <LogoIcon />
            <span className="text-lg font-bold tracking-tight">corneroom</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/70 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          HERO
          ══════════════════════════════════════════ */}
      <Section className="pt-40 md:pt-48">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel>About Corneroom</SectionLabel>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Every unused space{" "}
            <span className="bg-gradient-to-r from-[#FF642B] to-[#FF8F6B] bg-clip-text text-transparent">
              deserves a purpose.
            </span>
          </h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hotels solve one problem. Corneroom solves the rest. We connect
            travelers with hosts who have space to share -- not just beds, but{" "}
            <span className="text-white/70">any space</span>. A couch for the
            night. A desk for the afternoon. A shower after a red-eye. A parking
            spot downtown. A boat slip for the weekend.
          </motion.p>
        </motion.div>

        {/* Divider line */}
        <motion.div
          className="mx-auto mt-20 h-px max-w-xs bg-gradient-to-r from-transparent via-[#FF642B]/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </Section>

      {/* ══════════════════════════════════════════
          OUR STORY (Timeline)
          ══════════════════════════════════════════ */}
      <Section id="story">
        <SectionLabel>Our Story</SectionLabel>
        <SectionTitle>From couches to a global platform</SectionTitle>
        <motion.p
          className="mb-14 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Corneroom started the way most honest ideas do -- out of personal
          frustration. Here is how we got from there to here.
        </motion.p>

        <div className="ml-2 md:ml-8">
          {milestones.map((m, i) => (
            <Milestone
              key={m.title}
              year={m.year}
              title={m.title}
              description={m.description}
              index={i}
            />
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          BY THE NUMBERS
          ══════════════════════════════════════════ */}
      <Section className="border-y border-white/[0.04] bg-white/[0.01]">
        <div className="text-center">
          <SectionLabel>By the Numbers</SectionLabel>
          <SectionTitle>Impact at scale</SectionTitle>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <StatCounter target={120} suffix="+" label="Countries" />
          <StatCounter target={10} suffix="K+" label="Spaces" />
          <StatCounter target={50} suffix="K+" label="Guests" />
          <StatCounter target={4.8} suffix="" label="Rating" decimals={1} />
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          VALUES
          ══════════════════════════════════════════ */}
      <Section id="values">
        <div className="text-center">
          <SectionLabel>Our Values</SectionLabel>
          <SectionTitle>What we stand for</SectionTitle>
          <motion.p
            className="mx-auto mb-14 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            These are not slogans on a wall. They are enforced policies, product
            decisions, and the reason people trust Corneroom.
          </motion.p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <ValueCard
            icon={<IconHeart />}
            title="Inclusivity"
            description="Proudly LGBTQ+ friendly. Strict non-discrimination policy for every host and guest. If a space is on Corneroom, it is open to everyone -- full stop."
            index={0}
          />
          <ValueCard
            icon={<IconShield />}
            title="Safety"
            description="Every host goes through identity verification. Ratings are transparent, trust signals are never hidden, and our 24/7 safety line covers every country."
            index={1}
          />
          <ValueCard
            icon={<IconUsers />}
            title="Community"
            description="The best hosts leave restaurant tips in listings and text transit directions before you arrive. We build tools that reward treating strangers like neighbors."
            index={2}
          />
          <ValueCard
            icon={<IconLeaf />}
            title="Sustainability"
            description="Sharing existing spaces is inherently sustainable. Every couch booked is a hotel room that did not need to be built. Sharing over owning -- by design."
            index={3}
          />
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          THE TEAM
          ══════════════════════════════════════════ */}
      <Section className="border-t border-white/[0.04]">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>The Team</SectionLabel>
          <SectionTitle>Small team. Big ambition.</SectionTitle>
          <motion.div
            className="space-y-5 text-base leading-relaxed text-white/50 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p>
              Corneroom is built by a small, passionate, remote-first team at{" "}
              <span className="font-medium text-white/80">
                Inspired Technologies &amp; Business Solutions Inc.
              </span>
              , headquartered in Toronto, Canada. We are engineers, designers, and
              operators who have collectively traveled to over 60 countries -- not
              as tourists, but as the kind of travelers who sleep on couches, work
              from cafes, and know what it means to need a space that does not
              exist on any legacy platform.
            </p>
            <p>
              We are intentionally small because we believe the best products come
              from teams that use what they build. Every feature ships because
              someone on the team needed it on a trip.{" "}
              <span className="text-white/70">That is our quality bar.</span>
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          COMPANY INFO
          ══════════════════════════════════════════ */}
      <Section className="border-t border-white/[0.04] bg-white/[0.01]">
        <motion.div
          className="mx-auto max-w-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Company</SectionLabel>
          <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">
            Inspired Technologies &amp; Business Solutions Inc.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/40 md:text-base">
            180 John Street
            <br />
            Toronto, ON M5T 1X5
            <br />
            Canada
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF642B] px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-[#FF642B]/90 hover:shadow-lg hover:shadow-[#FF642B]/20"
            >
              Get in Touch
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* ── Mini Footer ── */}
      <footer className="border-t border-white/[0.06] bg-[#050505] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-white/30 md:flex-row">
          <div className="flex items-center gap-2">
            <LogoIcon />
            <span className="text-sm font-semibold text-white/60">corneroom</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Inspired Technologies &amp; Business Solutions Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="transition-colors hover:text-white/60">
              Terms
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-white/60">
              Privacy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white/60">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
