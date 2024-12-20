<script lang="ts">
import type {
  ProgressRootProps,
  ProgressRootEmits,
} from 'reka-ui'

export interface BaseProgressProps extends ProgressRootProps {
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
}
export interface BaseProgressEmits extends ProgressRootEmits {}

export type BaseProgressSlots = {
  default(): any
}

export const variants = {
  'primary-low': 'bg-primary-500',
  'primary-high': 'bg-primary-500',
  'dark-low': 'bg-muted-900 dark:bg-white',
  'dark-high': 'bg-muted-900 dark:bg-white',
  'none': '',
} as const

export const trackVariants = {
  'primary-low': 'bg-muted-200 dark:bg-muted-700',
  'primary-high': 'bg-muted-200 dark:bg-muted-900',
  'dark-low': 'bg-muted-200 dark:bg-muted-700',
  'dark-high': 'bg-muted-200 dark:bg-muted-900',
  'none': '',
} as const

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const

export const sizes = {
  xs: 'h-1',
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4',
  xl: 'h-5',
} as const
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseProgressProps>(), {
  size: undefined,
  variant: undefined,
  rounded: undefined,

  max: undefined,
  modelValue: undefined,
  getValueLabel: undefined,

  classes: () => ({}),
})
const emits = defineEmits<BaseProgressEmits>()
const slots = defineSlots<BaseProgressSlots>()

const variant = useNuiDefaultProperty(props, 'BaseProgress', 'variant')
const rounded = useNuiDefaultProperty(props, 'BaseProgress', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseProgress', 'size')

const forward = useForwardPropsEmits(reactiveOmit(props, ['variant', 'rounded', 'size', 'classes']), emits)
</script>

<template>
  <ProgressRoot
    v-bind="forward"
    v-slot="{ modelValue }"
    class="relative w-full overflow-hidden"
    :class="[
      size && sizes[size],
      variant && trackVariants[variant],
      rounded && radiuses[rounded],
      props.classes?.wrapper,
    ]"
  >
    <ProgressIndicator
      class="absolute start-0 top-0 h-full w-full transition-all duration-300"
      :class="[
        typeof modelValue !== 'number' && 'nui-progress-indeterminate animate-nui-progress-indeterminate',
        props.classes?.progress,
        variant && variants[variant],
        rounded && radiuses[rounded],
      ]"
      :style="typeof modelValue === 'number' && `transform: translateX(-${100 - modelValue}%)`"
    />
  </ProgressRoot>
</template>
