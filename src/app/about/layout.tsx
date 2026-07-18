import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Corneroom",
  description:
    "Corneroom is a global space-sharing community. Find affordable, verified spaces to sleep, work, shower & more — or share yours and earn.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
