<script lang="ts">
import type { SelectLabelProps } from 'reka-ui'

export interface BaseSelectLabelProps extends SelectLabelProps {
  /**
   * The label to display for the dropdown.
   */
  label?: string
}
export type BaseSelectLabelSlots = {
  default(): any
}
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui';
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseSelectLabelProps>(), {
  label: '',
})
const slots = defineSlots<BaseSelectLabelSlots>()

const forward = useForwardProps(reactiveOmit(props, ['label']));
</script>

<template>
  <SelectLabel
    v-bind="forward"
  >
    <slot>
      {{ props.label }}
    </slot>
  </SelectLabel>
</template>