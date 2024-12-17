<script lang="ts">
import type { 
  RadioGroupRootProps,
  RadioGroupRootEmits,
} from 'reka-ui'

export interface BaseCheckboxGroupProps extends RadioGroupRootProps {}
export interface BaseCheckboxGroupEmits extends RadioGroupRootEmits {}
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
  <RadioGroupRoot v-bind="forward">
    <slot />
  </RadioGroupRoot>
</template>