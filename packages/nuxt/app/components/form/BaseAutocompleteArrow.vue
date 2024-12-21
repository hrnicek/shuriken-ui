<script lang="ts">
import type {
  ComboboxArrowProps,
} from 'reka-ui';

export interface BaseAutocompleteArrowProps extends ComboboxArrowProps {}

export const variants = {
  'default-low': 'fill-white dark:fill-muted-800 stroke-muted-200 dark:stroke-muted-600',
  'default-high': 'fill-white dark:fill-muted-950 stroke-muted-200 dark:stroke-muted-800',
  'muted-low': 'fill-muted-50 dark:fill-muted-800 stroke-muted-200 dark:stroke-muted-600',
  'muted-high': 'fill-muted-50 dark:fill-muted-950 stroke-muted-200 dark:stroke-muted-800',
  'primary-low': 'fill-white dark:fill-muted-800 stroke-muted-200 dark:stroke-muted-600',
  'primary-high': 'fill-white dark:fill-muted-950 stroke-muted-200 dark:stroke-muted-800',
  'none': '',
} as const
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui';
import { injectBaseAutocompleteContext } from './BaseAutocomplete.vue'

const context = injectBaseAutocompleteContext()
const props = withDefaults(defineProps<BaseAutocompleteArrowProps>(), {})
const forward = useForwardProps(props);
</script>

<template>
  <ComboboxArrow
    v-bind="forward" 
    :class="[
      context.variant.value && variants[context.variant.value]
    ]"
  />
</template>