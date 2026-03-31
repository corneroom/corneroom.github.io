"use client";

import { motion } from "framer-motion";
import { WorldDotMap } from "@/components/maps/DotMap";

/* Option B: Map as hero background — subtle, behind headline */
export default function PreviewB() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-6">
      <p className="absolute left-6 top-6 text-xs font-semibold uppercase tracking-widest text-primary">Option B — Hero Background Map</p>

      <section className="relative flex w-full max-w-6xl flex-col items-center justify-center py-20">
        {/* Map as background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
          <WorldDotMap className="w-[120%] max-w-none" dotOpacity={0.08} dotSize={1.1} cityDotSize={2.2} />
        </div>

        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[120px]" />

        {/* Hero content on top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Now available in 120+ countries
          </div>

          <h1 className="text-6xl font-bold leading-[1.05] tracking-tight lg:text-7xl">
            Your Corner{" "}
            <span
              className="animate-gradient bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #FF642B, #FB8F75, #86C3E1, #DBB5EE, #FF642B)" }}
            >
              of the World
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-white/50">
            One platform for every space. Sleep, work, shower, or explore —
            or list yours and start earning.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <a href="#" className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white">Download for iOS</a>
            <a href="#" className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white">Google Play</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
