<script setup lang="ts">
import type { BaseSwitchBallEmits, BaseSwitchBallProps, BaseSwitchBallSlots } from '../types';
import { BaseSwitchBall as theme } from '#build/shuriken-ui/theme';
import { reactiveOmit } from '@vueuse/core'
import { useForwardExpose, useForwardPropsEmits } from 'reka-ui'
import { useAttrs } from 'vue'

import { useNinjaId } from '../composables/input-id';
import { useNuiConfig } from '../composables/default-property';

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseSwitchBallProps>(), {
  id: undefined,
  label: undefined,
  sublabel: undefined,

  variant: theme.defaults.variant,

  defaultValue: undefined,
  modelValue: undefined,
  name: undefined,
  value: undefined,

  classes: () => ({}),
})
const emits = defineEmits<BaseSwitchBallEmits>()
const slots = defineSlots<BaseSwitchBallSlots>()

const id = useNinjaId(() => props.id)
const attrs = useAttrs()
const iconCheck = useNuiConfig('icon', 'check')
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'label', 'sublabel', 'variant', 'classes']), emits)
const { forwardRef } = useForwardExpose()
</script>

<template>
  <span
    class="flex items-center"
    :class="props.classes.root"
  >
    <SwitchRoot 
      :id 
      :ref="forwardRef"
      v-bind="{...attrs, ...forward }" 
      class="group/switch relative focus:nui-focus rounded-full"
    >
      <SwitchThumb
        class="peer data-[state=checked]:translate-x-full data-[state=checked]:rtl:-translate-x-full absolute start-0.5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full shadow focus:w-6 size-5 transition-all duration-300"
        :class="[
          theme.handleVariants[props.variant],
          props.classes.thumb,
        ]"
      />
      <span 
        class="block h-6 w-11 rounded-full transition-all duration-300"
        :class="[
          theme.trackVariants[props.variant],
          props.classes.track,
        ]"
      />
      <Icon 
        :name="iconCheck"
        class="peer-data-[state=checked]:-translate-y-1/2 peer-data-[state=checked]:opacity-100 peer-data-[state=checked]:block pointer-events-none absolute start-2 top-1/2 z-10 translate-y-0 fill-current opacity-0 h-2.5 w-2.5 transition-all duration-300"
        :class="[
          theme.iconVariants[props.variant],
          props.classes.track,
        ]"
      />
    </SwitchRoot>
    <Label
      v-if="props.sublabel || 'sublabel' in slots"
      :for="id"
      class="ms-3 select-none"
      :class="props.classes.label"
    >
      <span class="block cursor-pointer font-sans text-sm text-muted-600 dark:text-white">
        <slot>{{ props.label }}</slot>
      </span>
      <span class="block cursor-pointer font-sans text-xs text-muted-400 dark:text-muted-400">
        <slot name="sublabel">{{ props.sublabel }}</slot>
      </span>
    </Label>
    <Label 
      v-else
      :for="id"
      class="relative ms-3 cursor-pointer select-none font-sans text-sm text-muted-600 dark:text-white"
      :class="props.classes.label"
    >
      <slot>{{ props.label }}</slot>
    </Label>
  </span>
</template>
