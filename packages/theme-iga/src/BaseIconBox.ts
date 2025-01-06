import type { BaseIconBoxConfig, BaseIconBoxProps } from "@shuriken-ui/nuxt"

export const variants = {
  'default': 'text-muted-600 dark:text-muted-200 bg-white dark:bg-muted-800 border border-muted-300 dark:border-muted-700',
  'muted': 'text-muted-600 dark:text-muted-200 bg-muted-100 dark:bg-muted-800 border border-muted-100 dark:border-muted-800',
  'primary': 'text-primary-invert bg-primary-base',
  'dark': 'text-white bg-muted-900 dark:bg-white dark:text-muted-900',
  'none': '',
} as const satisfies Record<NonNullable<BaseIconBoxProps['variant']>, string>

export const sizes = {
  'xs': 'size-8',
  'sm': 'size-10',
  'md': 'size-12',
  'lg': 'size-16',
  'xl': 'size-20',
  '2xl': 'size-24',
} as const satisfies Record<NonNullable<BaseIconBoxProps['size']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseIconBoxProps['rounded']>, string>

export const masks = {
  hex: 'nui-mask nui-mask-hex',
  hexed: 'nui-mask nui-mask-hexed',
  deca: 'nui-mask nui-mask-deca',
  blob: 'nui-mask nui-mask-blob',
  diamond: 'nui-mask nui-mask-diamond',
} as const satisfies Record<NonNullable<BaseIconBoxProps['mask']>, string>

export const defaults = {
  variant: 'default',
  size: 'xs',
  rounded: 'sm',
} as const satisfies BaseIconBoxConfig
