# Priyank Avijeet - Personal Portfolio

A colorful, animated personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Vibrant Design**: Neon pink, cyan, purple, and orange color palette
- **Smooth Animations**: Framer Motion powered transitions and effects
- **Animated Backgrounds**: Floating gradient blobs
- **Interactive Cards**: 3D tilt and glow hover effects
- **Responsive Design**: Mobile-friendly layout
- **Data-Driven**: Content stored in JSON files for easy updates

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation

## 📁 Project Structure

```
src/
  components/     # Reusable components (Navigation, Card, AnimatedBlob)
  pages/          # Page components (Home, About, Experience, etc.)
  data/           # JSON data files (experience, projects, research)
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

## 📦 Deployment to GitHub Pages

Your portfolio is ready to deploy to GitHub Pages! See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Start:

1. **Create a GitHub repository** (or use existing one)

2. **Update `vite.config.ts`** - Uncomment and set the base path:
   ```typescript
   base: '/your-repo-name/',  // Use '/' if repo is 'username.github.io'
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Your site will be live at `https://yourusername.github.io/your-repo-name/`

For detailed step-by-step instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 📝 Customization

### Update Content

Edit the JSON files in `src/data/`:
- `experience.json` - Work experience
- `projects.json` - Project portfolio
- `research.json` - Research publications
- `about.json` - About section content

### Update Contact Links

Edit the `socialLinks` array in `src/pages/Contact.tsx` with your actual links.

### Colors & Styling

Customize colors in:
- `tailwind.config.js` - Theme colors
- `src/index.css` - Global styles and utilities

## 🎨 Design Features

- Gradient text effects
- Animated floating blobs
- Card hover effects (3D tilt and glow)
- Smooth page transitions
- Sticky navigation with active state indicators
- Responsive grid layouts

## 📄 License

MIT
