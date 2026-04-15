"use client";

import { motion } from "framer-motion";

const moments = [
  {
    emoji: "🧳",
    title: "Drop your bag, not €30",
    desc: "Land in Lisbon at 9am, check-in's at 3pm. A host two blocks from the station holds your suitcase until you're ready. €4 instead of €30 at left-luggage.",
    accent: "#FAF271", // shower yellow as a neutral utility tone
  },
  {
    emoji: "🛋️",
    title: "Crash for the night",
    desc: "Layover stretches to overnight. A spare couch, a kettle, a host who's done the same trip. Sometimes free, sometimes under €20.",
    accent: "#86C3E1", // sleep blue
  },
  {
    emoji: "🚿",
    title: "Freshen up between trains",
    desc: "Six hours in Vienna, a wedding to get to, and a backpack you've been wearing since Berlin. A host with a clean bathroom and a 30-minute slot.",
    accent: "#F9906C", // boat coral
  },
  {
    emoji: "💻",
    title: "Borrow a quiet desk",
    desc: "A Zoom call you can't take in a café. A spare room with WiFi for two hours. Pay for the time, not the night.",
    accent: "#DBB5EE", // work lavender
  },
];

export default function RealMoments() {
  return (
    <section id="real-moments" className="relative py-28 lg:py-36">
      {/* Subtle radial glow behind the section */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Real moments
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight lg:text-5xl">
            More than a place to sleep
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/50 lg:text-lg">
            Corneroom isn&apos;t only for overnight stays. It&apos;s for the in-between
            hours when travel gets awkward — and someone with a spare corner can
            make it easier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {moments.map((moment, i) => (
            <motion.article
              key={moment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-7 transition-all hover:border-white/15 hover:bg-white/[0.05]"
            >
              {/* Soft accent glow on hover, tinted to the category color */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
                style={{ backgroundColor: moment.accent + "22" }}
              />

              <div className="relative">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                  style={{ backgroundColor: moment.accent + "15" }}
                  aria-hidden
                >
                  {moment.emoji}
                </span>

                <h3 className="mt-5 text-lg font-bold leading-snug">
                  {moment.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {moment.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
