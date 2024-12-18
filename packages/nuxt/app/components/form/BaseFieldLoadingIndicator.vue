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

const iconSpiner = useNuiDefaultIcon('spiner')

const { state } = injectBaseFieldContext()
</script>

<template>
  <Primitive v-if="state === 'loading'" v-bind="forward">
    <slot>
      <Icon :name="iconSpiner" class="size-4" />
    </slot>
  </Primitive>
</template>