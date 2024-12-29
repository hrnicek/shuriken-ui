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

const iconRequired = useNuiConfig('icon', 'required')

const { required } = injectBaseFieldContext()
</script>

<template>
  <Primitive v-if="required" v-bind="forward" class="select-none text-[var(--destructive-base)] dark:text-[var(--destructive-light)]">
    <slot>
      <Icon :name="iconRequired" class="size-3 inline-block align-text-top" />
    </slot>
  </Primitive>
</template>
