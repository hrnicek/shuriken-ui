import type { BaseSnackConfig, BaseSnackProps } from "@shuriken-ui/nuxt"

export const sizes = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
} as const satisfies Record<NonNullable<BaseSnackProps['size']>, string>

export const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-sm',
} as const satisfies Record<NonNullable<BaseSnackProps['size']>, string>

export const wrapperSizes = {
  xs: 'size-6',
  sm: 'size-8',
  md: 'size-10',
} as const satisfies Record<NonNullable<BaseSnackProps['size']>, string>

export const spacings = {
  xs: '!ps-2',
  sm: '!ps-3',
  md: '!ps-4',
} as const satisfies Record<NonNullable<BaseSnackProps['size']>, string>

export const iconSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
} as const satisfies Record<NonNullable<BaseSnackProps['size']>, string>

export const variants = {
  'default': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
  'muted': 'bg-muted-200 dark:bg-muted-700',
} as const satisfies Record<NonNullable<BaseSnackProps['variant']>, string>

export const defaults = {
  variant: 'default',
  size: 'md',
} as const satisfies BaseSnackConfig
