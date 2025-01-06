import type { BaseChipConfig, BaseChipProps } from "@shuriken-ui/nuxt"

export const placements = {
  'top-start': 'top-0 start-0 -mt-0.5 -ms-0.5',
  'top-end': 'top-0 end-0 -mt-0.5 -me-0.5',
  'bottom-start': 'bottom-0 start-0 -mb-0.5 -ms-0.5',
  'bottom-end': 'bottom-0 end-0 -mb-0.5 -me-0.5',
} as const satisfies Record<NonNullable<BaseChipProps['placement']>, string>

export const sizes = {
  xs: 'size-1.5',
  sm: 'size-2',
  md: 'size-2.5',
  lg: 'size-3',
  xl: 'size-3.5',
} as const satisfies Record<NonNullable<BaseChipProps['size']>, string>

export const colors = {
  primary: 'bg-primary-400',
  muted: 'bg-muted-200 dark:bg-muted-700',
  custom: 'bg-current dark:bg-current',
} as const satisfies Record<NonNullable<BaseChipProps['color']>, string>

export const pulseColors = {
  primary: 'bg-primary-500',
  muted: 'bg-muted-400 dark:bg-muted-700',
  custom: 'bg-current dark:bg-current',
} as const satisfies Record<NonNullable<BaseChipProps['color']>, string>

export const defaults = {
  color: 'primary',
  position: 'absolute',
  placement: 'top-end',
  size: 'md',
} as const satisfies BaseChipConfig