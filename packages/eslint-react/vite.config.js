import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.cjs'),
      name: 'sonny-eslint-config-react',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    outDir: 'lib'
  }
})