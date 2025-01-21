import type {
  AcceptableValue,
  ComboboxItemEmits,
  ComboboxItemProps,
} from 'reka-ui'

export interface BaseAutocompleteItemProps<T = AcceptableValue> extends ComboboxItemProps<T> {}
export interface BaseAutocompleteItemEmits<T = AcceptableValue> extends ComboboxItemEmits<T> {}
export interface BaseAutocompleteItemSlots {
  default: () => any
}
