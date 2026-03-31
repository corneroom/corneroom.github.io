import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corneroom — Your Corner of the World",
  description: "Share and discover spaces globally. Sleep, work, shower, boat, or explore.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
