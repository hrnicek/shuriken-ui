<script setup lang="ts">
import type { BaseRadioGroupEmits, BaseRadioGroupProps, BaseRadioGroupSlots } from '@shuriken-ui/types';
import { useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(defineProps<BaseRadioGroupProps>(), {
  modelValue: undefined,
  name: undefined,
  orientation: undefined,
})
const emits = defineEmits<BaseRadioGroupEmits>()
const slots = defineSlots<BaseRadioGroupSlots>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <RadioGroupRoot v-bind="forward">
    <slot />
  </RadioGroupRoot>
</template>