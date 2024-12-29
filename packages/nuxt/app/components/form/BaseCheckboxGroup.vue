<script lang="ts">
import type { 
  CheckboxGroupRootProps,
  CheckboxGroupRootEmits,
  AcceptableValue,
} from 'reka-ui'

export interface BaseCheckboxGroupProps<T = AcceptableValue> extends CheckboxGroupRootProps<T> {}
export interface BaseCheckboxGroupEmits<T = AcceptableValue> extends CheckboxGroupRootEmits<T> {}
export type BaseCheckboxGroupSlots = {
  default(): any
}

</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
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