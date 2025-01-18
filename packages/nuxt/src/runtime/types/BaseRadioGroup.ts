import type {
  RadioGroupRootEmits,
  RadioGroupRootProps,
} from 'reka-ui'

export interface BaseRadioGroupProps extends RadioGroupRootProps {}
export interface BaseRadioGroupEmits extends RadioGroupRootEmits {}
export interface BaseRadioGroupSlots {
  default: () => any
}
