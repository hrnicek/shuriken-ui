import type {
  DropdownMenuRootProps,
  DropdownMenuRootEmits,
  DropdownMenuContentProps,
  DropdownMenuTriggerProps,
  DropdownMenuPortalProps,
} from 'reka-ui'

export interface BaseDropdownProps extends DropdownMenuRootProps {
  /**
   * The label to display for the dropdown.
   */
  label?: string

  /**
   * Disables the dropdown.
   */
  disabled?: boolean

  /**
   * The variant of the dropdown.buttonSize
   */
  variant?: 'default' | 'muted' | 'primary' | 'none'

  /**
   * The radius of the dropdown button.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    content?: DropdownMenuContentProps
    trigger?: DropdownMenuTriggerProps
    portal?: DropdownMenuPortalProps
  }

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    content?: string | string[]
  }
}
export interface BaseDropdownEmits extends DropdownMenuRootEmits {}

export interface BaseDropdownContext {
  variant: NonNullable<BaseDropdownProps['variant']>
  rounded: NonNullable<BaseDropdownProps['rounded']>
}
export type BaseDropdownSlots = {
  default(): any
  button(): any
  label(): any
}
export type BaseDropdownConfig = {
  variant: NonNullable<BaseDropdownProps['variant']>
  rounded: NonNullable<BaseDropdownProps['rounded']>
}