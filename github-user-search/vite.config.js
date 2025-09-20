import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || 'alx-fe-reactjs/tree/main/github-user-search',
  css: {
    postcss: './postcss.config.js',
  },
})
