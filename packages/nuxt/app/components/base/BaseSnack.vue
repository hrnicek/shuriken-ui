<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The text to display in the snackbar.
     */
    label?: string

    /**
     * An optional icon to display in the snackbar.
     */
    icon?: string

    /**
     * An optional image to display in the snackbar.
     */
    image?: string

    /**
     * The variant of snack.
     *
     * @default 'default'
     */
    variant?: 'default' | 'muted'

    /**
     * The size of the snack.
     *
     * @default 'md'
     */
    size?: 'xs' | 'sm' | 'md'

    /**
     * Optional CSS classes to apply to the component inner elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the icon element.
       */
      icon?: string | string[]

      /**
       * CSS classes to apply to the img element.
       */
      img?: string | string[]

      /**
       * CSS classes to apply to the text element.
       */
      text?: string | string[]

      /**
       * CSS classes to apply to the button element.
       */
      button?: string | string[]
    }
  }>(),
  {
    size: undefined,
    variant: undefined,
    label: '',
    icon: undefined,
    image: undefined,
    classes: () => ({}),
  },
)

const emit = defineEmits<{
  delete: []
}>()

const variant = useNuiDefaultProperty(props, 'BaseSnack', 'variant')
const size = useNuiDefaultProperty(props, 'BaseSnack', 'size')
const iconClose = useNuiDefaultIcon('close')

const sizes = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
} as const

const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-sm',
} as const

const wrapperSizes = {
  xs: 'size-6',
  sm: 'size-8',
  md: 'size-10',
} as const

const spacings = {
  xs: '!ps-2',
  sm: '!ps-3',
  md: '!ps-4',
} as const

const iconSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
} as const

const variants = {
  'default': 'bg-white dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
  'muted': 'bg-muted-200 dark:bg-muted-950',
} as const

// @todo: low-contrast-variant
// const variants = {
//   'default': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
//   'muted': 'bg-muted-200 dark:bg-muted-700',
// } as const
</script>

<template>
  <div
    class="inline-flex items-center gap-1 rounded-full outline-transparent"
    :class="[
      size && sizes[size],
      variant && variants[variant],
      props.icon || props.image ? '' : spacings[size],
      props.classes?.wrapper,
    ]"
  >
    <div
      v-if="props.icon && !props.image"
      class="-ms-0.5 flex items-center justify-center rounded-full bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-700"
      :class="[
        props.classes?.icon,
        size && wrapperSizes[size],
      ]"
    >
      <slot name="icon">
        <Icon :name="props.icon" :class="size && iconSizes[size]" />
      </slot>
    </div>
    <div
      v-else-if="props.image && !props.icon"
      class="-ms-0.5 flex items-center justify-center rounded-full shrink-0"
      :class="props.classes?.img"
    >
      <img :src="props.image" class="rounded-full" :class="size && wrapperSizes[size]" alt="">
    </div>
    <span class="font-sans text-muted-600 dark:text-muted-300" :class="[
      props.classes?.text,
      size && textSizes[size],
    ]">
      <slot>{{ props.label }}</slot>
    </span>
    <button
      type="button"
      class="cursor-pointer scale-75 flex items-center justify-center rounded-full text-muted-600 dark:text-muted-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-500/10 dark:hover:bg-primary-500/20 transition-colors duration-200"
      :class="[
        props.classes?.button,
        size && wrapperSizes[size],
      ]"
      @click="emit('delete')"
    >
      <Icon :name="iconClose" class="text-base" />
    </button>
  </div>
</template>
