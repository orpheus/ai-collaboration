#!/usr/bin/env python3
"""
Simple HTTP server that serves index.html for all routes (SPA routing support)
"""

import http.server
import socketserver
import os
from urllib.parse import urlparse

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed_path = urlparse(self.path)
        
        # If it's a file request (has extension), serve normally
        if '.' in os.path.basename(parsed_path.path):
            return super().do_GET()
        
        # For all other routes, serve index.html (SPA routing)
        if parsed_path.path.startswith('/teams') or parsed_path.path == '/':
            self.path = '/index.html'
            return super().do_GET()
        
        # Default to index.html for any other route
        self.path = '/index.html'
        return super().do_GET()

def main():
    port = 8080
    
    with socketserver.TCPServer(("", port), SPAHandler) as httpd:
        print(f"🚀 SPA-enabled server running on http://localhost:{port}")
        print("📱 Supports client-side routing for /teams")
        print("🛑 Press Ctrl+C to stop")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server stopped")

if __name__ == "__main__":
    main()