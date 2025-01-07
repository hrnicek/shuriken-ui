import type { BaseSliderConfig, BaseSliderProps } from '@shuriken-ui/nuxt'

export const trackVariants = {
  'primary': 'bg-muted-200 dark:bg-muted-700',
  'dark': 'bg-muted-200 dark:bg-muted-700',
  'none': 'bg-muted-200 dark:bg-muted-700',
} as const satisfies Record<NonNullable<BaseSliderProps['variant']>, string>

export const rangeVariants = {
  'primary': 'bg-primary-base',
  'dark': 'bg-muted-900 dark:bg-muted-100',
  'none': 'bg-current',
} as const satisfies Record<NonNullable<BaseSliderProps['variant']>, string>

export const thumbVariants = {
  'primary': 'bg-white dark:bg-muted-900 hover:bg-muted-50 dark:hover:bg-muted-950 ring-1 ring-muted-900/10 dark:ring-muted-700 shadow-sm focus:outline-none focus:ring-primary-500 dark:focus:ring-primary-500',
  'dark': 'bg-white dark:bg-muted-900 hover:bg-muted-50 dark:hover:bg-muted-950 ring-1 ring-muted-900/10 dark:ring-muted-700 shadow-sm focus:outline-none focus:ring-muted-900 dark:focus:ring-muted-600',
  'none': 'bg-white dark:bg-muted-900 hover:bg-muted-50 dark:hover:bg-muted-950 ring-1 ring-muted-900/10 dark:ring-muted-700 shadow-sm focus:outline-none focus:ring-current dark:focus:ring-current',
} as const satisfies Record<NonNullable<BaseSliderProps['variant']>, string>

export const defaults = {
  variant: 'primary',
} as const satisfies BaseSliderConfig
