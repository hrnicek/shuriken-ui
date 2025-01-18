<script setup lang="ts">
import type { BaseAutocompleteSeparatorProps } from '../types'
import { useForwardProps } from 'reka-ui'
import { BaseAutocompleteSeparator as theme } from '../theme'
import { injectBaseAutocompleteContext } from './Autocomplete.vue'

const props = withDefaults(defineProps<BaseAutocompleteSeparatorProps>(), {})
const context = injectBaseAutocompleteContext()
const forward = useForwardProps(props)
</script>

<template>
  <ComboboxSeparator
    v-bind="forward"
    class="my-2 block h-px w-full border-t"
    :class="[
      context.variant && theme.variants[context.variant],
    ]"
  />
</template>
