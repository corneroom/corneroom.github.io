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
            <svg viewBox="0 0 64 64" className="h-5 w-5" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
              <path d="M32 4C18 4 8 15 8 26c0 17 24 34 24 34s24-17 24-34C56 15 46 4 32 4z" strokeWidth="4"/>
              <path d="M21 28 L32 17 L43 28" strokeWidth="4"/>
              <rect x="27" y="28" width="10" height="13" rx="1.5" strokeWidth="3.5"/>
              <circle cx="33.5" cy="35" r="1.5" fill="white" stroke="none"/>
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
