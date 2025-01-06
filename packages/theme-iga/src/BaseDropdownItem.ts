import type { BaseDropdownItemConfig, BaseDropdownContext } from "@shuriken-ui/nuxt"

export { radiuses } from './BaseDropdown'
export const variants = {
  'default': 'hover:bg-muted-100 dark:hover:bg-muted-900',
  'muted': 'hover:bg-muted-200 dark:hover:bg-muted-900',
  'primary': 'hover:bg-primary-500/10 dark:hover:bg-primary-500/20',
  'none': '',
} as const satisfies Record<NonNullable<BaseDropdownContext['variant']>, string>

export const defaults = {
  variant: 'default',
  rounded: 'sm',
} as const satisfies BaseDropdownItemConfig
