import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cooking-lp/',
  build: {
    outDir: 'dist',
    publicPath: '/cooking-lp/',
  },
});
