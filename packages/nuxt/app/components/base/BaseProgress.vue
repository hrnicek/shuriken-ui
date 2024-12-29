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
    variant?: 'primary' | 'dark' | 'none'

  /**
   * The radius of the progress bar.
   *
   * @default 'full'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the progress bar.
   *
   * @default 'sm'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}
export interface BaseProgressEmits extends ProgressRootEmits {}

export type BaseProgressSlots = {
  default(): any
}

export const variants = {
  'primary': 'bg-[var(--primary-base)]',
  'dark': 'bg-muted-900 dark:bg-white',
  'none': '',
} as const

// @todo: low-contrast-theme
// export const variants = {
//   'primary': 'bg-[var(--primary-base)]',]',
//   'dark': 'bg-muted-900 dark:bg-white',
//   'none': '',
// } as const

export const trackVariants = {
  'primary': 'bg-muted-200 dark:bg-muted-900',
  'dark': 'bg-muted-200 dark:bg-muted-900',
  'none': '',
} as const

// @todo: low-contrast-theme
// export const trackVariants = {
//   'primary': 'bg-muted-200 dark:bg-muted-700',
//   'dark': 'bg-muted-200 dark:bg-muted-700',
//   'none': '',
// } as const

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
})
const emits = defineEmits<BaseProgressEmits>()
const slots = defineSlots<BaseProgressSlots>()

const variant = useNuiConfig('BaseProgress', 'variant', () => props.variant)
const rounded = useNuiConfig('BaseProgress', 'rounded', () => props.rounded)
const size = useNuiConfig('BaseProgress', 'size', () => props.size)

const forward = useForwardPropsEmits(reactiveOmit(props, ['variant', 'rounded', 'size']), emits)
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
    ]"
  >
    <ProgressIndicator
      class="absolute start-0 top-0 h-full w-full transition-all duration-300"
      :class="[
        typeof modelValue !== 'number' && 'nui-progress-indeterminate animate-nui-progress-indeterminate',
        variant && variants[variant],
        rounded && radiuses[rounded],
      ]"
      :style="typeof modelValue === 'number' && `transform: translateX(-${100 - modelValue}%)`"
    />
  </ProgressRoot>
</template>
