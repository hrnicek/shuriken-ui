import type { PrimitiveProps } from 'reka-ui'

export interface BaseKbdProps extends PrimitiveProps {
  /**
   * The variant of the kbd.
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted' | 'none'

  /**
   * The size of the kbd.
   *
   * @default 'sm'
   */
  size?: 'sm' | 'md' | 'lg'
}
export type BaseKbdSlots = {
  default(): any
}
export type BaseKbdConfig = {
  variant: NonNullable<BaseKbdProps['variant']>
  size: NonNullable<BaseKbdProps['size']>
}
