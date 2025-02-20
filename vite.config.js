import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "hackomania2025", // Change to your repo name
  plugins: [react()],
});

