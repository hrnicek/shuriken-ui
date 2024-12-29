<script lang="ts">
import type { PrimitiveProps } from 'reka-ui';

export interface BaseFieldSuccessIndicator extends PrimitiveProps {}
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

import { injectBaseFieldContext } from './BaseField.vue'

const props = withDefaults(defineProps<BaseFieldSuccessIndicator>(), {
  as: 'span',
})
const forward = useForwardProps(reactiveOmit(props, []))

const iconCheck = useNuiConfig('icon', 'check')

const { state } = injectBaseFieldContext()
</script>

<template>
  <Primitive v-bind="forward" v-if="state === 'success'" class="pointer-events-none text-success-base dark:text-success-light">
    <slot>
      <Icon :name="iconCheck" class="size-4" />
    </slot>
  </Primitive>
</template>