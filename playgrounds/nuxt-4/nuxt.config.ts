export default defineNuxtConfig({
  compatibilityDate: '2024-11-08',
  future: {
    compatibilityVersion: 4,
  },
  extends: ['@shuriken-ui/nuxt'],
  modules: [
    '@nuxt/fonts',
  ],
  css: ['~/assets/tailwind.css'],

  vite: {
    build: {
      cssMinify: false,
    },
  },
})
