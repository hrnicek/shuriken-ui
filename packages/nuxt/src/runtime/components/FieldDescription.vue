<script setup lang="ts">
import type { BaseFieldDescription } from '../types';
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

import { injectBaseFieldContext } from './Field.vue'

const props = withDefaults(defineProps<BaseFieldDescription>(), {})
const forward = useForwardProps(reactiveOmit(props, []))
const emits = defineEmits<{
  'field-description': []
}>()

const { id, idDescription, state } = injectBaseFieldContext()
</script>

<template>
  <Label
    v-bind="forward"
    :id="idDescription"
    :for="id"
    class="font-sans text-xs leading-tight text-field-description/90 dark:text-field-description"
  >
    <slot />
  </Label>
</template>