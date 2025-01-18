<script lang="ts">
import type { BaseFieldContext, BaseFieldProps, BaseFieldSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { createContext, useForwardProps } from 'reka-ui'
import { ref, toRef, useId } from 'vue'

export const [
  injectBaseFieldContext,
  provideBaseFieldContext,
] = createContext<BaseFieldContext>('BaseFieldContext')
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseFieldProps>(), {
  name: undefined,
  required: false,
  state: 'idle',
})
const slots = defineSlots<BaseFieldSlots>()
const id = ref(props.id ? props.id : useId())
const idLabel = ref(props.id ? `${props.id}-label` : useId())
const idDescription = ref(props.id ? `${props.id}-desc` : useId())
const idError = ref(props.id ? `${props.id}-error` : useId())
const forward = useForwardProps(reactiveOmit(props, ['state', 'name', 'required']))

provideBaseFieldContext({
  state: toRef(props, 'state'),
  id,
  idLabel,
  idDescription,
  idError,
  disabled: toRef(props, 'disabled'),
  name: toRef(props, 'name'),
  required: toRef(props, 'required'),
})
</script>

<template>
  <Primitive
    v-bind="forward"
    :data-filed-state="state"
  >
    <slot />
  </Primitive>
</template>
