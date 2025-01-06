import type { BaseDropdownContext } from "@shuriken-ui/nuxt"

export const variants = {
  'default': 'border-muted-200 dark:border-muted-800',
  'muted': 'border-muted-300 dark:border-muted-800',
  'primary': 'border-muted-200 dark:border-muted-800',
  'none': '',
} as const satisfies Record<NonNullable<BaseDropdownContext['variant']>, string>
