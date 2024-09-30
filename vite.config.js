import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.json', '.css', '.vue'],
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@styles': path.resolve(__dirname, './src/assets/css'),
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
      '@images': path.resolve(__dirname, './src/assets/images'),
    },

  }
})
