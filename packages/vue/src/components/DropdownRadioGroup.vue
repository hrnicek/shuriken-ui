<script lang="ts">
import type {
  DropdownMenuRadioGroupEmits,
  DropdownMenuRadioGroupProps,
} from 'reka-ui'
import { DropdownMenuRadioGroup, useForwardPropsEmits } from 'reka-ui'

export interface BaseDropdownRadioGroupProps extends DropdownMenuRadioGroupProps {}
export interface BaseDropdownRadioGroupEmits extends DropdownMenuRadioGroupEmits {}
export interface BaseDropdownRadioGroupSlots {
  default: () => any
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseDropdownRadioGroupProps>(), {
  modelValue: undefined,
})
const emits = defineEmits<BaseDropdownRadioGroupEmits>()
const slots = defineSlots<BaseDropdownRadioGroupSlots>()
const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuRadioGroup v-bind="forward">
    <slot />
  </DropdownMenuRadioGroup>
</template>
