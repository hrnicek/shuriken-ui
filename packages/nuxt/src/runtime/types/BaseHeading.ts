import type { BaseTextProps, BaseTextConfig } from './BaseText'

export interface BaseHeadingProps extends BaseTextProps {}
export type BaseHeadingSlots = {
  default(): any
}
export type BaseHeadingConfig = BaseTextConfig