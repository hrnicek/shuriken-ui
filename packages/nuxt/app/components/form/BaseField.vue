<script lang="ts">
import type { PrimitiveProps } from 'reka-ui';
import {
  createContext,
} from 'reka-ui'


export interface BaseFieldContext {
  state: Ref<'idle' | 'loading' | 'success' | 'error'>
  id: Ref<string>
  idLabel: Ref<string | undefined>
  idDescription: Ref<string | undefined>
  idError: Ref<string | undefined>
  name: Ref<string | undefined>
  required: Ref<boolean>
  disabled: Ref<boolean>
}

export interface BaseFieldProps extends PrimitiveProps {
  // orientation?: 'horizontal' | 'vertical'
  state?: 'idle' | 'loading' | 'success' | 'error'
  id?: string
  name?: string
  required?: boolean
  disabled?: boolean
  modelValue?: any
}

export type BaseFieldSlots = {
  default(): any
}

export const [
  injectBaseFieldContext,
  provideBaseFieldContext,
] = createContext<BaseFieldContext>('BaseFieldContext')
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

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