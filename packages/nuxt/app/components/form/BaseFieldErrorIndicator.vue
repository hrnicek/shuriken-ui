<script lang="ts">
import type { PrimitiveProps } from 'reka-ui';

export interface BaseFieldErrorIndicator extends PrimitiveProps {}
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

import { injectBaseFieldContext } from './BaseField.vue'

const props = withDefaults(defineProps<BaseFieldErrorIndicator>(), {
  as: 'span',
})
const forward = useForwardProps(reactiveOmit(props, []))

const iconAlert = useNuiConfig('icon', 'alert')

const { state } = injectBaseFieldContext()
</script>

<template>
  <Primitive v-bind="forward" v-if="state === 'error'" class="pointer-events-none text-[var(--destructive-base)] dark:text-[var(--destructive-light)]">
    <slot>
      <Icon :name="iconAlert" class="size-4" />
    </slot>
  </Primitive>
</template>