/**
 * Single source of truth for Corneroom's app-store links.
 * Change the URL HERE only — every badge, button, and fallback imports from
 * this file, so the links can never drift out of sync again.
 *
 * App Store id 6754674174 = the live, App-Store-approved Corneroom app.
 * Country-less path (no /us/) so Apple redirects each visitor to their own
 * regional store — better for a worldwide audience.
 */
export const APP_STORE_URL = "https://apps.apple.com/app/corneroom/id6754674174";

/** Google Play production listing. */
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=ca.inspiredtech.corneroom";
