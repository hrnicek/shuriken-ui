import type { ToastProviderProps } from 'reka-ui'

export interface BaseToastProviderProps extends Omit<ToastProviderProps, 'swipeDirection'> {
  max?: number
  position?: 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end'
}
