import type { ToastRootEmits, ToastRootProps } from 'reka-ui'

import type { BaseButtonProps } from './BaseButton'

export interface BaseToastProps extends ToastRootProps {
  title?: string
  description?: string
  icon?: string
  progress?: boolean
  actions?: (BaseButtonProps & {
    label: string
    onClick?: (e: Event) => (void | Promise<void>)
  })[]
}
export interface BaseToastEmits extends ToastRootEmits {}
