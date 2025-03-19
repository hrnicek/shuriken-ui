<script lang="ts">
import type {
  AccordionRootEmits,
  AccordionRootProps,
} from 'reka-ui'
import type { BaseAccordionItemProps } from './AccordionItem.vue'

import { reactiveOmit } from '@vueuse/core'
import { AccordionRoot, useForwardPropsEmits } from 'reka-ui'

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
</script>

<script setup lang="ts">
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
        v-for="(item, key) in props.items"
        v-bind="item"
        :key
        :variant
        :action
      />
    </slot>
  </AccordionRoot>
</template>
