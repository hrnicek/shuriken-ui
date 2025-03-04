import type {
  ConfigProviderProps,
  TooltipProviderProps,
} from 'reka-ui'

import type { BaseToastProviderProps } from '../types'

export interface BaseProviders {
  config?: ConfigProviderProps
  tooltip?: TooltipProviderProps
  toast?: BaseToastProviderProps
}
