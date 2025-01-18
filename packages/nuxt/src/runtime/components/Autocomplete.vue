<script lang="ts">
import type { AcceptableValue } from 'reka-ui'
import type { BaseAutocompleteContext, BaseAutocompleteEmits, BaseAutocompleteProps, BaseAutocompleteSlots } from '../types'
import { reactiveOmit, useVModel } from '@vueuse/core'
import { defu } from 'defu'
import { createContext, useForwardExpose, useForwardPropsEmits } from 'reka-ui'
import { computed, useAttrs } from 'vue'
import { useNuiConfig } from '../composables/useNuiConfig'
import { BaseAutocomplete as theme } from '../theme'
import { tm } from '../utils/tw-merge'

export const [
  injectBaseAutocompleteContext,
  provideBaseAutocompleteContext,
] = createContext<BaseAutocompleteContext>('BaseAutocompleteContext')
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(defineProps<BaseAutocompleteProps<T>>(), {
  variant: theme.defaults.variant,
  rounded: theme.defaults.rounded,
  size: theme.defaults.size,
  preset: theme.defaults.preset,

  query: undefined,

  defaultOpen: undefined,
  open: undefined,
  defaultValue: undefined,
  modelValue: undefined,
  name: undefined,
  by: undefined,

  bindings: () => ({}),
  classes: () => ({}),
})

const emits = defineEmits<BaseAutocompleteEmits<T>>()
const slots = defineSlots<BaseAutocompleteSlots<T>>()
const attrs = useAttrs()

const query = useVModel(props as { query?: string }, 'query', emits, {
  // defaultValue: props.defaultQuery,
  passive: (props.query === undefined) as false,
})

const iconClose = useNuiConfig('icon', 'close')
const iconChevronDown = useNuiConfig('icon', 'chevronDown')
const bindings = computed(() => defu(props.bindings, theme.presets[props.preset]))

const forward = useForwardPropsEmits(reactiveOmit(props, ['variant', 'rounded', 'size', 'preset', 'bindings', 'classes']), emits)
const { forwardRef } = useForwardExpose()

provideBaseAutocompleteContext({
  variant: props.variant,
  rounded: props.rounded,
  size: props.size,
})
</script>

<template>
  <ComboboxRoot
    v-slot="{ open, modelValue }"
    v-bind="forward"
    :class="tm([
      'w-full relative',
      props.classes.root,
    ])"
  >
    <ComboboxAnchor
      :class="tm([
        'has-focus-visible:nui-focus w-full flex min-w-[160px] items-center justify-between leading-none gap-[5px] outline-none disabled:cursor-not-allowed has-disabled:opacity-50 has-aria-invalid:border-destructive-base! has-aria-invalid:ring-destructive-base! group',
        props.rounded && theme.radiuses[props.rounded],
        props.size && theme.sizes[props.size],
        props.variant && theme.variants[props.variant],
        props.classes.anchor,
      ])"
      v-bind="bindings.anchor"
    >
      <ComboboxInput
        :ref="forwardRef"
        v-bind="attrs"
        :model-value="props.query"
        :class="tm([
          'h-full w-full outline-none text-ellipsis',
          theme.inputVariants[props.variant],
        ])"
        @update:model-value="(value: string) => {
          query = value
        }"
      />
      <ComboboxCancel
        v-if="props.clearable"
        :class="tm([
          'opacity-0 group-focus-within:opacity-100 transition-opacity duration-100',
          props.classes.cancel,
        ])"
      >
        <Icon
          :name="iconClose"
          class="size-4 text-base text-muted-600 dark:text-muted-400"
        />
      </ComboboxCancel>

      <ComboboxTrigger
        v-bind="{
          disabled: props.disabled,
          ...(bindings.trigger || {}),
        }"
        :class="props.classes.trigger"
      >
        <Icon
          :name="iconChevronDown"
          class="size-4 text-base"
          :class="theme.triggerVariants[props.variant]"
        />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxPortal v-bind="bindings.portal">
      <ComboboxContent
        v-bind="bindings.content"
        :class="tm([
          'min-w-52 focus:outline-none data-[side=bottom]:shadow-lg shadow-muted-300/30 dark:shadow-muted-800/20 will-change-[opacity] duration-100 transition-opacity transition-discrete data-[state=open]:opacity-100 starting:data-[state=open]:opacity-0 space-y-1',
          props.rounded !== 'full' && theme.radiuses[props.rounded],
          props.rounded === 'full' && 'rounded-xl',
          props.variant && theme.portalVariants[props.variant],
          props.classes.content,
        ])"
      >
        <slot name="content-start" v-bind="{ open, modelValue, query }" />

        <ComboboxViewport
          v-bind="bindings.viewport"
          :class="tm([
            'p-[5px] nui-slimscroll',
            props.classes.viewport,
          ])"
        >
          <slot name="viewport-start" v-bind="{ open, modelValue, query }" />

          <ComboboxEmpty
            v-bind="bindings.empty"
            :class="tm([
              'text-muted-500 text-xs font-medium text-center py-2',
              props.classes.empty,
            ])"
          >
            <slot name="empty" v-bind="{ open, modelValue, query }" />
          </ComboboxEmpty>

          <slot />
          <slot name="viewport-end" v-bind="{ open, modelValue, query }" />
        </ComboboxViewport>
        <slot name="content-end" v-bind="{ open, modelValue, query }" />
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
