<script setup lang="ts">
import type { BaseAccordionEmits, BaseAccordionProps, BaseAccordionSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'

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
