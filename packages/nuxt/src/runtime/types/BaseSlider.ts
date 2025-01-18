import type { SliderRootEmits, SliderRootProps } from 'reka-ui'

export interface BaseSliderProps extends SliderRootProps {
  variant?: 'default' | 'primary' | 'dark' | 'none'

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    track?: string | string[]
    range?: string | string[]
    thumb?: string | string[]
    tooltip?: string | string[]
    tooltipArrow?: string | string[]
  }
}

export interface BaseSliderEmits extends SliderRootEmits {}

export interface BaseSliderSlots {
  default: (props: { value: number }) => any
}

export interface BaseSliderConfig {
  variant: NonNullable<BaseSliderProps['variant']>
}
