<script setup lang="ts">
import type { Directive } from 'vue'
import type { BaseInputProps } from '../types'
import { useNuiId } from '../composables/useNuiId'

import { BaseInput as theme } from '../theme'

const props = withDefaults(defineProps<BaseInputProps>(), {
  id: undefined,
  type: 'text',
  placeholder: undefined,

  rounded: theme.defaults.rounded,
  size: theme.defaults.size,
  variant: theme.defaults.variant,
})

function looseToNumber(val: any) {
  const n = Number.parseFloat(val)
  return Number.isNaN(n) ? val : n
}

const [modelValue, modelModifiers] = defineModel<
  string | number,
  'lazy' | 'trim' | 'number'
>()

const id = useNuiId(() => props.id)

function updateFromTarget(target: HTMLInputElement) {
  const value = target.value

  if (modelModifiers.number) {
    modelValue.value = looseToNumber(value)
  }
  else if (modelModifiers.trim && typeof value === 'string') {
    modelValue.value = value.trim()
  }
  else {
    modelValue.value = value
  }
}

// Update input internal value without updating the DOM to improve performance
const vModelInput: Directive = {
  created(el) {
    el.addEventListener(modelModifiers.lazy ? 'change' : 'input', (event: InputEvent) => {
      updateFromTarget(event.target as HTMLInputElement)
    })
  },
  mounted(el, { value }) {
    el.value = value == null ? '' : value
  },
  beforeUpdate(el, { value }) {
    const current = el.value
    if (value === current) {
      return
    }

    el.value = value == null ? '' : value
  },
}
</script>

<template>
  <input
    :id="id"
    v-model-input="modelValue"
    :type="props.type"
    class="focus-visible:nui-focus w-full text-ellipsis font-sans disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive-base! aria-invalid:ring-destructive-base!"
    :class="[
      props.variant && theme.variants[props.variant],
      props.size && theme.sizes[props.size],
      props.rounded && theme.radiuses[props.rounded],
    ]"
    :placeholder="props.placeholder"
  >
</template>
