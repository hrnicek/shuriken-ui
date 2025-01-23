import type {
  AcceptableValue,
  SelectItemProps,
} from 'reka-ui'

export interface BaseSelectItemProps<T = AcceptableValue> extends SelectItemProps<T> {
  rawSlot?: boolean
}
export interface BaseSelectItemSlots {
  default: () => any
}
