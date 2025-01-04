import type { BaseSwitchThinConfig, BaseSwitchThinProps } from "@shuriken-ui/types"

export const trackVariants = {
  'default': 'peer-data-[state=checked]:bg-muted-500 dark:peer-data-[state=checked]:bg-muted-800 bg-muted-300 dark:bg-muted-900',
  'primary': 'peer-data-[state=checked]:bg-primary-base dark:peer-data-[state=checked]:bg-primary-base bg-muted-300 dark:bg-muted-600',
  'dark': 'peer-data-[state=checked]:bg-muted-900 dark:peer-data-[state=checked]:bg-muted-100 bg-muted-300 dark:bg-muted-600',
  'none': '',
} as const satisfies Record<NonNullable<BaseSwitchThinProps['variant']>, string>

// @todo: low-contrast-theme
// export const trackVariants = {
//   'default': 'peer-data-[state=checked]:bg-muted-400 dark:peer-data-[state=checked]:bg-muted-700 bg-muted-300 dark:bg-muted-600',
//   'primary': 'peer-data-[state=checked]:bg-primary-base dark:peer-data-[state=checked]:bg-primary-base bg-muted-300 dark:bg-muted-600',
//   'dark': 'peer-data-[state=checked]:bg-muted-900 dark:peer-data-[state=checked]:bg-muted-100 bg-muted-300 dark:bg-muted-600',
//   'none': '',
// } as const satisfies Record<NonNullable<BaseSwitchThinProps['variant']>, string>

export const handleVariants = {
  'default': 'bg-white dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
  'primary': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
  'dark': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
  'none': '',
} as const satisfies Record<NonNullable<BaseSwitchThinProps['variant']>, string>

// @todo: low-contrast-theme
// export const handleVariants = {
//   'default': 'bg-white dark:bg-muted-900 border border-muted-300 dark:border-muted-700',
//   'primary': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
//   'dark': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
//   'none': '',
// } as const satisfies Record<NonNullable<BaseSwitchThinProps['variant']>, string>

export const defaults = {
  variant: 'default',
} as const satisfies BaseSwitchThinConfig
