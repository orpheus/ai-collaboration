#!/usr/bin/env python3
"""
HTTPS development server for Teams app testing
Creates self-signed certificate and serves on https://localhost:8080
"""

import http.server
import ssl
import socket
import tempfile
import os
from pathlib import Path

def create_self_signed_cert():
    """Create a temporary self-signed certificate"""
    import subprocess
    
    cert_dir = tempfile.mkdtemp()
    cert_file = os.path.join(cert_dir, "cert.pem")
    key_file = os.path.join(cert_dir, "key.pem")
    
    # Create self-signed certificate
    subprocess.run([
        "openssl", "req", "-x509", "-newkey", "rsa:2048", 
        "-keyout", key_file, "-out", cert_file, 
        "-days", "365", "-nodes", "-subj", 
        "/C=US/ST=Dev/L=Local/O=Teams Demo/CN=localhost"
    ], check=True, capture_output=True)
    
    return cert_file, key_file

def main():
    port = 8080
    
    try:
        # Create self-signed certificate
        print("Creating self-signed certificate...")
        cert_file, key_file = create_self_signed_cert()
        
        # Create HTTPS server
        httpd = http.server.HTTPServer(('localhost', port), http.server.SimpleHTTPRequestHandler)
        
        # Add SSL context
        context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
        context.load_cert_chain(cert_file, key_file)
        httpd.socket = context.wrap_socket(httpd.socket, server_side=True)
        
        print(f"🚀 HTTPS server running on https://localhost:{port}")
        print("📱 Teams app should now load properly")
        print("⚠️  You'll need to accept the self-signed certificate warning")
        print("🛑 Press Ctrl+C to stop")
        
        httpd.serve_forever()
        
    except KeyboardInterrupt:
        print("\n🛑 Server stopped")
    except FileNotFoundError:
        print("❌ OpenSSL not found. Install with: brew install openssl")
        print("📝 Alternative: Use ngrok or deploy to a public HTTPS endpoint")
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    main()