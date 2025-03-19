<script lang="ts">
import type {
  AcceptableValue,
  CheckboxGroupRootEmits,
  CheckboxGroupRootProps,
} from 'reka-ui'
import type { BaseCheckboxProps } from './Checkbox.vue'
import { CheckboxGroupRoot, useForwardPropsEmits } from 'reka-ui'

export interface BaseCheckboxGroupProps<T = AcceptableValue> extends CheckboxGroupRootProps<T> {
  items?: BaseCheckboxProps[]
}
export interface BaseCheckboxGroupEmits<T = AcceptableValue> extends CheckboxGroupRootEmits<T> {}
export interface BaseCheckboxGroupSlots {
  default: () => any
}
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
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
