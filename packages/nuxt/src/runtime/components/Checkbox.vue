<script setup lang="ts">
import type { BaseCheckboxProps, BaseCheckboxEmits, BaseCheckboxSlots } from '../types';
import { BaseCheckbox as theme } from '@shuriken-ui/theme-iga';
import { useForwardExpose, useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { useAttrs } from 'vue'

import { useNinjaId } from '../composables/input-id';
import { useNuiConfig } from '../composables/default-property';

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
})
const emits = defineEmits<BaseCheckboxEmits>()
const slots = defineSlots<BaseCheckboxSlots>()

const attrs = useAttrs()
const id = useNinjaId(() => props.id)

const iconCheck = useNuiConfig('icon', 'check')
const iconIndeterminate = useNuiConfig('icon', 'minus')
const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'label', 'variant']), emits)
const { forwardRef } = useForwardExpose()
</script>

<template>
  <div
    class="relative inline-flex items-start gap-1"
    :class="[
      props.disabled && 'opacity-50',
    ]"
  >
    <CheckboxRoot
      :id
      :ref="forwardRef"
      v-bind="{ ...attrs, ...forward }"
      class="focus-visible:nui-focus relative flex items-center justify-center h-5 w-5 shrink-0 cursor-pointer disabled:cursor-not-allowed overflow-hidden rounded-md"
    >
      <div
        class="absolute start-0 top-0 z-0 h-full w-full rounded-md"
        :class="[
          props.variant && theme.variants[props.variant],
        ]"
      ></div>
      <CheckboxIndicator
        class="absolute start-0 top-0 z-0 flex items-center justify-center h-full w-full rounded-md group starting:opacity-0 transition-opacity duration-150"
        :class="[
          props.variant && theme.variants[props.variant],
        ]"
      >
        <Icon :name="iconCheck" class="hidden group-data-[state=checked]:block size-4 scale-90" />
        <Icon :name="iconIndeterminate" class="hidden group-data-[state=indeterminate]:block size-4 scale-90" />
      </CheckboxIndicator>
    </CheckboxRoot>
    <div class="inline-flex flex-col">
      <Label
        v-if="props.label || 'default' in $slots"
        :for="id"
        class="font-sans text-sm ms-1 cursor-pointer select-none text-muted-600 dark:text-muted-400"
      >
        <slot>{{ props.label }}</slot>
      </Label>
    </div>
  </div>
</template>
