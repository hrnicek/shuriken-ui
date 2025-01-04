import type { BaseMessageConfig, BaseMessageProps } from "@shuriken-ui/types"

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const satisfies Record<NonNullable<BaseMessageProps['rounded']>, string>

export const variants = {
  'default': 'border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950',
  'muted': 'border-muted-200 dark:border-muted-800 bg-muted-100 dark:bg-muted-950',
  'primary': 'border-primary-200 dark:border-primary-700 bg-primary-100 dark:bg-primary-500/10',
  'info': 'border-blue-200 dark:border-blue-700 bg-blue-100 dark:bg-blue-500/10',
  'success': 'border-green-200 dark:border-green-700 bg-green-100 dark:bg-green-500/10',
  'warning': 'border-amber-200 dark:border-amber-700 bg-amber-100 dark:bg-amber-500/10',
  'destructive': 'border-red-200 dark:border-red-700 bg-red-100 dark:bg-red-500/10',
} as const satisfies Record<NonNullable<BaseMessageProps['variant']>, string>

// @todo: low-contrast-theme
// export const variants = {
//   'default': 'border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800',
//   'muted': 'border-muted-200 dark:border-muted-700 bg-muted-100 dark:bg-muted-500/10',
//   'primary': 'border-primary-200 dark:border-primary-700 bg-primary-100 dark:bg-primary-500/10',
//   'info': 'border-blue-200 dark:border-blue-700 bg-blue-100 dark:bg-blue-500/10',
//   'success': 'border-green-200 dark:border-green-700 bg-green-100 dark:bg-green-500/10',
//   'warning': 'border-amber-200 dark:border-amber-700 bg-amber-100 dark:bg-amber-500/10',
//   'destructive': 'border-red-200 dark:border-red-700 bg-red-100 dark:bg-red-500/10',
// } as const satisfies Record<NonNullable<BaseMessageProps['variant']>, string>

export const textVariants = {
  'default': 'text-muted-500 dark:text-muted-400',
  'muted': 'text-muted-500 dark:text-muted-500',
  'primary': 'text-primary-800 dark:text-primary-200',
  'info': 'text-blue-800 dark:text-blue-200',
  'success': 'text-green-800 dark:text-green-200',
  'warning': 'text-amber-800 dark:text-amber-200',
  'destructive': 'text-red-800 dark:text-red-200',
} as const satisfies Record<NonNullable<BaseMessageProps['variant']>, string>

// @todo: low-contrast-theme
// export const textVariants = {
//   'default': 'text-muted-500 dark:text-muted-400',
//   'muted': 'text-muted-500 dark:text-muted-500',
//   'primary': 'text-primary-800 dark:text-primary-200',
//   'info': 'text-blue-800 dark:text-blue-200',
//   'success': 'text-green-800 dark:text-green-200',
//   'warning': 'text-amber-800 dark:text-amber-200',
//   'destructive': 'text-red-800 dark:text-red-200',
// } as const satisfies Record<NonNullable<BaseMessageProps['variant']>, string>

export const iconVariants = {
  'default': 'text-white dark:text-white bg-muted-600 dark:bg-muted-900',
  'muted': 'text-white dark:text-white bg-muted-400 dark:bg-muted-900',
  'primary': 'text-white dark:text-white bg-primary-base dark:bg-primary-light',
  'info': 'text-white dark:text-white bg-blue-500 dark:bg-blue-500',
  'success': 'text-white dark:text-white bg-green-500 dark:bg-green-500',
  'warning': 'text-white dark:text-white bg-amber-500 dark:bg-amber-500',
  'destructive': 'text-white dark:text-white bg-red-500 dark:bg-red-500',
} as const satisfies Record<NonNullable<BaseMessageProps['variant']>, string>

// @todo: low-contrast-theme
// export const iconVariants = {
//   'default': 'text-white dark:text-white bg-muted-600 dark:bg-muted-900',
//   'muted': 'text-white dark:text-white bg-muted-400 dark:bg-muted-900',
//   'primary': 'text-white dark:text-white bg-primary-500 dark:bg-primary-500',
//   'info': 'text-white dark:text-white bg-blue-500 dark:bg-blue-500',
//   'success': 'text-white dark:text-white bg-green-500 dark:bg-green-500',
//   'warning': 'text-white dark:text-white bg-amber-500 dark:bg-amber-500',
//   'destructive': 'text-white dark:text-white bg-red-500 dark:bg-red-500',
// } as const satisfies Record<NonNullable<BaseMessageProps['variant']>, string>

export const closeVariants = {
  'default': 'text-muted-500 dark:text-muted-500 hover:enabled:bg-muted-300/50 dark:hover:enabled:bg-muted-500/30 focus-visible:bg-muted-300/50 dark:focus-visible:bg-muted-500/30 active:enabled:bg-muted-300/20 dark:active:enabled:bg-muted-500/20',
  'muted': 'text-muted-500 dark:text-muted-500 hover:enabled:bg-muted-300/50 dark:hover:enabled:bg-muted-500/30 focus-visible:bg-muted-300/50 dark:focus-visible:bg-muted-500/30 active:enabled:bg-muted-300/20 dark:active:enabled:bg-muted-500/20',
  'primary': 'text-primary-500 dark:text-primary-500 hover:enabled:bg-primary-300/50 dark:hover:enabled:bg-primary-500/30 focus-visible:bg-primary-300/50 dark:focus-visible:bg-primary-500/30 active:enabled:bg-primary-300/20 dark:active:enabled:bg-primary-500/20',
  'info': 'text-blue-500 dark:text-blue-500 hover:enabled:bg-blue-300/50 dark:hover:enabled:bg-blue-500/30 focus-visible:bg-blue-300/50 dark:focus-visible:bg-blue-500/30 active:enabled:bg-blue-300/20 dark:active:enabled:bg-blue-500/20',
  'success': 'text-green-500 dark:text-green-500 hover:enabled:bg-green-300/50 dark:hover:enabled:bg-green-500/30 focus-visible:bg-green-300/50 dark:focus-visible:bg-green-500/30 active:enabled:bg-green-300/20 dark:active:enabled:bg-green-500/20',
  'warning': 'text-amber-500 dark:text-amber-500 hover:enabled:bg-amber-300/50 dark:hover:enabled:bg-amber-500/30 focus-visible:bg-amber-300/50 dark:focus-visible:bg-amber-500/30 active:enabled:bg-amber-300/20 dark:active:enabled:bg-amber-500/20',
  'destructive': 'text-red-500 dark:text-red-500 hover:enabled:bg-red-300/50 dark:hover:enabled:bg-red-500/30 focus-visible:bg-red-300/50 dark:focus-visible:bg-red-500/30 active:enabled:bg-red-300/20 dark:active:enabled:bg-red-500/20',
} as const satisfies Record<NonNullable<BaseMessageProps['variant']>, string>

// @todo: low-contrast-theme
// export const closeVariants = {
//   'default': 'text-muted-500 dark:text-muted-500 hover:enabled:bg-muted-300/50 dark:hover:enabled:bg-muted-500/30 focus-visible:bg-muted-300/50 dark:focus-visible:bg-muted-500/30 active:enabled:bg-muted-300/20 dark:active:enabled:bg-muted-500/20',
//   'muted': 'text-muted-500 dark:text-muted-500 hover:enabled:bg-muted-300/50 dark:hover:enabled:bg-muted-500/30 focus-visible:bg-muted-300/50 dark:focus-visible:bg-muted-500/30 active:enabled:bg-muted-300/20 dark:active:enabled:bg-muted-500/20',
//   'primary': 'text-primary-500 dark:text-primary-500 hover:enabled:bg-primary-300/50 dark:hover:enabled:bg-primary-500/30 focus-visible:bg-primary-300/50 dark:focus-visible:bg-primary-500/30 active:enabled:bg-primary-300/20 dark:active:enabled:bg-primary-500/20',
//   'info': 'text-blue-500 dark:text-blue-500 hover:enabled:bg-blue-300/50 dark:hover:enabled:bg-blue-500/30 focus-visible:bg-blue-300/50 dark:focus-visible:bg-blue-500/30 active:enabled:bg-blue-300/20 dark:active:enabled:bg-blue-500/20',
//   'success': 'text-green-500 dark:text-green-500 hover:enabled:bg-green-300/50 dark:hover:enabled:bg-green-500/30 focus-visible:bg-green-300/50 dark:focus-visible:bg-green-500/30 active:enabled:bg-green-300/20 dark:active:enabled:bg-green-500/20',
//   'warning': 'text-amber-500 dark:text-amber-500 hover:enabled:bg-amber-300/50 dark:hover:enabled:bg-amber-500/30 focus-visible:bg-amber-300/50 dark:focus-visible:bg-amber-500/30 active:enabled:bg-amber-300/20 dark:active:enabled:bg-amber-500/20',
//   'destructive': 'text-red-500 dark:text-red-500 hover:enabled:bg-red-300/50 dark:hover:enabled:bg-red-500/30 focus-visible:bg-red-300/50 dark:focus-visible:bg-red-500/30 active:enabled:bg-red-300/20 dark:active:enabled:bg-red-500/20',
// } as const satisfies Record<NonNullable<BaseMessageProps['variant']>, string>

export const defaults = {
  variant: 'default',
  rounded: 'sm',
} as const satisfies BaseMessageConfig
