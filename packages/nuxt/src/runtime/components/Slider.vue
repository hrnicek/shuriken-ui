<script setup lang="ts">
import { useForwardPropsEmits, useForwardExpose } from 'reka-ui';
import { useAttrs } from 'vue'
import type { BaseSliderProps, BaseSliderEmits, BaseSliderSlots } from '../types';
import { BaseSlider as theme } from '@shuriken-ui/theme-iga';

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseSliderProps>(), {
  variant: theme.defaults.variant,
})
const emits = defineEmits<BaseSliderEmits>()
const slots = defineSlots<BaseSliderSlots>()
const attrs = useAttrs()

const forward = useForwardPropsEmits(props, emits)
const { forwardRef } = useForwardExpose()
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <SliderRoot
      v-bind="{ ...attrs, ...forward }"
      v-slot="{ modelValue }"
      class="relative flex items-center select-none touch-none data-disabled:cursor-not-allowed data-disabled:opacity-50"
      :class="[
        props.orientation === 'vertical' ? 'flex-col w-5 h-full' : 'w-full h-5',
      ]"
    >
      <SliderTrack
        class="relative grow rounded-full h-2"
        :class="[
          props.orientation === 'vertical' ? 'w-2' : 'h-2',
          theme.trackVariants[props.variant],
        ]"
      >
        <SliderRange
          class="absolute rounded-full" 
          :class="[
            props.orientation === 'vertical' ? 'w-full' : 'h-full',
            theme.rangeVariants[props.variant],
          ]"
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
            class="block size-5 rounded-full"
            :class="theme.thumbVariants[props.variant]"
          />
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="bg-white dark:bg-muted-700 px-2 py-1 rounded-sm text-xs font-sans font-medium ring-1 ring-muted-900/10"
            :side-offset="6"
          >
            <span>
              <slot :value>{{ value }}</slot>
            </span>

            <TooltipArrow class="fill-white dark:fill-muted-700 stroke-muted-900/10" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </SliderRoot>
  </TooltipProvider>
</template>