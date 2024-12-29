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

const iconSpiner = useNuiConfig('icon', 'spiner')

const { state } = injectBaseFieldContext()
</script>

<template>
  <Primitive v-if="state === 'loading'" v-bind="forward" class="pointer-events-none text-muted-400 dark:text-muted-300">
    <slot>
      <Icon :name="iconSpiner" class="size-4" />
    </slot>
  </Primitive>
</template>