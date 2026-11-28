import { mergeConfig } from 'vite'
import { editorialPractices } from './editorial/practices.mjs'

const path = require('path')

export default mergeConfig({ plugins: [editorialPractices()] }, {
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
  server: {
    port: 8080
  }
})
