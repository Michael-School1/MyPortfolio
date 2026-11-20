import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const { PORT = '3000' } = process.env

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    // Forward API requests from the Vite dev server (port 5173)
    // to the Express backend (port 3000) so the frontend can call "/api/..." directly.
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
      '/auth': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
})
