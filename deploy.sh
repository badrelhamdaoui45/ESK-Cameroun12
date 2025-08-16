#!/bin/bash

echo "Building project for GitHub Pages..."
npm run export

echo "Build completed! Check the 'out' folder for static files."
echo "You can now push these changes to GitHub to trigger automatic deployment."
echo ""
echo "Next steps:"
echo "1. Commit and push your changes:"
echo "   git add ."
echo "   git commit -m 'Configure for GitHub Pages deployment'"
echo "   git push"
echo ""
echo "2. Enable GitHub Pages in your repository settings"
echo "3. Set source to 'GitHub Actions'"
echo "4. The deployment will happen automatically!"
