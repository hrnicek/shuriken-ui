<script lang="ts">
import type { BaseAutocompleteContext } from '../types';
import { createContext } from 'reka-ui'
import { useNuiConfig } from '../composables/default-property';

export const [
  injectBaseAutocompleteContext,
  provideBaseAutocompleteContext,
] = createContext<BaseAutocompleteContext>('BaseAutocompleteContext')
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import type { Ref } from 'vue'
import type { BaseAutocompleteProps, BaseAutocompleteEmits, BaseAutocompleteSlots } from '../types';
import type { AcceptableValue } from 'reka-ui'
import { BaseAutocomplete as theme } from '#build/shuriken-ui/theme';
import { defu } from 'defu'
import { useForwardExpose, useForwardPropsEmits } from 'reka-ui'
import { useVModel, reactiveOmit } from '@vueuse/core'
import { watch, useAttrs, computed } from 'vue'

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
    v-bind="forward"
    class="w-full relative"
    :class="[
      props.classes.root,
    ]"
    v-slot="{ open, modelValue }"
  >
    <ComboboxAnchor
      class="has-focus-visible:nui-focus w-full flex min-w-[160px] items-center justify-between leading-none gap-[5px] outline-none disabled:cursor-not-allowed has-disabled:opacity-50 has-aria-invalid:border-destructive-base! group"
      :class="[
        props.rounded && theme.radiuses[props.rounded],
        props.size && theme.sizes[props.size],
        props.variant && theme.variants[props.variant],
        props.classes.anchor,
      ]"
      v-bind="bindings.anchor"
    >
      <ComboboxInput
        :ref="forwardRef"
        v-bind="attrs"
        :model-value="props.query"
        class="h-full w-full outline-none"
        :class="theme.inputVariants[props.variant]"
        @update:model-value="(value: string) => {
          query = value
        }"
      />
      <ComboboxCancel
        v-if="props.clearable"
        class="opacity-0 group-focus-within:opacity-100 transition-opacity duration-100"
        :class="props.classes.cancel"
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
        class="min-w-52 focus:outline-none data-[side=bottom]:shadow-lg shadow-muted-300/30 dark:shadow-muted-800/20 will-change-[opacity] duration-100 transition-opacity transition-discrete data-[state=open]:opacity-100 starting:data-[state=open]:opacity-0 space-y-1"
        :class="[
          props.rounded !== 'full' && theme.radiuses[props.rounded],
          props.rounded === 'full' && 'rounded-xl',
          props.variant && theme.portalVariants[props.variant],
          props.classes.content,
        ]"
      >
        <slot name="content-start" v-bind="{ open, modelValue, query }" />

        <ComboboxViewport
          class="p-[5px] nui-slimscroll"
          v-bind="bindings.viewport"
          :class="props.classes.viewport"
        >
          <slot name="viewport-start" v-bind="{ open, modelValue, query }" />

          <ComboboxEmpty
            class="text-muted-500 text-xs font-medium text-center py-2"
            v-bind="bindings.empty"
            :class="props.classes.empty"
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
