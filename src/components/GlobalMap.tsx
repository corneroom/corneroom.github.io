"use client";

import { motion } from "framer-motion";
import { WorldDotMap } from "@/components/maps/DotMap";

const stats = [
  { value: "120+", label: "Countries" },
  { value: "10K+", label: "Active Spaces" },
  { value: "50K+", label: "Happy Travelers" },
  { value: "8.5K+", label: "Verified Hosts" },
];

export default function GlobalMap() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Global network</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight lg:text-6xl">
            Spaces in <span className="text-primary">every corner</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/50">
            Active hosts and travelers across 120+ countries, sharing spaces every day.
          </p>
        </motion.div>

        {/* Clean map — no floating cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
        >
          <WorldDotMap className="w-full" />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 grid grid-cols-2 gap-6 border-t border-white/8 pt-10 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-black text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-white/40">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
