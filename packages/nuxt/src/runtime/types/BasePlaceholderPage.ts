import type { PrimitiveProps } from 'reka-ui'

export interface BasePlaceholderPageProps extends PrimitiveProps {
  /**
   * The title of the placeholder.
   */
  title: string

  /**
   * The subtitle of the placeholder.
   */
  subtitle?: string

  /**
   * The size of the featured image.
   *
   * @default 'xs'
   */
  imageSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}
export interface BasePlaceholderPageSlots {
  default: () => any
  image: () => any
}
export interface BasePlaceholderPageConfig {
  imageSize: NonNullable<BasePlaceholderPageProps['imageSize']>
}
