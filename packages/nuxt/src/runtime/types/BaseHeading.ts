import type { BaseTextConfig, BaseTextProps } from './BaseText'

export interface BaseHeadingProps extends BaseTextProps {}
export interface BaseHeadingSlots {
  default: () => any
}
export type BaseHeadingConfig = BaseTextConfig
