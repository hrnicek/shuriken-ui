<script lang="ts">
import type {
  AccordionRootProps,
  AccordionRootEmits,
} from 'reka-ui'
import type { BaseAccordionItemProps } from './BaseAccordionItem.vue'

export interface BaseAccordionProps extends AccordionRootProps {
  /** 
   * The accordion items to display.
   */
  items?: BaseAccordionItemProps[]

  /**
   * The variant of the accordion.
   *
   * @default 'default-high'
   */
  variant?: BaseAccordionItemProps['variant']
  
  /**
   * Defines the icon used for accordion item toggle action
   *
   * @default 'dot'
   */
  action?: BaseAccordionItemProps['action']
}
export interface BaseAccordionEmits extends AccordionRootEmits {}
export type BaseAccordionSlots = {
  default(): any
}
</script>


<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseAccordionProps>(), {
  action: undefined,
  variant: undefined,
})
const emits = defineEmits<BaseAccordionEmits>()
const slots = defineSlots<BaseAccordionSlots>()

const forward = useForwardPropsEmits(reactiveOmit(props, ['items', 'variant', 'action']))
</script>

<template>
  <AccordionRoot v-bind="forward">
    <slot>
      <BaseAccordionItem
        v-for="item in props.items"
        v-bind="item"
        :variant
        :action
      />
    </slot>
  </AccordionRoot>
</template>
