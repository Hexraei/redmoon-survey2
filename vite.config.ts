
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is crucial for GitHub Pages deployment.
  // Replace 'redmoon-survey2' with your exact repository name.
  base: '/redmoon-survey2/', 
})
