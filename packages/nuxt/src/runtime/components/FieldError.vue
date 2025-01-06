<script setup lang="ts">
import type { BaseFieldError } from '../types';
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

import { injectBaseFieldContext } from './Field.vue'

const props = withDefaults(defineProps<BaseFieldError>(), {})
const forward = useForwardProps(reactiveOmit(props, []))
const emits = defineEmits<{
  'field-error': []
}>()

const { id, idError, state } = injectBaseFieldContext()
</script>

<template>
  <Label
    v-if="state === 'error'"
    v-bind="forward"
    :id="idError"
    :for="id"
    class="font-sans text-xs font-medium leading-none text-destructive-base dark:text-destructive-light"
  >
    <slot />
  </Label>
</template>