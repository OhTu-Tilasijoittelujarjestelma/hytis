import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ["ohtuprojekti-staging.ext.ocp-test-0.k8s.it.helsinki.fi"],
  },
})
