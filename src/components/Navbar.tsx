"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <svg viewBox="0 0 100 100" className="h-4 w-4" fill="white">
              <path d="M50 95c-.7 0-1.5-.2-2.2-.6C46.5 93.5 16 73.7 16 39.1 16 20.3 31.3 5 50 5s34 15.3 34 34.1c0 34.6-30.5 54.5-31.8 55.3-.7.4-1.5.6-2.2.6zm0-68c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight">corneroom</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/50 md:flex">
          <a href="#spaces" className="transition-colors hover:text-white">Spaces</a>
          <a href="#how-it-works" className="transition-colors hover:text-white">How it works</a>
          <a href="#hosts" className="transition-colors hover:text-white">Host & Earn</a>
          <a href="#community" className="transition-colors hover:text-white">Community</a>
          <a href="/about" className="transition-colors hover:text-white">Story</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#download" className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10">
            Get the App
          </a>
        </div>
      </div>
    </header>
  );
}
