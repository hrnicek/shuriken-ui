import type { BaseSwitchThinConfig, BaseSwitchThinProps } from "@shuriken-ui/nuxt"

export const trackVariants = {
  'default': 'peer-data-[state=checked]:bg-track-default-bg-active bg-track-default-bg',
  'primary': 'peer-data-[state=checked]:bg-primary-base dark:peer-data-[state=checked]:bg-primary-base bg-track-default-bg',
  'dark': 'peer-data-[state=checked]:bg-track-dark-bg-active bg-track-dark-bg',
  'none': '',
} as const satisfies Record<NonNullable<BaseSwitchThinProps['variant']>, string>

export const handleVariants = {
  'default': 'bg-track-default-handle-bg border border-track-default-handle-border',
  'primary': 'bg-track-default-handle-bg border border-track-default-handle-border',
  'dark': 'bg-track-dark-handle-bg border border-track-dark-handle-border',
  'none': '',
} as const satisfies Record<NonNullable<BaseSwitchThinProps['variant']>, string>

export const defaults = {
  variant: 'default',
} as const satisfies BaseSwitchThinConfig
