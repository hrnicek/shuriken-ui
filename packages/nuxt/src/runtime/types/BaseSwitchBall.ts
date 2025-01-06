import type{
  SwitchRootProps,
  SwitchRootEmits,
} from 'reka-ui'

export interface BaseSwitchBallProps extends SwitchRootProps {
  /**
   * Accessible label for the switch.
   */
  label?: string

  /**
   * The sublabel of the switch.
   */
  sublabel?: string

  /**
   * Main color of the switch.
   *
   * @default 'default'
   */
   variant?: 'default' | 'primary' | 'dark' | 'none'
}
export interface BaseSwitchBallEmits extends SwitchRootEmits {}
export type BaseSwitchBallSlots = {
  default(): any
  sublabel(): any
}
export type BaseSwitchBallConfig = {
  variant: NonNullable<BaseSwitchBallProps['variant']>
}
