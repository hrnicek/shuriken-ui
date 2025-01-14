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

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    root?: string | string[]
    icon?: string | string[]
    indicator?: string | string[]
    label?: string | string[]
    labelWrapper?: string | string[]
  }
}
export interface BaseCheckboxEmits extends CheckboxRootEmits {}
export type BaseCheckboxSlots = {
  default(): any
}
export type BaseCheckboxConfig = {
  variant: NonNullable<BaseCheckboxProps['variant']>
}