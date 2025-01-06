import type { RouteLocationRaw } from '#vue-router'

export interface BaseButtonProps {
  /** The location to which the button should navigate when clicked. This is only applicable if the button is a link. */
  to?: RouteLocationRaw

  /** Using href instead of to result in a native anchor with no router functionality. */
  href?: string

  /** The value of the 'rel' attribute of the button. This attribute is used to specify the relationship of the linked document with the current document. */
  rel?: string

  /** The value of the 'target' attribute of the button. This attribute is used to specify where to open the linked document. */
  target?: string

  /** The type of the button. */
  type?: 'button' | 'submit' | 'reset'

  /** Whether the button is in a loading state. */
  loading?: boolean

  /**
   * The variant of the button..
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted' | 'ghost' | 'muted' | 'primary' | 'destructive' | 'dark' | 'link' | 'none'

  /**
   * The size of the button
   *
   * @default 'md'
   */
  size?: 'sm' | 'icon-sm' | 'md' | 'icon-md' | 'lg' | 'icon-lg' | 'xl' | 'icon-xl'

  /**
   * The radius of the button.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}
export type BaseButtonSlots = {
  default(): any
}
export type BaseButtonConfig = {
  rounded: NonNullable<BaseButtonProps['rounded']>
  size: NonNullable<BaseButtonProps['size']>
  variant: NonNullable<BaseButtonProps['variant']>
}