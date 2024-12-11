import { createResolver } from '@nuxt/kit'
import tailwindcss from '@tailwindcss/vite'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    'reka-ui/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  colorMode: {
    classSuffix: '',
  },

  components: [
    {
      prefix: '',
      path: resolve('./app/components/base'),
      global: false,
    },
    {
      prefix: '',
      path: resolve('./app/components/icon'),
      global: false,
    },
    {
      prefix: '',
      path: resolve('./app/components/form'),
      global: false,
    },
  ],

  devtools: {
    enabled: false,
  },
})
