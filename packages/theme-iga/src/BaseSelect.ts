import type { BaseSelectConfig, BaseSelectProps } from "@shuriken-ui/types"

export const variants = {
  default: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 data-placeholder:text-muted-300 dark:data-placeholder:text-muted-700',
  muted: 'bg-muted-50 dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 data-placeholder:text-muted-300 dark:data-placeholder:text-muted-700',
} as const satisfies Record<NonNullable<BaseSelectProps['variant']>, string>

// @todo: low-contrast-theme
// export const variants = {
//   'default': 'bg-white dark:bg-muted-800 border-muted-300 dark:border-muted-700 border text-muted-500 data-placeholder:text-muted-300 dark:data-placeholder:text-muted-700',
//   'muted': 'bg-muted-50 dark:bg-muted-800 border-muted-300 dark:border-muted-700 border text-muted-500 data-placeholder:text-muted-300 dark:data-placeholder:text-muted-700',
// } as const  satisfies Record<NonNullable<BaseSelectProps['variant']>, string>

export const portalVariants = {
  default: 'bg-white dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
  muted: 'bg-muted-50 dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
} as const  satisfies Record<NonNullable<BaseSelectProps['variant']>, string>

export const triggerVariants = {
  default: 'text-muted-600 dark:text-muted-300',
  muted: 'text-muted-600 dark:text-muted-300',
} as const satisfies Record<NonNullable<BaseSelectProps['variant']>, string>

// @todo: low-contrast-theme
// const portalVariants = {
//   'default': '',
//   'muted': '',
// } as const satisfies Record<NonNullable<BaseSelectProps['variant']>, string>

export const sizes = {
  sm: 'h-8 text-xs px-2',
  md: 'h-10 text-sm px-3',
  lg: 'h-12 text-sm px-4',
  xl: 'h-14 text-base px-4',
} as const satisfies Record<NonNullable<BaseSelectProps['size']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const satisfies Record<NonNullable<BaseSelectProps['rounded']>, string>

export const portalRadiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const satisfies Record<NonNullable<BaseSelectProps['rounded']>, string>

export const presets = {
  aligned: {},
  popper: {
    content: {
      position: 'popper',
      align: 'start',
      sideOffset: 6,
      class: 'max-h-[calc(var(--reka-popper-available-height)_-_2rem)] min-w-[var(--reka-select-trigger-width)]',
    },
  },
} as const satisfies Record<NonNullable<BaseSelectProps['preset']>, BaseSelectProps['bindings']>

export const defaults = {
  variant: 'default',
  rounded: 'md',
  size: 'md',
  preset: 'aligned',
} as const satisfies BaseSelectConfig
