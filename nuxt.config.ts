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
    preset: 'cloudflare_pages',
  },
  hub: {
    cache: {
      driver: 'cloudflare-kv-binding',
      namespaceId: 'b63b8618d8934195af9da658c655c5fc'
    }
  }
})
