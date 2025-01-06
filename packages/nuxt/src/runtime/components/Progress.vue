<script setup lang="ts">
import type { BaseProgressEmits, BaseProgressProps, BaseProgressSlots } from '../types';
import { BaseProgress as theme } from '@shuriken-ui/theme-iga';
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseProgressProps>(), {
  size: theme.defaults.size,
  variant: theme.defaults.variant,
  rounded: theme.defaults.rounded,

  max: undefined,
  modelValue: undefined,
  getValueLabel: undefined,
})
const emits = defineEmits<BaseProgressEmits>()
const slots = defineSlots<BaseProgressSlots>()

const forward = useForwardPropsEmits(reactiveOmit(props, ['variant', 'rounded', 'size']), emits)
</script>

<template>
  <ProgressRoot
    v-bind="forward"
    v-slot="{ modelValue }"
    class="relative w-full overflow-hidden"
    :class="[
      props.size && theme.sizes[props.size],
      props.variant && theme.trackVariants[props.variant],
      props.rounded && theme.radiuses[props.rounded],
    ]"
  >
    <ProgressIndicator
      class="absolute start-0 top-0 h-full w-full transition-all duration-300"
      :class="[
        typeof modelValue !== 'number' && 'nui-progress-indeterminate animate-nui-progress-indeterminate',
        props.variant && theme.variants[props.variant],
        props.rounded && theme.radiuses[props.rounded],
      ]"
      :style="typeof modelValue === 'number' && `transform: translateX(-${100 - modelValue}%)`"
    />
  </ProgressRoot>
</template>
