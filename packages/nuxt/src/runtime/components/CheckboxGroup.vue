<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import type { BaseCheckboxGroupProps, BaseCheckboxGroupEmits, BaseCheckboxGroupSlots } from '../types';
import type { AcceptableValue } from 'reka-ui'
import { useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(defineProps<BaseCheckboxGroupProps<T>>(), {
  modelValue: undefined,
  name: undefined,
  orientation: undefined,
})
const emits = defineEmits<BaseCheckboxGroupEmits<T>>()
const slots = defineSlots<BaseCheckboxGroupSlots>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <CheckboxGroupRoot v-bind="forward">
    <slot />
  </CheckboxGroupRoot>
</template>