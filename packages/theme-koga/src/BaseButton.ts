
import type { BaseButtonConfig, BaseButtonProps } from '@shuriken-ui/nuxt'

export const sizes = {
  'sm': 'h-8 px-3 py-1 text-sm',
  'md': 'h-10 px-4 py-2 text-sm',
  'lg': 'h-12 px-6 py-2 text-base',
  'xl': 'h-14 px-10 py-4 text-base',
  'icon-sm': 'size-8 text-sm',
  'icon-md': 'size-10 text-sm',
  'icon-lg': 'size-12 text-base',
  'icon-xl': 'size-14 text-base',
} as const satisfies Record<NonNullable<BaseButtonProps['size']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseButtonProps['rounded']>, string>

export const variants = {
  'default': 'border border-muted-300 dark:border-muted-600 hover:enabled:border-muted-200 dark:hover:enabled:border-muted-500 text-muted-700 dark:text-muted-100 bg-white dark:bg-muted-700 hover:enabled:bg-muted-50 dark:hover:enabled:bg-muted-600 active:enabled:bg-white dark:active:enabled:bg-muted-700 focus-visible:bg-muted-50 dark:focus-visible:bg-muted-600 ',
  'muted': 'border border-muted-100 dark:border-muted-700 text-muted-500 dark:text-muted-100 bg-muted-100 dark:bg-muted-700 hover:enabled:bg-muted-50 dark:hover:enabled:bg-muted-600 active:enabled:bg-muted-100 dark:active:enabled:bg-muted-700 focus-visible:bg-muted-50 dark:focus-visible:bg-muted-600',
  'ghost': 'text-muted-600 dark:text-muted-100 hover:enabled:bg-muted-100 dark:hover:enabled:bg-muted-700 active:enabled:bg-muted-50 dark:active:enabled:bg-muted-600 focus-visible:bg-muted-100 dark:focus-visible:bg-muted-600',
  'primary': 'text-primary-invert dark:text-primary-invert bg-primary-base dark:bg-primary-base hover:enabled:bg-primary-light dark:hover:enabled:bg-primary-light active:enabled:bg-primary-base dark:active:enabled:bg-primary-base focus-visible:bg-primary-light dark:focus-visible:bg-primary-light',
  'destructive': 'text-destructive-invert dark:text-destructive-invert bg-destructive-base dark:bg-destructive-base hover:enabled:bg-destructive-light dark:hover:enabled:bg-destructive-light active:enabled:bg-destructive-base dark:active:enabled:bg-destructive-base focus-visible:bg-destructive-light dark:focus-visible:bg-destructive-light',
  'dark': 'text-muted-100 dark:text-muted-900 bg-muted-900 dark:bg-muted-100 hover:enabled:bg-muted-700 dark:hover:enabled:bg-muted-100 active:enabled:bg-muted-900 dark:active:enabled:bg-muted-50 focus-visible:bg-muted-800 dark:focus-visible:bg-muted-50 border border-muted-900 dark:border-muted-100 border-muted-800 dark:border-muted-50',
  'link': 'text-muted-600 dark:text-muted-100 hover:text-primary-500 dark:hover:text-primary-500 focus-visible:text-primary-500 dark:focus-visible:text-primary-500 hover:underline underline-offset-4',
  'none': '',
} as const satisfies Record<NonNullable<BaseButtonProps['variant']>, string>

export const defaults = {
  rounded: 'sm',
  size: 'sm',
  variant: 'primary'
} as const satisfies BaseButtonConfig
