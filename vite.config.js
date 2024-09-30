import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // test: {
  //   environment: 'jsdom', // Use jsdom for React testing
  //   setupFiles: './src/test/setupTests.js', // Path to your setup file
  //   globals: true,
  // },
});