"use client";

import { useEffect, useState } from "react";

/**
 * Renders an email address that is invisible to plain HTML scrapers.
 *
 * The static HTML emitted by Next.js contains only an obfuscated form
 * (e.g. "info [at] corneroom [dot] com") inside a placeholder span. After
 * the page hydrates, JavaScript joins the parts back together and replaces
 * the placeholder with a real `mailto:` anchor. The address never appears
 * in a form a `curl | grep -oE '...'` regex can pick up.
 *
 * Usage:
 *
 *   <ObfuscatedEmail user="info" />
 *   <ObfuscatedEmail user="press" label="Reach out" />
 *   <ObfuscatedEmail user="careers" subject="Application: Senior Engineer" />
 *
 * Defense-in-depth: pair this with Cloudflare's Scrape Shield → Email
 * Address Obfuscation in the dashboard. Either alone is good; both
 * together protects against the case where one is bypassed.
 */
export function ObfuscatedEmail({
  user,
  domain = "corneroom.com",
  label,
  subject,
  className,
}: {
  /** Local part of the address (e.g. "info" for info@corneroom.com). */
  user: string;
  /** Override the default domain. */
  domain?: string;
  /** Visible text. Defaults to the address itself once revealed. */
  label?: string;
  /** Optional `?subject=` query param appended to the mailto link. */
  subject?: string;
  className?: string;
}) {
  const [revealed, setRevealed] = useState(false);

  // Hydration-only reveal — bots fetching the static HTML never see this run.
  useEffect(() => {
    setRevealed(true);
  }, []);

  if (!revealed) {
    // Server-rendered fallback. Visible to humans without JS and to scrapers,
    // but in a form regexes don't pick up. Screen readers handle this fine
    // (read literally as "user at corneroom dot com").
    const obfuscatedDomain = domain.replace(/\./g, " [dot] ");
    const display = label ?? `${user} [at] ${obfuscatedDomain}`;
    return (
      <span className={className} aria-label={`${user} at ${domain}`}>
        {display}
      </span>
    );
  }

  const address = `${user}@${domain}`;
  const href =
    "mailto:" + address + (subject ? `?subject=${encodeURIComponent(subject)}` : "");

  return (
    <a href={href} className={className}>
      {label ?? address}
    </a>
  );
}
