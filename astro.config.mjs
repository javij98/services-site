// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// https://astro.build/config
export default defineConfig({
  site: (() => {
    const mode = process.env.NODE_ENV ?? 'development';
    const env = loadEnv(mode, process.cwd(), '');
    return (env.PUBLIC_SERVICES_URL ?? '').replace(/\/$/, '') || 'https://services.example.com';
  })(),
  integrations: [sitemap()],
});
