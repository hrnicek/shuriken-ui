<script lang="ts">
import type { SelectGroupProps } from 'reka-ui'

export interface BaseSelectGroupProps extends SelectGroupProps {}
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui';

const props = withDefaults(defineProps<BaseSelectGroupProps>(), {})
const slots = defineSlots<{
  default(): any
}>()

const forward = useForwardProps(props);
</script>

<template>
  <SelectLabel
    v-bind="forward"
  >
    <slot />
  </SelectLabel>
</template>