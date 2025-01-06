import type { BaseTabsConfig, BaseTabsProps } from "@shuriken-ui/nuxt"

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseTabsProps['rounded']>, string>

export const justifies = {
  start: '',
  center: 'justify-center',
  end: 'justify-end',
} as const satisfies Record<NonNullable<BaseTabsProps['justify']>, string>

export const types = {
  tabs: 'cursor-pointer px-4 py-3 text-sm transition-all duration-300',
  box: 'flex flex-col rounded-xl px-5 cursor-pointer text-center transition-all duration-300',
} as const satisfies Record<NonNullable<BaseTabsProps['type']>, string>

export const tabsIndicator = {
  'primary': 'bg-primary-base',
  'dark': 'bg-muted-900 dark:bg-muted-100',
  'muted': 'bg-muted-400 dark:bg-muted-400',
} as const satisfies Record<NonNullable<BaseTabsProps['variant']>, string>

export const boxIndicator = {
  'primary': 'bg-primary-500/10 dark:bg-primary-500/20',
  'dark': 'bg-muted-900/10 dark:bg-muted-100/10',
  'muted': 'bg-muted-100 dark:bg-muted-700',
} as const satisfies Record<NonNullable<BaseTabsProps['variant']>, string>

export const defaults = {
  variant: 'primary',
  justify: 'start',
  rounded: 'md',
  type: 'tabs',
} as const satisfies BaseTabsConfig
