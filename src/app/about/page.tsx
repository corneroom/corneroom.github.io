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
      className="group relative flex gap-6 pb-12 last:pb-0 md:gap-10"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Vertical line + dot */}
      <div className="relative flex flex-col items-center">
        <motion.div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#FF642B] bg-gradient-to-br from-[#FF642B]/20 to-[#FF642B]/5 transition-all group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        >
          <div className="h-4 w-4 rounded-full bg-[#FF642B]" />
        </motion.div>
        <div className="w-px flex-1 bg-gradient-to-b from-[#FF642B]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="-mt-2 flex-1">
        <span className="mb-2 inline-block rounded-full bg-[#FF642B]/15 px-4 py-1 text-xs font-bold tracking-widest text-[#FF642B] uppercase">
          {year}
        </span>
        <h3 className="mt-2 text-lg font-bold text-white transition-colors group-hover:text-[#FF642B] md:text-xl">
          {title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
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

/* ─── Pain point card ─── */
function PainPointCard({
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
      className="group relative rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-red-500/[0.02] p-8 overflow-hidden"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-red-500/10 blur-3xl transition-all group-hover:bg-red-500/15" />

      <div className="relative z-10">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/20 text-red-300">
          {icon}
        </div>
        <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/60">{description}</p>
      </div>
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

const IconDollar = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconMap = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6L6 9m0 0l-3-3m3 3L9 3m0 0l3 3m-3-3v12a9 9 0 1118 0V3m-9 9h.01M12 15h.01M15 12h.01" />
  </svg>
);

const IconBriefcase = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-1.535 4.172-3.6 4.577m-13.58-1.9C3.503 7.897 2.25 5.066 2.25 2.848C2.25 1.003 3.807-.25 5.25-.25c1.59 0 2.856 1.288 3 3a3.021 3.021 0 013 3c0 1.712-1.288 2.856-3 3m15.75-6.327A12.059 12.059 0 013.671 15.75H12a6 6 0 005.25 3.h3.75a3 3 0 003-3V6.637M4.5 12.75h15m-6 3.75v-2.25" />
  </svg>
);

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
            spot downtown. A boat slip for the weekend. We built Corneroom because travel
            shouldn't be expensive, isolated, or stressful.
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
          WHY WE BUILT THIS
          ══════════════════════════════════════════ */}
      <Section className="border-y border-white/[0.04] bg-white/[0.01]">
        <div className="mx-auto max-w-5xl space-y-12">
          <motion.div
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>The Problem We Solve</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Travel shouldn't be <span className="text-red-400">this expensive</span>, <span className="text-red-400">this isolated</span>, or <span className="text-red-400">this lonely</span>
            </h2>
          </motion.div>

          {/* Pain point cards grid */}
          <div className="grid gap-6 md:grid-cols-3">
            <PainPointCard
              icon={<IconDollar />}
              title="Hotels Cost Too Much"
              description="2–3 days in a new city? Hotels charge $100+ per night. That's not travel, that's expensive."
              index={0}
            />
            <PainPointCard
              icon={<IconMap />}
              title="Layovers Are Frustrating"
              description="24-hour layover? Luggage storage is $40. Cafés charge $8 per coffee. You feel like a tourist, not a traveler."
              index={1}
            />
            <PainPointCard
              icon={<IconBriefcase />}
              title="Work Travel Is Lonely"
              description="8 hours in a café staring at the barista. No shower, no rest, no connection. Just work, and silence."
              index={2}
            />
          </div>

          {/* Mission statement */}
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-[#FF642B]/30 bg-gradient-to-br from-[#FF642B]/10 via-[#FF642B]/5 to-transparent p-10 md:p-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[#FF642B]/20 blur-3xl" />

            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold text-[#FF642B] md:text-3xl">
                Corneroom exists to fix this.
              </h3>
              <p className="text-base leading-relaxed text-white/80 md:text-lg">
                We connect travelers with <span className="font-semibold text-white">real homes</span>, <span className="font-semibold text-white">real hosts</span>, and <span className="font-semibold text-white">real communities</span>.
              </p>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                When a guest and host meet on Corneroom, something beautiful happens—not a transaction, but a <span className="font-semibold text-white">connection</span>. A shared meal. Stories over coffee. A recommendation only a neighbor can give.
              </p>
              <p className="pt-4 text-base font-semibold text-white md:text-lg">
                <span className="text-[#FF642B]">That</span> is the measure of our success.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          OUR STORY (Timeline)
          ══════════════════════════════════════════ */}
      <Section id="story">
        <SectionLabel>Our Story</SectionLabel>
        <SectionTitle>From couches to a global platform</SectionTitle>
        <motion.p
          className="mb-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Corneroom started the way most honest ideas do—out of personal frustration. We lived it. Now we're solving it.
        </motion.p>
        <motion.div
          className="mb-10 h-px w-32 bg-gradient-to-r from-[#FF642B]/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

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
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>By the Numbers</SectionLabel>
          <SectionTitle>Impact at scale</SectionTitle>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base text-white/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Every number represents a connection. A traveler who found their space. A host who welcomed someone new.
          </motion.p>
        </motion.div>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <StatCounter target={120} suffix="+" label="Countries" />
          <StatCounter target={10} suffix="K+" label="Spaces" />
          <StatCounter target={50} suffix="K+" label="Guests" />
          <StatCounter target={4.8} suffix="" label="Avg Rating" decimals={1} />
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          VALUES
          ══════════════════════════════════════════ */}
      <Section id="values">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Our Values</SectionLabel>
          <SectionTitle>What we stand for</SectionTitle>
          <motion.p
            className="mx-auto mb-16 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            These are not slogans on a wall. They're enforced policies, product decisions, and the reason people trust Corneroom.
          </motion.p>
        </motion.div>

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
            title="Community First"
            description="Every booking is an opportunity for a human connection. Hosts and guests who meetup, share meals, and exchange stories -- that is how we measure success, not transaction volume."
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
        <div className="mx-auto max-w-3xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>The Team</SectionLabel>
            <SectionTitle>Built by travelers, for travelers</SectionTitle>
          </motion.div>

          <motion.div
            className="space-y-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-base leading-relaxed text-white/70 md:text-lg">
              Corneroom is built by a small, passionate, remote-first team at{" "}
              <span className="font-semibold text-white">
                Inspired Technologies &amp; Business Solutions Inc.
              </span>
              , headquartered in Toronto, Canada.
            </p>
            <p className="text-base leading-relaxed text-white/70 md:text-lg">
              We are engineers, designers, and operators who have collectively traveled to 60+ countries—not as tourists, but as people who sleep on couches, work from cafés, and know what it means to need a space that doesn't exist on any legacy platform.
            </p>
            <div className="border-t border-white/[0.06] pt-6">
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                We are intentionally small because <span className="font-semibold text-white">the best products come from teams that use what they build</span>. Every feature we ship exists because someone on our team needed it on a trip. <span className="text-[#FF642B] font-semibold">That is our quality bar.</span>
              </p>
            </div>
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
