<script setup lang="ts">
import type { BaseTextareaProps } from '../types';
import { BaseTextarea as theme } from '@shuriken-ui/theme-iga';

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseTextareaProps>(), {
  id: undefined,
  name: undefined,

  rounded: theme.defaults.rounded,
  size: theme.defaults.size,
  variant: theme.defaults.variant,

  label: undefined,
  placeholder: '',
  error: false,
  rows: 3,
  maxHeight: undefined,
})

const [modelValue, modelModifiers] = defineModel<string, 'lazy' | 'trim'>()

const id = useNinjaId(() => props.id)

function updateFromTarget(target: HTMLInputElement) {
  const value = target.value

  if (modelModifiers.trim && typeof value === 'string') {
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
  <textarea
    :id
    ref="textareaRef"
    v-bind="$attrs"
    class="focus-visible:nui-focus w-full p-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 nui-slimscroll aria-invalid:border-destructive-base!"
    :class="[
      props.autogrow && 'field-sizing-content',
      props.variant && theme.variants[props.variant],
      props.rounded && theme.radiuses[props.rounded],
      !props.resize && 'resize-none',
    ]"
    :placeholder="props.placeholder"
    :rows="props.rows"
    :value="modelValue"
    @input="onInput"
    @change="onChange"
  />
</template>
