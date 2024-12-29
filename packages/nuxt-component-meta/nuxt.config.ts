import { fileURLToPath } from 'node:url'
import { dirname, join } from 'pathe'

const componentsPath = join(
  dirname(fileURLToPath(import.meta.url)),
  '../nuxt/app/components',
)

export default defineNuxtConfig({
  compatibilityDate: '2024-11-08',
  extends: ['@shuriken-ui/nuxt'],
  modules: ['nuxt-component-meta'],
  componentMeta: {
    globalsOnly: false,
    debug: 2,
    exclude: [
      (component: any) => !component.filePath?.startsWith?.(componentsPath),
    ],
    checkerOptions: {
      schema: {
        ignore: ['KeyboardEvent'],
      },
    },
  },
})