import type { BaseInputFileConfig, BaseInputFileProps } from "@shuriken-ui/types"

export const variants = {
  default: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700 aria-invalid:!border-destructive-base',
  muted: 'bg-muted-50 dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700 aria-invalid:!border-destructive-base',
  primary: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700 aria-invalid:!border-destructive-base',
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
  default: 'bg-muted-100 dark:bg-muted-800 text-muted-700 dark:text-muted-400 group-hover/file:bg-muted-200 dark:group-hover/file:bg-muted-700 group-hover/file:text-muted-800 dark:group-hover/file:text-muted-200',
  muted: 'bg-muted-100 dark:bg-muted-800 text-muted-700 dark:text-muted-400 group-hover/file:bg-muted-200 dark:group-hover/file:bg-muted-700 group-hover/file:text-muted-800 dark:group-hover/file:text-muted-200',
  primary: 'bg-primary-500/10 dark:bg-primary-500/20 text-primary-base dark:text-primary-light group-hover/file:bg-primary-500/20 dark:group-hover/file:bg-primary-500/10 group-hover/file:text-primary-heavy dark:group-hover/file:text-primary-light',
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