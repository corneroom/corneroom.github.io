"use client";

import { motion } from "framer-motion";
import { WorldDotMap } from "@/components/maps/DotMap";

/* Option A: Standalone dot map section — "We're Everywhere" */
export default function PreviewA() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Option A — Dot Map Section</p>

      <section className="w-full max-w-6xl py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Global community</p>
          <h2 className="mt-3 text-4xl font-bold lg:text-5xl">
            We&apos;re <span className="text-primary">everywhere</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/50">
            Active hosts and travelers across 120+ countries, sharing spaces every day.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <WorldDotMap className="w-full" dotOpacity={0.15} dotSize={1.3} cityDotSize={2.8} />

          {/* Stats overlay */}
          <div className="mt-10 flex justify-center gap-12">
            {[
              { value: "120+", label: "Countries" },
              { value: "10K+", label: "Active Spaces" },
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
