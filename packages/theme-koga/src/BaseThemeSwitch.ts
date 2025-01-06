import type { BaseThemeSwitchConfig, BaseThemeSwitchProps } from "@shuriken-ui/nuxt"

export const variants = {
  'default': 'bg-white dark:bg-muted-800 border border-muted-300 dark:border-muted-700',
} as const satisfies Record<NonNullable<BaseThemeSwitchProps['variant']>, string>

export const background = {
  'default': 'bg-muted-200 dark:bg-muted-700',
} as const satisfies Record<NonNullable<BaseThemeSwitchProps['variant']>, string>

export const defaults = {
  variant: 'default',
  disableTransitions: false
} as const satisfies BaseThemeSwitchConfig
