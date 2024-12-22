<script lang="ts">
import type {
  ProgressRootProps,
  ProgressRootEmits,
} from 'reka-ui'

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
   *
   * @default 'primary'
   */
  variant?: 'primary' | 'dark' | 'none'

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[]

    /**
     * CSS classes to apply to the track element.
     */
    track?: string | string[]

    /**
     * CSS classes to apply to the progress element.
     */
    progress?: string | string[]
  }
}
export interface BaseProgressCircleEmits extends ProgressRootEmits {}

export type BaseProgressCircleSlots = {
  default(): any
}

export const variants = {
  'primary': 'text-primary-500',
  'dark': 'text-muted-900 dark:text-muted-100',
  'none': '',
} as const

// @todo: low-contrast-theme
// export const variants = {
//   'primary': 'text-primary-500',
//   'dark': 'text-muted-900 dark:text-muted-100',
//   'none': '',
// } as const

export const trackVariants = {
  'primary': 'text-muted-200 dark:text-muted-900',
  'dark': 'text-muted-200 dark:text-muted-900',
  'none': '',
} as const

// @todo: low-contrast-theme
// export const trackVariants = {
//   'primary': 'text-muted-200 dark:text-muted-700',
//   'dark': 'text-muted-200 dark:text-muted-700',
//   'none': '',
// } as const
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseProgressCircleProps>(), {
  size: 60,
  thickness: 4,
  animation: 2,
  variant: undefined,
  
  max: undefined,
  modelValue: undefined,
  getValueLabel: undefined,

  classes: () => ({}),
})
const emits = defineEmits<BaseProgressCircleEmits>()
const slots = defineSlots<BaseProgressCircleSlots>()

const variant = useNuiDefaultProperty(props, 'BaseProgressCircle', 'variant')

const forward = useForwardPropsEmits(reactiveOmit(props, ['variant', 'size', 'thickness', 'animation', 'classes']), emits)
</script>

<template>
  <ProgressRoot
    v-bind="forward"
    v-slot="{ modelValue }"
    as-child
  >
    <svg
      class="origin-center"
      :class="[
        props.classes?.wrapper,
      ]"
      viewBox="0 0 45 45"
      :width="props.size"
      :height="props.size"
    >
      <circle
        class="stroke-current "
        :class="[
          props.classes?.track,
          variant && trackVariants[variant],
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
            typeof modelValue === 'number' ? '-rotate-90 transition-[stroke-dasharray] duration-300' : 'animate-nui-spin',
            variant && variants[variant],
            props.classes?.progress,
          ]"
          :stroke-width="props.thickness"
          :stroke-dasharray="typeof modelValue === 'number' ? `${modelValue},100` : '0,100'"
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
