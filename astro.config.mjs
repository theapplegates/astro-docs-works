import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// httpss://astro.build/config
import image from "@astrojs/image";

// httpss://astro.build/config
export default defineConfig({
  integrations: [
  // Enable Preact to support Preact JSX components.
  preact(),
  // Enable React for the Algolia search component.
  react(), image({serviceEntryPoint: '@astrojs/image/sharp'})],
  site: `https://docsearch.paulapplegate.com`
});