<script setup lang="ts">
import type { Directive } from 'vue'
import type { BaseTextareaProps } from '../types'
import { BaseTextarea as theme } from '@shuriken-ui/theme-iga'
import { useNuiId } from '../composables/useNuiId'

const props = withDefaults(defineProps<BaseTextareaProps>(), {
  id: undefined,
  name: undefined,

  rounded: theme.defaults.rounded,
  variant: theme.defaults.variant,
  size: theme.defaults.size,

  label: undefined,
  placeholder: '',
  error: false,
  rows: undefined,
  maxHeight: undefined,
})

const [modelValue, modelModifiers] = defineModel<string, 'lazy' | 'trim'>()

const id = useNuiId(() => props.id)

function updateFromTarget(target: HTMLInputElement) {
  const value = target.value

  if (modelModifiers.trim && typeof value === 'string') {
    modelValue.value = value.trim()
  }
  else {
    modelValue.value = value
  }
}

// Update textarea internal value without updating the DOM to improve performance
const vModelTextarea: Directive = {
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
  <textarea
    :id
    v-model-textarea="modelValue"
    class="focus-visible:nui-focus w-full disabled:cursor-not-allowed disabled:opacity-50 nui-slimscroll aria-invalid:border-destructive-base! aria-invalid:ring-destructive-base!"
    :class="[
      props.autogrow && 'field-sizing-content',
      props.variant && theme.variants[props.variant],
      props.rounded && theme.radiuses[props.rounded],
      props.size && theme.sizes[props.size],
      !props.resize && 'resize-none',
    ]"
    :placeholder="props.placeholder"
    :rows="props.rows"
  />
</template>
