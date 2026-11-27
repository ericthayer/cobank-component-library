const path = require('path')
import { fieldGuidePages } from './documentation/plugin.mjs'

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: [
        path.resolve(__dirname, 'src/index.html'),
        path.resolve(__dirname, 'src/archive/bootstrap/index.html'),
      ],
    },
  },
  plugins: [fieldGuidePages()],
  server: {
    port: 8080
  }
}