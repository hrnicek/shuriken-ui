<script lang="ts">
import type {
  DropdownMenuRadioGroupProps,
  DropdownMenuRadioGroupEmits,
} from 'reka-ui';

export interface BaseDropdownRadioGroupProps extends DropdownMenuRadioGroupProps {}
export interface BaseDropdownRadioGroupEmits extends DropdownMenuRadioGroupEmits {}
export type BaseDropdownRadioGroupSlots = {
  default(): any
}
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui';

const props = withDefaults(defineProps<BaseDropdownRadioGroupProps>(), {
  modelValue: undefined,
})
const emits = defineEmits<BaseDropdownRadioGroupEmits>()
const slots = defineSlots<BaseDropdownRadioGroupSlots>()
const forward = useForwardPropsEmits(props, emits);
</script>

<template>
  <DropdownMenuRadioGroup v-bind="forward">
    <slot />
  </DropdownMenuRadioGroup>
</template>