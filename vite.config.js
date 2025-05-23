import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    target: 'esnext',
    assetsInlineLimit: Infinity,
    cssCodeSplit: false,
    // ⛔ REMOVEMOS manualChunks porque inlineDynamicImports já está ativo
    rollupOptions: {
      output: {
        // nada aqui!
      },
    },
  },
});
