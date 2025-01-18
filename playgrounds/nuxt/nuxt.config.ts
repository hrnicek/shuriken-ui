export default defineNuxtConfig({
  compatibilityDate: '2025-01-18',
  modules: ['@shuriken-ui/nuxt'],
  css: ['~/assets/tailwind.css'],

  vite: {
    build: {
      minify: false,
    },
  },
})
