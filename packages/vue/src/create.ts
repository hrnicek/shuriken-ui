import * as comps from './components'

export interface ShurikenUIOptions {
  prefix?: string
  config?: Record<string, any>
}

export const defaultConfig = {
  icon: {
    sun: 'nui-icon:sun',
    moon: 'nui-icon:moon',
    screen: 'nui-icon:screen-duotone',
    spiner: 'nui-icon:spiner',
    required: 'lucide:asterisk',
    ellipsis: 'lucide:ellipsis',
    alert: 'lucide:alert-octagon',
    close: 'lucide:x',
    check: 'lucide:check',
    plus: 'lucide:plus',
    minus: 'lucide:minus',
    chevronUp: 'lucide:chevron-up',
    chevronDown: 'lucide:chevron-down',
    chevronLeft: 'lucide:chevron-left',
    chevronFirst: 'lucide:chevron-first',
    chevronRight: 'lucide:chevron-right',
    chevronLast: 'lucide:chevron-last',
  },
}

export const nuiConfigSymbol = Symbol('nui-config')

export function createShurikenUI(options: ShurikenUIOptions = {}) {
  return {
    install(app: import('vue').App) {
      const prefix = options.prefix ?? 'Base'
      const config = Object.assign({}, defaultConfig, options.config)
      app.provide(nuiConfigSymbol, config)
      for (const [name, comp] of Object.entries(comps)) {
        app.component(`${prefix}${name}`, comp as any)
      }
    },
  } as import('vue').Plugin
}

export default createShurikenUI
