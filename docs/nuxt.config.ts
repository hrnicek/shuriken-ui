// import exposeColors from './tailwind/plugin-expose-colors'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-25',
  future: {
    compatibilityVersion: 4,
  },
  ssr: false,
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
    }
    // markdown: {
    //   anchorLinks: true,
    //   toc: { depth: 4, searchDepth: 4 },
    // },
    // highlight: {
    //   theme: {
    //     default: 'github-light',
    //     dark: 'github-dark',
    //   },
    // },
    // experimental: {
    //   search: {
    //     indexed: true,
    //     options: {
    //       fields: ['title', 'content', 'titles'],
    //       storeFields: ['title', 'content', 'titles'],
    //       searchOptions: {
    //         prefix: true,
    //         fuzzy: 0.2,
    //         boost: {
    //           title: 4,
    //           content: 2,
    //           titles: 1,
    //         },
    //       },
    //     },
    //   },
    // },
  },
})
