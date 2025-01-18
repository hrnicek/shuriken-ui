import type {
  DropdownMenuPortalProps,
  DropdownMenuSubContentProps,
  DropdownMenuSubEmits,
  DropdownMenuSubProps,
  DropdownMenuSubTriggerProps,
} from 'reka-ui'

import type { BaseDropdownProps } from './BaseDropdown'

export interface BaseDropdownSubProps extends DropdownMenuSubProps {
  /**
   * The title to display for the dropdown item.
   */
  title?: string

  /**
   * The text to display for the dropdown item.
   */
  text?: string

  /**
   * The variant of the dropdown content
   */
  variant?: BaseDropdownProps['variant']

  /**
   * The radius of the dropdown button.
   */
  rounded?: BaseDropdownProps['rounded']

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    trigger?: DropdownMenuSubTriggerProps
    content?: DropdownMenuSubContentProps
    portal?: DropdownMenuPortalProps
  }
}
export interface BaseDropdownSubEmits extends DropdownMenuSubEmits {}
export interface BaseDropdownSubSlots {
  default: () => any
  title: () => any
  text: () => any
}
