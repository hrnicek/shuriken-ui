import type { BaseInputConfig, BaseInputProps } from "@shuriken-ui/nuxt"

export const variants = {
  default: 'bg-input-default-bg border-input-default-border border text-input-default-text placeholder:text-input-default-placeholder',
  muted: 'bg-input-muted-bg border-input-muted-border border text-input-muted-text placeholder:text-input-muted-placeholder',
} as const satisfies Record<NonNullable<BaseInputProps['variant']>, string>

export const sizes = {
  sm: 'h-8 text-xs px-2',
  md: 'h-10 text-sm px-3',
  lg: 'h-12 text-sm px-4',
  xl: 'h-14 text-base px-4',
} as const satisfies Record<NonNullable<BaseInputProps['size']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const satisfies Record<NonNullable<BaseInputProps['rounded']>, string>

export const defaults = {
  variant: 'default',
  rounded: 'md',
  size: 'md',
} as const satisfies BaseInputConfig
