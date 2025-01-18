import type {
  DropdownMenuContentProps,
  DropdownMenuPortalProps,
  DropdownMenuRootEmits,
  DropdownMenuRootProps,
  DropdownMenuTriggerProps,
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
   * The variant of the dropdown content
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
export interface BaseDropdownSlots {
  default: () => any
  button: () => any
  label: () => any
}
export interface BaseDropdownConfig {
  variant: NonNullable<BaseDropdownProps['variant']>
  rounded: NonNullable<BaseDropdownProps['rounded']>
}
