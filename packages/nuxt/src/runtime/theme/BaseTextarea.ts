import type { BaseTextareaConfig, BaseTextareaProps } from '@shuriken-ui/nuxt'

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const satisfies Record<NonNullable<BaseTextareaProps['rounded']>, string>

export const sizes = {
  sm: 'min-h-8 text-xs px-2 py-2',
  md: 'min-h-10 text-sm px-3 py-2',
  lg: 'min-h-12 text-sm px-4 py-[calc(var(--spacing)*3.25)]',
  xl: 'min-h-14 text-base px-4 py-[calc(var(--spacing)*3.75)]',
} as const satisfies Record<NonNullable<BaseTextareaProps['size']>, string>

export const variants = {
  default: 'bg-input-default-bg border-input-default-border border text-input-default-text placeholder:text-input-default-placeholder',
  muted: 'bg-input-muted-bg border-input-muted-border border text-input-muted-text placeholder:text-input-muted-placeholder',
} as const satisfies Record<NonNullable<BaseTextareaProps['variant']>, string>

export const defaults = {
  variant: 'default',
  rounded: 'md',
  size: 'md',
} as const satisfies BaseTextareaConfig
