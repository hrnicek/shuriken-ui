import type {
  NumberFieldRootProps,
  NumberFieldRootEmits,
} from 'reka-ui'

export interface BaseInputNumberProps extends NumberFieldRootProps {
  /**
   * The inputmode to use for the input, usually for mobile devices.
   */
  inputmode?: 'numeric' | 'decimal'

  /**
   * The placeholder to display for the input.
   */
  placeholder?: string

  /**
   * The contrast of the input.
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted'

  /**
   * The radius of the input.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the input.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'
}
export interface BaseInputNumberEmits extends NumberFieldRootEmits {}
export type BaseInputNumberSlots = {}

export type BaseInputNumberConfig = {
  variant: NonNullable<BaseInputNumberProps['variant']>
  rounded: NonNullable<BaseInputNumberProps['rounded']>
  size: NonNullable<BaseInputNumberProps['size']>
}
