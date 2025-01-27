import type { PrimitiveProps } from 'reka-ui'

export interface BaseKbdProps extends PrimitiveProps {
  /**
   * The variant of the kbd.
   */
  variant?: 'default' | 'muted' | 'none'

  /**
   * The size of the kbd.
   */
  size?: 'sm' | 'md' | 'lg'
}
export interface BaseKbdSlots {
  default: () => any
}
export interface BaseKbdConfig {
  variant: NonNullable<BaseKbdProps['variant']>
  size: NonNullable<BaseKbdProps['size']>
}
