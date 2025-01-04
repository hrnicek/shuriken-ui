import type { BaseCardConfig, BaseCardProps } from "@shuriken-ui/types"

export const radiuses = {
  none: '',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
} as const satisfies Record<NonNullable<BaseCardProps['rounded']>, string>

export const variants = {
  'default': 'border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800',
  'muted': 'border border-muted-200 dark:border-muted-800 bg-muted-100 dark:bg-muted-950',
  'none': '',
} as const satisfies Record<NonNullable<BaseCardProps['variant']>, string>

export const shadows = {
  static: 'shadow-muted-300/30 dark:shadow-muted-800/30 shadow-xl',
  hover: 'hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl',
} as const  satisfies Record<NonNullable<BaseCardProps['shadow']>, string>

export const defaults = {
  variant: 'default',
  rounded: 'sm',
} as const satisfies BaseCardConfig
