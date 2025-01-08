<script setup lang="ts">
import type { BaseParagraphProps, BaseParagraphSlots } from '../types';
import { BaseParagraph as theme } from '#build/shuriken-ui/theme';
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseParagraphProps>(), {
  as: theme.defaults.as,
  size: theme.defaults.size,
  lead: theme.defaults.lead,
  weight: theme.defaults.weight,
  tracking: theme.defaults.tracking,
})
const slots = defineSlots<BaseParagraphSlots>()

const forward = useForwardProps(reactiveOmit(props, ['size', 'lead', 'weight', 'tracking']))
</script>

<template>
  <Primitive 
    v-bind="forward"
    class="font-sans"
    :class="[
      props.size && theme.sizes[props.size],
      props.lead && theme.leads[props.lead],
      props.weight && theme.weights[props.weight],
      props.tracking && theme.trackings[props.tracking],
    ]"
  >
    <slot />
  </Primitive>
</template>
