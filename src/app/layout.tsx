import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corneroom — Where would you go?",
  description:
    "One platform for every space. Sleep, work, shower, or explore — find spaces in 120+ countries. Or list yours and start earning.",
  keywords: [
    "space sharing",
    "travel",
    "accommodation",
    "couchsurfing",
    "co-working",
    "book spaces",
    "host",
    "earn",
  ],
  metadataBase: new URL("https://corneroom.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Corneroom — Where would you go?",
    description:
      "One platform for every space. Sleep, work, shower, or explore — find spaces in 120+ countries. Or list yours and start earning.",
    url: "https://corneroom.com",
    siteName: "Corneroom",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@corneroomApp",
    title: "Corneroom — Where would you go?",
    description:
      "One platform for every space. Sleep, work, shower, or explore — find spaces in 120+ countries. Or list yours and start earning.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#050505",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
