import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-site/',
  build: {
    outDir: 'dist/client',
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    svgLoader({
      defaultImport: 'component',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
