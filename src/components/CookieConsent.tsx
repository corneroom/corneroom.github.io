"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "corneroom-cookies-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage not available (SSR or incognito)
    }
  }, []);

  function handleConsent(value: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // localStorage not available
    }
    setDismissed(true);
    // Delay hiding to let exit animation play
    setTimeout(() => setVisible(false), 50);
  }

  if (dismissed || !visible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-0 inset-x-0 z-50 p-4"
    >
      <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-white/[0.05] backdrop-blur-md px-6 py-4 flex flex-col sm:flex-row items-center gap-4 shadow-2xl">
        <p className="text-sm text-white/70 text-center sm:text-left flex-1">
          We use cookies to improve your experience. By continuing, you
          agree to our{" "}
          <Link
            href="/cookies"
            className="underline text-[#FF642B] hover:text-[#FF642B]/80 transition-colors"
          >
            cookie policy
          </Link>
          .
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleConsent("declined")}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white/70 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={() => handleConsent("accepted")}
            className="rounded-lg bg-[#FF642B] px-4 py-2 text-sm font-medium text-white hover:bg-[#FF642B]/85 transition-colors cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </motion.div>
  );
}
