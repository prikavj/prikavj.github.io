import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment:
  // - If your repo is named 'username.github.io', use: base: '/'
  // - If your repo has any other name, use: base: '/repo-name/'
  // Uncomment and update the line below before deploying:
  // base: '/your-repo-name/',
})
