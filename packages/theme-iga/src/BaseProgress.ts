import type { BaseProgressConfig, BaseProgressProps } from "@shuriken-ui/types"

export const variants = {
  'primary': 'bg-primary-base',
  'dark': 'bg-muted-900 dark:bg-white',
  'none': '',
} as const satisfies Record<NonNullable<BaseProgressProps['variant']>, string>

export const trackVariants = {
  'primary': 'bg-muted-200 dark:bg-muted-900',
  'dark': 'bg-muted-200 dark:bg-muted-900',
  'none': '',
} as const satisfies Record<NonNullable<BaseProgressProps['variant']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseProgressProps['rounded']>, string>

export const sizes = {
  xs: 'h-1',
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4',
  xl: 'h-5',
} as const satisfies Record<NonNullable<BaseProgressProps['size']>, string>

export const defaults = {
  variant: 'primary',
  rounded: 'full',
  size: 'sm',
} as const satisfies BaseProgressConfig
