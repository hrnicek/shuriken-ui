import type { PrimitiveProps } from 'reka-ui';

export interface BaseCardProps extends PrimitiveProps {

  /**
   * The variant of the card.
   */
  variant?: 'default' | 'muted' | 'none'

  /**
   * The radius of the card.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg'
}

export type BaseCardSlots = {
  default(): any
}

export type BaseCardConfig = {
  variant: NonNullable<BaseCardProps['variant']>
  rounded: NonNullable<BaseCardProps['rounded']>
}
