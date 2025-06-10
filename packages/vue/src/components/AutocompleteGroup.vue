<script lang="ts">
import type {
  ComboboxGroupProps,
} from 'reka-ui'
import { ComboboxGroup, useForwardProps } from 'reka-ui'

export interface BaseAutocompleteGroupProps extends ComboboxGroupProps {}
export interface BaseAutocompleteGroupSlots {
  default: () => any
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseAutocompleteGroupProps>(), {})
const slots = defineSlots<BaseAutocompleteGroupSlots>()

const forward = useForwardProps(props)
</script>

<template>
  <ComboboxGroup v-bind="forward">
    <slot />
  </ComboboxGroup>
</template>
