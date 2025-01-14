import type { BaseInputNumberConfig, BaseInputNumberProps } from "@shuriken-ui/nuxt"

export const variants = {
  default: 'bg-input-default-bg border-input-default-border border',
  muted: 'bg-input-muted-bg border-input-muted-border border',
} as const  satisfies Record<NonNullable<BaseInputNumberProps['variant']>, string>

export const inputVariants = {
  default: 'text-input-default-text placeholder:text-input-default-placeholder',
  muted: 'text-input-muted-text placeholder:text-input-muted-placeholder',
} as const  satisfies Record<NonNullable<BaseInputNumberProps['variant']>, string>

export const sizes = {
  sm: 'h-8 text-xs',
  md: 'h-10 text-sm',
  lg: 'h-12 text-sm',
  xl: 'h-14 text-base',
} as const  satisfies Record<NonNullable<BaseInputNumberProps['size']>, string>


export const spacings = {
  sm: 'px-2 max-w-[calc(100%_-_4rem)]',
  md: 'px-3 max-w-[calc(100%_-_5rem)]',
  lg: 'px-4 max-w-[calc(100%_-_6rem)]',
  xl: 'px-4 max-w-[calc(100%_-_7rem)]',
} as const satisfies Record<NonNullable<BaseInputNumberProps['size']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const satisfies Record<NonNullable<BaseInputNumberProps['rounded']>, string>

export const buttonSizes = {
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
  xl: 'size-14',
} as const satisfies Record<NonNullable<BaseInputNumberProps['size']>, string>

export const buttonVariants = {
  default: 'text-input-default-button-text bg-input-default-button-bg group-data-[pressed]/button:bg-input-default-button-bg-active',
  muted: 'text-input-muted-button-text bg-input-muted-button-bg group-data-[pressed]/button:bg-input-muted-button-bg-active',
} as const satisfies Record<NonNullable<BaseInputNumberProps['variant']>, string>

export const defaults = {
  variant: 'default',
  rounded: 'md',
  size: 'md',
} as const satisfies BaseInputNumberConfig
