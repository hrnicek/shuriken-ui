
import { createResolver, defineNuxtModule, addComponentsDir, addImportsDir, installModule, hasNuxtModule, addVitePlugin, addTemplate } from '@nuxt/kit'
import tailwindcss from '@tailwindcss/vite'
import defu from 'defu'

export * from './runtime/types'

export interface ModuleOptions {
  /**
   * Prefix for components
   * @default `Base`
   */
  prefix?: string

  /**
   * Theme for the app
   * @default `@shuriken-ui/theme-iga`
   */
  theme?: '@shuriken-ui/theme-iga' | '@shuriken-ui/theme-koga' | ({} & string) 
}

const defaultAppConfig = {
  icon: {
    sun: 'nui-icon:sun',
    moon: 'nui-icon:moon',
    screen: 'nui-icon:screen-duotone',
    spiner: 'nui-icon:spiner',
    required: 'lucide:asterisk',
    alert: 'lucide:alert-octagon',
    close: 'lucide:x',
    check: 'lucide:check',
    plus: 'lucide:plus',
    minus: 'lucide:minus',
    chevronUp: 'lucide:chevron-up',
    chevronDown: 'lucide:chevron-down',
    chevronLeft: 'lucide:chevron-left',
    chevronRight: 'lucide:chevron-right',
    empty: '',
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'shuriken-ui',
    configKey: 'nui',
    compatibility: {
      nuxt: '>=3.14.0'
    },
  },
  defaults: {
    prefix: 'Base',
    theme: '@shuriken-ui/theme-iga',
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.appConfig.nui = defu(nuxt.options.appConfig.nui || {}, defaultAppConfig)

    addVitePlugin(tailwindcss())
    
    async function registerModule(name: string, options: Record<string, any>) {
      if (!hasNuxtModule(name)) {
        await installModule(name, options)
      } else {
        (nuxt.options as any)[name] = defu((nuxt.options as any)[name], options)
      }
    }

    await registerModule('reka-ui/nuxt', {})
    await registerModule('@vueuse/nuxt', {})
    await registerModule('@nuxtjs/color-mode', {
      classSuffix: '',
    })
    await registerModule('@nuxt/icon', {
      cssLayer: 'components',
      customCollections: [
        {
          prefix: 'nui-icon',
          dir: resolve('./runtime/icons'),
        },
      ],
    })

    addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: options.prefix,
      pathPrefix: false
    })

    addImportsDir(resolve('./runtime/composables'))

    addTemplate({
      filename: 'shuriken-ui/theme.ts',
      write: true,
      getContents: () => {
        return `export * from '${options.theme}'`
      }
    })
  },
})