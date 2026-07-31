"use client";

import { useEffect, useState } from "react";
import { WORLD_ASPECT, WORLD_BEACONS } from "@/app/_worldmap.generated";

// Featured (live seed) cities drive the calm rotating "verified spaces" chip.
const FEATURED = WORLD_BEACONS.filter((b) => b.featured);

/**
 * Worldwide "beacon map" — a dotted (halftone) world map with glowing, pulsing
 * beacons on real Corneroom cities. The dots are a generated vector asset
 * (/home/world-dots.svg, real land + real projection); beacons are projected
 * onto the same grid (see scripts/gen-world-dotmap.mjs). No arcs — calm & spacious.
 *
 * Purely decorative: the section heading + copy carry the meaning, so the whole
 * visual is aria-hidden. Pulses honour prefers-reduced-motion via CSS.
 */
export default function BeaconMap({ className = "" }: { className?: string }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || FEATURED.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % FEATURED.length), 3400);
    return () => clearInterval(t);
  }, []);

  const city = FEATURED[idx]?.name ?? FEATURED[0]?.name ?? "";

  return (
    <div className={`beacon-map ${className}`.trim()} aria-hidden="true">
      <div className="beacon-map-stage" style={{ aspectRatio: WORLD_ASPECT }}>
        {/* Dotted world map — generated vector, served gzipped & cached. */}
        <img className="beacon-map-dots" src="/home/world-dots.svg" alt="" />

        {/* Beacons on real cities. */}
        {WORLD_BEACONS.map((b, i) => (
          <span
            key={b.name}
            className={`beacon${b.featured ? " is-featured" : ""}`}
            style={{
              left: `${b.left}%`,
              top: `${b.top}%`,
              // Stagger so pings ripple organically instead of firing in unison.
              ["--d" as string]: `${(i % 7) * 0.45}s`,
            }}
          >
            <i className="beacon-ping" />
            <i className="beacon-core" />
          </span>
        ))}
      </div>

      {/* Calm, factual live chip — cycles verified seed markets (no fabricated activity). */}
      <div className="beacon-chip">
        <span className="beacon-chip-dot" />
        <span className="beacon-chip-txt">
          Verified spaces in <b>{city}</b>
        </span>
      </div>
    </div>
  );
}
