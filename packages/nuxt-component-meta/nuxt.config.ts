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
      (component: any) => {
        const isExternal = !component.filePath?.startsWith?.(componentsPath)
        const isIcon = component?.kebabName?.startsWith('icon-')

        return isExternal || isIcon
      },
    ],
    checkerOptions: {
      schema: {
        ignore: ['KeyboardEvent'],
      },
    },
  },
})