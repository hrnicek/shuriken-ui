import type { BasePaginationConfig, BasePaginationProps } from "@shuriken-ui/types"

export const sizes = {
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
} as const  satisfies Record<NonNullable<BasePaginationProps['size']>, string>

export const heights = {
  sm: 'h-8 px-3',
  md: 'h-10 px-4',
  lg: 'h-12 px-5',
} as const  satisfies Record<NonNullable<BasePaginationProps['size']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-lg sm:rounded-full',
} as const satisfies Record<NonNullable<BasePaginationProps['rounded']>, string>

export const variants = {
  primary: 'p-1 bg-muted-100 dark:bg-muted-950 border border-muted-200 dark:border-muted-800',
  dark: 'p-1 bg-muted-100 dark:bg-muted-950 border border-muted-200 dark:border-muted-800'
} as const satisfies Record<NonNullable<BasePaginationProps['variant']>, string>

export const itemVariants = {
  primary: 'bg-white focus-visible:data-selected:ring-primary-500 hover:enabled:bg-muted-50 dark:bg-muted-900 dark:hover:enabled:bg-muted-800/80 border-muted-200 dark:border-muted-800 data-selected:!bg-primary-base data-selected:!text-primary-invert',
  dark: 'bg-white focus-visible:data-selected:ring-muted-700 dark:focus-visible:data-selected:ring-muted-200 hover:enabled:bg-muted-50 dark:bg-muted-900 dark:hover:enabled:bg-muted-800/80 border-muted-200 dark:border-muted-700 data-selected:!bg-muted-900 data-selected:!text-white dark:data-selected:!bg-white dark:data-selected:!text-muted-900'
} as const satisfies Record<NonNullable<BasePaginationProps['variant']>, string>

export const ellipsisVariants = {
  primary: 'bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800',
  dark: 'bg-white hover:bg-muted-50 dark:bg-muted-900 border border-muted-200 dark:border-muted-700'
} as const satisfies Record<NonNullable<BasePaginationProps['variant']>, string>

export const buttonVariants = {
  primary: 'bg-white hover:enabled:bg-muted-50 dark:bg-muted-900 dark:hover:enabled:bg-muted-800/80 border-muted-200 dark:border-muted-800',
  dark: 'bg-white hover:enabled:bg-muted-50 dark:bg-muted-900 dark:hover:enabled:bg-muted-800/80 border-muted-200 dark:border-muted-700',
} as const satisfies Record<NonNullable<BasePaginationProps['variant']>, string>

export const defaults = {
  /**
   * The variant of the pagination.
   */
  variant: 'primary',
  /**
   * The size of the pagination.
   */
  size: 'md',
  /**
   * The radius of the pagination.
   */
  rounded: 'sm',
  /**
   * Wether the pagination is wrapped.
   */
  wrapped: true,
} as const satisfies BasePaginationConfig
