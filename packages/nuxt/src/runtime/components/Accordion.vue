<script setup lang="ts">
import type { BaseAccordionProps, BaseAccordionEmits, BaseAccordionSlots } from '../types'
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
