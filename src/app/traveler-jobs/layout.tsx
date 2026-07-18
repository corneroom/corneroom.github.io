import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traveler Jobs — Corneroom",
  description:
    "Earn while you travel — ambassador, photography, and content gigs with Corneroom in cities worldwide.",
  alternates: { canonical: "/traveler-jobs" },
};

export default function TravelerJobsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
