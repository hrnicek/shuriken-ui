import type { PrimitiveProps } from 'reka-ui';
import type { BaseAvatarProps } from './BaseAvatar'

export interface BaseAvatarGroupProps extends PrimitiveProps {
  /** 
   * The avatars to display.
   */
  avatars: BaseAvatarProps[]

  /**
   * The maximum number of avatars to display.
   */
  limit?: number

  /**
   * The size of the avatars.
   */
  size?: BaseAvatarProps['size']
 
  /**
   * The radius of the image.
   */
  rounded?: BaseAvatarProps['rounded']
}
export type BaseAvatarGroupSlots = {
  default(): any
}
export type BaseAvatarGroupConfig = {
  size: NonNullable<BaseAvatarGroupProps['size']>
  limit: NonNullable<BaseAvatarGroupProps['limit']>
  rounded: NonNullable<BaseAvatarGroupProps['rounded']>
}
