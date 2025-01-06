<script setup lang="ts">
import type { BaseInputProps } from '../types'
import { BaseInput as theme } from '@shuriken-ui/theme-iga'

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

const id = useNinjaId(() => props.id)

function updateFromTarget(target: HTMLInputElement) {
  const value = target.value

  if (modelModifiers.number) {
    modelValue.value = looseToNumber(value)
  } else if (modelModifiers.trim && typeof value === 'string') {
    modelValue.value = value.trim()
  } else {
    modelValue.value = value
  }
}

function onInput(event: Event) {
  if (modelModifiers.lazy) {
    return
  }

  updateFromTarget(event.target as HTMLInputElement)
}

function onChange(event: Event) {
  updateFromTarget(event.target as HTMLInputElement)
}
</script>

<template>
  <input
    :id="id"
    :type="props.type"
    class="focus-visible:nui-focus w-full font-sans disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive-base!"
    :class="[
      props.variant && theme.variants[props.variant],
      props.size && theme.sizes[props.size],
      props.rounded && theme.radiuses[props.rounded],
    ]"
    :placeholder="props.placeholder"
    :value="modelValue"
    @input="onInput"
    @change="onChange"
  >
</template>
