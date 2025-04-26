import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      'http': false,
    },
  },
  server: {
    host: '0.0.0.0',   // Escucha en todas las interfaces de red
    port: 5501,        // Puedes cambiarlo si ya está en uso
  }
})