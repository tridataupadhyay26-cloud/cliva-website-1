import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        about: 'about.html',
        products: 'products.html',
        manufacturing: 'manufacturing.html',
        quality: 'quality.html',
        distributor: 'distributor.html',
        contact: 'contact.html'
      }
    }
  }
});