import type { BaseDropdownContext } from "@shuriken-ui/nuxt"

export const variants = {
  default: 'border-portal-default-border',
  muted: 'border-portal-muted-border',
  primary: 'border-portal-default-border',
  none: '',
} as const satisfies Record<NonNullable<BaseDropdownContext['variant']>, string>
