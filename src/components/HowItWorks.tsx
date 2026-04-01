"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Browse & Discover",
    desc: "Search spaces by city, category, or vibe. Filter by price, amenities, and host preferences.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    color: "#FF642B",
  },
  {
    number: "02",
    title: "Book Instantly",
    desc: "Reserve with a tap. Secure payments, flexible cancellation, and real-time availability.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    color: "#86C3E1",
  },
  {
    number: "03",
    title: "Stay & Connect",
    desc: "Enjoy authentic local experiences. Leave reviews, share stories, and build community.",
    icon: "M21 8.25c0-2.485-2.099-4.502-4.688-4.502-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.748 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    color: "#DBB5EE",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 lg:py-36">
      {/* Subtle section glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">How it works</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight lg:text-6xl">
            Three steps to your next adventure
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-8 transition-all hover:border-white/15 hover:bg-white/[0.05]"
            >
              {/* Number */}
              <span className="text-6xl font-black leading-none text-white/[0.04] transition-colors group-hover:text-white/[0.08]">
                {step.number}
              </span>

              {/* Icon */}
              <div
                className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors"
                style={{ backgroundColor: step.color + "15" }}
              >
                <svg className="h-6 w-6" style={{ color: step.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{step.desc}</p>

              {/* Connector line for md+ */}
              {i < 2 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-white/10 md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
