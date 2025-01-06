<script setup lang="ts">
import type { BaseAutocompleteSeparatorProps } from '@shuriken-ui/types';
import { BaseAutocompleteSeparator as theme } from '@shuriken-ui/theme-iga';
import { useForwardProps } from 'reka-ui';
import { injectBaseAutocompleteContext } from './Autocomplete.vue'

const context = injectBaseAutocompleteContext()
const props = withDefaults(defineProps<BaseAutocompleteSeparatorProps>(), {})
const forward = useForwardProps(props);
</script>

<template>
  <ComboboxSeparator
    v-bind="forward"
    class="my-2 block h-px w-full border-t"
    :class="[
      context.variant && theme.variants[context.variant]
    ]"
  />
</template>
