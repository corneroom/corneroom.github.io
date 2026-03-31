#!/bin/bash
# Local HTTP server for Corneroom offline site
# This fixes CORS issues with ES modules when viewing locally

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
# Go to project root (one level up from scripts/)
cd "$SCRIPT_DIR/.."

# Default port 8001 (8000 is often in use)
PORT=${1:-8001}

# Check if port is in use
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo "⚠️  Port $PORT is already in use. Trying next available port..."
    PORT=$((PORT + 1))
    while lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1 ; do
        PORT=$((PORT + 1))
    done
    echo "✅ Using port $PORT instead"
fi

echo ""
echo "🚀 Starting Corneroom local server"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📍 Server: http://localhost:$PORT"
echo "🌐 Site:   http://localhost:$PORT/index.html"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Press Ctrl+C to stop"
echo ""

# Try different server options
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer $PORT
elif command -v php &> /dev/null; then
    php -S localhost:$PORT
else
    echo "❌ Error: No HTTP server found. Please install Python or PHP."
    exit 1
fi

