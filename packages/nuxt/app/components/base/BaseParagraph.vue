<script lang="ts">
import type { BaseTextProps } from './BaseText.vue'

export interface BaseParagraphProps extends BaseTextProps {}
export type BaseParagraphSlots = {
  default(): any
}
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { leads, sizes, trackings, weights } from './BaseText.vue'

const props = withDefaults(defineProps<BaseParagraphProps>(), {
  as: undefined,
  size: undefined,
  lead: undefined,
  weight: undefined,
  tracking: undefined,
})
const slots = defineSlots<BaseParagraphSlots>()

const size = useNuiConfig('BaseParagraph', 'size', () => props.size)
const lead = useNuiConfig('BaseParagraph', 'lead', () => props.lead)
const weight = useNuiConfig('BaseParagraph', 'weight', () => props.weight)
const tracking = useNuiConfig('BaseParagraph', 'tracking', () => props.tracking)
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
