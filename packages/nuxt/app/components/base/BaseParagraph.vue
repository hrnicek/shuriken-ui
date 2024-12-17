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

const size = useNuiDefaultProperty(props, 'BaseParagraph', 'size')
const lead = useNuiDefaultProperty(props, 'BaseParagraph', 'lead')
const weight = useNuiDefaultProperty(props, 'BaseParagraph', 'weight')
const tracking = useNuiDefaultProperty(props, 'BaseParagraph', 'tracking')
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
