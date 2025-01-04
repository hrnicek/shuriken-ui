import type { BaseDropdownConfig, BaseDropdownProps } from "@shuriken-ui/types"

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-lg',
} as const satisfies Record<NonNullable<BaseDropdownProps['rounded']>, string>

export const variants = {
  'default': 'border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950',
  'muted': 'border border-muted-200 dark:border-muted-800 bg-muted-50 dark:bg-muted-950',
  'primary': 'border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950',
  'none': '',
} as const satisfies Record<NonNullable<BaseDropdownProps['variant']>, string>

export const defaults = {
  variant: 'default',
  rounded: 'md',
} as const satisfies BaseDropdownConfig
