import type {
  AccordionContentProps,
  AccordionHeaderProps,
  AccordionItemProps,
  AccordionTriggerProps,
} from 'reka-ui'

export interface BaseAccordionItemProps extends AccordionItemProps {
  /**
   * The title of the accordion item.
   */
  title?: string
  /**
   * The content of the accordion item.
   */
  content?: string

  /**
   * The variant of the accordion.
   */
  variant?: 'default'

  /**
   * Defines the icon used for accordion item toggle action
   */
  action?: 'dot' | 'chevron' | 'plus'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    header?: AccordionHeaderProps
    content?: AccordionContentProps
    trigger?: AccordionTriggerProps
  }

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    header?: string | string[]
    content?: string | string[]
    trigger?: string | string[]
  }
}

export interface BaseAccordionItemSlots {
  default: () => any
  title: () => any
  action: () => any
}
