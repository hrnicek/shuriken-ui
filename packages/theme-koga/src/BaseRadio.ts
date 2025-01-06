import type { BaseRadioConfig, BaseRadioProps } from "@shuriken-ui/nuxt"

export const boxVariants = {
  'default': 'bg-white dark:bg-muted-700 border-1 border-muted-300 dark:border-muted-700 text-muted-700 dark:text-muted-300',
  'primary': 'bg-primary-500/10 dark:bg-primary-500/20 border-1 border-muted-300 dark:border-muted-700 text-primary-base dark:text-primary-light',
  'dark': 'bg-muted-900/10 dark:bg-white/10 border-1 border-muted-300 dark:border-muted-700 text-muted-900 dark:text-white',
  'none': '',
} as const satisfies Record<NonNullable<BaseRadioProps['variant']>, string>

export const dotVariants = {
  'default': 'text-muted-700 dark:text-muted-300',
  'primary': 'text-primary-500 dark:text-primary-light',
  'dark': 'text-muted-900 dark:text-white',
  'none': '',
} as const satisfies Record<NonNullable<BaseRadioProps['variant']>, string>

export const defaults = {
  variant: 'default',
} as const satisfies BaseRadioConfig