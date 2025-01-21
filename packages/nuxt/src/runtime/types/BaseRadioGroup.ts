import type {
  RadioGroupRootEmits,
  RadioGroupRootProps,
} from 'reka-ui'
import type { BaseRadioProps } from './BaseRadio'

export interface BaseRadioGroupProps extends RadioGroupRootProps {
  items?: BaseRadioProps[]
}
export interface BaseRadioGroupEmits extends RadioGroupRootEmits {}
export interface BaseRadioGroupSlots {
  default: () => any
}
