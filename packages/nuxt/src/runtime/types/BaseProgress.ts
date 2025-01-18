import type {
  ProgressRootEmits,
  ProgressRootProps,
} from 'reka-ui'

export interface BaseProgressProps extends ProgressRootProps {
  /**
   * The variant of the progress bar.
   */
  variant?: 'default' | 'primary' | 'dark' | 'none'

  /**
   * The radius of the progress bar.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the progress bar.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}
export interface BaseProgressEmits extends ProgressRootEmits {}

export interface BaseProgressSlots {
  default: () => any
}

export interface BaseProgressConfig {
  variant: NonNullable<BaseProgressProps['variant']>
  rounded: NonNullable<BaseProgressProps['rounded']>
  size: NonNullable<BaseProgressProps['size']>
}
