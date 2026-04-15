"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Audience = "guest" | "host";

type Step = {
  number: string;
  title: string;
  desc: string;
  icon: string;
  color: string;
};

const guestSteps: Step[] = [
  {
    number: "01",
    title: "Find your space",
    desc: "Browse spaces by city, category, or vibe. Filter by price, amenities, and host preferences.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    color: "#FF642B",
  },
  {
    number: "02",
    title: "Book in seconds",
    desc: "Tap to reserve. Secure payment, instant confirmation, and flexible cancellation.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    color: "#86C3E1",
  },
  {
    number: "03",
    title: "Show up, settle in",
    desc: "Meet your host, drop your bag, do your thing. Rate the stay when you're done.",
    icon: "M21 8.25c0-2.485-2.099-4.502-4.688-4.502-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.748 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    color: "#DBB5EE",
  },
];

const hostSteps: Step[] = [
  {
    number: "01",
    title: "List your space",
    desc: "Photos, price, availability — done in under 10 minutes. List a couch, a desk, a shower, or a whole apartment.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    color: "#FF642B",
  },
  {
    number: "02",
    title: "Welcome guests",
    desc: "Accept bookings in one tap. Message guests in-app. Set your house rules and your own schedule.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    color: "#86C3E1",
  },
  {
    number: "03",
    title: "Get paid",
    desc: "Direct deposit after each stay. Keep up to 90% of what you charge. Track earnings in the app.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "#DBB5EE",
  },
];

export default function HowItWorks() {
  const [audience, setAudience] = useState<Audience>("guest");
  const steps = audience === "guest" ? guestSteps : hostSteps;

  return (
    <section id="how-it-works" className="relative py-28 lg:py-36">
      {/* Section glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight lg:text-6xl">
            Three steps, both sides
          </h2>
        </motion.div>

        {/* Audience tabs */}
        <div className="mb-12 flex justify-center">
          <div
            role="tablist"
            aria-label="Choose audience"
            className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-sm"
          >
            <AudienceTab
              label="For Guests"
              active={audience === "guest"}
              onClick={() => setAudience("guest")}
            />
            <AudienceTab
              label="For Hosts"
              active={audience === "host"}
              onClick={() => setAudience("host")}
            />
          </div>
        </div>

        {/* Steps — fade-swap on tab change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-8 transition-all hover:border-white/15 hover:bg-white/[0.05]"
              >
                {/* Big watermark number */}
                <span className="text-6xl font-black leading-none text-white/[0.04] transition-colors group-hover:text-white/[0.08]">
                  {step.number}
                </span>

                {/* Icon chip */}
                <div
                  className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors"
                  style={{ backgroundColor: step.color + "15" }}
                >
                  <svg
                    className="h-6 w-6"
                    style={{ color: step.color }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={step.icon}
                    />
                  </svg>
                </div>

                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {step.desc}
                </p>

                {/* Connector line on md+ */}
                {i < 2 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-white/10 md:block" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function AudienceTab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
        active ? "text-white" : "text-white/50 hover:text-white/80"
      }`}
    >
      {active && (
        <motion.span
          layoutId="audience-tab-pill"
          className="absolute inset-0 rounded-full bg-primary"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
      <span className="relative">{label}</span>
    </button>
  );
}
