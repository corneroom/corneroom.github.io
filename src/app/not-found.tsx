import DeepLinkFallback from "@/components/DeepLinkFallback";

export const metadata = {
  title: "Open in Corneroom",
  description: "Get the Corneroom app to discover spaces near you.",
};

// GitHub Pages serves this page (built as 404.html) for every path without a
// matching static file — including app deep-link paths like /listing/<id> and
// /refer/<code> that the installed app would otherwise have intercepted. The
// client component reads the path and tailors the "open in app / get the app"
// fallback, so visitors without the app don't hit a bare 404.
export default function NotFound() {
  return <DeepLinkFallback />;
}
