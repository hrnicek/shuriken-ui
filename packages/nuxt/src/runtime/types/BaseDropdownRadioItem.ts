import type {
  DropdownMenuItemIndicatorProps,
  DropdownMenuRadioItemEmits,
  DropdownMenuRadioItemProps,
} from 'reka-ui'

export interface BaseDropdownRadioItemProps extends DropdownMenuRadioItemProps {
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
   * @default 'default-low'
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
export interface BaseDropdownRadioItemEmits extends DropdownMenuRadioItemEmits {}
export interface BaseDropdownRadioItemSlots {
  default: () => any
  text: () => any
  end: () => any
}
