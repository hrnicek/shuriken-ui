import type { PrimitiveProps } from 'reka-ui';

export interface BaseMessageProps extends PrimitiveProps {
  /**
   * The message to display.
   */
  message?: string

  /**
   * Whether to show an icon, or the name of the icon to display.
   */
  icon?: string

  // /**
  //  * Default icons to apply to the messages, when the icon is active.
  //  */
  // defaultIcons?: {
  //   /**
  //    * The default icon
  //    */
  //   'default'?: string

  //   /**
  //    * The muted icon
  //    */
  //   'muted'?: string

  //   /**
  //    * The info icon
  //    */
  //   'info'?: string

  //   /**
  //    * The success icon
  //    */
  //   'success'?: string

  //   /**
  //    * The warning icon
  //    */
  //   'warning'?: string

  //   /**
  //    * The destructive icon
  //    */
  //   'destructive'?: string

  //   /**
  //    * The primary icon
  //    */
  //   'primary'?: string
  // }

  /**
   * The icon to show in the close button
   */
  closeIcon?: string

  /**
   * Whether to show a close button.
   */
  closable?: boolean

  /**
   * The variant of the message.
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted' | 'primary' | 'info' | 'success' | 'warning' | 'destructive'

  /**
   * The radius of the message.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}
export interface BaseMessageEmits {
  close: []
}
export type BaseMessageSlots = {
  default(): any
  icon(): any
  'close-button'(): any
}
export type BaseMessageConfig = {
  variant: NonNullable<BaseMessageProps['variant']>
  rounded: NonNullable<BaseMessageProps['rounded']>
}
