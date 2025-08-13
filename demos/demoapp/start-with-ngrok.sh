#!/bin/bash

# Start Teams app with ngrok tunnel for public HTTPS access
echo "🚀 Starting Teams app with ngrok tunnel..."

# Check if ngrok is installed
if ! command -v ngrok &> /dev/null; then
    echo "❌ ngrok not found. Install with:"
    echo "   brew install ngrok"
    echo "   OR download from https://ngrok.com/"
    exit 1
fi

# Start SPA-enabled HTTP server in background
echo "📡 Starting SPA-enabled HTTP server on port 8080..."
python server.py &
SERVER_PID=$!

# Wait a moment for server to start
sleep 2

# Start ngrok tunnel
echo "🌐 Creating HTTPS tunnel with ngrok..."
echo "📋 Copy the HTTPS URL and update your Teams app manifest"
echo "🛑 Press Ctrl+C to stop both services"

# Trap to kill both processes on exit
trap "echo '🛑 Stopping services...'; kill $SERVER_PID 2>/dev/null; exit" INT TERM

# Start ngrok (this will block)
ngrok http 8080