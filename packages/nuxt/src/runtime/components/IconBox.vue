<script setup lang="ts">
import type { BaseIconBoxProps, BaseIconBoxSlots } from '../types';
import { BaseIconBox as theme } from '@shuriken-ui/theme-iga';
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseIconBoxProps>(), {
  mask: undefined,

  variant: theme.defaults.variant,
  size: theme.defaults.size,
  rounded: theme.defaults.rounded,
})
const slots = defineSlots<BaseIconBoxSlots>()

const forward = useForwardProps(reactiveOmit(props, ['rounded', 'size', 'variant', 'mask']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="relative inline-flex shrink-0 items-center justify-center"
    :class="[
      props.variant && theme.variants[props.variant],
      props.size && theme.sizes[props.size],
      props.rounded && theme.radiuses[props.rounded],
      props.rounded === 'none' && props.mask && theme.masks[props.mask],
    ]"
  >
    <slot />
  </Primitive>
</template>
