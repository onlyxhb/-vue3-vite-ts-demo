import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    extensions: ['.ts', '.vue', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@basic': path.resolve(__dirname, 'src/components/basic'),
      'components': path.resolve(__dirname, 'src/components')
    }
  }
})
