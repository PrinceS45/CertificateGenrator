import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      '/auth': 'https://certificategenrator-p34p.onrender.com',
      '/admin': 'https://certificategenrator-p34p.onrender.com',
      '/getInfo': 'https://certificategenrator-p34p.onrender.com'
    }
  }
})