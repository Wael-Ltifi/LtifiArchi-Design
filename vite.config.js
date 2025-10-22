import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/LtifiArchi-Design/',
  build: {
    outDir: 'dist',
    assetsDir: '', // preserve folder structure
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Only handle assets, leave index.html untouched
          if (assetInfo.name?.endsWith('.html')) return '[name][extname]'
          if (!assetInfo.name) return '[name]-[hash][extname]'
          const parts = assetInfo.name.split(path.sep)
          const folderPath = parts.length > 1 ? parts.slice(0, -1).join('/') : ''
          return folderPath ? `${folderPath}/[name]-[hash][extname]` : '[name]-[hash][extname]'
        },
      },
    },
  },
})
