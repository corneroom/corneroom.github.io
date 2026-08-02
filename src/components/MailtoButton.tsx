"use client";

/**
 * A call-to-action button that opens the visitor's mail client, WITHOUT the
 * email address ever appearing in the static HTML.
 *
 * The address is passed base64-encoded via `enc` and only decoded into a
 * `mailto:` link inside the click handler, so scrapers that fetch the static
 * HTML (and regex for `user@domain`) find nothing to harvest. Same anti-scrape
 * approach as RevealEmail, but keeps a single-click CTA (e.g. "Apply") instead
 * of a reveal step.
 *
 * Generate `enc` with:  printf '%s' 'you@example.com' | base64
 *
 * Defense-in-depth: also enable Cloudflare Scrape Shield -> Email Address
 * Obfuscation (corneroom.com is proxied through Cloudflare).
 */
export function MailtoButton({
  enc,
  subject,
  className,
  children,
}: {
  /** base64-encoded email address, e.g. btoa("work@corneroom.com"). */
  enc: string;
  /** Optional `?subject=` appended to the mailto link. */
  subject?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        try {
          const address = atob(enc);
          window.location.href =
            "mailto:" + address + (subject ? `?subject=${encodeURIComponent(subject)}` : "");
        } catch {
          /* malformed enc — do nothing */
        }
      }}
    >
      {children}
    </button>
  );
}
