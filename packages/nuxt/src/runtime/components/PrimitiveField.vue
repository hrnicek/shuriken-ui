<script setup lang="ts">
import type { BasePrimitiveFieldProps, BasePrimitiveFieldSlots } from '../types'
import { provideNuiField } from '../composables/useNuiField'

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
