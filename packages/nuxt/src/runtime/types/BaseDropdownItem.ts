import type {
  DropdownMenuItemEmits,
  DropdownMenuItemProps,
} from 'reka-ui'

export interface BaseDropdownItemProps extends DropdownMenuItemProps {
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
   */
  variant?: 'default' | 'muted' | 'primary' | 'none'

  /**
   * The radius of the dropdown-item.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}

export interface BaseDropdownItemEmits extends DropdownMenuItemEmits {}

export interface BaseDropdownItemSlots {
  default: () => any

  title: () => any
  text: () => any
  start: () => any
  end: () => any
}

export interface BaseDropdownItemConfig {
  variant: NonNullable<BaseDropdownItemProps['variant']>
  rounded: NonNullable<BaseDropdownItemProps['rounded']>
}
