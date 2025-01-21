import type {
  AcceptableValue,
  CheckboxGroupRootEmits,
  CheckboxGroupRootProps,
} from 'reka-ui'
import type { BaseCheckboxProps } from './BaseCheckbox'

export interface BaseCheckboxGroupProps<T = AcceptableValue> extends CheckboxGroupRootProps<T> {
  items?: BaseCheckboxProps[]
}
export interface BaseCheckboxGroupEmits<T = AcceptableValue> extends CheckboxGroupRootEmits<T> {}
export interface BaseCheckboxGroupSlots {
  default: () => any
}
