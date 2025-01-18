import type { BaseDropdownContext, BaseDropdownItemConfig } from '@shuriken-ui/nuxt'

export { radiuses } from './BaseDropdown'
export const variants = {
  default: 'hover:bg-portal-default-item-bg-active',
  muted: 'hover:bg-portal-muted-item-bg-active',
  primary: 'hover:bg-primary-base/10 dark:hover:bg-primary-base/20',
  none: '',
} as const satisfies Record<NonNullable<BaseDropdownContext['variant']>, string>

export const defaults = {
  variant: 'default',
  rounded: 'sm',
} as const satisfies BaseDropdownItemConfig
