<script lang="ts">
import type { SelectLabelProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { SelectLabel, useForwardProps } from 'reka-ui'

export interface BaseSelectLabelProps extends SelectLabelProps {
  /**
   * The label to display for the dropdown.
   */
  label?: string
}
export interface BaseSelectLabelSlots {
  default: () => any
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseSelectLabelProps>(), {
  label: '',
})
const slots = defineSlots<BaseSelectLabelSlots>()

const forward = useForwardProps(reactiveOmit(props, ['label']))
</script>

<template>
  <SelectLabel
    v-bind="forward"
    class="font-sans font-medium uppercase px-2 pt-4 first:pt-2 pb-2 text-xs text-muted-400 dark:text-muted-500"
  >
    <slot>
      {{ props.label }}
    </slot>
  </SelectLabel>
</template>
