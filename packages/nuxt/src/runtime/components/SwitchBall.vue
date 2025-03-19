<script lang="ts">
import type {
  SwitchRootEmits,
  SwitchRootProps,
} from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import {
  Label,
  SwitchRoot,
  SwitchThumb,
  useForwardExpose,
  useForwardPropsEmits,
} from 'reka-ui'
import { useAttrs } from 'vue'
import { useNuiConfig } from '../composables/useNuiConfig'

import { useNuiId } from '../composables/useNuiId'
import { tm } from '../utils/tw-merge'

export interface BaseSwitchBallProps extends SwitchRootProps {
  /**
   * Accessible label for the switch.
   */
  label?: string

  /**
   * The sublabel of the switch.
   */
  sublabel?: string

  /**
   * Main color of the switch.
   */
  variant?: 'default' | 'primary' | 'dark' | 'none'

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    root?: string | string[]
    thumb?: string | string[]
    track?: string | string[]
    icon?: string | string[]
    label?: string | string[]
  }
}
export interface BaseSwitchBallEmits extends SwitchRootEmits {}
export interface BaseSwitchBallSlots {
  default: () => any
  sublabel: () => any
}

export const trackVariants = {
  default: 'peer-data-[state=checked]:bg-track-default-bg-active bg-track-default-bg',
  primary: 'peer-data-[state=checked]:bg-primary-base dark:peer-data-[state=checked]:bg-primary-base bg-track-default-bg',
  dark: 'peer-data-[state=checked]:bg-track-dark-bg-active bg-track-dark-bg',
  none: '',
} as const satisfies Record<NonNullable<BaseSwitchBallProps['variant']>, string>

export const handleVariants = {
  default: 'bg-track-default-handle-bg border border-track-default-handle-border',
  primary: 'bg-track-default-handle-bg border border-track-default-handle-border',
  dark: 'bg-track-dark-handle-bg border border-track-dark-handle-border',
  none: '',
} as const satisfies Record<NonNullable<BaseSwitchBallProps['variant']>, string>

export const iconVariants = {
  default: 'text-track-default-bg-invert',
  primary: 'text-primary-invert',
  dark: 'text-track-dark-bg-invert',
  none: '',
} as const satisfies Record<NonNullable<BaseSwitchBallProps['variant']>, string>
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseSwitchBallProps>(), {
  id: undefined,
  label: undefined,
  sublabel: undefined,

  variant: 'default',

  defaultValue: undefined,
  modelValue: undefined,
  name: undefined,
  value: undefined,

  classes: () => ({}),
})
const emits = defineEmits<BaseSwitchBallEmits>()
const slots = defineSlots<BaseSwitchBallSlots>()

const id = useNuiId(() => props.id)
const attrs = useAttrs()
const iconCheck = useNuiConfig('icon', 'check')
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'label', 'sublabel', 'variant', 'classes']), emits)
const { forwardRef } = useForwardExpose()
</script>

<template>
  <span
    :class="tm([
      'flex items-center',
      props.classes.root,
    ])"
  >
    <SwitchRoot
      :id
      :ref="forwardRef"
      v-bind="{ ...attrs, ...forward }"
      class="group/switch relative focus:nui-focus rounded-full"
    >
      <SwitchThumb
        :class="tm([
          'peer data-[state=checked]:translate-x-full data-[state=checked]:rtl:-translate-x-full absolute start-0.5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full shadow focus:w-6 size-5 transition-all duration-300',
          handleVariants[props.variant],
          props.classes.thumb,
        ])"
      />
      <span
        :class="tm([
          'block h-6 w-11 rounded-full transition-all duration-300',
          trackVariants[props.variant],
          props.classes.track,
        ])"
      />
      <Icon
        :name="iconCheck"
        :class="tm([
          'peer-data-[state=checked]:-translate-y-1/2 peer-data-[state=checked]:opacity-100 peer-data-[state=checked]:block pointer-events-none absolute start-2 top-1/2 z-10 translate-y-0 fill-current opacity-0 h-2.5 w-2.5 transition-all duration-300',
          iconVariants[props.variant],
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
