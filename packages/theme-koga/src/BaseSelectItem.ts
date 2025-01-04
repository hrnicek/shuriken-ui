import type { BaseSelectContext } from '@shuriken-ui/types'

export { radiuses } from './BaseSelect'
export const variants = {
  'default': 'data-[highlighted]:bg-muted-100 dark:data-[highlighted]:bg-muted-800 text-muted-700 data-[highlighted]:text-primary-base dark:text-muted-300 dark:data-[highlighted]:text-primary-light',
  'muted': 'data-[highlighted]:bg-muted-200 dark:data-[highlighted]:bg-muted-800 text-muted-800 data-[highlighted]:text-primary-base dark:text-muted-400 dark:data-[highlighted]:text-primary-light',
} as const as Record<BaseSelectContext['variant'], string>

// @todo: low-contrast-theme
// const variants = {
//   'default': 'bg-white dark:bg-muted-800 border-muted-300 dark:border-muted-700 border text-muted-500 data-placeholder:text-muted-300 dark:data-placeholder:text-muted-700',
//   'muted': '',
// } as const