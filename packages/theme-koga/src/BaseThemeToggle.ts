import type { BaseThemeToggleConfig } from "@shuriken-ui/types"

export const variants = {
  'default': 'bg-white dark:bg-muted-800 border border-muted-300 dark:border-muted-700',
} as const satisfies Record<NonNullable<BaseThemeToggleConfig['variant']>, string>
