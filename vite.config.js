import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this project repo from a subpath:
// https://<user>.github.io/My_portfolio_ReactJs/
// Override with BASE_PATH=/ when using a custom domain or a user/org page.
const base = process.env.BASE_PATH ?? '/My_portfolio_ReactJs/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
