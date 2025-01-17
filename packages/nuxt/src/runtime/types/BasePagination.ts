import type {
  PaginationRootProps,
  PaginationRootEmits,
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
export type BasePaginationSlots = {
  default(props: { items: Array<{ type: 'ellipsis' } | { type: 'page', value: number }> }): any
  ellipsis(): any
  page(props: { page: number }): any
}
export type BasePaginationConfig = {
  variant: NonNullable<BasePaginationProps['variant']>
  size: NonNullable<BasePaginationProps['size']>
  rounded: NonNullable<BasePaginationProps['rounded']>
}

export type BasePaginationContext = {
  variant: NonNullable<BasePaginationProps['variant']>
  size: NonNullable<BasePaginationProps['size']>
  rounded: NonNullable<BasePaginationProps['rounded']>
}
