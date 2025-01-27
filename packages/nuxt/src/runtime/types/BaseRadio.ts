import type {
  RadioGroupItemProps,
  // RadioGroupItemEmits,
} from 'reka-ui'

export interface BaseRadioProps extends RadioGroupItemProps {
  /**
   * The label for the radio input.
   */
  label?: string

  /**
   * The variant of the radio.
   */
  variant?: 'default' | 'primary' | 'dark' | 'none'

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    root?: string | string[]
    indicator?: string | string[]
    label?: string | string[]
    labelWrapper?: string | string[]
  }
}
export interface BaseRadioEmits /* extends RadioGroupItemEmits */ {
  select: [event: any]
}
export interface BaseRadioSlots {
  default: () => any
  error: () => any
}
export interface BaseRadioConfig {
  variant: NonNullable<BaseRadioProps['variant']>
}
