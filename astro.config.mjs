// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.new/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
