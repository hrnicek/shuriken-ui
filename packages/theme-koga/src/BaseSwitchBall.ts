import type { BaseSwitchBallConfig, BaseSwitchBallProps } from "@shuriken-ui/types"

export const trackVariants = {
  'default': 'peer-data-[state=checked]:bg-muted-400 dark:peer-data-[state=checked]:bg-muted-700 bg-muted-300 dark:bg-muted-600',
  'primary': 'peer-data-[state=checked]:bg-primary-base dark:peer-data-[state=checked]:bg-primary-base bg-muted-300 dark:bg-muted-600',
  'dark': 'peer-data-[state=checked]:bg-muted-900 dark:peer-data-[state=checked]:bg-muted-100 bg-muted-300 dark:bg-muted-600',
  'none': '',
} as const satisfies Record<NonNullable<BaseSwitchBallProps['variant']>, string>


export const handleVariants = {
  'default': 'bg-white dark:bg-muted-900 border border-muted-300 dark:border-muted-800',
  'primary': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
  'dark': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
  'none': '',
} as const satisfies Record<NonNullable<BaseSwitchBallProps['variant']>, string>

export const iconVariants = {
  'default': 'text-muted-900 dark:text-white',
  'primary': 'text-white dark:text-white',
  'dark': 'text-white dark:text-muted-900',
  'none': '',
} as const satisfies Record<NonNullable<BaseSwitchBallProps['variant']>, string>

export const defaults = {
  variant: 'default',
} as const satisfies BaseSwitchBallConfig
