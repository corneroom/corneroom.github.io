import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meetups — Corneroom",
  description:
    "Corneroom meetups bring hosts and travelers together in cities worldwide. See how they work and join the next one.",
  alternates: { canonical: "/meetups" },
};

export default function MeetupsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
