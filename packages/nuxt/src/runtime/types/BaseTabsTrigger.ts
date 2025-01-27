import type { TabsTriggerProps } from 'reka-ui'

export interface BaseTabsTriggerProps extends TabsTriggerProps {
  /**
   * The label to display for the tab
   */
  label?: string

  /**
   * An optional icon to display next to the tab label
   */
  icon?: string

  /**
   * Defines the color of the active tab
   */
  variant?: 'primary' | 'dark' | 'muted'

  /**
   * The type of tabs to display..
   */
  type?: 'tabs' | 'box'
}
export interface BaseTabsTriggerSlots {
  default: () => any
}
