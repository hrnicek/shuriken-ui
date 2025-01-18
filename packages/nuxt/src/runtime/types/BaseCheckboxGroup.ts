import type {
  AcceptableValue,
  CheckboxGroupRootEmits,
  CheckboxGroupRootProps,
} from 'reka-ui'

export interface BaseCheckboxGroupProps<T = AcceptableValue> extends CheckboxGroupRootProps<T> {}
export interface BaseCheckboxGroupEmits<T = AcceptableValue> extends CheckboxGroupRootEmits<T> {}
export interface BaseCheckboxGroupSlots {
  default: () => any
}
