import type {
  CheckboxRootProps,
  CheckboxRootEmits,
} from 'reka-ui'

export interface BaseCheckboxProps extends CheckboxRootProps {
  /**
   * The label to display for the checkbox.
   */
  label?: string

  /**
   * The variant of the checkbox.
   */
  variant?: 'default' | 'primary' | 'dark' | 'none'
}
export interface BaseCheckboxEmits extends CheckboxRootEmits {}
export type BaseCheckboxSlots = {
  default(): any
}
export type BaseCheckboxConfig = {
  variant: NonNullable<BaseCheckboxProps['variant']>
}