<script setup lang="ts">
import type { BaseDropdownRadioGroupProps, BaseDropdownRadioGroupEmits, BaseDropdownRadioGroupSlots } from '../types';
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