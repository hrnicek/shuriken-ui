<script lang="ts">
import type { Directive } from 'vue'
import { useNuiId } from '../composables/useNuiId'

export interface BaseTextareaProps {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * The placeholder text for the textarea.
   */
  placeholder?: string

  /**
   * The number of rows to display in the textarea.
   */
  rows?: number | string

  /**
   * Whether to allow the user to resize the textarea.
   */
  resize?: boolean

  /**
   * Whether to automatically grow the textarea as text is entered.
   */
  autogrow?: boolean

  /**
   * The maximum height of the textarea when autogrow is enabled.
   */
  maxHeight?: number

  /**
   * The variant of the textarea.
   */
  variant?: 'default' | 'muted'

  /**
   * The radius of the textarea.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the input.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const satisfies Record<NonNullable<BaseTextareaProps['rounded']>, string>

export const sizes = {
  sm: 'min-h-8 text-xs px-2 py-2',
  md: 'min-h-10 text-sm px-3 py-2',
  lg: 'min-h-12 text-sm px-4 py-[calc(var(--spacing)*3.25)]',
  xl: 'min-h-14 text-base px-4 py-[calc(var(--spacing)*3.75)]',
} as const satisfies Record<NonNullable<BaseTextareaProps['size']>, string>

export const variants = {
  default: 'bg-input-default-bg border-input-default-border border text-input-default-text placeholder:text-input-default-placeholder',
  muted: 'bg-input-muted-bg border-input-muted-border border text-input-muted-text placeholder:text-input-muted-placeholder',
} as const satisfies Record<NonNullable<BaseTextareaProps['variant']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseTextareaProps>(), {
  id: undefined,
  name: undefined,

  rounded: 'md',
  variant: 'default',
  size: 'md',

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
      props.variant && variants[props.variant],
      props.rounded && radiuses[props.rounded],
      props.size && sizes[props.size],
      !props.resize && 'resize-none',
    ]"
    :placeholder="props.placeholder"
    :rows="props.rows"
  />
</template>
