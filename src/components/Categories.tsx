"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  { name: "Sleep", emoji: "🛏️", color: "#86C3E1", desc: "Couches, spare rooms, unique stays", img: "/images/categories/sleep.jpg" },
  { name: "Work", emoji: "💻", color: "#DBB5EE", desc: "Co-working, home offices, quiet desks", img: "/images/categories/work.avif" },
  { name: "Shower", emoji: "🚿", color: "#FAF271", desc: "Gyms, bathrooms, freshen up anywhere", img: "/images/categories/shower.jpg" },
  { name: "Boat", emoji: "⛵", color: "#F9906C", desc: "Sailboats, houseboats, ocean stays", img: "/images/categories/boat.jpg" },
  { name: "Nightlife", emoji: "🌙", color: "#FF642B", desc: "Bar tables, party spaces, social vibes", img: "/images/categories/nightlife.jpg" },
  { name: "Parking", emoji: "🅿️", color: "#FFB74D", desc: "Driveways, garages, parking spots", img: "/images/categories/parking.jpg" },
  { name: "Storage", emoji: "📦", color: "#81C784", desc: "Store your stuff safely anywhere", img: "/images/categories/storage.jpg" },
];

const doubled = [...categories, ...categories];

export default function Categories() {
  return (
    <section id="spaces" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Explore spaces</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight lg:text-6xl">
            Every space you can imagine
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
            From spare rooms to sailboats — find what you need, wherever you are.
          </p>
        </motion.div>

        {/* Contained slow-scroll within max-w-7xl */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#050505] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#050505] to-transparent" />

          <div
            className="flex gap-5 hover:[animation-play-state:paused]"
            style={{ animation: "marquee 45s linear infinite" }}
          >
            {doubled.map((cat, i) => (
              <div
                key={`${cat.name}-${i}`}
                className="group relative w-56 shrink-0 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] lg:w-64"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-cover brightness-[0.6] transition-all duration-700 group-hover:brightness-[0.85] group-hover:scale-110"
                    sizes="260px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute left-0 top-0 h-1 w-full transition-all duration-300 group-hover:h-1.5" style={{ backgroundColor: cat.color }} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{cat.emoji}</span>
                    <span className="text-lg font-bold">{cat.name}</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/50">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
