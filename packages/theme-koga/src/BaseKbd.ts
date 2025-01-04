import type { BaseKbdConfig, BaseKbdProps } from "@shuriken-ui/types"

export const sizes = {
  sm: 'min-h-[18px] px-1 text-xs',
  md: 'min-h-[30px] py-1 px-1.5 text-sm',
  lg: 'min-h-[42px] py-1.5 px-2 text-lg',
} as const satisfies Record<NonNullable<BaseKbdProps['size']>, string>

export const variants = {
  'default': 'bg-white border border-muted-200 text-muted-800 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] dark:bg-muted-700 dark:border-muted-600 dark:text-muted-200 dark:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)]',
  'muted': 'bg-muted-200 border border-transparent text-muted-800 dark:bg-muted-700 dark:text-muted-200',
  'none': '',
} as const satisfies Record<NonNullable<BaseKbdProps['variant']>, string>

export const defaults = {
  variant: 'default',
  size: 'md',
} as const satisfies BaseKbdConfig
