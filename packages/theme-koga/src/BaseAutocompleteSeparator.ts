import type { BaseAutocompleteContext } from "@shuriken-ui/nuxt";

export const variants = {
  default: 'border-muted-200 dark:border-muted-700',
  muted: 'border-muted-300 dark:border-muted-700',
  none: '',
} as const satisfies Record<BaseAutocompleteContext['variant'], string>
