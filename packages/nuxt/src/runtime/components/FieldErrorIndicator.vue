<script setup lang="ts">
import type { BaseFieldErrorIndicator } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'

import { useNuiConfig } from '../composables/useNuiConfig'

import { injectBaseFieldContext } from './Field.vue'

const props = withDefaults(defineProps<BaseFieldErrorIndicator>(), {
  as: 'span',
})
const forward = useForwardProps(reactiveOmit(props, []))

const iconAlert = useNuiConfig('icon', 'alert')

const { state } = injectBaseFieldContext()
</script>

<template>
  <Primitive v-if="state === 'error'" v-bind="forward" class="pointer-events-none text-destructive-base dark:text-destructive-light">
    <slot>
      <Icon :name="iconAlert" class="size-4" />
    </slot>
  </Primitive>
</template>
