import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Corneroom",
  description:
    "Simple, honest pricing. Free to list, first booking free, and a small capped service fee. See what guests pay and what hosts earn.",
  alternates: { canonical: "/pricing" },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
