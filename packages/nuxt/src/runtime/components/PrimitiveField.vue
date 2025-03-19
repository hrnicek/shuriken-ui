<script lang="ts">
import { provideNuiField } from '../composables/useNuiField'

export interface BasePrimitiveFieldProps {
  // orientation?: 'horizontal' | 'vertical'
  state?: 'idle' | 'loading' | 'success' | 'error'
  id?: string
  name?: string
  required?: boolean
  disabled?: boolean
  fieldset?: boolean
}

export interface BasePrimitiveFieldSlots {
  default: (props: {
    inputRef: (el: any) => void
    inputAttrs: Record<string, any>
  }) => any
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BasePrimitiveFieldProps>(), {
  name: undefined,
  required: false,
  state: 'idle',
})
const slots = defineSlots<BasePrimitiveFieldSlots>()

const {
  id,
  name,
  error,
  state,
  required,
  disabled,
  fieldset,
  ids,
  inputRef,
  inputAttrs,
  inputMounted,
  labelRef,
  labelMounted,
  descriptionRef,
  descriptionMounted,
  errorRef,
  errorMounted,
} = provideNuiField(props)
</script>

<template>
  <div
    :role="props.fieldset ? 'group' : undefined"
    :aria-labelledby="props.fieldset ? ids.label : undefined"
  >
    <slot
      v-bind="{
        id,
        name,
        error,
        state,
        required,
        disabled,
        fieldset,
        ids,
        inputRef,
        inputAttrs,
        inputMounted,
        labelRef,
        labelMounted,
        descriptionRef,
        descriptionMounted,
        errorRef,
        errorMounted,
      }"
    />
  </div>
</template>
