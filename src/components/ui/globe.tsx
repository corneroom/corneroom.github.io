"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

interface GlobeProps {
  className?: string;
  markers?: { location: [number, number]; size: number }[];
}

export default function Globe({ className = "", markers = [] }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    const w = container?.clientWidth ?? 600;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: w * 2,
      height: w * 2,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 4,
      baseColor: [0.15, 0.15, 0.15],
      markerColor: [1, 0.39, 0.17], // #FF642B
      glowColor: [0.15, 0.08, 0.04],
      markers,
    });

    // Manual rotation via requestAnimationFrame
    let animId: number;
    const rotate = () => {
      phiRef.current += 0.003;
      globe.update({ phi: phiRef.current });
      animId = requestAnimationFrame(rotate);
    };
    animId = requestAnimationFrame(rotate);

    return () => {
      cancelAnimationFrame(animId);
      globe.destroy();
    };
  }, [markers]);

  return (
    <div className={`relative aspect-square ${className}`}>
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ width: "100%", height: "100%", contain: "layout paint size" }}
      />
    </div>
  );
}
