"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* ─── Animated counter ─── */
function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(count, target, { duration, ease: "easeOut" });
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* FAQItem removed — using shadcn Accordion instead */

/* ─── Data ─── */
const guestFeatures = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
      />
    ),
    title: "First booking FREE",
    desc: "Your very first booking costs nothing. No catch, no credit card hold. We cover the host so you can try Corneroom risk-free.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
      />
    ),
    title: "Small, capped service fee",
    desc: "A transparent fee on future bookings, always shown before you confirm. Capped so it never spirals on premium listings.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
    title: "No hidden fees — ever",
    desc: "The checkout total is the final total. No cleaning fees, no surprise taxes, no processing surcharges.",
  },
];

const hostFeatures = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: "FREE to list",
    desc: "No subscription, no activation fee, no monthly charge. List one space or a hundred — it costs absolutely nothing.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
    ),
    title: "You set the price",
    desc: "You decide what your space is worth — including free. Corneroom never overrides your pricing. $0 couch or $50/day desk — your call.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    ),
    title: "Small, capped commission",
    desc: "A small percentage on paid bookings keeps the platform running. It is capped — it never exceeds a fixed maximum.",
  },
];

const faqData = [
  {
    q: "Is it really free to list a space?",
    a: "Yes. There is no subscription, no activation fee, and no per-listing charge. You can list one space or one hundred — it costs nothing.",
  },
  {
    q: "How does the first free booking work?",
    a: "When you create a new guest account on Corneroom, your first booking is completely free — the host still gets paid (we cover it), and you pay nothing, not even the service fee. This applies to any listing, regardless of price.",
  },
  {
    q: "What is the service fee percentage?",
    a: "We keep our service fee competitive and capped. The exact percentage may vary by region and space category, but it is always shown transparently before you confirm a booking. You will never be surprised.",
  },
  {
    q: "Can hosts list their space for free?",
    a: "Absolutely. Hosts can set any price they want, including $0. Many couchsurfing-style hosts list their spaces for free — it is part of what makes Corneroom special. On free listings, there is no service fee for either party.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. The total you see at checkout is the total you pay. We do not add cleaning fees, processing fees, or last-minute surcharges. What you see is what you get.",
  },
  {
    q: "How do payouts work for hosts?",
    a: "Payouts are processed through Stripe. After a guest checks in, the payout is released to your connected bank account or Stripe balance. Payout timing depends on your country but is typically 1 to 5 business days.",
  },
  {
    q: "What happens if I need to cancel?",
    a: "Your refund depends on the cancellation policy the host selected for their listing — Flexible, Moderate, or Strict. The policy is always visible on the listing page and at checkout. If the host cancels, you receive a full refund automatically.",
  },
  {
    q: "Do I need to pay to message a host?",
    a: "No. Messaging is completely free. You can contact any host before booking to ask questions, confirm availability, or just say hello.",
  },
];

const cancellationPolicies = [
  {
    name: "Flexible",
    color: "text-green-400",
    border: "border-green-400/20",
    bg: "bg-green-400/5",
    glow: "shadow-green-400/5",
    dot: "bg-green-400",
    desc: "Full refund if you cancel up to 24 hours before check-in.",
    detail: "Best for guests who need maximum flexibility.",
  },
  {
    name: "Moderate",
    color: "text-yellow-400",
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/5",
    glow: "shadow-yellow-400/5",
    dot: "bg-yellow-400",
    desc: "Full refund if you cancel up to 5 days before check-in.",
    detail: "A balanced option for most bookings.",
  },
  {
    name: "Strict",
    color: "text-red-400",
    border: "border-red-400/20",
    bg: "bg-red-400/5",
    glow: "shadow-red-400/5",
    dot: "bg-red-400",
    desc: "50% refund if you cancel up to 7 days before check-in. No refund after that.",
    detail: "Common for high-demand spaces.",
  },
];

/* ─── Stagger helper ─── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ═════════════════════════════════════════════════════════════════════════ */
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* ── Nav ── */}
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
          <Link
            href="/"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            &larr; Back to home
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 pt-24 pb-20 lg:px-10">
        {/* Decorative gradient orbs */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#FF642B]/8 blur-[120px]" />
        <div className="pointer-events-none absolute -top-20 left-1/4 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-[#FF642B]/5 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF642B]">
            Pricing
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight lg:text-6xl">
            Fair pricing for{" "}
            <span className="bg-gradient-to-r from-[#FF642B] to-[#FF8F5E] bg-clip-text text-transparent">
              everyone
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/50 lg:text-lg">
            Access to space should never be gatekept by unfair fees. Whether you
            are a guest exploring the world or a host sharing what you have, our
            pricing is transparent, capped, and designed to keep things fair.
          </p>
        </motion.div>
      </section>

      {/* ── For Guests / For Hosts — side by side ── */}
      <section className="px-6 pb-24 lg:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2"
        >
          {/* Guest card */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-8 transition-all hover:border-[#FF642B]/20 hover:bg-white/[0.05] lg:p-10"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF642B]/5 blur-[60px] transition-all group-hover:bg-[#FF642B]/10" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FF642B]/20 bg-[#FF642B]/10 px-3 py-1">
                <svg
                  className="h-4 w-4 text-[#FF642B]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span className="text-xs font-semibold text-[#FF642B]">
                  For Guests
                </span>
              </div>

              <div className="mt-6">
                <span className="text-4xl font-bold tracking-tight lg:text-5xl">
                  $0
                </span>
                <span className="ml-2 text-sm text-white/40">
                  first booking
                </span>
              </div>
              <p className="mt-2 text-sm text-white/50">
                Then a small, capped service fee on future bookings.
              </p>

              <div className="mt-8 space-y-5">
                {guestFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF642B]/10 text-[#FF642B]">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        {f.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {f.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/40">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF642B] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#FF642B]/90 hover:shadow-lg hover:shadow-[#FF642B]/20"
              >
                Book your first stay
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Host card */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-8 transition-all hover:border-[#FF642B]/20 hover:bg-white/[0.05] lg:p-10"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF642B]/5 blur-[60px] transition-all group-hover:bg-[#FF642B]/10" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FF642B]/20 bg-[#FF642B]/10 px-3 py-1">
                <svg
                  className="h-4 w-4 text-[#FF642B]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                  />
                </svg>
                <span className="text-xs font-semibold text-[#FF642B]">
                  For Hosts
                </span>
              </div>

              <div className="mt-6">
                <span className="text-4xl font-bold tracking-tight lg:text-5xl">
                  FREE
                </span>
                <span className="ml-2 text-sm text-white/40">to list</span>
              </div>
              <p className="mt-2 text-sm text-white/50">
                You set the price. Small capped fee on paid bookings only.
              </p>

              <div className="mt-8 space-y-5">
                {hostFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF642B]/10 text-[#FF642B]">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        {f.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {f.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/40">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Start hosting
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── How Fees Work ── */}
      <section className="border-t border-white/8 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[#FF642B]">
              Transparent by design
            </p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">
              How fees work
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-white/50">
              Corneroom uses a split-fee model so that neither side bears the
              full cost of running the platform.
            </p>
          </motion.div>

          {/* Animated counters */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4"
          >
            {[
              {
                value: 0,
                suffix: "",
                label: "Listing fee",
                sub: "Free, always",
                prefix: "$",
              },
              {
                value: 0,
                suffix: "",
                label: "First guest booking",
                sub: "We cover it",
                prefix: "$",
              },
              {
                value: 100,
                suffix: "%",
                label: "Price transparency",
                sub: "No hidden charges",
                prefix: "",
              },
              {
                value: 100,
                suffix: "%",
                label: "Host cancellation refund",
                sub: "No questions asked",
                prefix: "",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-center"
              >
                <p className="text-3xl font-bold text-[#FF642B] lg:text-4xl">
                  <AnimatedCounter
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={1.5 + i * 0.2}
                  />
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-white/40">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Fee breakdown table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 overflow-hidden rounded-2xl border border-white/8"
          >
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/8 bg-white/[0.05]">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                    Fee
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                    Who pays
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="transition-colors hover:bg-white/[0.02]">
                  <td className="px-6 py-4 font-medium text-white">
                    Guest service fee
                  </td>
                  <td className="px-6 py-4 text-white/60">Guest</td>
                  <td className="px-6 py-4 text-white/60">
                    Small percentage added at checkout, clearly shown before you
                    confirm. Capped on every booking.
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-white/[0.02]">
                  <td className="px-6 py-4 font-medium text-white">
                    Host service fee
                  </td>
                  <td className="px-6 py-4 text-white/60">Host</td>
                  <td className="px-6 py-4 text-white/60">
                    Small percentage deducted from the payout. Capped so it
                    never exceeds a fixed maximum.
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-white/[0.02]">
                  <td className="px-6 py-4 font-medium text-white">
                    Listing fee
                  </td>
                  <td className="px-6 py-4 text-white/60">&mdash;</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-[#FF642B]">
                      Free, always.
                    </span>{" "}
                    <span className="text-white/60">
                      No cost to create or maintain a listing.
                    </span>
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-white/[0.02]">
                  <td className="px-6 py-4 font-medium text-white">
                    First guest booking
                  </td>
                  <td className="px-6 py-4 text-white/60">&mdash;</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-[#FF642B]">Free.</span>{" "}
                    <span className="text-white/60">
                      New guests pay nothing on their first booking — including
                      the service fee.
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center text-sm text-white/40"
          >
            All payments are processed securely through{" "}
            <strong className="text-white/60">Stripe</strong>, supporting credit
            cards, debit cards, and local payment methods in most countries.
          </motion.p>
        </div>
      </section>

      {/* ── Cancellation Policies ── */}
      <section className="border-t border-white/8 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[#FF642B]">
              Your protection
            </p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">
              Cancellation policies
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-white/50">
              Every listing displays its cancellation policy upfront so you know
              exactly what to expect before you book.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {cancellationPolicies.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                className={`relative overflow-hidden rounded-2xl border ${p.border} ${p.bg} p-8 shadow-lg ${p.glow} transition-all hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${p.dot}`} />
                  <h3 className={`text-lg font-bold ${p.color}`}>{p.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {p.desc}
                </p>
                <p className="mt-2 text-xs text-white/40">{p.detail}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center text-sm text-white/50"
          >
            If a host cancels on you, you{" "}
            <strong className="text-white">always</strong> receive a full refund
            — no questions asked.
          </motion.p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-white/8 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[#FF642B]">
              Questions?
            </p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">
              Frequently asked questions
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 space-y-3"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqData.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-white/8 bg-white/[0.03] px-6 transition-all hover:border-white/15 hover:bg-white/[0.05]">
                  <AccordionTrigger className="py-5 text-sm font-semibold text-white lg:text-base [&>svg]:text-white/50">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-white/50">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 pb-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#FF642B]/20 bg-gradient-to-br from-[#FF642B]/10 via-[#FF642B]/5 to-transparent p-10 text-center lg:p-16"
        >
          <h2 className="text-2xl font-bold lg:text-3xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/50">
            Whether you are looking for your next stay or have a space to share,
            Corneroom makes it simple and fair.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF642B] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#FF642B]/90 hover:shadow-lg hover:shadow-[#FF642B]/20"
            >
              Explore listings
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Become a host
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/8 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-xs text-white/30">
          <span>
            &copy; {new Date().getFullYear()} Corneroom. All rights reserved.
          </span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/60">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/60">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white/60">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
