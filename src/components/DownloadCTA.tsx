"use client";

import { motion } from "framer-motion";
import AppBadges from "./AppBadges";

export default function DownloadCTA() {
  return (
    <section id="download" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

          <div className="relative flex flex-col items-center px-8 py-20 text-center lg:py-28">
            <h2 className="text-4xl font-bold tracking-tight lg:text-6xl">
              Ready to explore the world?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-white/80">
              Download Corneroom and start discovering spaces — or list yours and earn from day one.
            </p>

            <AppBadges size="lg" className="mt-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
