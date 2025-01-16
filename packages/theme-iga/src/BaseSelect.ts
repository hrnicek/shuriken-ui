import type { BaseSelectConfig, BaseSelectProps } from "@shuriken-ui/nuxt"

export const variants = {
  default: 'bg-input-default-bg border-input-default-border border text-input-default-text data-placeholder:text-input-default-placeholder',
  muted: 'bg-input-muted-bg border-input-muted-border border text-input-muted-text data-placeholder:text-input-muted-placeholder',
} as const satisfies Record<NonNullable<BaseSelectProps['variant']>, string>

export const portalVariants = {
  default: 'bg-portal-default-bg border border-portal-default-border',
  muted: 'bg-portal-muted-bg border border-portal-muted-border',
} as const  satisfies Record<NonNullable<BaseSelectProps['variant']>, string>

export const triggerVariants = {
  default: 'text-input-default-button-text',
  muted: 'text-input-muted-button-text',
} as const satisfies Record<NonNullable<BaseSelectProps['variant']>, string>

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
      avoidCollisions: true,
      collisionPadding: 20,
      class: 'max-h-[var(--reka-popper-available-height)] min-w-[var(--reka-select-trigger-width)]',
    },
  },
} as const satisfies Record<NonNullable<BaseSelectProps['preset']>, BaseSelectProps['bindings']>

export const defaults = {
  variant: 'default',
  rounded: 'md',
  size: 'md',
  preset: 'aligned',
} as const satisfies BaseSelectConfig
