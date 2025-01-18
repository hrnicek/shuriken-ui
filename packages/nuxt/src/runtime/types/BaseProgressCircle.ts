import type {
  ProgressRootEmits,
  ProgressRootProps,
} from 'reka-ui'

export interface BaseProgressCircleProps extends ProgressRootProps {
  /**
   * The size of the progress circle.
   */
  size?: number

  /**
   * The thickness of the progress circle.
   */
  thickness?: number

  /**
   * Enable/disable animation, or set the animation duration (in seconds).
   */
  animation?: boolean | number

  /**
   * Defines the variant of the progress circle
   *
   * @default 'primary'
   */
  variant?: 'default' | 'primary' | 'dark' | 'none'
}
export interface BaseProgressCircleEmits extends ProgressRootEmits {}

export interface BaseProgressCircleSlots {
  default: () => any
}
export interface BaseProgressCircleConfig {
  variant: NonNullable<BaseProgressCircleProps['variant']>
}
