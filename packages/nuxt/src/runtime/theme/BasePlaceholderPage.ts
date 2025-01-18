import type { BasePlaceholderPageConfig, BasePlaceholderPageProps } from '@shuriken-ui/nuxt'

export const sizes = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
} as const satisfies Record<NonNullable<BasePlaceholderPageProps['imageSize']>, string>

export const defaults = {
  imageSize: 'xs',
} as const satisfies BasePlaceholderPageConfig
