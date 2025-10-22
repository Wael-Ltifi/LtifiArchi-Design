import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/LtifiArchi-Design/',  // GitHub Pages project prefix
  publicDir: 'public',          // everything in public/ copied as-is
  build: {
    outDir: 'dist',
    assetsDir: 'assets',         // hashed JS/CSS go here
  },
})
