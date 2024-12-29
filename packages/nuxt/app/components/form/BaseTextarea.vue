<script lang="ts">
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
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted'

  /**
   * The radius of the textarea.
   *
   * @default 'md'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the textarea.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
}

const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const

const sizes = {
  sm: 'nui-textarea-sm',
  md: 'nui-textarea-md',
  lg: 'nui-textarea-lg',
} as const

const variants = {
  default: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700 aria-invalid:border-[var(--destructive-base)]!',
  muted: 'bg-muted-50 dark:bg-muted-900 border-muted-300 dark:border-muted-600 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700 aria-invalid:border-[var(--destructive-base)]!',
} as const
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseTextareaProps>(), {
  id: undefined,
  name: undefined,
  rounded: undefined,
  size: undefined,
  variant: undefined,
  label: undefined,
  placeholder: '',
  error: false,
  rows: 3,
  maxHeight: undefined,
})

const [modelValue, modelModifiers] = defineModel<string, 'lazy' | 'trim'>({
  set(value) {
    if (modelModifiers.trim && typeof value === 'string') {
      return value.trim()
    }

    return value
  },
})

const id = useNinjaId(() => props.id)
const variant = useNuiConfig('BaseTextarea', 'variant', () => props.variant)
const rounded = useNuiConfig('BaseTextarea', 'rounded', () => props.rounded)
const size = useNuiConfig('BaseTextarea', 'size', () => props.size)

const textareaRef = ref<HTMLTextAreaElement>()

defineExpose({
  /**
   * The underlying HTMLTextAreaElement element.
   */
  el: textareaRef,

  /**
   * The internal id of the radio input.
   */
  id,
})
</script>

<template>
  <div class="relative flex flex-col">
    <textarea
      v-if="modelModifiers.lazy"
      :id="id"
      ref="textareaRef"
      v-model.lazy="modelValue"
      v-bind="$attrs"
      class="nui-focus w-full p-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 nui-slimscroll"
      :class="[
        props.autogrow && 'field-sizing-content',
        variant && variants[variant],
        rounded && radiuses[rounded],
        !props.resize && 'resize-none',
      ]"
      :placeholder="props.placeholder"
      :rows="props.rows"
    />
    <textarea
      v-else
      :id="id"
      ref="textareaRef"
      v-model="modelValue"
      v-bind="$attrs"
      class="nui-focus w-full p-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 nui-slimscroll"
      :class="[
        props.autogrow && 'field-sizing-content',
        variant && variants[variant],
        rounded && radiuses[rounded],
        !props.resize && 'resize-none',
      ]"
      :placeholder="props.placeholder"
      :rows="props.rows"
    />
  </div>
</template>
