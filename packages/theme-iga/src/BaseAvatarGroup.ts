import type { BaseAvatarGroupConfig, BaseAvatarGroupProps } from '@shuriken-ui/nuxt'

export { sizes, radiuses } from './BaseAvatar'

export const spacings = {
  'xxs': '-ms-2 hover:-ms-3 hover:me-2 focus:-ms-3 focus:me-2 first:hover:-ms-3 first:hover:me-2 first:focus:-ms-3 first:focus:me-2',
  'xs': '-ms-2 hover:-ms-4 hover:me-2 focus:-ms-4 focus:me-2 first:hover:-ms-2 first:hover:me-2 first:focus:-ms-2 first:focus:me-2',
  'sm': '-ms-3 hover:-ms-5 hover:me-2 focus:-ms-5 focus:me-2 first:hover:-ms-2 first:hover:me-2 first:focus:-ms-2 first:focus:me-2',
  'md': '-ms-4 hover:-ms-7 hover:me-3 focus:-ms-3 first:hover:-ms-3 first:hover:me-3 first:focus:-ms-3 first:focus:me-3',
  'lg': '-ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4 first:hover:-ms-4 first:first:hover:me-4 first:focus:me-4',
  'xl': '-ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4 first:hover:-ms-4 first:hover:me-4 first:focus:me-4',
  '2xl': '-ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4 first:hover:-ms-4 first:hover:me-4 first:focus:me-4',
  '3xl': '-ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4 first:hover:-ms-4 first:hover:me-4 first:focus:me-4',
  '4xl': '-ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4 first:hover:-ms-4 first:hover:me-4 first:focus:me-4',
} as const satisfies Record<NonNullable<BaseAvatarGroupProps['size']>, string>

export const counters = {
  'xxs': 'not-first:-ms-2 text-xs',
  'xs': 'not-first:-ms-2 text-sm',
  'sm': 'not-first:-ms-3 text-sm',
  'md': 'not-first:-ms-4 text-lg',
  'lg': 'not-first:-ms-5 text-xl',
  'xl': 'not-first:-ms-5 text-xl',
  '2xl': 'not-first:-ms-5 text-xl',
  '3xl': 'not-first:-ms-5 text-xl',
  '4xl': 'not-first:-ms-5 text-xl',
} as const satisfies Record<NonNullable<BaseAvatarGroupProps['size']>, string>

export const defaults = {
  limit: 4,
  size: 'sm',
  rounded: 'full',
} as const satisfies BaseAvatarGroupConfig