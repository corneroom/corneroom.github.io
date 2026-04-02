"use client";

import { motion } from "framer-motion";
import Globe from "@/components/ui/globe";

// City coordinates [lat, lng] for globe markers
const cityMarkers = [
  { location: [40.71, -74.01] as [number, number], size: 0.06 },  // New York
  { location: [34.05, -118.24] as [number, number], size: 0.05 }, // Los Angeles
  { location: [51.51, -0.13] as [number, number], size: 0.06 },   // London
  { location: [48.86, 2.35] as [number, number], size: 0.05 },    // Paris
  { location: [41.9, 12.5] as [number, number], size: 0.04 },     // Rome
  { location: [59.33, 18.07] as [number, number], size: 0.04 },   // Stockholm
  { location: [25.2, 55.27] as [number, number], size: 0.05 },    // Dubai
  { location: [19.08, 72.88] as [number, number], size: 0.05 },   // Mumbai
  { location: [13.76, 100.5] as [number, number], size: 0.05 },   // Bangkok
  { location: [35.68, 139.69] as [number, number], size: 0.06 },  // Tokyo
  { location: [37.57, 126.98] as [number, number], size: 0.05 },  // Seoul
  { location: [-8.65, 115.22] as [number, number], size: 0.04 },  // Bali
  { location: [1.35, 103.82] as [number, number], size: 0.04 },   // Singapore
  { location: [-33.87, 151.21] as [number, number], size: 0.05 }, // Sydney
  { location: [-23.55, -46.63] as [number, number], size: 0.05 }, // São Paulo
  { location: [-33.92, 18.42] as [number, number], size: 0.04 },  // Cape Town
  { location: [-1.29, 36.82] as [number, number], size: 0.04 },   // Nairobi
  { location: [43.65, -79.38] as [number, number], size: 0.05 },  // Toronto
];

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
          className="mb-4 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Global network</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight lg:text-6xl">
            Spaces in <span className="text-primary">every corner</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/50">
            Active hosts and travelers across 120+ countries, sharing spaces every day.
          </p>
        </motion.div>

        {/* 3D Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-lg"
        >
          {/* Glow behind globe */}
          <div className="absolute inset-0 rounded-full bg-primary/5 blur-[80px]" />
          <Globe className="w-full" markers={cityMarkers} />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 grid grid-cols-2 gap-6 border-t border-white/8 pt-10 md:grid-cols-4"
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
