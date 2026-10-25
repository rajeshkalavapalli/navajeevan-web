import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Some legal documents use an upper-case extension (e.g. CSR Certificate.PDF)
  assetsInclude: ['**/*.PDF', '**/*.JPG'],
})
