<script lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'reka-ui'

import { reactiveOmit } from '@vueuse/core'
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  useForwardExpose,
  useForwardPropsEmits,
} from 'reka-ui'
import { useAttrs } from 'vue'
import { tm } from '../utils/tw-merge'

export interface BaseSliderProps extends SliderRootProps {
  variant?: 'default' | 'primary' | 'dark' | 'none'

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    track?: string | string[]
    range?: string | string[]
    thumb?: string | string[]
    tooltip?: string | string[]
    tooltipArrow?: string | string[]
  }
}

export interface BaseSliderEmits extends SliderRootEmits {}

export interface BaseSliderSlots {
  default: (props: { value: number }) => any
}

export const trackVariants = {
  default: 'bg-track-default-bg',
  primary: 'bg-track-default-bg',
  dark: 'bg-track-dark-bg',
  none: 'bg-track-dark-bg',
} as const satisfies Record<NonNullable<BaseSliderProps['variant']>, string>

export const rangeVariants = {
  default: 'bg-track-default-bg-active',
  primary: 'bg-primary-base',
  dark: 'bg-track-dark-bg-active',
  none: 'bg-current',
} as const satisfies Record<NonNullable<BaseSliderProps['variant']>, string>

export const thumbVariants = {
  default: 'bg-track-default-handle-bg ring-1 ring-track-default-handle-border shadow-sm focus:outline-none focus:ring-track-default-handle-ring',
  primary: 'bg-track-default-handle-bg ring-1 ring-track-default-handle-border shadow-sm focus:outline-none focus:ring-primary-base',
  dark: 'bg-track-dark-handle-bg ring-1 ring-track-dark-handle-border shadow-sm focus:outline-none focus:ring-track-dark-handle-ring',
  none: 'bg-track-default-handle-bg ring-1 ring-track-default-handle-border shadow-sm focus:outline-none focus:ring-current',
} as const satisfies Record<NonNullable<BaseSliderProps['variant']>, string>
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseSliderProps>(), {
  variant: 'default',

  classes: () => ({}),
})
const emits = defineEmits<BaseSliderEmits>()
const slots = defineSlots<BaseSliderSlots>()
const attrs = useAttrs()

const forward = useForwardPropsEmits(reactiveOmit(props, ['classes']), emits)
const { forwardRef } = useForwardExpose()
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <SliderRoot
      v-slot="{ modelValue }"
      v-bind="{ ...attrs, ...forward }"
      class="relative flex items-center select-none touch-none data-disabled:cursor-not-allowed data-disabled:opacity-50"
      :class="[
        props.orientation === 'vertical' ? 'flex-col w-5 h-full' : 'w-full h-5',
      ]"
    >
      <SliderTrack
        :class="tm([
          'relative grow rounded-full h-2',
          props.orientation === 'vertical' ? 'w-2' : 'h-2',
          trackVariants[props.variant],
          props.classes.track,
        ])"
      >
        <SliderRange
          :class="tm([
            'absolute rounded-full',
            props.orientation === 'vertical' ? 'w-full' : 'h-full',
            rangeVariants[props.variant],
            props.classes.range,
          ])"
        />
      </SliderTrack>

      <TooltipRoot
        v-for="(value, key) in modelValue"
        :key="key"
        disable-closing-trigger
      >
        <TooltipTrigger as-child>
          <SliderThumb
            :ref="forwardRef"
            :class="tm([
              'block size-5 rounded-full',
              thumbVariants[props.variant],
              props.classes.thumb,
            ])"
          />
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            :side-offset="6"
            :class="tm([
              'bg-white dark:bg-muted-700 px-2 py-1 rounded-sm text-xs font-sans font-medium ring-1 ring-muted-900/10',
              props.classes.tooltip,
            ])"
          >
            <span>
              <slot :value>{{ value }}</slot>
            </span>

            <TooltipArrow
              :class="tm([
                'fill-white dark:fill-muted-700 stroke-muted-900/10',
                props.classes.tooltipArrow,
              ])"
            />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </SliderRoot>
  </TooltipProvider>
</template>
