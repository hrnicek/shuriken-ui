<script lang="ts">
import type { BaseTextProps } from './BaseText.vue'

export interface BaseHeadingProps extends BaseTextProps {}
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { leads, sizes, trackings, weights } from './BaseText.vue'

const props = withDefaults(defineProps<BaseHeadingProps>(), {
  as: undefined,
  size: undefined,
  lead: undefined,
  weight: undefined,
  tracking: undefined,
})
const slots = defineSlots<{
  default(): any
}>()

const size = useNuiDefaultProperty(props, 'BaseHeading', 'size')
const lead = useNuiDefaultProperty(props, 'BaseHeading', 'lead')
const weight = useNuiDefaultProperty(props, 'BaseHeading', 'weight')
const tracking = useNuiDefaultProperty(props, 'BaseHeading', 'tracking')
const forward = useForwardProps(reactiveOmit(props, ['size', 'lead', 'weight', 'tracking']))
</script>

<template>
  <Primitive 
    v-bind="forward"
    class="font-sans"
    :class="[
      size && sizes[size],
      lead && leads[lead],
      weight && weights[weight],
      tracking && trackings[tracking],
    ]"
  >
    <slot />
  </Primitive>
</template>
