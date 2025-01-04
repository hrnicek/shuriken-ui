<script setup lang="ts">
import type { BaseSelectGroupProps, BaseSelectGroupSlots } from '@shuriken-ui/types';
import { useForwardProps } from 'reka-ui';

const props = withDefaults(defineProps<BaseSelectGroupProps>(), {})
const slots = defineSlots<BaseSelectGroupSlots>()

const forward = useForwardProps(props);
</script>

<template>
  <SelectLabel
    v-bind="forward"
  >
    <slot />
  </SelectLabel>
</template>