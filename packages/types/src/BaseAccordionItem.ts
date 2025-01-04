import type { 
  AccordionItemProps,
  AccordionHeaderProps,
  AccordionContentProps,
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
    header?: AccordionHeaderProps & Record<string, any>
    content?: AccordionContentProps & Record<string, any>
    trigger?: AccordionTriggerProps & Record<string, any>
  }
}

export type BaseAccordionItemSlots = {
  default(): any
  title(): any
  action(): any
}
