#!/bin/bash

echo "🚀 Building Salt Flats Psychiatry website..."

# Install dependencies
npm install

# Build the project
npm run build

echo "✅ Build completed successfully!"
echo "📁 Build output is in the .next/ directory"
echo ""
echo "To start the production server, run:"
echo "  npm start"
echo ""
echo "To deploy to Vercel:"
echo "  1. Push your code to GitHub"
echo "  2. Connect your repository to Vercel"
echo "  3. Deploy automatically on every push"
echo ""
echo "To deploy to other platforms:"
echo "  - Copy the .next/ directory to your server"
echo "  - Run 'npm start' on your server"
