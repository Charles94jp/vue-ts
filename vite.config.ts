import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// npm install @types/node
// @ts-ignore
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // @别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
