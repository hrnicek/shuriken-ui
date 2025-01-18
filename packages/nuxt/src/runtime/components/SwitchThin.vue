<script setup lang="ts">
import type { BaseSwitchThinEmits, BaseSwitchThinProps, BaseSwitchThinSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardExpose, useForwardPropsEmits } from 'reka-ui'
import { useAttrs } from 'vue'
import { useNuiId } from '../composables/useNuiId'
import { BaseSwitchThin as theme } from '../theme'
import { tm } from '../utils/tw-merge'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseSwitchThinProps>(), {
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
const emits = defineEmits<BaseSwitchThinEmits>()
const slots = defineSlots<BaseSwitchThinSlots>()

const id = useNuiId(() => props.id)
const attrs = useAttrs()
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'label', 'sublabel', 'variant', 'classes']), emits)
const { forwardRef } = useForwardExpose()
</script>

<template>
  <span
    :class="tm([
      'flex cursor-pointer items-center',
      props.classes.root,
    ])"
  >
    <SwitchRoot
      :id
      :ref="forwardRef"
      v-bind="{ ...attrs, ...forward }"
      class="focus:nui-focus relative block h-4 rounded-full cursor-pointer"
    >
      <SwitchThumb
        :class="tm([
          'peer data-[state=checked]:-translate-y-1/2 data-[state=checked]:translate-x-full data-[state=checked]:rtl:-translate-x-full absolute -start-1 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full size-6 transition-all duration-300',
          theme.handleVariants[props.variant],
          props.classes.thumb,
        ])"
      />
      <span
        :class="tm([
          'block h-4 w-10 rounded-full transition-all duration-300',
          theme.trackVariants[props.variant],
          props.classes.track,
        ])"
      />
    </SwitchRoot>
    <Label
      v-if="props.sublabel || 'sublabel' in slots"
      :for="id"
      :class="tm([
        'ms-3 select-none',
        props.classes.label,
      ])"
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
      :class="tm([
        'relative ms-3 cursor-pointer select-none font-sans text-sm text-muted-600 dark:text-white',
        props.classes.label,
      ])"
    >
      <slot>{{ props.label }}</slot>
    </Label>
  </span>
</template>
