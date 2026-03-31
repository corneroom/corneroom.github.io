"use client";

import { motion } from "framer-motion";
import { WorldDotMap } from "@/components/maps/DotMap";

/* Option C: Full dedicated section — large interactive map with city labels */
export default function PreviewC() {
  const cities = [
    { name: "New York", x: "18%", y: "38%", spaces: "1,200+" },
    { name: "London", x: "46%", y: "28%", spaces: "890+" },
    { name: "Tokyo", x: "82%", y: "36%", spaces: "670+" },
    { name: "Bali", x: "76%", y: "56%", spaces: "450+" },
    { name: "São Paulo", x: "28%", y: "65%", spaces: "380+" },
    { name: "Sydney", x: "86%", y: "68%", spaces: "520+" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-6">
      <p className="absolute left-6 top-6 text-xs font-semibold uppercase tracking-widest text-primary">Option C — Full Dedicated Map Section</p>

      <section className="w-full max-w-7xl py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Global network</p>
          <h2 className="mt-3 text-4xl font-bold lg:text-5xl">
            Spaces in <span className="text-primary">every corner</span>
          </h2>
        </div>

        <div className="relative mx-auto">
          {/* Large map */}
          <WorldDotMap className="w-full" dotOpacity={0.12} dotSize={1.4} cityDotSize={3} />

          {/* City labels */}
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
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
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-4 gap-6 border-t border-white/8 pt-8">
          {[
            { value: "120+", label: "Countries", icon: "🌍" },
            { value: "10K+", label: "Active Spaces", icon: "🏠" },
            { value: "50K+", label: "Happy Travelers", icon: "✈️" },
            { value: "8.5K+", label: "Verified Hosts", icon: "✅" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <span className="text-2xl">{s.icon}</span>
              <p className="mt-2 text-3xl font-black text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-white/40">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
