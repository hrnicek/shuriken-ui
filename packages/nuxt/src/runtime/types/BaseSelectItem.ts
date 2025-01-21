import type {
  AcceptableValue,
  SelectItemProps,
} from 'reka-ui'

export interface BaseSelectItemProps<T = AcceptableValue> extends SelectItemProps<T> {}
export interface BaseSelectItemSlots {
  default: () => any
}
