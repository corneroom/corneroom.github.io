"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  { name: "Sleep", emoji: "🛏️", color: "#86C3E1", desc: "Crash on couches, spare rooms, and unique stays worldwide", img: "/images/heroes/1.jpg" },
  { name: "Work", emoji: "💻", color: "#DBB5EE", desc: "Co-working desks, home offices, and quiet creative spaces", img: "/images/heroes/3.jpg" },
  { name: "Shower", emoji: "🚿", color: "#FAF271", desc: "Gyms, private bathrooms — freshen up anywhere on the go", img: "/images/heroes/5.jpg" },
  { name: "Boat", emoji: "⛵", color: "#F9906C", desc: "Sailboats, houseboats, and overnight ocean adventures", img: "/images/heroes/7.jpg" },
  { name: "Nightlife", emoji: "🌙", color: "#FF642B", desc: "Bar tables, party spaces, and local social experiences", img: "/images/heroes/9.jpg" },
];

export default function Categories() {
  return (
    <section id="spaces" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Explore spaces</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-5xl">
            Every space you can imagine
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
            From spare rooms to sailboats — find what you need, wherever you are.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-cover brightness-[0.65] transition-all duration-700 group-hover:brightness-[0.85] group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Color accent */}
                <div className="absolute left-0 top-0 h-1 w-full transition-all duration-300 group-hover:h-1.5" style={{ backgroundColor: cat.color }} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{cat.emoji}</span>
                  <span className="text-lg font-bold">{cat.name}</span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-white/50 transition-colors group-hover:text-white/70">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
