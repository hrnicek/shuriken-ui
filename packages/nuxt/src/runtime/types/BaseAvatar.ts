import type {
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarRootProps,
} from 'reka-ui'

export interface BaseAvatarProps extends AvatarRootProps {
  /**
   * The URL of the image to display.
   */
  src?: string

  /**
   * The URL of a dark version of the image to display when the component is in dark mode.
   */
  srcDark?: string

  /**
   * The URL of a badge to display on top of the image.
   */
  badgeSrc?: string

  /**
   * The alt text of the image.
   */
  alt?: string

  /**
   * The text to display below the image.
   */
  text?: string

  /**
   * The size of the image.
   */
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

  /**
   * The radius of the image.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * Applies an svg mask from the available presets. (needs rounded to be set to `none`).
   */
  mask?: 'hex' | 'hexed' | 'deca' | 'blob' | 'diamond'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    image?: AvatarImageProps
    dark?: AvatarImageProps
    fallback?: AvatarFallbackProps
  }

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    root?: string | string[]
    image?: string | string[]
    dark?: string | string[]
    fallback?: string | string[]
    badge?: string | string[]
  }
}
export interface BaseAvatarSlots {
  default: () => any
  badge: () => any
}
export interface BaseAvatarConfig {
  rounded: NonNullable<BaseAvatarProps['rounded']>
  size: NonNullable<BaseAvatarProps['size']>
}
