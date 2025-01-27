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
   */
  variant?: 'default' | 'muted' | 'primary' | 'dark' | 'none'

  /**
   * The size of the snack.
   */
  size?: 'xs' | 'sm' | 'md'
}
export interface BaseSnackEmits {
  delete: []
}
export interface BaseSnackSlots {
  default: () => any
  icon: () => any
}
export interface BaseSnackConfig {
  variant: NonNullable<BaseSnackProps['variant']>
  size: NonNullable<BaseSnackProps['size']>
}
