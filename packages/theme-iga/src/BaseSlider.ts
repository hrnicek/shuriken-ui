import type { BaseSliderConfig, BaseSliderProps } from '@shuriken-ui/nuxt'

export const trackVariants = {
  'primary': 'bg-muted-200 dark:bg-muted-900',
  'dark': 'bg-muted-200 dark:bg-muted-900',
  'none': 'bg-muted-200 dark:bg-muted-900',
} as const satisfies Record<NonNullable<BaseSliderProps['variant']>, string>

export const rangeVariants = {
  'primary': 'bg-primary-base',
  'dark': 'bg-muted-900 dark:bg-muted-100',
  'none': 'bg-current',
} as const satisfies Record<NonNullable<BaseSliderProps['variant']>, string>

export const thumbVariants = {
  'primary': 'bg-white dark:bg-muted-700 hover:bg-muted-50 dark:hover:bg-muted-600 ring-1 ring-muted-900/10 shadow-sm focus:outline-none focus:ring-primary-500',
  'dark': 'bg-white dark:bg-muted-700 hover:bg-muted-50 dark:hover:bg-muted-600 ring-1 ring-muted-900/10 shadow-sm focus:outline-none focus:ring-muted-900',
  'none': 'bg-white dark:bg-muted-700 hover:bg-muted-50 dark:hover:bg-muted-600 ring-1 ring-muted-900/10 shadow-sm focus:outline-none focus:ring-current',
} as const satisfies Record<NonNullable<BaseSliderProps['variant']>, string>

export const defaults = {
  variant: 'primary',
} as const satisfies BaseSliderConfig
