import type {
  NumberFieldRootEmits,
  NumberFieldRootProps,
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

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    root?: string | string[]
    button?: string | string[]
    buttonWrapper?: string | string[]
  }
}
export interface BaseInputNumberEmits extends NumberFieldRootEmits {}
export interface BaseInputNumberSlots {}

export interface BaseInputNumberConfig {
  variant: NonNullable<BaseInputNumberProps['variant']>
  rounded: NonNullable<BaseInputNumberProps['rounded']>
  size: NonNullable<BaseInputNumberProps['size']>
}
