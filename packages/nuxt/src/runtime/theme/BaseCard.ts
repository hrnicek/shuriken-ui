import type { BaseCardConfig, BaseCardProps } from '@shuriken-ui/nuxt'

export const radiuses = {
  none: '',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
} as const satisfies Record<NonNullable<BaseCardProps['rounded']>, string>

export const variants = {
  default: 'border border-card-default-border bg-card-default-bg',
  muted: 'border border-card-muted-border bg-card-muted-bg',
  none: '',
} as const satisfies Record<NonNullable<BaseCardProps['variant']>, string>

export const defaults = {
  variant: 'default',
  rounded: 'sm',
} as const satisfies BaseCardConfig
