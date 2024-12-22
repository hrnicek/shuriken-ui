<script lang="ts">
import type {
  ComboboxSeparatorProps,
} from 'reka-ui';

export interface BaseAutocompleteSeparatorProps extends ComboboxSeparatorProps {}

export const variants = {
  default: 'border-muted-200 dark:border-muted-800',
  muted: 'border-muted-300 dark:border-muted-800',
  none: '',
} as const

// @todo: low-contrast-theme
// export const variants = {
//  default: 'border-muted-200 dark:border-muted-700',
//  muted: 'border-muted-300 dark:border-muted-700',
//   none: '',
// } as const
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
