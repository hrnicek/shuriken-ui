import type { BaseTagConfig, BaseTagProps } from "@shuriken-ui/types"

export const variants = {
  'default': 'bg-white/10 dark:bg-muted-200/10 text-muted-400 dark:text-muted-200 ring-1 ring-inset ring-muted-400/30 dark:ring-muted-200/20',
  'muted': 'bg-muted-400/10 dark:bg-muted-200/10 text-muted-400 dark:text-muted-200 ring-1 ring-inset ring-muted-400/20 dark:ring-muted-200/20',
  'primary': 'bg-primary-400/10 text-primary-400 ring-1 ring-inset ring-primary-400/20',
  'none': ''
} as const satisfies Record<NonNullable<BaseTagProps['variant']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseTagProps['rounded']>, string>

export const sizes = {
  sm: 'px-2 py-1',
  md: 'px-3 py-1.5',
  lg: 'px-3.5 py-2',
} as const satisfies Record<NonNullable<BaseTagProps['size']>, string>

export const defaults = {
  variant: 'default',
  size: 'sm',
  rounded: 'full',
} as const satisfies BaseTagConfig
