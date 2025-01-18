export default defineNuxtConfig({
  compatibilityDate: '2025-01-18',
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@shuriken-ui/nuxt',
    '@nuxt/fonts',
  ],
  css: ['~/assets/tailwind.css'],

  nui: {
    theme: '@shuriken-ui/theme-iga',
  },

  vite: {
    build: {
      cssMinify: false,
    },
  },
})
