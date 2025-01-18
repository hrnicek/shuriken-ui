import type { BaseProgressCircleConfig, BaseProgressCircleProps } from '@shuriken-ui/nuxt'

export const variants = {
  default: 'text-track-default-bg-active',
  primary: 'text-primary-base',
  dark: 'text-track-dark-bg-active',
  none: '',
} as const satisfies Record<NonNullable<BaseProgressCircleProps['variant']>, string>

export const trackVariants = {
  default: 'text-track-default-bg',
  primary: 'text-track-default-bg',
  dark: 'text-track-dark-bg',
  none: '',
} as const satisfies Record<NonNullable<BaseProgressCircleProps['variant']>, string>

export const defaults = {
  variant: 'default',
} as const satisfies BaseProgressCircleConfig
