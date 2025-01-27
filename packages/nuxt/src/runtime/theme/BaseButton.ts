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
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseButtonProps['rounded']>, string>

export const variants = {
  default: 'border border-muted-300 dark:border-muted-800 hover:not-disabled:border-muted-200 dark:hover:not-disabled:border-muted-700 text-muted-800 dark:text-muted-100 bg-white dark:bg-muted-950 hover:not-disabled:bg-muted-50 dark:hover:not-disabled:bg-muted-900 active:not-disabled:bg-white dark:active:not-disabled:bg-muted-950 focus-visible:bg-muted-50 dark:focus-visible:bg-muted-900',
  muted: 'border border-muted-100 dark:border-muted-800 text-muted-500 dark:text-muted-100 bg-muted-100 dark:bg-muted-800 hover:not-disabled:bg-muted-50 dark:hover:not-disabled:bg-muted-700 active:not-disabled:bg-muted-100 dark:active:not-disabled:bg-muted-600 focus-visible:bg-muted-50 dark:focus-visible:bg-muted-700',
  ghost: 'text-muted-600 dark:text-muted-100 hover:not-disabled:bg-muted-100 dark:hover:not-disabled:bg-muted-800 active:not-disabled:bg-muted-50 dark:active:not-disabled:bg-muted-700 focus-visible:bg-muted-100 dark:focus-visible:bg-muted-800',
  primary: 'text-primary-invert dark:text-primary-invert bg-primary-base dark:bg-primary-base hover:not-disabled:bg-primary-light dark:hover:not-disabled:bg-primary-light active:not-disabled:bg-primary-base dark:active:not-disabled:bg-primary-base focus-visible:bg-primary-light dark:focus-visible:bg-primary-light',
  destructive: 'text-destructive-invert dark:text-destructive-invert bg-destructive-base dark:bg-destructive-base hover:not-disabled:bg-destructive-light dark:hover:not-disabled:bg-destructive-light active:not-disabled:bg-destructive-base dark:active:not-disabled:bg-destructive-base focus-visible:bg-destructive-light dark:focus-visible:bg-destructive-light',
  dark: 'text-muted-100 dark:text-muted-900 bg-muted-900 dark:bg-muted-100 hover:not-disabled:bg-muted-700 dark:hover:not-disabled:bg-muted-300 active:not-disabled:bg-muted-900 dark:active:not-disabled:bg-muted-50 focus-visible:bg-muted-800 dark:focus-visible:bg-muted-300 border border-muted-900 dark:border-muted-100 border-muted-800 dark:border-muted-50',
  link: 'text-muted-600 dark:text-muted-100 hover:not-disabled:text-primary-500 dark:hover:not-disabled:text-primary-500 focus-visible:text-primary-500 dark:focus-visible:text-primary-500 hover:not-disabled:underline underline-offset-4',
  none: '',
} as const satisfies Record<NonNullable<BaseButtonProps['variant']>, string>

export const defaults = {
  rounded: 'md',
  size: 'md',
  variant: 'default',
} as const satisfies BaseButtonConfig
