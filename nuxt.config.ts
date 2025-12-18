// https://nuxt.com/docs/api/configuration/nuxt-config
import defineCollection from '@nuxt/content';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image'],
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      wrangler: {
        d1_databases: [
          {
            binding: 'DB',
            database_name: 'nuxt-test-db',
            database_id: 'd203a824-37f4-43a1-812e-8427154a73a2'
          }
        ]
      },
    },
  },
})
