import type { BaseSliderConfig, BaseSliderProps } from '@shuriken-ui/nuxt'

export const trackVariants = {
  default: 'bg-track-default-bg',
  primary: 'bg-track-default-bg',
  dark: 'bg-track-dark-bg',
  none: 'bg-track-dark-bg',
} as const satisfies Record<NonNullable<BaseSliderProps['variant']>, string>

export const rangeVariants = {
  default: 'bg-track-default-bg-active',
  primary: 'bg-primary-base',
  dark: 'bg-track-dark-bg-active',
  none: 'bg-current',
} as const satisfies Record<NonNullable<BaseSliderProps['variant']>, string>

export const thumbVariants = {
  default: 'bg-track-default-handle-bg ring-1 ring-track-default-handle-border shadow-sm focus:outline-none focus:ring-track-default-handle-ring',
  primary: 'bg-track-default-handle-bg ring-1 ring-track-default-handle-border shadow-sm focus:outline-none focus:ring-primary-base',
  dark: 'bg-track-dark-handle-bg ring-1 ring-track-dark-handle-border shadow-sm focus:outline-none focus:ring-track-dark-handle-ring',
  none: 'bg-track-default-handle-bg ring-1 ring-track-default-handle-border shadow-sm focus:outline-none focus:ring-current',
} as const satisfies Record<NonNullable<BaseSliderProps['variant']>, string>

export const defaults = {
  variant: 'default',
} as const satisfies BaseSliderConfig
