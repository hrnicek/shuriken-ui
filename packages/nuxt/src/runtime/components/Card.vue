<script setup lang="ts">
import type { BaseCardProps, BaseCardSlots } from '../types'
import { BaseCard as theme } from '@shuriken-ui/theme-iga'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'
import { tm } from '../utils/tw-merge'

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
    :class="tm([
      props.rounded && theme.radiuses[props.rounded],
      props.variant && theme.variants[props.variant],
    ])"
  >
    <slot />
  </Primitive>
</template>
