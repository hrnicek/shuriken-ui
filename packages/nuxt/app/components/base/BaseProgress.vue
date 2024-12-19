<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The current value of the progress bar.
     * If `value` is not provided, the progress bar will be in an indeterminate state.
     */
    value?: number

    /**
     * The maximum value of the progress bar.
     */
    max?: number

    /**
     * The variant of the progress bar.
     *
     * @default 'primary'
     */
    variant?: 'primary-low' | 'primary-high' | 'dark-low' | 'dark-high' | 'none'

    /**
     * The radius of the progress bar.
     *
     * @since 2.0.0
     * @default 'full'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The size of the progress bar.
     *
     * @default 'sm'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

    /**
     * Optional CSS classes to apply to the component inner elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the progress element.
       */
      progress?: string | string[]
    }
  }>(),
  {
    size: undefined,
    variant: undefined,
    rounded: undefined,
    value: undefined,
    max: 100,
    classes: () => ({}),
  },
)

const variant = useNuiDefaultProperty(props, 'BaseProgress', 'variant')
const rounded = useNuiDefaultProperty(props, 'BaseProgress', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseProgress', 'size')

const variants = {
  'primary-low': 'bg-primary-500',
  'primary-high': 'bg-primary-500',
  'dark-low': 'bg-muted-900 dark:bg-white',
  'dark-high': 'bg-muted-900 dark:bg-white',
  'none': '',
}

const trackVariants = {
  'primary-low': 'bg-muted-200 dark:bg-muted-700',
  'primary-high': 'bg-muted-200 dark:bg-muted-900',
  'dark-low': 'bg-muted-200 dark:bg-muted-700',
  'dark-high': 'bg-muted-200 dark:bg-muted-900',
  'none': '',
}

const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const

const sizes = {
  xs: 'h-1',
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4',
  xl: 'h-5',
} as const

const value = computed(() => {
  const { value, max } = props

  if (max === 0) {
    return 0
  }
  return typeof value === 'number' ? (value / max) * 100 : undefined
})

const isIndeterminate = computed(() => typeof value.value !== 'number')
</script>

<template>
  <div
    role="progressbar"
    :aria-valuenow="value"
    :aria-valuemax="props.max"
    class="relative w-full overflow-hidden"
    :class="[
      size && sizes[size],
      variant && trackVariants[variant],
      rounded && radiuses[rounded],
      props.classes?.wrapper,
    ]"
  >
    <div
      class="absolute start-0 top-0 h-full transition-all duration-300"
      :class="[
        isIndeterminate
          && 'nui-progress-indeterminate animate-nui-progress-indeterminate',
        props.classes?.progress,
        variant && variants[variant],
        rounded && radiuses[rounded],
      ]"
      :style="!isIndeterminate ? `width: ${value}%` : 'width: 100%'"
    />
  </div>
</template>
