"use client";

import { motion } from "framer-motion";
import { WorldDotMap } from "@/components/maps/DotMap";

/* Option D: Hybrid — faint map in hero bg + dedicated section below */
export default function PreviewD() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <p className="px-6 pt-6 text-xs font-semibold uppercase tracking-widest text-primary">Option D — Hybrid (hero bg + dedicated section)</p>

      {/* HERO with map background */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6">
        {/* Map background — faded */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <WorldDotMap className="w-[110%] max-w-none opacity-25" dotOpacity={0.06} dotSize={1} cityDotSize={2} />
        </div>
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            120+ countries and counting
          </div>
          <h1 className="text-6xl font-bold leading-[1.05] tracking-tight lg:text-7xl">
            Your Corner{" "}
            <span className="animate-gradient bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #FF642B, #FB8F75, #86C3E1, #DBB5EE, #FF642B)" }}>
              of the World
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/50">
            One platform for every space you need.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a href="#" className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white">Download for iOS</a>
            <a href="#" className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white">Google Play</a>
          </div>
        </motion.div>
      </section>

      {/* Separator */}
      <div className="mx-auto my-4 h-px w-16 bg-white/10" />

      {/* DEDICATED MAP SECTION — larger, with stats */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Global network</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">
              Active in every time zone
            </h2>
          </div>

          <div className="relative">
            <WorldDotMap className="w-full" dotOpacity={0.15} dotSize={1.3} cityDotSize={3} />
          </div>

          <div className="mt-10 flex justify-center gap-10">
            {[
              { value: "120+", label: "Countries" },
              { value: "10K+", label: "Spaces" },
              { value: "50K+", label: "Travelers" },
              { value: "8.5K+", label: "Hosts" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-black text-primary">{s.value}</p>
                <p className="mt-1 text-xs text-white/40">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
