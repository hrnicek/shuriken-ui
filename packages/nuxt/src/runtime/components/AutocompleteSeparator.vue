<script lang="ts">
import type {
  ComboboxSeparatorProps,
} from 'reka-ui'
import type { BaseAutocompleteContext } from './Autocomplete.vue'
import { ComboboxSeparator, useForwardProps } from 'reka-ui'
import { injectBaseAutocompleteContext } from './Autocomplete.vue'

export interface BaseAutocompleteSeparatorProps extends ComboboxSeparatorProps {}

export const variants = {
  default: 'border-portal-default-border',
  muted: 'border-portal-muted-border',
  none: '',
} as const satisfies Record<BaseAutocompleteContext['variant'], string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseAutocompleteSeparatorProps>(), {})
const context = injectBaseAutocompleteContext()
const forward = useForwardProps(props)
</script>

<template>
  <ComboboxSeparator
    v-bind="forward"
    class="my-2 block h-px w-full border-t"
    :class="[
      context.variant && variants[context.variant],
    ]"
  />
</template>
