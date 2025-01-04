<script setup lang="ts">
import type { BaseTagProps, BaseTagSlots } from '@shuriken-ui/types';
import { BaseTag as theme } from '@shuriken-ui/theme-iga';
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseTagProps>(), {
  as: 'span',
  variant: theme.defaults.variant,
  rounded: theme.defaults.rounded,
  size: theme.defaults.size,
})
const slots = defineSlots<BaseTagSlots>()

const forward = useForwardProps(reactiveOmit(props, ['variant', 'rounded', 'size']))
</script>

<template>
  <Primitive
    v-bind="forward" 
    class="flex-none text-xs font-medium"
    :class="[
      props.size && theme.sizes[props.size],
      props.rounded && theme.radiuses[props.rounded],
      props.variant && theme.variants[props.variant],
    ]"
  >
    <slot />
  </Primitive>
</template>
