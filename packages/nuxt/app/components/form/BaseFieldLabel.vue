<script setup lang="ts">
import type { BaseFieldLabel } from '@shuriken-ui/types';
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

import { injectBaseFieldContext } from './BaseField.vue'

const props = withDefaults(defineProps<BaseFieldLabel>(), {})
const forward = useForwardProps(reactiveOmit(props, []))

const { id, idLabel } = injectBaseFieldContext()
</script>

<template>
  <Label
    v-bind="forward"
    :for="id"
    :id="idLabel"
    class="font-sans font-medium text-sm leading-none text-muted-600 dark:text-muted-300"
  >
    <slot />
  </Label>
</template>