#!/bin/bash

# Script to create Teams app package
echo "Creating Teams app package..."

# Check if required files exist
if [ ! -f "manifest.json" ]; then
    echo "Error: manifest.json not found"
    exit 1
fi

if [ ! -f "icon-color.png" ]; then
    echo "Error: icon-color.png not found"
    echo "Please generate icons using generate-icons.html first"
    exit 1
fi

if [ ! -f "icon-outline.png" ]; then
    echo "Error: icon-outline.png not found"
    echo "Please generate icons using generate-icons.html first"
    exit 1
fi

# Remove old package if exists
rm -f inclusively-teams-app.zip

# Create the package (icons must be at root level)
zip -r inclusively-teams-app.zip manifest.json icon-color.png icon-outline.png

# Check file sizes
echo ""
echo "Package contents:"
unzip -l inclusively-teams-app.zip

echo ""
echo "Package size:"
ls -lh inclusively-teams-app.zip

echo ""
echo "✅ Teams app package created: inclusively-teams-app.zip"
echo "📁 Ready to upload to https://dev.teams.microsoft.com/home"