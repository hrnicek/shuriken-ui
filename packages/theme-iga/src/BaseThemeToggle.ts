import type { BaseThemeToggleConfig, BaseThemeToggleProps } from "@shuriken-ui/nuxt"

export const variants = {
  'default': 'bg-white dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
} as const satisfies Record<NonNullable<BaseThemeToggleProps['variant']>, string>

export const defaults = {
  variant: 'default',
  transitions: false,
} as const satisfies BaseThemeToggleConfig
