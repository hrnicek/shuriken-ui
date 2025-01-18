import type { BaseAvatarConfig, BaseAvatarProps } from '@shuriken-ui/nuxt'

export const sizes = {
  'xxs': 'size-6',
  'xs': 'size-8',
  'sm': 'size-10',
  'md': 'size-12',
  'lg': 'size-16',
  'xl': 'size-20',
  '2xl': 'size-24',
  '3xl': 'size-28',
  '4xl': 'size-32',
} as const satisfies Record<NonNullable<BaseAvatarProps['size']>, string>

export const textSizes = {
  'xxs': 'text-xs',
  'xs': 'text-sm',
  'sm': 'text-sm',
  'md': 'text-sm',
  'lg': 'text-base',
  'xl': 'text-base',
  '2xl': 'text-xl',
  '3xl': 'text-2xl',
  '4xl': 'text-3xl',
} as const satisfies Record<NonNullable<BaseAvatarProps['size']>, string>

export const badgeSize = {
  'xxs': 'h-3 w-3',
  'xs': 'h-4 w-4',
  'sm': 'h-5 w-5',
  'md': 'h-5 w-5',
  'lg': 'h-6 w-6',
  'xl': 'h-8 w-8',
  '2xl': 'h-10 w-10',
  '3xl': 'h-10 w-10',
  '4xl': 'h-12 w-12',
} as const satisfies Record<NonNullable<BaseAvatarProps['size']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseAvatarProps['rounded']>, string>

export const masks = {
  hex: 'nui-mask-hex',
  hexed: 'nui-mask-hexed',
  deca: 'nui-mask-deca',
  blob: 'nui-mask-blob',
  diamond: 'nui-mask-diamond',
} as const satisfies Record<NonNullable<BaseAvatarProps['mask']>, string>

export const defaults = {
  rounded: 'full',
  size: 'sm',
} as const satisfies BaseAvatarConfig
