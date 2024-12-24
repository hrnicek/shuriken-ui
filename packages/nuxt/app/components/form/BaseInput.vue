<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
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

    /**
     * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the input element.
       */
      input?: string | string[]
    }
  }>(),
  {
    id: undefined,
    type: 'text',
    rounded: undefined,
    size: undefined,
    variant: undefined,
    placeholder: undefined,
    classes: () => ({}),
  },
)

function looseToNumber(val: any) {
  const n = Number.parseFloat(val)
  return Number.isNaN(n) ? val : n
}

const [modelValue, modelModifiers] = defineModel<
  string | number,
  'lazy' | 'trim' | 'number'
>({
  set(value) {
    if (modelModifiers.number) {
      return looseToNumber(value)
    }
    else if (modelModifiers.trim && typeof value === 'string') {
      return value.trim()
    }

    return value
  },
})

const variant = useNuiDefaultProperty(props, 'BaseInput', 'variant')
const size = useNuiDefaultProperty(props, 'BaseInput', 'size')
const rounded = useNuiDefaultProperty(props, 'BaseInput', 'rounded')

const inputRef = ref<HTMLInputElement>()
const id = useNinjaId(() => props.id)

const variants = {
  default: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700 aria-invalid:border-[var(--destructive-base)]!',
  muted: 'bg-muted-50 dark:bg-muted-900 border-muted-300 dark:border-muted-600 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700 aria-invalid:border-[var(--destructive-base)]!',
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
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-full',
} as const

defineExpose({
  /**
   * The underlying HTMLInputElement element.
   */
  el: inputRef,

  /**
   * The internal id of the radio input.
   */
  id,
})
</script>

<template>
  <div class="relative" :class="props.classes?.wrapper">
    <input
      v-if="modelModifiers.lazy"
      :id="id"
      ref="inputRef"
      v-model.lazy="modelValue"
      :type="props.type"
      v-bind="$attrs"
      class="nui-focus w-full font-sans disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
      :class="[
        props.classes?.input,
        variant && variants[variant],
        size && sizes[size],
        rounded && radiuses[rounded],
      ]"
      :placeholder="placeholder"
    >
    <input
      v-else
      :id="id"
      ref="inputRef"
      v-model="modelValue"
      :type="props.type"
      v-bind="$attrs"
      class="nui-focus w-full font-sans disabled:cursor-not-allowed disabled:opacity-75 transition-all duration-300"
      :class="[
        props.classes?.input,
        variant && variants[variant],
        size && sizes[size],
        rounded && radiuses[rounded],
      ]"
      :placeholder="placeholder"
    >
  </div>
</template>
