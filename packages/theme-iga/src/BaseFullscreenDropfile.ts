import type { BaseFullscreenDropfileConfig, BaseFullscreenDropfileProps } from "@shuriken-ui/types"

export const dropVariants = {
  default: 'bg-muted-100 dark:bg-muted-950 border-2 border-dashed border-muted-200 dark:border-muted-800',
  primary: 'bg-muted-100 dark:bg-muted-950 border-2 border-dashed border-muted-200 dark:border-muted-800',
  dark: 'bg-muted-100 dark:bg-muted-950 border-2 border-dashed border-muted-200 dark:border-muted-800',
} as const satisfies Record<NonNullable<BaseFullscreenDropfileProps['variant']>, string>

// @todo: low-contrast-theme
// const dropVariants = {
//   default: 'bg-muted-100 dark:bg-muted-800 border-2 border-dashed border-muted-200 dark:border-muted-700',
//   primary: 'bg-muted-100 dark:bg-muted-800 border-2 border-dashed border-muted-200 dark:border-muted-700',
//   dark: 'bg-muted-100 dark:bg-muted-800 border-2 border-dashed border-muted-200 dark:border-muted-700',
// } as const satisfies Record<NonNullable<BaseFullscreenDropfileProps['variant']>, string>

export const overlayVariants = {
  default: 'bg-muted-50/20 dark:bg-muted-900/20',
  primary: 'bg-muted-50/20 dark:bg-muted-900/20',
  dark: 'bg-muted-50/20 dark:bg-muted-900/20',
} as const satisfies Record<NonNullable<BaseFullscreenDropfileProps['variant']>, string>

// @todo: low-contrast-theme
// const overlayVariants = {
//   default: 'text-muted-500 dark:text-muted-400',
//   primary: 'text-primary-base dark:text-primary-light',
//   dark: 'text-muted-900 dark:text-muted-100',
// } as const satisfies Record<NonNullable<BaseFullscreenDropfileProps['variant']>, string>

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
