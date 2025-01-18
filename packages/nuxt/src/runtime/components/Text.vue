<script setup lang="ts">
import type { BaseTextProps, BaseTextSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'
import { BaseText as theme } from '../theme'

const props = withDefaults(defineProps<BaseTextProps>(), {
  as: 'span',

  size: theme.defaults.size,
  lead: theme.defaults.lead,
  weight: theme.defaults.weight,
  tracking: theme.defaults.tracking,
})
const slots = defineSlots<BaseTextSlots>()

const forward = useForwardProps(reactiveOmit(props, ['size', 'lead', 'weight', 'tracking']))
</script>

<template>
  <Primitive
    v-bind="forward"
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
