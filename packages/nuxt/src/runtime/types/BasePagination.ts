import type {
  PaginationRootEmits,
  PaginationRootProps,
} from 'reka-ui'

export interface BasePaginationProps extends PaginationRootProps {
  /**
   * The color of the pagination active button.
   */
  variant?: 'primary' | 'dark'

  /**
   * The size of the pagination buttons.
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * The radius of the pagination.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}
export interface BasePaginationEmits extends PaginationRootEmits {}
export interface BasePaginationSlots {
  default: (props: { items: Array<{ type: 'ellipsis' } | { type: 'page', value: number }> }) => any
  ellipsis: () => any
  page: (props: { page: number }) => any
}
export interface BasePaginationConfig {
  variant: NonNullable<BasePaginationProps['variant']>
  size: NonNullable<BasePaginationProps['size']>
  rounded: NonNullable<BasePaginationProps['rounded']>
}

export interface BasePaginationContext {
  variant: NonNullable<BasePaginationProps['variant']>
  size: NonNullable<BasePaginationProps['size']>
  rounded: NonNullable<BasePaginationProps['rounded']>
}
