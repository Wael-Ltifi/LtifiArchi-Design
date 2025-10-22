import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // this gets changed to  base: '/LtifiArchi-Design/', to build something working on git 
})
