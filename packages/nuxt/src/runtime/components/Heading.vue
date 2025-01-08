<script setup lang="ts">
import type { BaseHeadingProps, BaseHeadingSlots } from '../types';
import { BaseHeading as theme } from '#build/shuriken-ui/theme';
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseHeadingProps>(), {
  as: undefined,
  size: theme.defaults.size,
  lead: theme.defaults.lead,
  weight: theme.defaults.weight,
  tracking: theme.defaults.tracking,
})
const slots = defineSlots<BaseHeadingSlots>()

const forward = useForwardProps(reactiveOmit(props, ['size', 'lead', 'weight', 'tracking']))
</script>

<template>
  <Primitive 
    v-bind="forward"
    class="font-heading"
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
