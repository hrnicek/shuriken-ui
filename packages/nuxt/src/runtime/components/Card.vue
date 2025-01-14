<script setup lang="ts">
import type { BaseCardProps, BaseCardSlots } from '../types'
import { BaseCard as theme } from '#build/shuriken-ui/theme'
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseCardProps>(), {
  rounded: theme.defaults.rounded,
  variant: theme.defaults.variant,
})
const slots = defineSlots<BaseCardSlots>()

const forward = useForwardProps(reactiveOmit(props, ['rounded', 'variant']))
</script>

<template>
  <Primitive 
    v-bind="forward"
    :class="[
      props.rounded && theme.radiuses[props.rounded],
      props.variant && theme.variants[props.variant],
    ]"
  >
    <slot />
  </Primitive>
</template>
