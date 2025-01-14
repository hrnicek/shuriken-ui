import type { PrimitiveProps } from 'reka-ui'

export interface BaseSnackProps extends PrimitiveProps {
  /**
   * The text to display in the snackbar.
   */
  label?: string

  /**
   * An optional icon to display in the snackbar.
   */
  icon?: string

  /**
   * An optional image to display in the snackbar.
   */
  image?: string

  /**
   * The variant of snack.
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted' | 'primary' | 'dark' | 'none'

  /**
   * The size of the snack.
   *
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md'
}
export interface BaseSnackEmits {
  delete: []
}
export type BaseSnackSlots = {
  default(): any
  icon(): any
}
export type BaseSnackConfig = {
  variant: NonNullable<BaseSnackProps['variant']>
  size: NonNullable<BaseSnackProps['size']>
}
