<script lang="ts">
import type { LabelProps } from 'reka-ui';

export interface BaseFieldLabel extends LabelProps {}
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

import { injectBaseFieldContext } from './BaseField.vue'

const props = withDefaults(defineProps<BaseFieldLabel>(), {})
const forward = useForwardProps(reactiveOmit(props, []))

const { id, idLabel } = injectBaseFieldContext()
</script>

<template>
  <Label v-bind="forward" :for="id" :id="idLabel">
    <slot />
  </Label>
</template>