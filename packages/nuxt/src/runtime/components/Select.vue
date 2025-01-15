<script lang="ts">
import type { BaseSelectContext } from '../types';
import { createContext } from 'reka-ui'

import { useNinjaId } from '../composables/input-id';
import { useNuiConfig } from '../composables/default-property';
import { tm } from '../utils/tw-merge';

export const [
  injectBaseSelectContext,
  provideBaseSelectContext,
] = createContext<BaseSelectContext>('BaseSelectContext')
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import type { BaseSelectProps, BaseSelectEmits, BaseSelectSlots } from '../types';
import type { AcceptableValue } from 'reka-ui'
import { BaseSelect as theme } from '#build/shuriken-ui/theme';
import { defu } from 'defu'
import { reactiveOmit } from '@vueuse/core'
import { useForwardExpose, useForwardPropsEmits } from 'reka-ui'
import { useAttrs, computed } from 'vue'

const props = withDefaults(defineProps<BaseSelectProps<T>>(), {
  id: undefined,
  placeholder: '',

  rounded: theme.defaults.rounded,
  size: theme.defaults.size,
  variant: theme.defaults.variant,
  preset: theme.defaults.preset,
  
  autocomplete: undefined,
  name: undefined,
  by: undefined,
  defaultValue: undefined,
  modelValue: undefined,
  dir: undefined,

  bindings: () => ({}),
  classes: () => ({}),
})
const emits = defineEmits<BaseSelectEmits<T>>()
const slots = defineSlots<BaseSelectSlots<T>>()

const attrs = useAttrs()
const id = useNinjaId(() => props.id)

const iconChevronDown = useNuiConfig('icon', 'chevronDown')
const iconChevronUp = useNuiConfig('icon', 'chevronUp')

const bindings = computed(() => {
  return defu(props.bindings, theme.presets[props.preset])
})

const forward = useForwardPropsEmits(reactiveOmit(props, [
  'id',
  'placeholder', 
  'variant', 
  'rounded',
  'size',
  'preset',
  'bindings',
  'classes',
]), emits) as any
const { forwardRef } = useForwardExpose()

provideBaseSelectContext({
  variant: props.variant,
  rounded: props.rounded,
  size: props.size,
})
</script>

<template>
  <SelectRoot :id v-bind="forward">
    <SelectTrigger
      :ref="forwardRef"
      class="focus:nui-focus w-full flex items-center justify-between leading-none gap-[5px] outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive-base!"
      :class="[
        theme.variants[props.variant],
        theme.sizes[props.size],
        theme.radiuses[props.rounded],
      ]"
      v-bind="{ ...attrs, ...(bindings?.trigger || {}) }"
    >
      <SelectValue
        :placeholder="props.placeholder"
        :class="tm([
          'line-clamp-1 leading-tight',
          props.classes.text,
        ])"
        v-slot="{ selectedLabel, modelValue }"
      >
        <slot name="value" v-bind="{ selectedLabel, modelValue }" />
      </SelectValue>
      <Icon
        :name="iconChevronDown"
        :class="tm([
          'size-4 shrink-0',
          theme.triggerVariants[props.variant],
          props.classes.icon,
        ])"
      />
    </SelectTrigger>

    <SelectPortal v-bind="bindings?.portal">
      <SelectContent
        :class="tm([
          'data-[side=bottom]:shadow-lg shadow-muted-300/30 dark:shadow-muted-800/20 z-[100]',
          theme.portalVariants[props.variant],
          theme.portalRadiuses[props.rounded],
          props.classes.content,
        ])"
        v-bind="bindings?.content"
      >
        <slot name="content-start" />

        <SelectScrollUpButton
          :class="tm([
            'flex items-center justify-center h-[25px] bg-white cursor-default',
            theme.portalRadiuses[props.rounded],
            props.classes.buttonUp,
          ])"
        >
          <Icon :name="iconChevronUp" />
        </SelectScrollUpButton>

        <SelectViewport
          v-bind="bindings?.viewport"
          :class="tm([
            'p-[5px]',
            props.classes.viewport
          ])"
        >
          <slot name="viewport-start" />
          <slot />
          <slot name="viewport-end" />
        </SelectViewport> 

        <SelectScrollDownButton
          :class="tm([
            'flex items-center justify-center h-[25px] bg-white cursor-default',
            theme.portalRadiuses[props.rounded],
            props.classes.buttonDown,
          ])"
        >
          <Icon :name="iconChevronDown" />
        </SelectScrollDownButton>

        <slot name="content-end" />
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
