import type { 
  RadioGroupRootProps,
  RadioGroupRootEmits,
} from 'reka-ui'

export interface BaseRadioGroupProps extends RadioGroupRootProps {}
export interface BaseRadioGroupEmits extends RadioGroupRootEmits {}
export type BaseRadioGroupSlots = {
  default(): any
}
