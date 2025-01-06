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
   *
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'dark' | 'none'
}
export interface BaseRadioEmits /*extends RadioGroupItemEmits*/ {
  select: [event: any]
}
export type BaseRadioSlots = {
  default(): any
  error(): any
}
export type BaseRadioConfig = {
  variant: NonNullable<BaseRadioProps['variant']>
}
