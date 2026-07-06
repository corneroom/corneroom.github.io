import type { Metadata } from "next";
import HomeInteractive from "./HomeInteractive";

const title = "Corneroom — Find & share spaces worldwide";
const description =
  "Book affordable, verified spaces worldwide — to sleep, work, shower, boat, socialize & more. Or share your space and earn. Corneroom is a global, two-sided community.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://corneroom.com",
    siteName: "Corneroom",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@corneroomApp",
    title,
    description,
  },
  other: {
    "theme-color": "#FF642B",
  },
};

export default function Home() {
  return <HomeInteractive />;
}
