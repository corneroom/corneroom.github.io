import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Corneroom",
  description:
    "Help with bookings, hosting, payments, and your Corneroom account. Browse help topics or contact our support team.",
  alternates: { canonical: "/support" },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
