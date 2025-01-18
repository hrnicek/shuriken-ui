import type { BaseTextConfig, BaseTextProps } from './BaseText'

export interface BaseParagraphProps extends BaseTextProps {}
export interface BaseParagraphSlots {
  default: () => any
}
export type BaseParagraphConfig = BaseTextConfig & {
  as: BaseParagraphProps['as']
}
