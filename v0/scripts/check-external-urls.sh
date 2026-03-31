#!/bin/bash
# Check for external URLs in corneroom site

cd "$(dirname "$0")"

echo "🔍 Checking for external URLs in corneroom..."
echo ""

# Find all HTML and JS files
FILES=$(find . -type f \( -name "*.html" -o -name "*.mjs" -o -name "*.js" \) \
  -not -path "*/hts-cache/*" \
  -not -path "*/node_modules/*" \
  -not -name "*.md" \
  -not -name "*.sh")

EXTERNAL_FOUND=0

for file in $FILES; do
  # Check for http:// or https://
  if grep -q "https\?://" "$file" 2>/dev/null; then
    # Extract lines with URLs, excluding comments and console.error
    URL_LINES=$(grep -n "https\?://" "$file" 2>/dev/null | \
      grep -v "<!--\|//\|console\.error\|console\.warn\|OFFLINE_STATUS\|serve\.sh" | \
      grep -v "http://localhost\|http://127.0.0.1")
    
    if [ ! -z "$URL_LINES" ]; then
      echo "⚠️  $file:"
      echo "$URL_LINES" | sed 's/^/   /'
      echo ""
      EXTERNAL_FOUND=1
    fi
  fi
done

if [ $EXTERNAL_FOUND -eq 0 ]; then
  echo "✅ No external URLs found in functional code!"
  echo ""
  echo "Note: URLs in comments, error messages, and documentation are non-functional."
else
  echo "❌ Found external URLs that may need to be fixed"
fi

