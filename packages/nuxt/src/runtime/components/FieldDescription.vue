<script setup lang="ts">
import type { BaseFieldDescription } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'

import { injectBaseFieldContext } from './Field.vue'

const props = withDefaults(defineProps<BaseFieldDescription>(), {})
const emits = defineEmits<{
  'field-description': []
}>()
const forward = useForwardProps(reactiveOmit(props, []))
const { id, idDescription } = injectBaseFieldContext()
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
