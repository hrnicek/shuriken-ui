<script lang="ts">
import type {
  ComboboxSeparatorProps,
} from 'reka-ui';

export interface BaseAutocompleteSeparatorProps extends ComboboxSeparatorProps {}

export const variants = {
  'default-low': 'border-muted-200 dark:border-muted-700',
  'default-high': 'border-muted-200 dark:border-muted-800',
  'muted-low': 'border-muted-300 dark:border-muted-700',
  'muted-high': 'border-muted-300 dark:border-muted-800',
  'primary-low': 'border-muted-200 dark:border-muted-700',
  'primary-high': 'border-muted-200 dark:border-muted-800',
  'none': '',
} as const
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui';
import { injectBaseAutocompleteContext } from './BaseAutocomplete.vue'

const context = injectBaseAutocompleteContext()
const props = withDefaults(defineProps<BaseAutocompleteSeparatorProps>(), {})
const forward = useForwardProps(props);
</script>

<template>
  <ComboboxSeparator
    v-bind="forward"
    class="my-2 block h-px w-full border-t"
    :class="[
      context.variant.value && variants[context.variant.value]
    ]"
  />
</template>
