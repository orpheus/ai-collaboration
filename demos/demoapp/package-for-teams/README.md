# Teams App Package Creation Guide

## Quick Setup for Teams Developer Portal

Follow these steps to create a proper Teams app package for import:

### Step 1: Generate Icons
1. Open `http://localhost:8080/package-for-teams/generate-icons.html` in your browser
2. Right-click the **first canvas** → Save image as → `icon-color.png`
3. Right-click the **second canvas** → Save image as → `icon-outline.png`
4. Save both files in the `package-for-teams` directory

### Step 2: Create Package
After saving the icons, run:
```bash
cd package-for-teams
zip inclusively-teams-app.zip manifest.json icon-color.png icon-outline.png
```

### Step 3: Verify Package
Check the package size and contents:
```bash
ls -lh inclusively-teams-app.zip
unzip -l inclusively-teams-app.zip
```

Expected output:
- Package size: < 50 KB
- Contents: manifest.json, icon-color.png, icon-outline.png (at root level)

### Step 4: Upload to Teams
1. Go to https://dev.teams.microsoft.com/home
2. Click "Apps" in left navigation
3. Click "Import an app" button
4. Upload `inclusively-teams-app.zip`
5. Install to your Teams environment for testing

## Package Structure
```
inclusively-teams-app.zip
├── manifest.json          (Teams app configuration)
├── icon-color.png         (192x192 color icon)
└── icon-outline.png       (32x32 outline icon)
```

## App Configuration
- **Personal Tab**: Available at `/teams` route
- **Team/Channel Tabs**: Configurable via `/config.html`
- **Domain**: localhost:8080 (for development)
- **Permissions**: identity, messageTeamMembers

## Testing the Integration
Once installed in Teams:
1. Add as personal tab to see the Success Enablers interface
2. Add to a team channel for shared access
3. Test theme switching (dark/light/high-contrast)
4. Verify responsive design on mobile Teams app

The app will automatically detect Teams context and display user information from the Teams environment.