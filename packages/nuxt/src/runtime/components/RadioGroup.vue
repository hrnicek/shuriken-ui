<script setup lang="ts">
import type { BaseRadioGroupEmits, BaseRadioGroupProps, BaseRadioGroupSlots } from '../types'
import { useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(defineProps<BaseRadioGroupProps>(), {
  modelValue: undefined,
  name: undefined,
  orientation: undefined,

  items: () => [],
})
const emits = defineEmits<BaseRadioGroupEmits>()
const slots = defineSlots<BaseRadioGroupSlots>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <RadioGroupRoot v-bind="forward">
    <slot>
      <BaseRadio
        v-for="(item, key) in props.items"
        :key
        v-bind="item"
      />
    </slot>
  </RadioGroupRoot>
</template>
