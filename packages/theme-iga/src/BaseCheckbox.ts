import type { BaseCheckboxConfig, BaseCheckboxProps } from "@shuriken-ui/types";

export const variants = {
  'default': 'bg-white dark:bg-muted-950 border-1 border-muted-300 dark:border-muted-700 text-muted-700 dark:text-muted-100',
  'primary': 'bg-primary-500/10 dark:bg-primary-500/20 border-1 border-muted-300 dark:border-muted-700 text-primary-base dark:text-primary-light',
  'dark': 'bg-muted-900/10 dark:bg-white/10 border-1 border-muted-300 dark:border-muted-700 text-muted-900 dark:text-white',
  'none': '',
} as const satisfies Record<NonNullable<BaseCheckboxProps['variant']>, string>

export const defaults = {
  variant: 'default',
} as const satisfies BaseCheckboxConfig
