import type { BaseAutocompleteConfig, BaseAutocompleteProps } from "@shuriken-ui/nuxt";

export const variants = {
  default: 'bg-input-default-bg border-input-default-border border',
  muted: 'bg-input-muted-bg border-input-muted-border border',
  none: '',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['variant']>, string>

export const portalVariants = {
  default: 'bg-portal-default-bg border border-portal-default-border',
  muted: 'bg-portal-muted-bg border border-portal-muted-border',
  none: '',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['variant']>, string>

export const inputVariants = {
  default: 'text-input-default-text placeholder:text-input-default-placeholder',
  muted: 'text-input-muted-text placeholder:text-input-muted-placeholder',
  none: '',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['variant']>, string>

export const triggerVariants = {
  default: 'text-input-default-button-text',
  muted: 'text-input-muted-button-text',
  none: '',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['variant']>, string>

export const arrowVariants = {
  default: 'fill-muted-400 dark:fill-muted-500',
  muted: 'fill-muted-400 dark:fill-muted-500',
  none: '',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['variant']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['rounded']>, string>

export const sizes = {
  sm: 'h-8 text-xs px-2',
  md: 'h-10 text-sm px-3',
  lg: 'h-12 text-sm px-4',
  xl: 'h-14 text-base px-4',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['size']>, string>

export const presets = {
  inline: {
    portal: { 
      disabled: true,
    },
    content: {
      position: 'inline',
      class: 'absolute z-10 w-full mt-[6px] max-h-[300px]',
    },
  },
  popper: {
    content: {
      position: 'popper',
      align: 'start',
      sideOffset: 6,
      avoidCollisions: true,
      collisionPadding: 20,
    },
    viewport: {
      class: 'max-h-[var(--reka-popper-available-height)] min-w-[calc(var(--reka-combobox-trigger-width)-1px)]',
    },
  },
} as const satisfies Record<NonNullable<BaseAutocompleteProps['preset']>, BaseAutocompleteProps['bindings']>

export const defaults = {
  variant: 'default',
  rounded: 'md',
  size: 'md',
  preset: 'popper',
} as const satisfies BaseAutocompleteConfig
