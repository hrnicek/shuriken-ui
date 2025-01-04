import type { BaseFullscreenDropfileConfig, BaseFullscreenDropfileProps } from "@shuriken-ui/types"

export const dropVariants = {
  default: 'bg-muted-100 dark:bg-muted-800 border-2 border-dashed border-muted-200 dark:border-muted-700',
  primary: 'bg-muted-100 dark:bg-muted-800 border-2 border-dashed border-muted-200 dark:border-muted-700',
  dark: 'bg-muted-100 dark:bg-muted-800 border-2 border-dashed border-muted-200 dark:border-muted-700',
} as const satisfies Record<NonNullable<BaseFullscreenDropfileProps['variant']>, string>

export const overlayVariants = {
  default: 'text-muted-500 dark:text-muted-400',
  primary: 'text-primary-base dark:text-primary-light',
  dark: 'text-muted-900 dark:text-muted-100',
} as const satisfies Record<NonNullable<BaseFullscreenDropfileProps['variant']>, string>

export const iconVariants = {
  default: 'text-muted-500 dark:text-muted-400',
  primary: 'text-primary-base dark:text-primary-light',
  dark: 'text-muted-900 dark:text-muted-100',
} as const satisfies Record<NonNullable<BaseFullscreenDropfileProps['variant']>, string>

export const defaults = {
  /**
   * The variant of the icon.
   */
  variant: 'primary',
} as const satisfies BaseFullscreenDropfileConfig
