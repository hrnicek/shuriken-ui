import type { BaseAutocompleteContext } from "@shuriken-ui/nuxt";

export const variants = {
  default: 'border-portal-default-border',
  muted: 'border-portal-muted-border',
  none: '',
} as const satisfies Record<BaseAutocompleteContext['variant'], string>
