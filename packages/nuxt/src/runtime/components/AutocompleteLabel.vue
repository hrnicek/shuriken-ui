<script lang="ts">
import type { ComboboxLabelProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { ComboboxLabel, useForwardProps } from 'reka-ui'

export interface BaseAutocompleteLabelProps extends ComboboxLabelProps {
  /**
   * The label to display for the Autocomplete.
   */
  label?: string
}
export interface BaseAutocompleteLabelSlots {
  default: () => any
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseAutocompleteLabelProps>(), {
  label: '',
})
const slots = defineSlots<BaseAutocompleteLabelSlots>()

const forward = useForwardProps(reactiveOmit(props, ['label']))
</script>

<template>
  <ComboboxLabel
    v-bind="forward"
    class="font-sans font-medium uppercase px-2 pt-4 first:pt-2 pb-2 text-xs text-muted-400 dark:text-muted-500"
  >
    <slot>
      {{ props.label }}
    </slot>
  </ComboboxLabel>
</template>
