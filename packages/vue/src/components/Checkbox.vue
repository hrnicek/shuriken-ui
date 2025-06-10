<script lang="ts">
import type {
  CheckboxRootEmits,
  CheckboxRootProps,
} from 'reka-ui'

import { reactiveOmit } from '@vueuse/core'
import { CheckboxIndicator, CheckboxRoot, Label, useForwardExpose, useForwardPropsEmits } from 'reka-ui'
import { useAttrs } from 'vue'
import { useInertiaConfig } from '../composables/useInertiaConfig'

import { useNuiId } from '../composables/useNuiId'
import { tm } from '../utils/tw-merge'

export interface BaseCheckboxProps extends CheckboxRootProps {
  /**
   * The label to display for the checkbox.
   */
  label?: string

  /**
   * The variant of the checkbox.
   */
  variant?: 'default' | 'primary' | 'dark' | 'none'

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    root?: string | string[]
    icon?: string | string[]
    indicator?: string | string[]
    label?: string | string[]
    labelWrapper?: string | string[]
  }
}
export interface BaseCheckboxEmits extends CheckboxRootEmits {}
export interface BaseCheckboxSlots {
  default: () => any
}

export const variants = {
  default: 'bg-white dark:bg-muted-950 border-1 border-muted-300 dark:border-muted-700 text-muted-700 dark:text-muted-100',
  primary: 'bg-primary-500/10 dark:bg-primary-500/20 border-1 border-muted-300 dark:border-muted-700 text-primary-base dark:text-primary-light',
  dark: 'bg-muted-900/10 dark:bg-white/10 border-1 border-muted-300 dark:border-muted-700 text-muted-900 dark:text-white',
  none: '',
} as const satisfies Record<NonNullable<BaseCheckboxProps['variant']>, string>
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseCheckboxProps>(), {
  label: undefined,
  variant: 'default',

  id: undefined,
  disabled: undefined,
  defaultValue: undefined,
  name: undefined,
  value: undefined,
  modelValue: undefined,

  classes: () => ({}),
})
const emits = defineEmits<BaseCheckboxEmits>()
const slots = defineSlots<BaseCheckboxSlots>()

const attrs = useAttrs()
const id = useNuiId(() => props.id)

const iconCheck = useInertiaConfig('icon', 'check')
const iconIndeterminate = useInertiaConfig('icon', 'minus')
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'label', 'variant', 'classes']), emits)
const { forwardRef } = useForwardExpose()
</script>

<template>
  <div
    :class="tm([
      'relative inline-flex items-start gap-1',
      props.disabled && 'opacity-50',
      props.classes.root,
    ])"
  >
    <CheckboxRoot
      :id
      :ref="forwardRef"
      v-bind="{ ...attrs, ...forward }"
      class="focus-visible:nui-focus relative flex items-center justify-center h-5 w-5 shrink-0 cursor-pointer disabled:cursor-not-allowed overflow-hidden rounded-md"
    >
      <CheckboxIndicator
        force-mount
        :class="tm([
          'absolute start-0 top-0 z-0 flex items-center justify-center h-full w-full rounded-md group',
          props.variant && variants[props.variant],
          props.classes.indicator,
        ])"
      >
        <Icon
          :name="iconCheck"
          :class="tm([
            'hidden group-data-[state=checked]:block size-4 scale-90 ease-out starting:scale-0 starting:opacity-0 transition-all duration-150',
            props.classes.icon,
          ])"
        />
        <Icon
          :name="iconIndeterminate"
          :class="tm([
            'hidden group-data-[state=indeterminate]:block size-4 scale-90 ease-out starting:scale-0 starting:opacity-0 transition-all duration-150',
            props.classes.icon,
          ])"
        />
      </CheckboxIndicator>
    </CheckboxRoot>
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
          'font-sans text-sm ms-1 cursor-pointer select-none text-muted-600 dark:text-muted-400',
          props.classes.label,
        ])"
      >
        <slot>{{ props.label }}</slot>
      </Label>
    </div>
  </div>
</template>
