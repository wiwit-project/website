// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Using fontsource https://docs.astro.build/en/guides/fonts/#using-fontsource
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'DM Sans',
      cssVariable: '--font-dm-sans',
      weights: [400, 500, 700],
      styles: ['normal'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'DM Mono',
      cssVariable: '--font-dm-mono',
      weights: [400, 500],
      styles: ['normal'],
    },
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});