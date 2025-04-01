export default defineNuxtConfig({
  // ssr: false,
  modules: [
    'reka-ui/nuxt',
    '@shuriken-ui/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    'nuxt-component-meta',
    '@nuxt/eslint',
    'nuxt-llms',
  ],
  css: ['~/assets/css/main.css'],
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
  llms: {
    domain: 'https://v4.shurikenui.com',
    title: 'Shuriken UI Documentation',
    description: 'Shuriken UI is a modern, responsive, and accessible UI library for Nuxt.js, built with Tailwind CSS and Reka UI.',
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-01-18',
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
  vite: {
    optimizeDeps: {
      include: [
        'scule',
        'vue3-smooth-dnd',
        'vue3-apexcharts',
      ],
    },
  },
})
