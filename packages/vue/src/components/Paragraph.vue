<script lang="ts">
import type { BaseTextConfig, BaseTextProps } from './Text.vue'
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { leads, sizes, trackings, weights } from './Text.vue'

export interface BaseParagraphProps extends BaseTextProps {}
export interface BaseParagraphSlots {
  default: () => any
}
export type BaseParagraphConfig = BaseTextConfig & {
  as: BaseParagraphProps['as']
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseParagraphProps>(), {
  as: 'p',
  size: 'md',
  lead: 'normal',
  weight: 'normal',
  tracking: 'normal',
})
const slots = defineSlots<BaseParagraphSlots>()

const forward = useForwardProps(reactiveOmit(props, ['size', 'lead', 'weight', 'tracking']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="font-sans"
    :class="[
      props.size && sizes[props.size],
      props.lead && leads[props.lead],
      props.weight && weights[props.weight],
      props.tracking && trackings[props.tracking],
    ]"
  >
    <slot />
  </Primitive>
</template>
