import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer — Corneroom",
  description:
    "Volunteer with Corneroom — help shape the product, moderate the community, and test new features with early access.",
  alternates: { canonical: "/volunteer" },
};

export default function VolunteerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
