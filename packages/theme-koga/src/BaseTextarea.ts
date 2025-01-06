import type { BaseTextareaConfig, BaseTextareaProps } from "@shuriken-ui/nuxt"

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const satisfies Record<NonNullable<BaseTextareaProps['rounded']>, string>

export const sizes = {
  sm: 'nui-textarea-sm',
  md: 'nui-textarea-md',
  lg: 'nui-textarea-lg',
} as const satisfies Record<NonNullable<BaseTextareaProps['size']>, string>

export const variants = {
  default: 'bg-white dark:bg-muted-800 border-muted-300 dark:border-muted-700 border text-muted-600 dark:text-muted-200 placeholder:text-muted-300 dark:placeholder:text-muted-600',
  muted: 'bg-muted-50 dark:bg-muted-800 border-muted-300 dark:border-muted-700 border text-muted-600 dark:text-muted-200 placeholder:text-muted-300 dark:placeholder:text-muted-600',
} as const satisfies Record<NonNullable<BaseTextareaProps['variant']>, string>

export const defaults = {
  variant: 'default',
  rounded: 'md',
  size: 'md',
} as const satisfies BaseTextareaConfig
