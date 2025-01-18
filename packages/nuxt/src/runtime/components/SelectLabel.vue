<script setup lang="ts">
import type { BaseSelectLabelProps, BaseSelectLabelSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'

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
