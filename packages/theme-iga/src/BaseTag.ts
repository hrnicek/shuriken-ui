import type { BaseTagConfig, BaseTagProps } from "@shuriken-ui/nuxt"

export const variants = {
  default: 'bg-tag-default-bg/10 text-tag-default-text ring-1 ring-inset ring-tag-default-border/20',
  muted: 'bg-tag-muted-bg/10 text-tag-muted-text ring-1 ring-inset ring-tag-muted-border/20',
  primary: 'bg-primary-light/10 text-primary-base dark:text-primary-light ring-1 ring-inset ring-primary-light/20',
  dark: 'bg-tag-dark-bg/10 text-tag-dark-text ring-1 ring-inset ring-tag-dark-border/20',
  none: ''
} as const satisfies Record<NonNullable<BaseTagProps['variant']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseTagProps['rounded']>, string>

export const sizes = {
  sm: 'px-2 py-1',
  md: 'px-3 py-1.5',
  lg: 'px-3.5 py-2',
} as const satisfies Record<NonNullable<BaseTagProps['size']>, string>

export const defaults = {
  variant: 'default',
  size: 'sm',
  rounded: 'full',
} as const satisfies BaseTagConfig
