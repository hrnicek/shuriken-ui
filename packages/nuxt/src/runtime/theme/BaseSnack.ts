import type { BaseSnackConfig, BaseSnackProps } from '@shuriken-ui/nuxt'

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
  default: 'bg-tag-default-bg/10 text-tag-default-text ring-1 ring-inset ring-tag-default-border/20',
  muted: 'bg-tag-muted-bg/10 text-tag-muted-text ring-1 ring-inset ring-tag-muted-border/20',
  primary: 'bg-primary-light/10 text-primary-base dark:text-primary-light ring-1 ring-inset ring-primary-light/20',
  dark: 'bg-tag-dark-bg/10 text-tag-dark-text ring-1 ring-inset ring-tag-dark-border/20',
  none: '',
} as const satisfies Record<NonNullable<BaseSnackProps['variant']>, string>

export const defaults = {
  variant: 'default',
  size: 'md',
} as const satisfies BaseSnackConfig
