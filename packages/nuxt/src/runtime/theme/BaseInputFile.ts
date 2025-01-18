import type { BaseInputFileConfig, BaseInputFileProps } from '@shuriken-ui/nuxt'

export const variants = {
  default: 'bg-input-default-bg border-input-default-border border text-input-default-text',
  muted: 'bg-input-muted-bg border-input-muted-border border text-input-muted-text',
  primary: 'bg-input-default-bg border-input-default-border border text-input-default-text',
} as const satisfies Record<NonNullable<BaseInputFileProps['variant']>, string>

export const sizes = {
  sm: 'h-8 text-xs pe-2',
  md: 'h-10 text-sm pe-3',
  lg: 'h-12 text-sm pe-4',
  xl: 'h-14 text-base pe-4',
} as const satisfies Record<NonNullable<BaseInputFileProps['size']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseInputFileProps['rounded']>, string>

export const textVariants = {
  default: 'bg-input-default-button-bg text-input-default-button-text not-data-disabled:group-hover/file:bg-input-default-button-bg-active',
  muted: 'bg-input-muted-button-bg text-input-muted-button-text not-data-disabled:group-hover/file:bg-input-muted-button-bg-active',
  primary: 'bg-primary-base/10 dark:bg-primary-base/20 text-primary-base dark:text-primary-light not-data-disabled:group-hover/file:bg-primary-base/20 dark:not-data-disabled:group-hover/file:bg-primary-base/30 not-data-disabled:group-hover/file:text-primary-heavy dark:not-data-disabled:group-hover/file:text-primary-light',
} as const satisfies Record<NonNullable<BaseInputFileProps['variant']>, string>

export const placeholderVariants = {
  default: 'text-input-default-placeholder',
  muted: 'text-input-muted-placeholder',
  primary: 'text-input-default-placeholder',
} as const satisfies Record<NonNullable<BaseInputFileProps['variant']>, string>

export const textSpacings = {
  sm: 'px-2',
  md: 'px-2',
  lg: 'px-4',
  xl: 'px-5',
} as const satisfies Record<NonNullable<BaseInputFileProps['size']>, string>

export const defaults = {
  variant: 'default',
  rounded: 'md',
  size: 'md',
} as const satisfies BaseInputFileConfig
