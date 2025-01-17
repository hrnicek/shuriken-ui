<script setup lang="ts">
import type { BaseFieldLoadingIndicator } from '../types';
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

import { useNuiConfig } from '../composables/useNuiConfig';

import { injectBaseFieldContext } from './Field.vue'

const props = withDefaults(defineProps<BaseFieldLoadingIndicator>(), {
  as: 'span',
})
const forward = useForwardProps(reactiveOmit(props, []))

const iconSpiner = useNuiConfig('icon', 'spiner')

const { state } = injectBaseFieldContext()
</script>

<template>
  <Primitive v-if="state === 'loading'" v-bind="forward" class="pointer-events-none text-field-loading">
    <slot>
      <Icon :name="iconSpiner" class="size-4" />
    </slot>
  </Primitive>
</template>