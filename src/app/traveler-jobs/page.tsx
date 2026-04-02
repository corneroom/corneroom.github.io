"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ── animation helpers ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ── data ──────────────────────────────────────────────── */
const steps = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "Browse available gigs",
    desc: "Explore open roles in cities you're visiting — or heading to next.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Apply with one tap",
    desc: "Quick applications — no cover letters, no hoops. Just you and your skills.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Get paid, keep traveling",
    desc: "Earn money on your schedule. Cash out and fund your next adventure.",
  },
];

const gigs = [
  {
    emoji: "\u{1F30D}",
    title: "Community Ambassador",
    desc: "Rep Corneroom in your city. Host meetups, onboard new users.",
    tag: "Notify me",
  },
  {
    emoji: "\u{1F4F7}",
    title: "Local Photographer",
    desc: "Photograph listings for hosts. Help spaces look their best.",
    tag: "Coming soon",
  },
  {
    emoji: "\u{1F3AC}",
    title: "Content Creator",
    desc: "Create travel content, stories, and reels for our social channels.",
    tag: "Coming soon",
  },
  {
    emoji: "\u{1F389}",
    title: "Event Helper",
    desc: "Help organize and run quarterly meetups in your city.",
    tag: "Notify me",
  },
  {
    emoji: "\u{1F5FA}\u{FE0F}",
    title: "City Guide",
    desc: "Write local guides and tips for travelers visiting your area.",
    tag: "Coming soon",
  },
  {
    emoji: "\u{1F4AC}",
    title: "Translation & Support",
    desc: "Help us speak the local language. Translate, moderate, support.",
    tag: "Notify me",
  },
];

const audiences = [
  { label: "Digital Nomads", icon: "\u{1F4BB}" },
  { label: "Backpackers", icon: "\u{1F392}" },
  { label: "Gap Year Travelers", icon: "\u{2708}\u{FE0F}" },
  { label: "Working Holiday Makers", icon: "\u{1F30F}" },
  { label: "Slow Travelers", icon: "\u{1F6B6}" },
  { label: "Anyone Seeking Flexibility", icon: "\u{2728}" },
];

/* ── page ──────────────────────────────────────────────── */
export default function TravelerJobsPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* ── Nav ────────────────────────────────────────── */}
      <header className="border-b border-white/8 px-6 py-4 lg:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF642B]">
              <svg viewBox="0 0 100 100" className="h-4 w-4" fill="white">
                <path d="M50 95c-.7 0-1.5-.2-2.2-.6C46.5 93.5 16 73.7 16 39.1 16 20.3 31.3 5 50 5s34 15.3 34 34.1c0 34.6-30.5 54.5-31.8 55.3-.7.4-1.5.6-2.2.6zm0-68c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z" />
              </svg>
            </div>
            <span className="text-base font-bold text-white">corneroom</span>
          </Link>
          <Link href="/" className="text-sm text-white/50 transition-colors hover:text-white">
            &larr; Back to home
          </Link>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pt-24 pb-20 lg:px-10 lg:pt-32 lg:pb-28">
        {/* orange glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[700px] rounded-full bg-[#FF642B]/10 blur-[160px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-sm font-semibold uppercase tracking-widest text-[#FF642B]"
          >
            Traveler Jobs
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Earn While You Travel
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50"
          >
            Running low on funds? Join our global team of travelers. Pick up temp gigs
            with Corneroom in cities worldwide&nbsp;&mdash; flexible, remote-friendly,
            and designed for life on the road.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="mt-10 flex justify-center gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF642B] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF642B]/25 transition-all hover:brightness-110"
            >
              Get notified
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── How it works ───────────────────────────────── */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-[#FF642B]">
              How it works
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-3 text-3xl font-bold text-white lg:text-4xl">
              Three steps to your next gig
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-14 grid gap-6 sm:grid-cols-3"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                custom={i}
                className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-8 text-center transition-all hover:border-white/15 hover:bg-white/[0.05]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF642B]/10 text-[#FF642B] transition-colors group-hover:bg-[#FF642B]/20">
                  {s.icon}
                </div>
                <p className="mt-2 text-xs font-bold text-white/20">0{i + 1}</p>
                <h3 className="mt-3 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Types of gigs ──────────────────────────────── */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-[#FF642B]">
              Opportunities
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-3 text-3xl font-bold text-white lg:text-4xl">
              Types of gigs
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mx-auto mt-4 max-w-lg text-base text-white/45">
              Real roles. Real impact. Work with Corneroom on the ground while you explore the world.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {gigs.map((g, i) => (
              <motion.div
                key={g.title}
                variants={fadeUp}
                custom={i}
                className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-7 transition-all hover:border-white/15 hover:bg-white/[0.05]"
              >
                <span className="text-3xl">{g.emoji}</span>
                <h3 className="mt-4 text-base font-bold text-white">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{g.desc}</p>
                <span
                  className={`mt-5 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    g.tag === "Coming soon"
                      ? "bg-white/5 text-white/40"
                      : "bg-[#FF642B]/10 text-[#FF642B]"
                  }`}
                >
                  {g.tag}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Who is this for ────────────────────────────── */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <div className="mx-auto max-w-2xl text-center">
              <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-[#FF642B]">
                Who is this for
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="mt-3 text-3xl font-bold text-white lg:text-4xl">
                Built for people who move
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="mt-4 text-base leading-relaxed text-white/45">
                Whether you&apos;re on a gap year, living the digital nomad life, or just
                looking for flexible work between adventures&nbsp;&mdash; Corneroom traveler
                jobs are designed to fit your lifestyle, not the other way around.
              </motion.p>
            </div>

            <motion.div
              variants={stagger}
              className="mt-12 flex flex-wrap justify-center gap-3"
            >
              {audiences.map((a, i) => (
                <motion.div
                  key={a.label}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-5 py-2.5 text-sm text-white/60 transition-all hover:border-white/15 hover:text-white"
                >
                  <span>{a.icon}</span>
                  {a.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section id="apply" className="px-6 py-24 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] px-8 py-16 sm:px-14"
          >
            {/* inner glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-[300px] w-[400px] rounded-full bg-[#FF642B]/8 blur-[120px]" />
            </div>

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#FF642B]">
                Launching soon
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white lg:text-4xl">
                Get notified when gigs launch
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/45">
                We&apos;re launching the traveler jobs program soon. Be first in line.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF642B] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#FF642B]/25 transition-all hover:brightness-110"
                >
                  Apply
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="border-t border-white/8 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-xs text-white/30">
          <span>&copy; {new Date().getFullYear()} Corneroom. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/60">Privacy</Link>
            <Link href="/terms" className="hover:text-white/60">Terms</Link>
            <Link href="/contact" className="hover:text-white/60">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
