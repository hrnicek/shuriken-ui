import type { BaseAutocompleteConfig, BaseAutocompleteProps } from "@shuriken-ui/nuxt";

export const variants = {
  default: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 text-muted-600 dark:text-muted-300',
  muted: 'bg-muted-50 dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 text-muted-600 dark:text-muted-300',
  none: '',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['variant']>, string>

export const portalVariants = {
  default: 'bg-white dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
  muted: 'bg-muted-50 dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
  none: '',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['variant']>, string>

export const inputVariants = {
  default: 'text-muted-600 dark:text-muted-300 placeholder:text-muted-300 dark:placeholder:text-muted-700',
  muted: 'text-muted-600 dark:text-muted-300 placeholder:text-muted-300 dark:placeholder:text-muted-700',
  none: '',
} as const satisfies Record<NonNullable<BaseAutocompleteProps['variant']>, string>

export const triggerVariants = {
  default: 'text-muted-600 dark:text-muted-300',
  muted: 'text-muted-600 dark:text-muted-300',
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
  full: 'rounded-xl',
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
    },
    viewport: {
      class: 'max-h-[calc(var(--reka-popper-available-height)_-_2rem)] min-w-[calc(var(--reka-combobox-trigger-width)-1px)]',
    },
  },
} as const satisfies Record<NonNullable<BaseAutocompleteProps['preset']>, BaseAutocompleteProps['bindings']>

export const defaults = {
  variant: 'default',
  rounded: 'md',
  size: 'md',
  preset: 'popper',
} as const satisfies BaseAutocompleteConfig
