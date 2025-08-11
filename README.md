# Inclusively Teams Integration Demo

A Microsoft Teams app demo showcasing Success Enablers for workplace barriers and well-being support.

## Quick Start

### 1. Run Locally (HTTP)
```bash
# Start SPA-enabled server
python server.py

# Visit http://localhost:8080/teams to test
```

### 2. Run with HTTPS Tunnel (For Teams)
```bash
# Start with ngrok tunnel (requires ngrok installed)
chmod +x start-with-ngrok.sh
./start-with-ngrok.sh

# Copy the HTTPS URL from ngrok output
# Update manifest.json with your ngrok URL
```

### 3. Package for Teams Upload

#### Generate Icons
1. Open `package-for-teams/generate-icons.html` in browser
2. Right-click Color Icon → Save as `icon-color.png`
3. Right-click Outline Icon → Save as `icon-outline.png`  
4. Save both in `package-for-teams/` directory

#### Update Manifest
```bash
cd package-for-teams
# Edit manifest.json:
# - Update contentUrl with your ngrok HTTPS URL
# - Update validDomains with your ngrok domain (no https://)
# - Update developer URLs
```

#### Create Package
```bash
cd package-for-teams
zip inclusively-teams-app.zip manifest.json icon-color.png icon-outline.png

# Verify package
ls -lh inclusively-teams-app.zip
unzip -l inclusively-teams-app.zip
```

### 4. Upload to Teams
1. Go to https://dev.teams.microsoft.com/home
2. Click "Apps" → "Import an app"
3. Upload `inclusively-teams-app.zip`
4. Install to test environment

## Project Structure

```
inclusively/
├── index.html              # Main entry point
├── server.py              # SPA-enabled HTTP server
├── start-with-ngrok.sh    # HTTPS tunnel script
├── package.json           # Project configuration
├── js/
│   ├── app.js            # React app components
│   ├── teams-sdk-mock.js # Teams SDK integration
│   └── mock-api.js       # Mock backend APIs
├── css/
│   └── main.css          # Teams theming & styles
├── config.html           # Teams tab configuration
└── package-for-teams/
    ├── manifest.json     # Teams app manifest
    ├── generate-icons.html # Icon generator
    ├── create-package.sh   # Package creation script
    └── README.md         # Teams-specific instructions
```

## Available Scripts

- `npm start` - Start SPA server (port 8080)
- `npm run ngrok` - Start with ngrok HTTPS tunnel
- `npm run simple` - Basic Python HTTP server
- `npm run https` - Self-signed HTTPS server

## Features

### Teams Integration
- **Personal Tab**: Main Success Enablers interface
- **Team/Channel Tabs**: Configurable shared access  
- **Theme Support**: Dark, light, high-contrast
- **Mobile Responsive**: Optimized for Teams mobile

### User Interface
- **Hero Search**: "What barriers are you facing in your work or well being today?"
- **Example Prompts**: "I have ADHD", "I'm going through a divorce", "Stressed"
- **Success Enablers**: Organizational Tools, Noise Cancelling Headphones, Care Giving Support
- **Category Browse**: 6 categories for manual exploration

### Technical
- **React 18** via CDN (no build process)
- **Mock Authentication** and APIs
- **Teams SDK Integration** with fallback mocks
- **CSS Variables** for Teams theming
- **Performance Monitoring** (<3s load time target)

## Troubleshooting

### Teams App Won't Load
- Ensure HTTPS tunnel is running (`./start-with-ngrok.sh`)
- Verify manifest URLs match your ngrok domain
- Check `validDomains` includes ngrok domain (without https://)
- Repackage and re-upload if URLs changed

### Icon Upload Errors  
- Icons must be at root level of ZIP (not in subdirectory)
- Use `generate-icons.html` for proper transparency
- Package size should be < 50KB total

### 404 Errors on /teams Route
- Use `server.py` instead of basic Python HTTP server
- SPA routing requires server to serve index.html for all routes

### Development
```bash
# Test locally first
python server.py
# Visit http://localhost:8080/teams

# Then test with HTTPS
./start-with-ngrok.sh
# Visit ngrok HTTPS URL + /teams
```

## Teams Manifest Configuration

Key manifest settings:
- `contentUrl`: Your ngrok HTTPS URL + `/teams`
- `configurationUrl`: Your ngrok HTTPS URL + `/config.html`  
- `validDomains`: Your ngrok domain (no protocol)
- `permissions`: `["identity", "messageTeamMembers"]`

## Support

This is a demo application with mocked APIs and authentication. For production deployment, implement:
- Real backend APIs
- Proper authentication (Azure AD)
- Production hosting (not localhost/ngrok)
- SSL certificates
- Database integration