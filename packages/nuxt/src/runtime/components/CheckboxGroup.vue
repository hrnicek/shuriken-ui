<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import type { AcceptableValue } from 'reka-ui'
import type { BaseCheckboxGroupEmits, BaseCheckboxGroupProps, BaseCheckboxGroupSlots } from '../types'
import { useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(defineProps<BaseCheckboxGroupProps<T>>(), {
  modelValue: undefined,
  name: undefined,
  orientation: undefined,
  items: () => [],
})
const emits = defineEmits<BaseCheckboxGroupEmits<T>>()
const slots = defineSlots<BaseCheckboxGroupSlots>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <CheckboxGroupRoot v-bind="forward">
    <slot>
      <BaseCheckbox
        v-for="(item, key) in props.items"
        :key
        v-bind="item"
      />
    </slot>
  </CheckboxGroupRoot>
</template>
