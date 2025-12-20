// https://nuxt.com/docs/api/configuration/nuxt-config
import defineCollection from '@nuxt/content';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxthub/core'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
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
  hub: {
    cache: {
      driver: 'cloudflare-kv-binding',
      namespaceId: 'b63b8618d8934195af9da658c655c5fc'
    }
  }
})
