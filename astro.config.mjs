import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://portfolio.joshnliz.com',
  integrations: [react()],
  output: 'static',
});
