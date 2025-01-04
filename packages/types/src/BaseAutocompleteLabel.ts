import type { ComboboxLabelProps } from 'reka-ui'

export interface BaseAutocompleteLabelProps extends ComboboxLabelProps {
  /**
   * The label to display for the Autocomplete.
   */
  label?: string
}
export type BaseAutocompleteLabelSlots = {
  default(): any
}
