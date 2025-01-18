<script setup lang="ts">
import type { BaseSliderEmits, BaseSliderProps, BaseSliderSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardExpose, useForwardPropsEmits } from 'reka-ui'
import { useAttrs } from 'vue'
import { BaseSlider as theme } from '../theme'
import { tm } from '../utils/tw-merge'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseSliderProps>(), {
  variant: theme.defaults.variant,

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
          theme.trackVariants[props.variant],
          props.classes.track,
        ])"
      >
        <SliderRange
          :class="tm([
            'absolute rounded-full',
            props.orientation === 'vertical' ? 'w-full' : 'h-full',
            theme.rangeVariants[props.variant],
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
              theme.thumbVariants[props.variant],
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
