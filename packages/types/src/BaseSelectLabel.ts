import type { SelectLabelProps } from 'reka-ui'

export interface BaseSelectLabelProps extends SelectLabelProps {
  /**
   * The label to display for the dropdown.
   */
  label?: string
}
export type BaseSelectLabelSlots = {
  default(): any
}
