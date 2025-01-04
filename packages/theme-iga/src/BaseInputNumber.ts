import type { BaseInputNumberConfig, BaseInputNumberProps } from "@shuriken-ui/types"

export const variants = {
  default: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border',
  muted: 'bg-muted-50 dark:bg-muted-900 border-muted-300 dark:border-muted-800 border',
} as const  satisfies Record<NonNullable<BaseInputNumberProps['variant']>, string>

export const inputVariants = {
  default: 'text-muted-600 dark:text-muted-300 placeholder:text-muted-300 dark:placeholder:text-muted-700',
  muted: 'text-muted-600 dark:text-muted-300 placeholder:text-muted-300 dark:placeholder:text-muted-700',
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
  default: 'bg-muted-100 group-data-[pressed]/button:bg-muted-200 dark:bg-muted-800 dark:group-data-[pressed]/button:bg-muted-700',
  muted: 'bg-muted-200 group-data-[pressed]/button:bg-muted-300 dark:bg-muted-800 dark:group-data-[pressed]/button:bg-muted-700',
} as const satisfies Record<NonNullable<BaseInputNumberProps['variant']>, string>

export const defaults = {
  variant: 'default',
  rounded: 'md',
  size: 'md',
} as const satisfies BaseInputNumberConfig
