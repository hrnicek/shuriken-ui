import type {
  PaginationRootProps,
  PaginationRootEmits,
  PaginationListProps,
  PaginationListItemProps,
  PaginationEllipsisProps,
  PaginationNextProps,
  PaginationPrevProps,
} from 'reka-ui'

export interface BasePaginationProps extends PaginationRootProps {
  /**
   * The ellipsis to show when there are too many links.
   */
  ellipsis?: string

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

  /**
   * Wether the pagination is wrapped.
   */
  wrapped?: boolean

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    list?: PaginationListProps
    item?: PaginationListItemProps
    ellipsis?: PaginationEllipsisProps
    prev?: PaginationPrevProps
    next?: PaginationNextProps
  }
}
export interface BasePaginationEmits extends PaginationRootEmits {}
export type BasePaginationSlots = {
  default(): any
  ellipsis(): any
  page(props: { page: number }): any
  'before-pagination'(): any
  'after-pagination'(): any
  'before-navigation'(): any
  'after-navigation'(): any
  'previous-icon'(): any
  'next-icon'(): any
}
export type BasePaginationConfig = {
  variant: NonNullable<BasePaginationProps['variant']>
  size: NonNullable<BasePaginationProps['size']>
  rounded: NonNullable<BasePaginationProps['rounded']>
}
