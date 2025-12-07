#!/bin/bash

# Instructions:
# 1. Create a repository on GitHub first
# 2. Replace YOUR_USERNAME and YOUR_REPO_NAME below
# 3. Run: bash PUSH_TO_GITHUB.sh

# Set your GitHub username and repository name
GITHUB_USERNAME="YOUR_USERNAME"
REPO_NAME="YOUR_REPO_NAME"

# Add remote (if not already added)
git remote add origin https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git 2>/dev/null || git remote set-url origin https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git

# Push to GitHub
git push -u origin main

echo "✅ Pushed to GitHub!"
echo "📝 Next steps:"
echo "   1. Update vite.config.ts with: base: '/${REPO_NAME}/'"
echo "   2. Run: npm run deploy"
echo "   3. Enable GitHub Pages in repository settings"

