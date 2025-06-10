<script lang="ts">
import type { Directive } from 'vue'
import { useNuiId } from '../composables/useNuiId'

export interface BaseInputProps {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * The type of input.
   */
  type?: string

  /**
   * The placeholder to display for the input.
   */
  placeholder?: string

  /**
   * The variant of the input.
   */
  variant?: 'default' | 'muted'

  /**
   * The radius of the input.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the input.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const variants = {
  default: 'bg-input-default-bg border-input-default-border border text-input-default-text placeholder:text-input-default-placeholder',
  muted: 'bg-input-muted-bg border-input-muted-border border text-input-muted-text placeholder:text-input-muted-placeholder',
} as const satisfies Record<NonNullable<BaseInputProps['variant']>, string>

export const sizes = {
  sm: 'h-8 text-xs px-2',
  md: 'h-10 text-sm px-3',
  lg: 'h-12 text-sm px-4',
  xl: 'h-14 text-base px-4',
} as const satisfies Record<NonNullable<BaseInputProps['size']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseInputProps['rounded']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseInputProps>(), {
  id: undefined,
  type: 'text',
  placeholder: undefined,

  rounded: 'md',
  size: 'md',
  variant: 'default',
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
      props.variant && variants[props.variant],
      props.size && sizes[props.size],
      props.rounded && radiuses[props.rounded],
    ]"
    :placeholder="props.placeholder"
  >
</template>
