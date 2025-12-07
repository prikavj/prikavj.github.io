# Deploying to GitHub Pages from Main Branch

For user pages (`username.github.io`), you can deploy directly from the `main` branch instead of using `gh-pages`.

## Option 1: Use Main Branch (Simpler for User Pages)

### Setup:

1. **Update `.gitignore`** - Remove `dist` from gitignore:
   ```bash
   # Comment out or remove this line:
   # dist
   ```

2. **Build and commit to main**:
   ```bash
   npm run build
   git add dist
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

3. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)`
   - Save

### Pros:
- ✅ Simpler workflow
- ✅ Everything in one branch
- ✅ No separate gh-pages branch

### Cons:
- ❌ Build files in your main branch
- ❌ Larger repository size

## Option 2: Keep Using gh-pages (Current Setup)

This is what you're currently using. It keeps source code and built files separate.

### Pros:
- ✅ Clean separation
- ✅ Main branch only has source code
- ✅ Standard practice for project pages

### Cons:
- ❌ Two branches to manage
- ❌ Need to run `npm run deploy` after changes

## Recommendation

For `username.github.io` (user pages), **Option 1 (main branch)** is often simpler.
For project pages (`username.github.io/project-name`), **Option 2 (gh-pages)** is better.

