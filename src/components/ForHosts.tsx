"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, target]);

  return (
    <span>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const perks = [
  { emoji: "📸", title: "List in minutes", desc: "Add photos, set your price, go live" },
  { emoji: "🛡️", title: "Verified guests", desc: "ID-checked, reviewed community" },
  { emoji: "💳", title: "Secure payouts", desc: "Get paid after every booking via Stripe" },
  { emoji: "📊", title: "Host dashboard", desc: "Track earnings, bookings, and reviews" },
];

export default function ForHosts() {
  return (
    <section id="hosts" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: text + perks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">For hosts</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight lg:text-6xl">
              Turn your space into income
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/50">
              Got a spare room, a boat, or even a shower? List it on Corneroom and
              start earning from travelers worldwide.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {perks.map((perk) => (
                <div key={perk.title} className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                  <span className="text-xl">{perk.emoji}</span>
                  <h4 className="mt-2 text-sm font-bold">{perk.title}</h4>
                  <p className="mt-1 text-xs text-white/40">{perk.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: earnings stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Average monthly earnings</p>
              <p className="mt-3 text-5xl font-black text-primary">
                $<AnimatedNumber target={2400} />
              </p>
              <p className="mt-1 text-sm text-white/40">per spare room listing</p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between border-t border-white/8 pt-4">
                  <span className="text-sm text-white/50">Active hosts</span>
                  <span className="text-sm font-bold"><AnimatedNumber target={8500} suffix="+" /></span>
                </div>
                <div className="flex items-center justify-between border-t border-white/8 pt-4">
                  <span className="text-sm text-white/50">Avg occupancy rate</span>
                  <span className="text-sm font-bold"><AnimatedNumber target={78} suffix="%" /></span>
                </div>
                <div className="flex items-center justify-between border-t border-white/8 pt-4">
                  <span className="text-sm text-white/50">Avg response time</span>
                  <span className="text-sm font-bold">&lt; 2 hours</span>
                </div>
              </div>

              <a href="#download" className="mt-8 block w-full rounded-full bg-primary py-3.5 text-center text-sm font-semibold text-white transition-all hover:bg-primary-dark">
                Start Hosting
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
