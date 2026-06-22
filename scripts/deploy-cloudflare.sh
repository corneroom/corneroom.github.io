#!/usr/bin/env bash
#
# Local deploy to Cloudflare Pages (no git push, no GitHub Actions).
#
# Builds the static site and direct-uploads out/ to the Cloudflare Pages project
# via Wrangler. This is the same hosting as a push-to-main deploy — it just lets
# you ship the current local build immediately.
#
# Prereqs (one-time):
#   npx wrangler login                      # browser OAuth to your Cloudflare account
#   export CF_PAGES_PROJECT=<project-name>  # exact Pages project name (CF dashboard → Workers & Pages)
#
# Usage:
#   npm run deploy                                  # production (--branch=main)
#   CF_DEPLOY_BRANCH=preview npm run deploy         # preview deployment instead
set -euo pipefail

cd "$(dirname "$0")/.."

: "${CF_PAGES_PROJECT:?Set CF_PAGES_PROJECT to your Cloudflare Pages project name (Cloudflare dashboard → Workers & Pages). See README → Deployment.}"
BRANCH="${CF_DEPLOY_BRANCH:-main}"

echo "🏗️  next build → out/ …"
npx next build

echo "🚀 Deploying out/ → Cloudflare Pages project '$CF_PAGES_PROJECT' (branch: $BRANCH)…"
# --branch=main targets the production environment; any other branch is a preview.
# --commit-dirty=true: don't block on an uncommitted working tree (this is a build artifact upload).
npx wrangler pages deploy out \
  --project-name="$CF_PAGES_PROJECT" \
  --branch="$BRANCH" \
  --commit-dirty=true

echo "✅ Deployed. (If this was a preview branch, the URL is printed above / in the Cloudflare dashboard.)"
