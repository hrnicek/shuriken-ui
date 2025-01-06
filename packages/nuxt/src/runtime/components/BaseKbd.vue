<script setup lang="ts">
import type { BaseKbdProps, BaseKbdSlots } from '@shuriken-ui/types';
import { BaseKbd as theme } from '@shuriken-ui/theme-iga';
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseKbdProps>(), {
  as: 'kbd',
  variant: theme.defaults.variant,
  size: theme.defaults.size,
})
const slots = defineSlots<BaseKbdSlots>()

const forward = useForwardProps(reactiveOmit(props, ['variant', 'size']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="font-mono inline-flex justify-center items-center rounded-md"
    :class="[
      props.variant && theme.variants[props.variant],
      props.size && theme.sizes[props.size],
    ]"
  >
    <slot />
  </Primitive>
</template>
