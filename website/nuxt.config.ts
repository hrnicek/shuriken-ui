// import exposeColors from './tailwind/plugin-expose-colors'

export default defineNuxtConfig({
  // ssr: false,
  modules: [
    '@shuriken-ui/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    'nuxt-component-meta',
    '@nuxt/eslint',
  ],
  css: ['~/assets/tailwind.css'],
  content: {
    build: {
      markdown: {
        toc: { depth: 3, searchDepth: 3 },
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
          },
        },
      },
    },
    renderer: {
      anchorLinks: true,
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-25',
  componentMeta: {
    metaSources: ['@shuriken-ui/nuxt-component-meta'],
    exclude: [
      // Disable parsing components in the project, only use static ones.
      () => true,
    ],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
})
