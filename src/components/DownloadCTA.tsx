"use client";

import { motion } from "framer-motion";

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
            <h2 className="text-3xl font-bold tracking-tight lg:text-5xl">
              Ready to explore the world?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-white/80">
              Download Corneroom and start discovering spaces — or list yours and earn from day one.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary transition-all hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                Download for iOS
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" /></svg>
                Get on Google Play
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
