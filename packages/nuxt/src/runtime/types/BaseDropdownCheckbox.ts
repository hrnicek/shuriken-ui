import type {
  DropdownMenuCheckboxItemEmits,
  DropdownMenuCheckboxItemProps,
  DropdownMenuItemIndicatorProps,
} from 'reka-ui'

export interface BaseDropdownCheckboxProps extends DropdownMenuCheckboxItemProps {
  /**
   * The title to display for the dropdown item.
   */
  title?: string

  /**
   * The text to display for the dropdown item.
   */
  text?: string

  /**
   * The hover color of the dropdown-item inner elements.
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted' | 'primary' | 'none'

  /**
   * The radius of the dropdown-item.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    indicator?: DropdownMenuItemIndicatorProps
  }
}
export interface BaseDropdownCheckboxEmits extends DropdownMenuCheckboxItemEmits {}
export interface BaseDropdownCheckboxSlots {
  default: () => any
  title: () => any
  text: () => any
  end: () => any
}
