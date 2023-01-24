import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import progress from 'vite-plugin-progress';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    progress({
      format: 'building [:bar] :percent',
      total: 200,
      width: 60,
      complete: '=',
      incomplete: '',
    }),
    eslint(),
  ],
});
