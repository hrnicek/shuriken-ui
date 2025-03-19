<script lang="ts">
import type {
  RadioGroupItemProps,
  // RadioGroupItemEmits,
} from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import {
  Label,
  RadioGroupIndicator,
  RadioGroupItem,
  useForwardPropsEmits,
} from 'reka-ui'
import { useAttrs } from 'vue'
import { useNuiId } from '../composables/useNuiId'

import { tm } from '../utils/tw-merge'

export interface BaseRadioProps extends RadioGroupItemProps {
  /**
   * The label for the radio input.
   */
  label?: string

  /**
   * The variant of the radio.
   */
  variant?: 'default' | 'primary' | 'dark' | 'none'

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    root?: string | string[]
    indicator?: string | string[]
    label?: string | string[]
    labelWrapper?: string | string[]
  }
}
export interface BaseRadioEmits /* extends RadioGroupItemEmits */ {
  select: [event: any]
}
export interface BaseRadioSlots {
  default: () => any
  error: () => any
}

export const boxVariants = {
  default: 'bg-white dark:bg-muted-950 border-1 border-muted-300 dark:border-muted-700 text-muted-700 dark:text-muted-100',
  primary: 'bg-primary-500/10 dark:bg-primary-500/20 border-1 border-muted-300 dark:border-muted-700 text-primary-base dark:text-primary-light',
  dark: 'bg-muted-900/10 dark:bg-white/10 border-1 border-muted-300 dark:border-muted-700 text-muted-900 dark:text-white',
  none: '',
} as const satisfies Record<NonNullable<BaseRadioProps['variant']>, string>

export const dotVariants = {
  default: 'text-muted-700 dark:text-muted-300',
  primary: 'text-primary-500 dark:text-primary-light',
  dark: 'text-muted-900 dark:text-white',
  none: '',
} as const satisfies Record<NonNullable<BaseRadioProps['variant']>, string>
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseRadioProps>(), {
  name: undefined,
  value: undefined,
  id: undefined,
  label: undefined,

  variant: 'default',

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
      class="focus-visible:nui-focus relative flex items-center justify-center shrink-0 cursor-pointer overflow-hidden rounded-full size-5 disabled:pointer-events-none disabled:opacity-50"
      :class="boxVariants[variant]"
    >
      <RadioGroupIndicator
        :class="tm([
          'pointer-events-none z-auto block rounded-full size-1 bg-current dark:bg-current absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 starting:scale-0 transition-discrete duration-200',
          dotVariants[variant],
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
