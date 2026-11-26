const path = require('path')

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
  server: {
    port: 8080
  }
}