import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://drfarmfabricatorsandengineers-lab.github.io',
  base: '/codcentralstudio',
  integrations: [tailwind(), react()],
  build: {
    format: 'file',
  },
  trailingSlash: 'never',
  vite: {
    build: {
      rollupOptions: {},
    },
  },
});
