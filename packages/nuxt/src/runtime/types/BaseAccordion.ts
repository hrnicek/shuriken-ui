import type {
  AccordionRootEmits,
  AccordionRootProps,
} from 'reka-ui'
import type { BaseAccordionItemProps } from './BaseAccordionItem'

export interface BaseAccordionProps extends AccordionRootProps {
  /**
   * The accordion items to display.
   */
  items?: BaseAccordionItemProps[]

  /**
   * The variant of the accordion.
   */
  variant?: BaseAccordionItemProps['variant']

  /**
   * Defines the icon used for accordion item toggle action
   */
  action?: BaseAccordionItemProps['action']
}

export interface BaseAccordionEmits extends AccordionRootEmits {}

export interface BaseAccordionSlots {
  default: () => any
}

export interface BaseAccordionConfig {
  variant: NonNullable<BaseAccordionProps['variant']>
  action: NonNullable<BaseAccordionProps['action']>
}
