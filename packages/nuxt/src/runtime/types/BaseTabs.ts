import type {
  TabsRootEmits,
  TabsRootProps,
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
   */
  variant?: 'primary' | 'dark' | 'muted'

  /**
   * The horizontal alignment of the tabs.
   */
  justify?: 'start' | 'center' | 'end'

  /**
   * The radius of the boxed tab.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The type of tabs to display..
   */
  type?: 'tabs' | 'box'
}
export interface BaseTabsEmits extends TabsRootEmits {}
export interface BaseTabsSlots {
  default: () => any
  trigger: () => any
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
