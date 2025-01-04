import type { BaseAutocompleteContext } from "@shuriken-ui/types";

export const variants = {
  default: 'border-muted-200 dark:border-muted-800',
  muted: 'border-muted-300 dark:border-muted-800',
  none: '',
} as const satisfies Record<BaseAutocompleteContext['variant'], string>
