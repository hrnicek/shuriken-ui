import type { PrimitiveProps } from 'reka-ui'

export interface BaseTextProps extends PrimitiveProps {
  /**
   * The size of the text.
   */
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'

  /**
   * The lead of the text.
   */
  lead?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'

  /**
   * The weight of the text.
   */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'

  /**
   * The letter spacing of the paragraph.
   */
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'
}
export type BaseTextSlots = {
  default(): any
}
export type BaseTextConfig = {
  size: NonNullable<BaseTextProps['size']>
  lead: NonNullable<BaseTextProps['lead']>
  weight: NonNullable<BaseTextProps['weight']>
  tracking: NonNullable<BaseTextProps['tracking']>
}
