<script setup lang="ts">
import type { BaseCardProps, BaseCardSlots } from '../types'
import { BaseCard as theme } from '@shuriken-ui/theme-iga'
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseCardProps>(), {
  shadow: undefined,
  rounded: theme.defaults.rounded,
  variant: theme.defaults.variant,
})
const slots = defineSlots<BaseCardSlots>()

const forward = useForwardProps(reactiveOmit(props, ['rounded', 'shadow', 'variant']))
</script>

<template>
  <Primitive 
    v-bind="forward"
    class="w-full"
    :class="[
      props.rounded && theme.radiuses[props.rounded],
      props.variant && theme.variants[props.variant],
      props.shadow && theme.shadows[props.shadow],
    ]"
  >
    <slot />
  </Primitive>
</template>
