import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages のリポジトリ名に合わせて設定
export default defineConfig({
  base: '/react_tic-tac-toe/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',
    }
  }
});
