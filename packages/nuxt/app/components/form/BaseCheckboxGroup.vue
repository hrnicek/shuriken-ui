<script lang="ts">
import type { 
  CheckboxGroupRootProps,
  CheckboxGroupRootEmits,
} from 'reka-ui'

export interface BaseCheckboxGroupProps extends CheckboxGroupRootProps {}
export interface BaseCheckboxGroupEmits extends CheckboxGroupRootEmits {}
export type BaseCheckboxGroupSlots = {
  default(): any
}
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(defineProps<BaseCheckboxGroupProps>(), {
  modelValue: undefined,
  name: undefined,
  orientation: undefined,
})
const emits = defineEmits<BaseCheckboxGroupEmits>()
const slots = defineSlots<BaseCheckboxGroupSlots>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <CheckboxGroupRoot v-bind="forward">
    <slot />
  </CheckboxGroupRoot>
</template>