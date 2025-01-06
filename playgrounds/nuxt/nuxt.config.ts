export default defineNuxtConfig({
  compatibilityDate: '2024-12-31',
  modules: ['@shuriken-ui/nuxt'],
  css: ['~/assets/tailwind.css'],

  vite: {
    build: {
      minify: false,
    },
  },
})
