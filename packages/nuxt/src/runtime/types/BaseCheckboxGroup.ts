import type { 
  CheckboxGroupRootProps,
  CheckboxGroupRootEmits,
  AcceptableValue,
} from 'reka-ui'

export interface BaseCheckboxGroupProps<T = AcceptableValue> extends CheckboxGroupRootProps<T> {}
export interface BaseCheckboxGroupEmits<T = AcceptableValue> extends CheckboxGroupRootEmits<T> {}
export type BaseCheckboxGroupSlots = {
  default(): any
}
