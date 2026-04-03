"use client";

import { useState } from "react";

export default function ComingSoon() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-[60] border-b border-white/5 bg-white/[0.03] px-4 py-1.5 text-center text-xs text-white/50 backdrop-blur-sm">
      <span className="text-primary">Coming soon</span>
      <span className="mx-1.5 text-white/20">·</span>
      Corneroom is launching on iOS & Android
      <button
        onClick={() => setVisible(false)}
        className="ml-3 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}
