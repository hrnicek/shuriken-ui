export default defineNuxtConfig({
  compatibilityDate: '2024-11-08',
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@shuriken-ui/nuxt',
    '@nuxt/fonts',
  ],
  css: ['~/assets/tailwind.css'],

  vite: {
    build: {
      cssMinify: false,
    },
  },
})
