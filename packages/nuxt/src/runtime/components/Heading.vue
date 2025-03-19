<script lang="ts">
import type { BaseTextProps } from './Text.vue'
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { leads, sizes, trackings, weights } from './Text.vue'

export interface BaseHeadingProps extends BaseTextProps {}
export interface BaseHeadingSlots {
  default: () => any
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseHeadingProps>(), {
  as: undefined,
  size: 'md',
  lead: 'normal',
  weight: 'normal',
  tracking: 'normal',
})
const slots = defineSlots<BaseHeadingSlots>()

const forward = useForwardProps(reactiveOmit(props, ['size', 'lead', 'weight', 'tracking']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="font-heading"
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
