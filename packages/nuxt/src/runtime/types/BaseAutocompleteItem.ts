import type {
  ComboboxItemEmits,
  ComboboxItemProps,
} from 'reka-ui'

export interface BaseAutocompleteItemProps extends ComboboxItemProps {}
export interface BaseAutocompleteItemEmits extends ComboboxItemEmits {}
export interface BaseAutocompleteItemSlots {
  default: () => any
}
