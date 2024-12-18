<script lang="ts">
import type { LabelProps } from 'reka-ui';

export interface BaseFieldError extends LabelProps {}
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

import { injectBaseFieldContext } from './BaseField.vue'

const props = withDefaults(defineProps<BaseFieldError>(), {})
const forward = useForwardProps(reactiveOmit(props, []))
const emits = defineEmits<{
  'field-error': []
}>()

const { id, idError, state } = injectBaseFieldContext()
</script>

<template>
  <Label v-bind="forward" v-if="state === 'error'" :for="id" :id="idError">
    <slot />
  </Label>
</template>