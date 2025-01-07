import type { SliderRootProps, SliderRootEmits } from 'reka-ui'

export interface BaseSliderProps extends SliderRootProps {
  variant?: 'primary' | 'dark' | 'none'
}

export interface BaseSliderEmits extends SliderRootEmits {}

export type BaseSliderSlots = {
  default(props: { value: number }): any
}

export type BaseSliderConfig = {
  variant: NonNullable<BaseSliderProps['variant']>
}
