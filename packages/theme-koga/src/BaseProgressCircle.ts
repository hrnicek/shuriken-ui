import type { BaseProgressCircleConfig, BaseProgressCircleProps } from "@shuriken-ui/types"

export const variants = {
  'primary': 'text-primary-base',
  'dark': 'text-muted-900 dark:text-muted-100',
  'none': '',
} as const satisfies Record<NonNullable<BaseProgressCircleProps['variant']>, string>

export const trackVariants = {
  'primary': 'text-muted-200 dark:text-muted-700',
  'dark': 'text-muted-200 dark:text-muted-700',
  'none': '',
} as const satisfies Record<NonNullable<BaseProgressCircleProps['variant']>, string>

export const defaults = {
  variant: 'primary',
} as const satisfies BaseProgressCircleConfig
