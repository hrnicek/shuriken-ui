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
import type { BaseAutocompleteProps, BaseAutocompleteEmits, BaseAutocompleteSlots } from '../types';
import type { AcceptableValue } from 'reka-ui'
import { BaseAutocomplete as theme } from '#build/shuriken-ui/theme';
import { defu } from 'defu'
import { useForwardExpose, useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { useAttrs, computed } from 'vue'

defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(defineProps<BaseAutocompleteProps<T>>(), {
  variant: theme.defaults.variant,
  rounded: theme.defaults.rounded,
  size: theme.defaults.size,
  preset: theme.defaults.preset,

  defaultOpen: undefined,
  open: undefined,
  defaultValue: undefined,
  modelValue: undefined,
  name: undefined,
  by: undefined,

  bindings: () => ({}),
})

const emits = defineEmits<BaseAutocompleteEmits<T>>()
const slots = defineSlots<BaseAutocompleteSlots>()
const attrs = useAttrs()

const iconClose = useNuiConfig('icon', 'close')
const iconChevronDown = useNuiConfig('icon', 'chevronDown')
const bindings = computed(() => defu(props.bindings, theme.presets[props.preset]))

const forward = useForwardPropsEmits(reactiveOmit(props, ['variant', 'rounded', 'size', 'preset', 'bindings']), emits)
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
  >
    <ComboboxAnchor
      class="has-focus-visible:nui-focus w-full flex min-w-[160px] items-center justify-between leading-none gap-[5px] outline-none disabled:cursor-not-allowed has-disabled:opacity-50 has-aria-invalid:border-destructive-base! group"
      :class="[
        props.rounded && theme.radiuses[props.rounded],
        props.size && theme.sizes[props.size],
        props.variant && theme.variants[props.variant],
      ]"
      v-bind="bindings.anchor"
    >
      <slot name="input">
        <ComboboxInput :ref="forwardRef" class="h-full w-full outline-none" :class="theme.inputVariants[props.variant]" v-bind="attrs" />
      </slot>
      <ComboboxCancel
        v-if="props.clearable"
        class="opacity-0 group-focus-within:opacity-100 transition-opacity duration-100"
        as-child
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
        ]"
      >
        <ComboboxViewport
          class="p-[5px] nui-slimscroll"
          v-bind="bindings.viewport"
        >
          <ComboboxEmpty
            class="text-muted-500 text-xs font-medium text-center py-2"
            v-bind="bindings.empty"
          >
            <slot name="empty" />
          </ComboboxEmpty>

          <slot />
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
