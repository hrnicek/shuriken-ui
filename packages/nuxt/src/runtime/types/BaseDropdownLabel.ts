import type { DropdownMenuLabelProps } from 'reka-ui'

export interface BaseDropdownLabelProps extends DropdownMenuLabelProps {
  /**
   * The label to display for the dropdown.
   */
  label?: string
}
export type BaseDropdownLabelSlots = {
  default(): any
}
