import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        product: resolve(__dirname, 'product.html'),
        fashion: resolve(__dirname, 'fashion/index.html'),
        electronics: resolve(__dirname, 'electronics/index.html'),
        bio: resolve(__dirname, 'bio/index.html'),
        pets: resolve(__dirname, 'pets/index.html'),
        beauty: resolve(__dirname, 'beauty/index.html'),
        education: resolve(__dirname, 'education/index.html')
      }
    }
  }
});
