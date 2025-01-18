import type {
  SwitchRootEmits,
  SwitchRootProps,
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

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    root?: string | string[]
    thumb?: string | string[]
    track?: string | string[]
    icon?: string | string[]
    label?: string | string[]
  }
}
export interface BaseSwitchBallEmits extends SwitchRootEmits {}
export interface BaseSwitchBallSlots {
  default: () => any
  sublabel: () => any
}
export interface BaseSwitchBallConfig {
  variant: NonNullable<BaseSwitchBallProps['variant']>
}
