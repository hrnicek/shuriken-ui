import type { BaseProgressConfig, BaseProgressProps } from "@shuriken-ui/nuxt"

export const variants = {
  default: 'bg-track-default-bg-active',
  primary: 'bg-primary-base',
  dark: 'bg-track-dark-bg-active',
  none: '',
} as const satisfies Record<NonNullable<BaseProgressProps['variant']>, string>

export const trackVariants = {
  default: 'bg-track-default-bg',
  primary: 'bg-track-default-bg',
  dark: 'bg-track-dark-bg',
  none: '',
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
  variant: 'default',
  rounded: 'full',
  size: 'sm',
} as const satisfies BaseProgressConfig
