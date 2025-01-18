import type { PrimitiveProps } from 'reka-ui'

export interface BaseProseProps extends PrimitiveProps {
  /**
   * Inner elements shapes.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg'
}

export interface BaseProseSlots {
  default: () => any
}

export interface BaseProseConfig {
  rounded: NonNullable<BaseProseProps['rounded']>
}
