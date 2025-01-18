import type { BaseDropdownContext } from '@shuriken-ui/nuxt'

export const variants = {
  default: 'fill-white dark:fill-muted-950 stroke-muted-200 dark:stroke-muted-800',
  muted: 'fill-muted-50 dark:fill-muted-950 stroke-muted-200 dark:stroke-muted-800',
  primary: 'fill-white dark:fill-muted-950 stroke-muted-200 dark:stroke-muted-800',
  none: '',
} as const satisfies Record<NonNullable<BaseDropdownContext['variant']>, string>
