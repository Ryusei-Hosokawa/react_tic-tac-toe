import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { OutputAsset, OutputChunk, PreRenderedAsset } from 'rollup';

// GitHub Pages のリポジトリ名に合わせて設定
export default defineConfig({
  base: '/react_tic-tac-toe/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',
      output: {
        assetFileNames: (assetInfo: PreRenderedAsset) => {
          // 'names' プロパティが存在し、空でないことを確認
          if (assetInfo.names && assetInfo.names.length > 0) {
            // フォントファイルかどうかを判定
            const isFont = assetInfo.names.some(name => /\.(woff2|woff|ttf)$/.test(name));
            if (isFont) {
              return 'assets/fonts/[name][extname]';
            }
          }
          return 'assets/[name][extname]';
        }
      }
    }
  }
});
