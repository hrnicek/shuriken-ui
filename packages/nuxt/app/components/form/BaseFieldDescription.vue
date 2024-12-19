<script lang="ts">
import type { LabelProps } from 'reka-ui';

export interface BaseFieldDescription extends LabelProps {}
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

import { injectBaseFieldContext } from './BaseField.vue'

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
    class="font-sans text-xs font-medium leading-tight text-muted-400 dark:text-muted-600"
  >
    <slot />
  </Label>
</template>