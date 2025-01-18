import type { BaseDropdownConfig, BaseDropdownProps } from '@shuriken-ui/nuxt'

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const satisfies Record<NonNullable<BaseDropdownProps['rounded']>, string>

export const variants = {
  default: 'bg-portal-default-bg border border-portal-default-border',
  muted: 'bg-portal-muted-bg border border-portal-muted-border',
  primary: 'bg-portal-default-bg border border-portal-default-border',
  none: '',
} as const satisfies Record<NonNullable<BaseDropdownProps['variant']>, string>

export const defaults = {
  variant: 'default',
  rounded: 'md',
} as const satisfies BaseDropdownConfig
