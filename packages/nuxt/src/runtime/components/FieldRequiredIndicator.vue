<script setup lang="ts">
import type { BaseFieldRequiredIndicator } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'

import { useNuiConfig } from '../composables/useNuiConfig'

import { injectBaseFieldContext } from './Field.vue'

const props = withDefaults(defineProps<BaseFieldRequiredIndicator>(), {
  as: 'span',
})
const forward = useForwardProps(reactiveOmit(props, []))

const iconRequired = useNuiConfig('icon', 'required')

const { required } = injectBaseFieldContext()
</script>

<template>
  <Primitive v-if="required" v-bind="forward" class="select-none text-destructive-base dark:text-destructive-light">
    <slot>
      <Icon :name="iconRequired" class="size-3 inline-block align-text-top" />
    </slot>
  </Primitive>
</template>
