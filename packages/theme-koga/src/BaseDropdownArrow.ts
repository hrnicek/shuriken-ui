import type { BaseDropdownContext } from "@shuriken-ui/nuxt"

export const variants = {
  'default': 'fill-white dark:fill-muted-800 stroke-muted-200 dark:stroke-muted-600',
  'muted': 'fill-muted-50 dark:fill-muted-800 stroke-muted-200 dark:stroke-muted-600',
  'primary': 'fill-white dark:fill-muted-800 stroke-muted-200 dark:stroke-muted-600',
  'none': '',
} as const satisfies Record<NonNullable<BaseDropdownContext['variant']>, string>
