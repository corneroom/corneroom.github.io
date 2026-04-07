"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import AppBadges from "./AppBadges";

const bgVideos = [
  "/videos/1.mp4",
  "/videos/2.mp4",
  "/videos/3.mp4",
  "/videos/4.mp4",
  "/videos/5.mp4",
];

const destinations = [
  { city: "Tokyo", color: "#86C3E1" },
  { city: "Bali", color: "#F9906C" },
  { city: "Lisbon", color: "#DBB5EE" },
  { city: "Stockholm", color: "#FAF271" },
  { city: "Marrakech", color: "#FF642B" },
  { city: "Cape Town", color: "#86C3E1" },
  { city: "Buenos Aires", color: "#FB8F75" },
  { city: "Bangkok", color: "#F9906C" },
  { city: "Seoul", color: "#DBB5EE" },
  { city: "Barcelona", color: "#FF642B" },
  { city: "Dubai", color: "#FAF271" },
  { city: "Singapore", color: "#86C3E1" },
  { city: "Medellin", color: "#FB8F75" },
  { city: "Hanoi", color: "#F9906C" },
  { city: "Tbilisi", color: "#DBB5EE" },
];

export default function Hero() {
  const [destIdx, setDestIdx] = useState(0);
  const [vidIdx, setVidIdx] = useState(() => Math.floor(Math.random() * bgVideos.length));
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Cycle destinations every 4s
  useEffect(() => {
    const t = setInterval(() => setDestIdx((p) => (p + 1) % destinations.length), 4000);
    return () => clearInterval(t);
  }, []);

  // Cycle to next random video when current one ends (via onEnded)
  const handleVideoEnd = () => {
    setVidIdx((p) => {
      let next = Math.floor(Math.random() * bgVideos.length);
      while (next === p && bgVideos.length > 1) next = Math.floor(Math.random() * bgVideos.length);
      return next;
    });
  };

  // Track mouse for parallax + glow
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMouse({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const dest = destinations[destIdx];

  return (
    <section ref={sectionRef} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Mouse-follow glow */}
      <div
        className="pointer-events-none absolute h-[600px] w-[600px] rounded-full bg-primary/12 blur-[150px] transition-transform duration-700 ease-out"
        style={{
          left: `calc(50% + ${mouse.x * 300}px)`,
          top: `calc(40% + ${mouse.y * 200}px)`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Static corner glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cat-sleep/6 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cat-work/6 blur-[100px]" />
      </div>

      {/* Video background — random, crossfade on end */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={vidIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" as const }}
            className="absolute inset-0"
          >
            <video
              src={bgVideos[vidIdx]}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Heavy vignette — clears center for text */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_0%,#050505_70%)]" />
        {/* Top/bottom fade */}
        <div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-[#050505] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Now available in 120+ countries
        </div>

        {/* Headline with typing destination */}
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
          Where would you go
          <br />
          <span className="inline-flex items-baseline gap-3">
            <span className="text-white/30">to</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={destIdx}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.4 }}
                style={{ color: dest.color }}
              >
                {dest.city}
              </motion.span>
            </AnimatePresence>
            <span className="text-white/30">?</span>
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50 lg:text-xl">
          Sleep, work, shower, or explore — find spaces in 120+ countries.
          Or list your own and start earning.
        </p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 mt-10 flex flex-col items-center gap-5"
      >
        <AppBadges size="lg" />

        {/* Social proof */}
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {["#FF642B", "#86C3E1", "#DBB5EE", "#F9906C"].map((bg, n) => (
              <div key={n} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#050505] text-[10px] font-bold text-white" style={{ background: bg }}>
                {["S", "M", "A", "E"][n]}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <span className="text-sm font-bold text-white">4.8</span>
            <span className="text-sm text-white/40">· 50K+ guests</span>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2 text-white/20"
        >
          <span className="text-xs">Scroll to explore</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
