import type { BaseTextProps, BaseTextConfig } from './BaseText'

export interface BaseParagraphProps extends BaseTextProps {}
export type BaseParagraphSlots = {
  default(): any
}
export type BaseParagraphConfig = BaseTextConfig & {
  as: BaseParagraphProps['as']
}
