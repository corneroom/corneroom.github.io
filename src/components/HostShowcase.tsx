"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const hosts = [
  { img: "/images/hosts/1.avif", name: "Marco T.", city: "Rome", earning: "$2,400/mo" },
  { img: "/images/hosts/2.avif", name: "Aisha N.", city: "Lagos", earning: "$1,800/mo" },
  { img: "/images/hosts/3.avif", name: "Yuki S.", city: "Tokyo", earning: "$3,100/mo" },
  { img: "/images/hosts/4.avif", name: "Erik S.", city: "Stockholm", earning: "$2,200/mo" },
  { img: "/images/hosts/5.avif", name: "Priya M.", city: "Mumbai", earning: "$1,600/mo" },
];

export default function HostShowcase() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* Subtle warm glow behind */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our hosts</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight lg:text-6xl">
            Meet the people sharing their spaces
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
            Verified hosts from around the world, earning while connecting with travelers.
          </p>
        </motion.div>
      </div>

      {/* Host cards — 5 across, center one in phone frame */}
      <div className="relative mx-auto flex max-w-6xl items-center justify-center gap-4 px-6 lg:gap-6">
        {hosts.map((host, i) => {
          const isCenter = i === 2;

          return (
            <motion.div
              key={host.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative shrink-0 ${isCenter ? "z-10" : "z-0"}`}
              style={{ width: isCenter ? "220px" : "180px" }}
            >
              {/* Phone frame for center card */}
              {isCenter && (
                <div className="absolute -inset-3 z-20 rounded-[2.5rem] border-[3px] border-white/20 shadow-[0_0_60px_rgba(255,100,43,0.15)]">
                  {/* Notch */}
                  <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-black border border-white/10" />
                </div>
              )}

              {/* Card */}
              <div
                className={`overflow-hidden ${isCenter ? "rounded-[2rem]" : "rounded-[1.5rem]"} border border-white/8 bg-white/[0.03]`}
              >
                <div className={`relative w-full overflow-hidden ${isCenter ? "aspect-[3/5]" : "aspect-[3/4.5]"}`}>
                  <Image
                    src={host.img}
                    alt={host.name}
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Host info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-bold text-white">{host.name}</p>
                    <p className="text-xs text-white/50">{host.city}</p>
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary/20 px-2.5 py-0.5 text-[10px] font-semibold text-primary backdrop-blur-sm">
                      💰 {host.earning}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <a
          href="#download"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
        >
          Become a Host
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
