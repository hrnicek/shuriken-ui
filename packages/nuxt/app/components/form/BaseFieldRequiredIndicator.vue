<script lang="ts">
import type { PrimitiveProps } from 'reka-ui';

export interface BaseFieldLoadingIndicator extends PrimitiveProps {}
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

import { injectBaseFieldContext } from './BaseField.vue'

const props = withDefaults(defineProps<BaseFieldLoadingIndicator>(), {
  as: 'span',
})
const forward = useForwardProps(reactiveOmit(props, []))

const { required } = injectBaseFieldContext()
</script>

<template>
  <Primitive v-if="required" v-bind="forward">
    <slot>
      <span class="text-red-500">*</span>
    </slot>
  </Primitive>
</template>