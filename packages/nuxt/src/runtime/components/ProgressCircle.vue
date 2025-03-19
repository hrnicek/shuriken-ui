<script lang="ts">
import type {
  ProgressRootEmits,
  ProgressRootProps,
} from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { ProgressIndicator, ProgressRoot, useForwardPropsEmits } from 'reka-ui'

export interface BaseProgressCircleProps extends ProgressRootProps {
  /**
   * The size of the progress circle.
   */
  size?: number

  /**
   * The thickness of the progress circle.
   */
  thickness?: number

  /**
   * Enable/disable animation, or set the animation duration (in seconds).
   */
  animation?: boolean | number

  /**
   * Defines the variant of the progress circle
   */
  variant?: 'default' | 'primary' | 'dark' | 'none'
}
export interface BaseProgressCircleEmits extends ProgressRootEmits {}

export interface BaseProgressCircleSlots {
  default: () => any
}
export interface BaseProgressCircleConfig {
  variant: NonNullable<BaseProgressCircleProps['variant']>
}

export const variants = {
  default: 'text-track-default-bg-active',
  primary: 'text-primary-base',
  dark: 'text-track-dark-bg-active',
  none: '',
} as const satisfies Record<NonNullable<BaseProgressCircleProps['variant']>, string>

export const trackVariants = {
  default: 'text-track-default-bg',
  primary: 'text-track-default-bg',
  dark: 'text-track-dark-bg',
  none: '',
} as const satisfies Record<NonNullable<BaseProgressCircleProps['variant']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseProgressCircleProps>(), {
  size: 60,
  thickness: 4,
  animation: 2,

  variant: 'default',

  max: undefined,
  modelValue: undefined,
  getValueLabel: undefined,
})
const emits = defineEmits<BaseProgressCircleEmits>()
const slots = defineSlots<BaseProgressCircleSlots>()

const forward = useForwardPropsEmits(reactiveOmit(props, ['variant', 'size', 'thickness', 'animation']), emits)
</script>

<template>
  <ProgressRoot
    v-slot="{ modelValue }"
    v-bind="forward"
    as-child
  >
    <svg
      class="origin-center"
      viewBox="0 0 45 45"
      :width="props.size"
      :height="props.size"
    >
      <circle
        class="stroke-current "
        :class="[
          props.variant && trackVariants[props.variant],
        ]"
        :stroke-width="props.thickness"
        fill="none"
        cx="50%"
        cy="50%"
        r="15.91549431"
      />
      <ProgressIndicator as-child>
        <circle
          class="stroke-current origin-center"
          :class="[
            typeof modelValue === 'number' ? '-rotate-90 transition-[stroke-dasharray,opacity] duration-300' : 'animate-nui-spin',
            modelValue === 0 && 'opacity-0',
            props.variant && variants[props.variant],
          ]"
          :stroke-width="props.thickness"
          :stroke-dasharray="typeof modelValue === 'number' ? `${(modelValue / (props.max || 100) * 100)},100` : '0,100'"
          stroke-dashoffset="0"
          stroke-linecap="round"
          fill="none"
          cx="50%"
          cy="50%"
          r="15.91549431"
        >
          <template v-if="typeof modelValue !== 'number'">
            <animate
              attributeName="stroke-dasharray"
              values="0,100;45,100;100,100"
              dur="1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              values="0;-30;-100"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </template>
        </circle>
      </ProgressIndicator>
    </svg>
  </ProgressRoot>
</template>
