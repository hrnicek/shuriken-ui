import type { 
  TabsRootProps,
  TabsRootEmits,
} from 'reka-ui'
import type { BaseTabsTriggerProps } from './BaseTabsTrigger'

export interface BaseTabsProps extends TabsRootProps {
  /**
   * An array of tab objects that contain a label and value
   */
  tabs?: BaseTabsTriggerProps[]

  /**
   * Accessible label for the tabs
   */
  label?: string

  /**
   * Defines the color of the active tab
   *
   * @default 'default'
   */
  variant?: 'primary' | 'dark' | 'muted'

  /**
   * The horizontal alignment of the tabs.
   *
   * @default 'start'
   */
  justify?: 'start' | 'center' | 'end'

  /**
   * The radius of the boxed tab.
   *
   * @default 'md'
   */
   rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The type of tabs to display..
   *
   * @default 'tabs'
   */
  type?: 'tabs' | 'box'
}
export interface BaseTabsEmits extends TabsRootEmits {}
export type BaseTabsSlots = {
  default(): any
  trigger(): any
}
export interface BaseTabsContext {
  variant: NonNullable<BaseTabsProps['variant']>
  justify: NonNullable<BaseTabsProps['justify']>
  rounded: NonNullable<BaseTabsProps['rounded']>
  type: NonNullable<BaseTabsProps['type']>
}
export interface BaseTabsConfig {
  variant: NonNullable<BaseTabsProps['variant']>
  justify: NonNullable<BaseTabsProps['justify']>
  rounded: NonNullable<BaseTabsProps['rounded']>
  type: NonNullable<BaseTabsProps['type']>
}