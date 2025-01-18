<script setup lang="ts">
import type { BaseRadioEmits, BaseRadioProps, BaseRadioSlots } from '../types'
import { BaseRadio as theme } from '@shuriken-ui/theme-iga'
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'
import { useAttrs } from 'vue'

import { useNuiId } from '../composables/useNuiId'
import { tm } from '../utils/tw-merge'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseRadioProps>(), {
  name: undefined,
  value: undefined,
  id: undefined,
  label: undefined,

  variant: theme.defaults.variant,

  classes: () => ({}),
})
const emits = defineEmits<BaseRadioEmits>()
const slots = defineSlots<BaseRadioSlots>()

const attrs = useAttrs()
const id = useNuiId(() => props.id)
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'label', 'variant', 'classes']), emits)
</script>

<template>
  <div
    :class="tm([
      'relative inline-flex items-start gap-1',
      props.classes.root,
    ])"
  >
    <RadioGroupItem
      :id
      v-bind="{ ...forward, ...attrs }"
      class="group/radio focus-visible:nui-focus relative flex items-center justify-center shrink-0 cursor-pointer overflow-hidden rounded-full size-5 disabled:pointer-events-none disabled:opacity-50"
      :class="theme.boxVariants[variant]"
    >
      <RadioGroupIndicator
        :class="tm([
          'pointer-events-none z-10 block group-data-[state=unchecked]/radio:scale-0 roup-data-[state=checked]/radio:scale-100 rounded-full size-1 bg-current dark:bg-current starting:opacity-0 transition-opacity duration-150',
          theme.dotVariants[variant],
          props.classes.indicator,
        ])"
      />
    </RadioGroupItem>
    <div
      :class="tm([
        'inline-flex flex-col grow',
        props.classes.labelWrapper,
      ])"
    >
      <Label
        v-if="props.label || 'default' in $slots"
        :for="id"
        :class="tm([
          'ms-1 cursor-pointer select-none font-sans text-sm text-muted-600 dark:text-muted-400',
          props.classes.label,
        ])"
      >
        <slot>{{ props.label }}</slot>
      </Label>
    </div>
  </div>
</template>
