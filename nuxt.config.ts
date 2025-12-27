// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/mdc'],
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL,
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en', name: 'English', file: 'en.json' },
      { code: 'nl', language: 'nl', name: 'Nederlands', file: 'nl.json' },
      { code: 'de', language: 'de', name: 'German', file: 'de.json' }
    ],
  },
  routeRules: {
    '/about': { swr: 5 },
  },
  nitro: {
    preset: 'cloudflare_pages',
    cloudflare: {
      deployConfig: true,
      wrangler: {
        kv_namespaces: [
          {
            binding: 'MY_KV',
            id: 'b63b8618d8934195af9da658c655c5fc'
          }
        ],
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
