"use client";

import { motion } from "framer-motion";
import { WorldDotMap } from "@/components/maps/DotMap";

const cities = [
  { name: "New York", x: "18%", y: "38%", spaces: "1,200+" },
  { name: "London", x: "46%", y: "28%", spaces: "890+" },
  { name: "Tokyo", x: "82%", y: "36%", spaces: "670+" },
  { name: "Bali", x: "76%", y: "56%", spaces: "450+" },
  { name: "São Paulo", x: "28%", y: "65%", spaces: "380+" },
  { name: "Sydney", x: "86%", y: "68%", spaces: "520+" },
];

const stats = [
  { value: "120+", label: "Countries", icon: "🌍" },
  { value: "10K+", label: "Active Spaces", icon: "🏠" },
  { value: "50K+", label: "Happy Travelers", icon: "✈️" },
  { value: "8.5K+", label: "Verified Hosts", icon: "✅" },
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
          <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-5xl">
            Spaces in <span className="text-primary">every corner</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/50">
            Active hosts and travelers across 120+ countries, sharing spaces every day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto"
        >
          <WorldDotMap className="w-full" dotOpacity={0.12} dotSize={1.4} cityDotSize={3} />

          {/* City labels */}
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
              className="absolute hidden lg:block"
              style={{ left: city.x, top: city.y }}
            >
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/80 px-3 py-1.5 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div>
                  <p className="text-[11px] font-semibold text-white">{city.name}</p>
                  <p className="text-[9px] text-white/40">{city.spaces} spaces</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 grid grid-cols-2 gap-6 border-t border-white/8 pt-10 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="text-2xl">{s.icon}</span>
              <p className="mt-2 text-3xl font-black text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-white/40">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
