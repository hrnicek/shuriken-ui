<script setup lang="ts">
import type { BaseFieldDescription } from '@shuriken-ui/types';
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
    class="font-sans text-xs leading-tight text-muted-500/90 dark:text-muted-400"
  >
    <slot />
  </Label>
</template>