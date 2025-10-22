import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/LtifiArchi-Design/', // project page path
  build: {
    outDir: 'dist',
    assetsDir: '', // preserve folder structure
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const parts = assetInfo.name?.split(path.sep)
          if (!parts) return 'assets/[name]-[hash][extname]'
          const folder = parts.length > 1 ? parts.slice(0, -1).join('/') : ''
          return folder ? `${folder}/[name]-[hash][extname]` : '[name]-[hash][extname]'
        },
      },
    },
  },
})
