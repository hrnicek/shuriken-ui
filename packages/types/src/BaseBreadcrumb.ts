import type { RouteLocationRaw } from 'vue-router'

export interface BaseBreadcrumbProps {
  /**
   * The items to display in the breadcrumb.
   *
   * If not provided, the breadcrumb will be generated
   * from the current route using page meta under `breadcrumb` key.
   */
  items?: {
    /**
     * The route to navigate to when the item is clicked.
     */
    to?: RouteLocationRaw

    /**
     * The label to display for the item.
     */
    label?: string

    /**
     * Whether to hide the label for the item.
     */
    hideLabel?: boolean

    /**
     * CSS classes to apply to the icon.
     */
    iconClasses?: string | string[]
  }[]

  /**
   * Defines the hover color of the breadcrumb links
   *
   * @default 'primary'
   */
  variant?: 'primary' | 'dark'
}
export type BaseBreadcrumbSlots = {
  default(): any
  link(props: { item: any, index: number }): any
  label(props: { item: any, index: number }): any
}
export type BaseBreadcrumbConfig = {
  variant: NonNullable<BaseBreadcrumbProps['variant']>
}
