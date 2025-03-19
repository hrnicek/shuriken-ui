<script lang="ts">
import type { SelectGroupProps } from 'reka-ui'
import { SelectLabel, useForwardProps } from 'reka-ui'

export interface BaseSelectGroupProps extends SelectGroupProps {}
export interface BaseSelectGroupSlots {
  default: () => any
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseSelectGroupProps>(), {})
const slots = defineSlots<BaseSelectGroupSlots>()

const forward = useForwardProps(props)
</script>

<template>
  <SelectLabel
    v-bind="forward"
  >
    <slot />
  </SelectLabel>
</template>
