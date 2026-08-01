"use client";

import { useState } from "react";

/**
 * Click-to-reveal email address (anti-scrape).
 *
 * The address is NOT present in the static HTML — it is passed base64-encoded
 * via `enc` and only decoded into a `mailto:` link after the visitor clicks the
 * button. Email harvesters that fetch the static HTML (the vast majority never
 * run JS, and regex for `user@domain`) find nothing parseable to scrape.
 *
 * Generate `enc` with:  printf '%s' 'support@corneroom.com' | base64
 *
 * Defense-in-depth: also enable Cloudflare Scrape Shield -> Email Address
 * Obfuscation in the dashboard (corneroom.com is proxied through Cloudflare).
 */
export function RevealEmail({
  enc,
  subject,
  buttonLabel = "Show email",
  className,
}: {
  /** base64-encoded email address, e.g. btoa("support@corneroom.com"). */
  enc: string;
  /** Optional `?subject=` appended to the revealed mailto link. */
  subject?: string;
  /** Text on the reveal button before the address is shown. */
  buttonLabel?: string;
  className?: string;
}) {
  const [address, setAddress] = useState<string | null>(null);

  if (address) {
    const href =
      "mailto:" + address + (subject ? `?subject=${encodeURIComponent(subject)}` : "");
    return (
      <a href={href} className={className}>
        {address}
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          try {
            setAddress(atob(enc));
          } catch {
            /* malformed enc — leave unrevealed */
          }
        }}
      >
        {buttonLabel}
      </button>
      {/* No-JS visitors can't reveal; point them to in-app support. */}
      <noscript> — or use in-app support (Settings &rarr; Help &amp; Support)</noscript>
    </>
  );
}
