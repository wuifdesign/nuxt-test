// https://nuxt.com/docs/api/configuration/nuxt-config
import defineCollection from '@nuxt/content';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image'],
  nitro: {
    preset: 'cloudflare_module',
  },
})
