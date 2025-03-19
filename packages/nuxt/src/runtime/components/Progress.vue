<script lang="ts">
import type {
  ProgressRootEmits,
  ProgressRootProps,
} from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { ProgressIndicator, ProgressRoot, useForwardPropsEmits } from 'reka-ui'

export interface BaseProgressProps extends ProgressRootProps {
  /**
   * The variant of the progress bar.
   */
  variant?: 'default' | 'primary' | 'dark' | 'none'

  /**
   * The radius of the progress bar.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the progress bar.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}
export interface BaseProgressEmits extends ProgressRootEmits {}

export interface BaseProgressSlots {
  default: () => any
}

export const variants = {
  default: 'bg-track-default-bg-active',
  primary: 'bg-primary-base',
  dark: 'bg-track-dark-bg-active',
  none: '',
} as const satisfies Record<NonNullable<BaseProgressProps['variant']>, string>

export const trackVariants = {
  default: 'bg-track-default-bg',
  primary: 'bg-track-default-bg',
  dark: 'bg-track-dark-bg',
  none: '',
} as const satisfies Record<NonNullable<BaseProgressProps['variant']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseProgressProps['rounded']>, string>

export const sizes = {
  xs: 'h-1',
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4',
  xl: 'h-5',
} as const satisfies Record<NonNullable<BaseProgressProps['size']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseProgressProps>(), {
  size: 'sm',
  variant: 'default',
  rounded: 'full',

  max: undefined,
  modelValue: undefined,
  getValueLabel: undefined,
})
const emits = defineEmits<BaseProgressEmits>()
const slots = defineSlots<BaseProgressSlots>()

const forward = useForwardPropsEmits(reactiveOmit(props, ['variant', 'rounded', 'size']), emits)
</script>

<template>
  <ProgressRoot
    v-slot="{ modelValue }"
    v-bind="forward"
    class="relative w-full overflow-hidden"
    :class="[
      props.size && sizes[props.size],
      props.variant && trackVariants[props.variant],
      props.rounded && radiuses[props.rounded],
    ]"
  >
    <ProgressIndicator
      class="absolute start-0 top-0 h-full w-full transition-all duration-300"
      :class="[
        typeof modelValue !== 'number' && 'nui-progress-indeterminate animate-nui-progress-indeterminate',
        props.variant && variants[props.variant],
        props.rounded && radiuses[props.rounded],
      ]"
      :style="typeof modelValue === 'number' && `transform: translateX(-${(
        100 - (modelValue / (props.max || 100) * 100)
      )}%)`"
    />
  </ProgressRoot>
</template>
