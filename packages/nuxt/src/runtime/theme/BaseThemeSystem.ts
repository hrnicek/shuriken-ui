import type { BaseThemeSystemConfig, BaseThemeSystemProps } from '@shuriken-ui/nuxt'

export const variants = {
  default: 'bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800',
} as const satisfies Record<NonNullable<BaseThemeSystemProps['variant']>, string>

export const trackVariants = {
  default: 'bg-muted-100 dark:bg-muted-800',
} as const satisfies Record<NonNullable<BaseThemeSystemProps['variant']>, string>

export const defaults = {
  variant: 'default',
  transitions: false,
} as const satisfies BaseThemeSystemConfig
