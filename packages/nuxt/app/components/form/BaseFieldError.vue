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
  <Label
    v-if="state === 'error'"
    v-bind="forward"
    :id="idError"
    :for="id"
    class="font-sans text-xs font-medium leading-none text-[var(--destructive-base)] dark:text-[var(--destructive-light)]"
  >
    <slot />
  </Label>
</template>