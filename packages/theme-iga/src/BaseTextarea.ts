import type { BaseTextareaConfig, BaseTextareaProps } from "@shuriken-ui/nuxt"

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const satisfies Record<NonNullable<BaseTextareaProps['rounded']>, string>

export const variants = {
  default: 'bg-input-default-bg border-input-default-border border text-input-default-text placeholder:text-input-default-placeholder',
  muted: 'bg-input-muted-bg border-input-muted-border border text-input-muted-text placeholder:text-input-muted-placeholder',
} as const satisfies Record<NonNullable<BaseTextareaProps['variant']>, string>

export const defaults = {
  variant: 'default',
  rounded: 'md',
} as const satisfies BaseTextareaConfig
