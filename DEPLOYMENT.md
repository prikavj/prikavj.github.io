# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `your-username.github.io` (for a user page) OR any name you prefer (for a project page)
3. **Don't** initialize with README, .gitignore, or license (if you already have local files)

## Step 2: Initialize Git and Push to GitHub

If you haven't already:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

## Step 3: Update Vite Config

1. Open `vite.config.ts`
2. Uncomment and update the `base` path with your repository name:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Replace 'your-repo-name' with your actual repo name
})
```

**Important**: 
- If your repo is named `your-username.github.io`, use `base: '/'`
- If your repo has any other name, use `base: '/repo-name/'`

## Step 4: Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:
- Build your project
- Create/update the `gh-pages` branch
- Push the built files to GitHub

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Click **Save**

## Step 6: Access Your Site

Your portfolio will be available at:
- `https://your-username.github.io/your-repo-name/` (if repo has a custom name)
- `https://your-username.github.io/` (if repo is named `your-username.github.io`)

**Note**: It may take a few minutes for the site to be available after deployment.

## Updating Your Site

Whenever you make changes:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. Deploy again:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### 404 Error or Blank Page
- Make sure the `base` path in `vite.config.ts` matches your repository name
- Check that the `gh-pages` branch exists and has the `dist` folder contents
- Wait a few minutes for GitHub Pages to update

### Assets Not Loading
- Ensure all image paths use absolute paths starting with `/`
- Check that the `base` path is correctly set

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run build`

