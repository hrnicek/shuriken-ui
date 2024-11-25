// import exposeColors from './tailwind/plugin-expose-colors'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-25',
  future: {
    compatibilityVersion: 4,
  },
  // ssr: false,
  extends: ['@shuriken-ui/nuxt'],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@vueuse/nuxt',
  ],
  css: ['~/assets/tailwind.css'],
  content: {
    build: {
      markdown: {
        toc: { depth: 4, searchDepth: 4 },
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
          }
        }
      }
    },
    renderer: {
      anchorLinks: true,
    },
  },
})
