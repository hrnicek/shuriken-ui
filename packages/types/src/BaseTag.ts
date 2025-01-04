
import type { PrimitiveProps } from 'reka-ui'

export interface BaseTagProps extends PrimitiveProps {
  /**
   * The variant of the tag.
   */
  variant?: 'default' | 'muted' | 'primary' | 'none'

  /**
   * The size of the tag.
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * The radius of the tag.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}

export type BaseTagSlots = {
  default(): any
}

export type BaseTagConfig = {
  variant: NonNullable<BaseTagProps['variant']>
  size: NonNullable<BaseTagProps['size']>
  rounded: NonNullable<BaseTagProps['rounded']>
}
