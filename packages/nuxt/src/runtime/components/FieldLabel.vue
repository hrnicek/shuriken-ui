<script setup lang="ts">
import type { BaseFieldLabel } from '../types';
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

import { injectBaseFieldContext } from './Field.vue'

const props = withDefaults(defineProps<BaseFieldLabel>(), {})
const forward = useForwardProps(reactiveOmit(props, []))

const { id, idLabel } = injectBaseFieldContext()
</script>

<template>
  <Label
    v-bind="forward"
    :for="id"
    :id="idLabel"
    class="font-sans font-medium text-sm leading-none text-field-label"
  >
    <slot />
  </Label>
</template>