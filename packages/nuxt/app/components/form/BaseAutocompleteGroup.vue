<script lang="ts">
import type {
  ComboboxGroupProps,
} from 'reka-ui';

export interface BaseAutocompleteGroupProps extends ComboboxGroupProps {}
export type BaseAutocompleteGroupSlots = {
  default(): any
}
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui';
import { injectBaseAutocompleteContext } from './BaseAutocomplete.vue'

const props = withDefaults(defineProps<BaseAutocompleteGroupProps>(), {})
const slots = defineSlots<BaseAutocompleteGroupSlots>()

const forward = useForwardProps(props);

const context = injectBaseAutocompleteContext()
</script>

<template>
  <ComboboxGroup v-bind="forward">
    <slot />
  </ComboboxGroup>
</template>
