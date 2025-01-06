import type { PrimitiveProps } from 'reka-ui';

export interface BaseProseProps extends PrimitiveProps {
  /**
   * Inner elements shapes.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg'
}

export type BaseProseSlots = {
  default(): any
}

export type BaseProseConfig = {
  rounded: NonNullable<BaseProseProps['rounded']>
}
