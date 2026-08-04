"use client";

import { useEffect, useState } from "react";
import { APP_STORE_URL } from "@/lib/store-links";

const APP_STORE = APP_STORE_URL;
const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=ca.inspiredtech.corneroom";

// Path roots the app also handles as Universal Links / App Links — kept in sync
// with the iOS AASA, Android assetlinks.json, and the app's DeepLinkService.
// For these we offer an "Open in app" button via the custom scheme so a link
// opened inside an in-app browser (Instagram/Facebook/…), which ignores
// Universal/App Links, can still hand off to an installed app.
const APP_PATH_ROOTS = ["listing", "experiences", "feed", "refer", "app"];

type Variant = {
  heading: string;
  blurb: string;
  /** corneroom://… custom-scheme link, or null for a generic 404. */
  appUrl: string | null;
};

function resolveVariant(pathname: string): Variant {
  const segments = pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  const root = segments[0] ?? "";
  const appUrl = APP_PATH_ROOTS.includes(root)
    ? `corneroom://${segments.join("/")}`
    : null;

  switch (root) {
    case "listing":
      return {
        heading: "View this space in Corneroom",
        blurb:
          "Open it in the Corneroom app to see photos, availability and book — or get the app below.",
        appUrl,
      };
    case "experiences":
      return {
        heading: "View this experience in Corneroom",
        blurb:
          "Open it in the Corneroom app to see the details and reserve your spot — or get the app below.",
        appUrl,
      };
    case "refer":
      return {
        heading: "You're invited to Corneroom",
        blurb:
          "Get the app to claim your invite and start booking & hosting spaces worldwide.",
        appUrl,
      };
    case "feed":
      return {
        heading: "See this on Corneroom",
        blurb:
          "Open the Corneroom app to view this and discover spaces worldwide.",
        appUrl,
      };
    case "app":
      return {
        heading: "Open Corneroom",
        blurb:
          "Get the Corneroom app to book & host spaces worldwide. If it's already installed, the original link opens it automatically.",
        appUrl,
      };
    default:
      return {
        heading: "Open in Corneroom",
        blurb:
          "This content is best viewed in the Corneroom app. Get the app to discover spaces in 120+ countries.",
        appUrl: null,
      };
  }
}

/**
 * Client fallback shown when a Universal Link / App Link wasn't intercepted by
 * an installed app — i.e. the visitor doesn't have the app, is on desktop, or
 * opened the link in an in-app browser. Rendered from not-found.tsx, which
 * GitHub Pages serves (as 404.html) for every unmatched path, so this handles
 * arbitrary /listing/<id>, /refer/<code>, … without pre-generating pages.
 */
export default function DeepLinkFallback() {
  const [variant, setVariant] = useState<Variant>(() => resolveVariant(""));

  useEffect(() => {
    setVariant(resolveVariant(window.location.pathname));
  }, []);

  const storeButtonClass =
    "inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors";

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {variant.heading}
        </h1>
        <p className="text-gray-600 mb-8">{variant.blurb}</p>

        {variant.appUrl && (
          <a
            href={variant.appUrl}
            className="inline-flex items-center justify-center w-full sm:w-auto bg-[#FF642B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e8551f] transition-colors mb-4"
          >
            Open in app
          </a>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a href={APP_STORE} className={storeButtonClass}>
            Download on the App Store
          </a>
          <a href={PLAY_STORE} className={storeButtonClass}>
            Get it on Google Play
          </a>
        </div>

        <a
          href="/"
          className="inline-block text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back to Corneroom.com
        </a>
      </div>
    </main>
  );
}
