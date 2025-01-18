<script setup lang="ts">
import type { BaseFieldSuccessIndicator } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'

import { useNuiConfig } from '../composables/useNuiConfig'

import { injectBaseFieldContext } from './Field.vue'

const props = withDefaults(defineProps<BaseFieldSuccessIndicator>(), {
  as: 'span',
})
const forward = useForwardProps(reactiveOmit(props, []))

const iconCheck = useNuiConfig('icon', 'check')

const { state } = injectBaseFieldContext()
</script>

<template>
  <Primitive v-if="state === 'success'" v-bind="forward" class="pointer-events-none text-success-base dark:text-success-light">
    <slot>
      <Icon :name="iconCheck" class="size-4" />
    </slot>
  </Primitive>
</template>
