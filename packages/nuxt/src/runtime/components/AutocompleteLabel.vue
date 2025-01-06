<script setup lang="ts">
import type { BaseAutocompleteLabelProps, BaseAutocompleteLabelSlots } from '@shuriken-ui/types';
import { useForwardProps } from 'reka-ui';
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseAutocompleteLabelProps>(), {
  label: '',
})
const slots = defineSlots<BaseAutocompleteLabelSlots>()

const forward = useForwardProps(reactiveOmit(props, ['label']));
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