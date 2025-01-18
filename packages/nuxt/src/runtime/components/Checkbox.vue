<script setup lang="ts">
import type { BaseCheckboxEmits, BaseCheckboxProps, BaseCheckboxSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardExpose, useForwardPropsEmits } from 'reka-ui'
import { useAttrs } from 'vue'
import { useNuiConfig } from '../composables/useNuiConfig'

import { useNuiId } from '../composables/useNuiId'
import { BaseCheckbox as theme } from '../theme'
import { tm } from '../utils/tw-merge'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseCheckboxProps>(), {
  label: undefined,
  variant: theme.defaults.variant,

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

const iconCheck = useNuiConfig('icon', 'check')
const iconIndeterminate = useNuiConfig('icon', 'minus')
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
          props.variant && theme.variants[props.variant],
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
