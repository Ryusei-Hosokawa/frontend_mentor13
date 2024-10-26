import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { OutputAsset, OutputChunk, PreRenderedAsset } from 'rollup';

export default defineConfig({
  base: '/frontend_mentor13/',
  plugins: [react()],
  build: {
    rollupOptions: {
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
