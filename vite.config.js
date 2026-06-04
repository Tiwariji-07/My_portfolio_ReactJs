import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from the domain root (user-site repo "tiwariji-07.github.io" or a
// custom domain). For a project repo, set BASE_PATH=/<repo>/ at build time.
const base = process.env.BASE_PATH ?? '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
