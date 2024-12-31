<script lang="ts">
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
   *
   * @default 'default'
   */
    variant?: 'default' | 'muted' 

  /**
   * The radius of the input.
   *
   * @default 'md'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the input.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const variants = {
  default: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700 aria-invalid:border-destructive-base!',
  muted: 'bg-muted-50 dark:bg-muted-900 border-muted-300 dark:border-muted-600 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700 aria-invalid:border-destructive-base!',
} as const

// @todo: low-contrast-theme
// const variants = {
//   'default': 'bg-white dark:bg-muted-800 border-muted-300 dark:border-muted-700 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700',
//   'muted': 'bg-muted-50 dark:bg-muted-800 border-muted-300 dark:border-muted-700 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700',
// } as const

const sizes = {
  sm: 'h-8 text-xs px-2',
  md: 'h-10 text-sm px-3',
  lg: 'h-12 text-sm px-4',
  xl: 'h-14 text-base px-4',
} as const

const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const
</script>


<script setup lang="ts">
const props = withDefaults(defineProps<BaseInputProps>(), {
  id: undefined,
  type: 'text',
  rounded: undefined,
  size: undefined,
  variant: undefined,
  placeholder: undefined,
})

function looseToNumber(val: any) {
  const n = Number.parseFloat(val)
  return Number.isNaN(n) ? val : n
}

const [modelValue, modelModifiers] = defineModel<
  string | number,
  'lazy' | 'trim' | 'number'
>()

const variant = useNuiConfig('BaseInput', 'variant', () => props.variant)
const size = useNuiConfig('BaseInput', 'size', () => props.size)
const rounded = useNuiConfig('BaseInput', 'rounded', () => props.rounded)

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
    class="nui-focus w-full font-sans disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
    :class="[
      variant && variants[variant],
      size && sizes[size],
      rounded && radiuses[rounded],
    ]"
    :placeholder="props.placeholder"
    :value="modelValue"
    @input="onInput"
    @change="onChange"
  >
</template>
