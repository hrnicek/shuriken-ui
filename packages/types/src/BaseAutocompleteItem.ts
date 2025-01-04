import type {
  ComboboxItemProps,
  ComboboxItemEmits,
} from 'reka-ui'

export interface BaseAutocompleteItemProps extends ComboboxItemProps {}
export interface BaseAutocompleteItemEmits extends ComboboxItemEmits {}
export type BaseAutocompleteItemSlots = {
  default(): any
}
