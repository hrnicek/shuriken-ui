<script lang="ts">
import type { SelectLabelProps } from 'reka-ui'

export interface BaseSelectLabelProps extends SelectLabelProps {
  /**
   * The label to display for the dropdown.
   */
  label?: string
}
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui';
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseSelectLabelProps>(), {
  label: '',
})
const slots = defineSlots<{
  default(): any
}>()

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