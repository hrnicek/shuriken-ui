import type { BaseProseConfig, BaseProseProps } from '@shuriken-ui/nuxt'

export const radiuses = {
  none: 'prose-img:rounded-none prose-pre:rounded-none prose-table:rounded-none',
  sm: 'prose-img:rounded-sm prose-pre:rounded-sm prose-table:rounded-sm',
  md: 'prose-img:rounded-md prose-pre:rounded-md prose-table:rounded-md',
  lg: 'prose-img:rounded-lg prose-pre:rounded-lg prose-table:rounded-lg',
} as const satisfies Record<NonNullable<BaseProseProps['rounded']>, string>

export const defaults = {
  rounded: 'none',
} as const satisfies BaseProseConfig
